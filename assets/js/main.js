// Live system clock in cyber format
function updateClock() {
  const now = new Date();
  const h = String(now.getUTCHours()).padStart(2, '0');
  const m = String(now.getUTCMinutes()).padStart(2, '0');
  const s = String(now.getUTCSeconds()).padStart(2, '0');
  const ms = String(Math.floor(now.getUTCMilliseconds() / 10)).padStart(2, '0');
  const clockEl = document.getElementById('status-clock');
  if (clockEl) {
    clockEl.textContent = `UTC.${h}:${m}:${s}.${ms}`;
  }
}
setInterval(updateClock, 50);

// Mysterious hex cipher rolling ticker
const hexTicker = document.getElementById('hex-ticker');
const hexChars = '0123456789ABCDEF';
setInterval(() => {
  if (hexTicker) {
    let randHex = '0x';
    for (let i = 0; i < 6; i++) {
      randHex += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
    hexTicker.textContent = randHex;
  }
}, 2800);

// Cryptic responses to stimulate visitor curiosity
const mysteryLines = [
  "// TRANSMISSION_SEALED",
  "// ORIGIN_UNRESOLVED",
  "// ENCRYPTION::KEY_ABSENT",
  "// AWAIT_FREQUENCY_SHIFT",
  "// 37.7749° N, 122.4194° W",
  "// NO_PUBLIC_ROUTING",
  "// SEQUENCE_04_RUNNING",
  "// ACCESS_RESTRICTED"
];

const outputEl = document.getElementById('cryptic-output');
let lineIdx = 0;

function cycleMystery() {
  if (!outputEl) return;
  outputEl.style.opacity = '0';
  setTimeout(() => {
    lineIdx = (lineIdx + 1) % mysteryLines.length;
    outputEl.textContent = mysteryLines[lineIdx];
    outputEl.style.opacity = '0.75';
  }, 250);
}

const emblem = document.getElementById('core-emblem');
if (emblem) {
  emblem.addEventListener('click', cycleMystery);
}

const symbols = document.querySelectorAll('.mystery-symbol');
symbols.forEach(sym => {
  sym.addEventListener('click', (e) => {
    const code = e.target.getAttribute('data-code');
    if (outputEl && code) {
      outputEl.style.opacity = '0';
      setTimeout(() => {
        outputEl.textContent = `// ${code}`;
        outputEl.style.opacity = '1';
      }, 200);
    }
  });
});

const signalDot = document.getElementById('signal-dot');
if (signalDot) {
  signalDot.addEventListener('click', () => {
    signalDot.style.color = '#ffffff';
    setTimeout(() => signalDot.style.color = '', 400);
    cycleMystery();
  });
}
