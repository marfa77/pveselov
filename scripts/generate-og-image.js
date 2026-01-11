// Script to generate og-image.png using Node.js
// Run: node scripts/generate-og-image.js

const fs = require('fs');
const path = require('path');

// Create a simple PNG using a base64 encoded image or use sharp if available
// For now, we'll create instructions for manual generation

const instructions = `
To generate og-image.png:

1. Open public/generate-og-image.html in your browser
2. Click "Download og-image.png"
3. Save the file as public/og-image.png

OR use ImageMagick:
convert -background none -resize 1200x630 public/og-image.svg public/og-image.png

OR use online tool:
- Upload og-image.svg to https://cloudconvert.com/svg-to-png
- Set size to 1200x630
- Download and save as public/og-image.png
`;

console.log(instructions);

// Check if we can use sharp
try {
  const sharp = require('sharp');
  console.log('Sharp is available, generating PNG...');
  
  sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 37, g: 99, b: 235 } // Blue gradient start
    }
  })
  .composite([
    {
      input: Buffer.from(`
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630">
              <stop offset="0%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#9333ea"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="630" fill="url(#bg)"/>
          <text x="600" y="315" font-family="Arial" font-size="64" font-weight="bold" fill="white" text-anchor="middle">PIXID Studio</text>
        </svg>
      `),
      top: 0,
      left: 0
    }
  ])
  .png()
  .toFile(path.join(__dirname, '../public/og-image.png'))
  .then(() => console.log('og-image.png generated successfully!'))
  .catch(err => console.log('Sharp generation failed, use manual method:', err.message));
} catch (e) {
  console.log('Sharp not available, use manual method above');
}
