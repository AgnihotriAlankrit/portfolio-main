# Access Portfolio on Mobile Device

## How to Run and Access on Your Local Network

### Starting the Development Server

Run this command to start the server with network access:

```bash
npm run dev
```

The server will automatically expose on your local network at `0.0.0.0:5174`

### Finding Your Local IP Address

**On Windows:**
1. Open Command Prompt or PowerShell
2. Run: `ipconfig`
3. Look for "IPv4 Address" under your active network adapter (usually WiFi or Ethernet)
4. It will look something like: `192.168.1.x` or `10.0.0.x`

**Quick Command:**
```powershell
(Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -like "192.168.*" -or $_.IPAddress -like "10.0.*"}).IPAddress
```

### Accessing from Mobile Device

1. **Make sure your phone/tablet is on the SAME WiFi network** as your computer

2. **Open your browser** on the mobile device

3. **Enter the URL**: `http://YOUR_IP_ADDRESS:5174`
   - Example: `http://192.168.1.100:5174`

4. You should see your portfolio website!

### Example Output When Starting Server

```
VITE v5.4.21  ready in 528 ms

➜  Local:   http://localhost:5174/
➜  Network: http://192.168.1.100:5174/
```

Use the **Network** URL to access from other devices!

### Troubleshooting

#### Can't Access from Phone?

1. **Check Firewall**: Windows Firewall might be blocking connections
   - Go to Windows Defender Firewall
   - Click "Allow an app through firewall"
   - Make sure Node.js is allowed on Private networks

2. **Verify Same Network**: Both devices must be on the same WiFi

3. **Check IP Address**: Make sure you're using the correct local IP

4. **Try Different Port**: If 5174 is blocked, change port in `vite.config.js`

#### Firewall Command (Run as Administrator)

```powershell
netsh advfirewall firewall add rule name="Vite Dev Server" dir=in action=allow protocol=TCP localport=5174
```

### QR Code Alternative

For easier mobile access, you can use a QR code generator:
1. Copy the Network URL from terminal
2. Go to https://www.qr-code-generator.com/
3. Paste your URL and generate QR code
4. Scan with your phone camera

---

## Quick Reference

| What | Command |
|------|---------|
| Start Server | `npm run dev` |
| Find IP (Windows) | `ipconfig` |
| Mobile URL Format | `http://YOUR_IP:5174` |
| Stop Server | Press `Ctrl + C` in terminal |

---

**Happy Testing! 📱**

