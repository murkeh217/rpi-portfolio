import { NextRequest, NextResponse } from 'next/server';
import useragent from 'express-useragent';
import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

// Dynamically import geoip-lite to avoid build issues
let geoip: typeof import('geoip-lite') | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  geoip = require('geoip-lite');
} catch (error) {
  console.warn('GeoIP module not available during build:', error);
}

// Initialize SQLite database
const dbPath = path.join(process.cwd(), 'visits.db');
const db = new sqlite3.Database(dbPath);

// Create table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    country TEXT,
    region TEXT,
    city TEXT,
    browser TEXT,
    os TEXT,
    platform TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwarded ? forwarded.split(',')[0] : realIp || 'localhost';
    
    // Handle localhost development
    const isLocalhost = ip === 'localhost' || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.');
    
    // Get user agent
    const userAgentString = request.headers.get('user-agent') || '';
    const agent = useragent.parse(userAgentString);
    
    // Get location from IP (skip for localhost)
    let geo = null;
    if (!isLocalhost && geoip) {
      try {
        geo = geoip.lookup(ip);
      } catch (geoError) {
        console.warn('Geo lookup failed:', geoError);
      }
    }
    
    const visitData = {
      ip: isLocalhost ? 'localhost' : ip,
      country: geo?.country || (isLocalhost ? 'Local' : 'Unknown'),
      region: geo?.region || (isLocalhost ? 'Development' : 'Unknown'),
      city: geo?.city || (isLocalhost ? 'localhost' : 'Unknown'),
      browser: agent.browser || 'Unknown',
      os: agent.os || 'Unknown',
      platform: agent.platform || 'Unknown',
      timestamp: new Date().toISOString()
    };

    // Log to file
    const logPath = path.join(process.cwd(), 'visits.log');
    const logEntry = `${visitData.timestamp} - IP: ${visitData.ip}, Location: ${visitData.city}, ${visitData.region}, ${visitData.country}, Browser: ${visitData.browser}, OS: ${visitData.os}, Platform: ${visitData.platform}\n`;
    
    fs.appendFileSync(logPath, logEntry);

    // Log to database
    db.run(
      `INSERT INTO visits (ip, country, region, city, browser, os, platform) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [visitData.ip, visitData.country, visitData.region, visitData.city, visitData.browser, visitData.os, visitData.platform],
      function(err) {
        if (err) {
          console.error('Database error:', err);
        }
      }
    );

    const response = NextResponse.json({ success: true, message: 'Visit logged successfully' });
    
    // Add no-cache headers to API response
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0, private');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
    response.headers.set('Vary', '*');
    
    return response;
  } catch (error) {
    console.error('Error logging visit:', error);
    const errorResponse = NextResponse.json({ success: false, error: 'Failed to log visit' }, { status: 500 });
    
    // Add no-cache headers to error response
    errorResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0, private');
    errorResponse.headers.set('Pragma', 'no-cache');
    errorResponse.headers.set('Expires', '0');
    errorResponse.headers.set('Surrogate-Control', 'no-store');
    errorResponse.headers.set('Vary', '*');
    
    // Add iframe protection headers
    errorResponse.headers.set('X-Frame-Options', 'DENY');
    errorResponse.headers.set('Content-Security-Policy', "frame-ancestors 'none'");
    
    return errorResponse;
  }
}
