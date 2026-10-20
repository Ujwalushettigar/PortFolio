const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BROWSER = fs.existsSync(EDGE_PATH) ? EDGE_PATH : CHROME_PATH;

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function capture() {
  const outDir = path.resolve('screenshots/before');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const userDataDir = path.resolve('temp-chrome-profile');
  const browserProc = spawn(BROWSER, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--user-data-dir=' + userDataDir,
    'about:blank'
  ]);

  await sleep(2500);

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    console.log('Tabs:', tabs.length);
    const wsUrl = tabs[0]?.webSocketDebuggerUrl;
    if (!wsUrl) throw new Error('No wsUrl found');

    const ws = new WebSocket(wsUrl);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && callbacks.has(msg.id)) {
        callbacks.get(msg.id)(msg);
        callbacks.delete(msg.id);
      }
    };

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        callbacks.set(curId, resolve);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    await new Promise((r) => (ws.onopen = r));
    await send('Page.enable');
    await send('DOM.enable');

    const viewports = [
      { name: 'desktop_1440', width: 1440, height: 900, mobile: false, dpr: 1 },
      { name: 'tablet_768', width: 768, height: 1024, mobile: true, dpr: 2 },
      { name: 'mobile_390', width: 390, height: 844, mobile: true, dpr: 3 },
    ];

    for (const vp of viewports) {
      console.log(`Setting viewport: ${vp.name}`);
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.dpr,
        mobile: vp.mobile,
      });

      console.log(`Navigating to live portfolio for ${vp.name}...`);
      await send('Page.navigate', { url: 'https://port-folio-ruby-mu.vercel.app/' });
      await sleep(5000); // Allow 3D scene, fonts, and animation preloader to stabilize

      // Initial viewport screenshot
      const topShot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(outDir, `${vp.name}_top.png`), Buffer.from(topShot.result.data, 'base64'));

      // Full page screenshot
      const fullShot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
      fs.writeFileSync(path.join(outDir, `${vp.name}_full.png`), Buffer.from(fullShot.result.data, 'base64'));
      console.log(`Captured ${vp.name} top and full screenshots!`);
    }

    ws.close();
  } catch (err) {
    console.error('Capture error:', err);
  } finally {
    browserProc.kill();
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true });
    } catch {}
  }
}

capture();
