const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');

// Define the chart's width and height
canvas.width = 600;
canvas.height = 400;

// Define the data points (example with more variation)
const data = [
    { x: 50, y: 150 },
    { x: 100, y: 50 },
    { x: 200, y: 200 },
    { x: 300, y: 100 },
    { x: 400, y: 250 },
    { x: 500, y: 80 },
];

// Function to draw a bezier curve through the data points
function drawCurve(data) {
  ctx.beginPath();
  ctx.moveTo(data[0].x, data[0].y);
  ctx.strokeStyle = 'blue'; // Set a visible stroke color
  ctx.lineWidth = 2; // Increase line width for better visibility

  for (let i = 1; i < data.length - 1; i++) {
    const prevPoint = data[i - 1];
    const currentPoint = data[i];
    const nextPoint = data[i + 1];

    const controlPointX = (currentPoint.x + nextPoint.x) / 2;
    const controlPointY = (currentPoint.y + nextPoint.y) / 2;

    ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, controlPointX, controlPointY);
  }

  const lastPoint = data[data.length - 1];
  ctx.lineTo(lastPoint.x, lastPoint.y);

  ctx.stroke();
}
// Define the axes
const chartWidth = canvas.width;
const chartHeight = canvas.height;
const axisPadding = 30;

ctx.strokeStyle = 'gray';

// Draw the X-axis
ctx.beginPath();
ctx.moveTo(axisPadding, chartHeight - axisPadding);
ctx.lineTo(chartWidth - axisPadding, chartHeight - axisPadding);
ctx.stroke();

// Draw the Y-axis
ctx.beginPath();
ctx.moveTo(axisPadding, chartHeight - axisPadding);
ctx.lineTo(axisPadding, axisPadding);
ctx.stroke();

// Draw the labels for the axes (optional)
const labelCount = 6;
const labelSpacingX = (chartWidth - 2 * axisPadding) / (labelCount - 1);
const labelSpacingY = (chartHeight - 2 * axisPadding) / (labelCount - 1);

for (let i = 0; i < labelCount; i++) {
  const labelX = axisPadding + i * labelSpacingX;
  const labelY = chartHeight - axisPadding - i * labelSpacingY;

  ctx.fillText('' + i, labelX - 5, labelY + 5);
}

// Draw the curved line
drawCurve(data);