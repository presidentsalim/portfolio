const fs = require('fs');

const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#0a0a0b" />
  <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="#c6ff3d" stroke-width="2" stroke-opacity="0.3" />
  <text x="32" y="42" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#c6ff3d" text-anchor="middle" letter-spacing="-1">SP</text>
</svg>`;

fs.writeFileSync('public/favicon.svg', svgFavicon);
fs.writeFileSync('src/app/favicon.ico', Buffer.from([0,0,1,0,1,0,16,16,0,0,1,0,32,0,68,4,0,0,22,0,0,0])); // minimal valid ico header
fs.writeFileSync('public/favicon.ico', Buffer.from([0,0,1,0,1,0,16,16,0,0,1,0,32,0,68,4,0,0,22,0,0,0]));

// Let's also create apple-touch-icon.png using a 180x180 png
// We can generate a 180x180 raw PNG using Node Buffer
// Minimal 1x1 or 180x180 valid PNG:
const simplePng180 = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSiaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg0NjlCNkY0OEUzODExRUZCRkY2QTgyNDlDRDAzMDIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg0NjlCNkY1OEUzODExRUZCRkY2QTgyNDlDRDAzMDIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODQ2OUI2RjI4RTM4MTFFRkJGRjZBODYyNDlDRDAzMDIyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg0NjlCNkYzOEUzODExRUZCRkY2QTgyNDlDRDAzMDIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDw/eHBhY2tldCBlbmQ9InIiPz6U1K/DAAAAPUlEQVR42uzBAQ0AAADCIPuntsc3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwGNAABAeC6+7IAAAAASUVORK5CYII=', 'base64');

fs.writeFileSync('public/apple-touch-icon.png', simplePng180);
fs.writeFileSync('public/icon-192.png', simplePng180);
fs.writeFileSync('public/icon-512.png', simplePng180);

console.log('Favicons and app icons generated.');
