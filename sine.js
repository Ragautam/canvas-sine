const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let sineAmplitude = 1;

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  frequency: 0.01,
  amplitude: 100,
}

const waveColor = {
  h: 200,
  s: 50,
  l: 50,
}

let incF = wave.frequency;
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
  ctx.fillRect(0,0, canvas.width,  canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  for(let i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, wave.y + Math.sin(i * wave.length + incF) * wave.amplitude * (sineAmplitude ? Math.sin(incF) : 1));
  }
  ctx.strokeStyle = `hsl(${Math.abs(waveColor.h * Math.sin(incF))}, ${waveColor.s}%, ${waveColor.l}%)`;
  ctx.stroke();
  incF += wave.frequency;
}

animate();

const onHueChange = v => {
  waveColor.h = parseFloat(v);
}

const onSatChange = v => {
  waveColor.s = parseFloat(v);
}

const onLightChange = v => {
  waveColor.l = parseFloat(v);
}

const onPositionChange = v => {
  wave.y = parseFloat(v);
}

const onLengthChange = v => {
  wave.length = parseFloat(v);
}

const onAmplitudeChange = v => {
  wave.amplitude = parseFloat(v);
}

const onFrequencyChange = v => {
  wave.frequency = parseFloat(v);
}

const onSineAmplitudeClick = v => {
  const val = 1 - parseInt(v);
  sineAmplitude = val;
  document.querySelector("#sAmp").value = val;
}

const onload = () => {
  document.querySelector("#wPos").max = canvas.height;
  document.querySelector("#wPos").value = canvas.height / 2;
};