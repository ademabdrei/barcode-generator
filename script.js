// script.js
function generateBarcode() {
  // Get the text and type of barcode from the input fields
  const text = document.getElementById('barcodeText').value;
  const type = document.getElementById('barcodeType').value;

  // Clear the previous barcode, if any
  document.getElementById('barcodeImageContainer').innerHTML = '';

  // Create a new canvas element to render the barcode
  const canvas = document.createElement('canvas');

  // Generate the barcode using JsBarcode library
  JsBarcode(canvas, text, {
    format: type,
    displayValue: true, // Display the text beneath the barcode
    lineColor: "#000", // Set line color
    width: 2, // Set barcode width
    height: 100 // Set barcode height
  });

  // Convert the canvas to a data URL representing a PNG image
  const dataURL = canvas.toDataURL();

  // Create an image element to display the barcode
  const img = document.createElement('img');
  img.src = dataURL;

  // Append the image element to the container
  document.getElementById('barcodeImageContainer').appendChild(img);
}

function downloadBarcode() {
  // Get the data URL of the barcode image
  const dataURL = document.getElementById('barcodeImageContainer').getElementsByTagName('img')[0].src;

  // Create a temporary anchor element
  const a = document.createElement('a');
  a.href = dataURL;
  a.download = 'barcode.png'; // Set the filename for the downloaded image

  // Append the anchor to the document body and trigger a click event
  document.body.appendChild(a);
  a.click();

  // Remove the anchor from the document body
  document.body.removeChild(a);
}
