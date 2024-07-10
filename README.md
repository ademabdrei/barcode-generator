
# Barcode Generator

A simple web-based barcode generator that allows users to generate and download barcodes.

## Demo
You can try the Barcode Generator live at: [https://barcode-generators.netlify.app](https://barcode-generators.netlify.app)

## Features
- Generate barcodes using the `CODE128` format
- Display the generated barcode as an image on the webpage
- Allow users to download the barcode image as a PNG file

## Technologies Used
- HTML
- CSS
- JavaScript
- [JsBarcode](https://github.com/lindell/JsBarcode) library for generating barcodes

## How to Use
1. Enter the text you want to encode as a barcode in the input field.
2. Click the "Generate Barcode" button to create the barcode image.
3. The generated barcode will be displayed on the page.
4. To download the barcode image, click the "Download Barcode" button.

## Code Explanation
The code consists of an HTML structure, a CSS stylesheet, and a JavaScript file that handles the barcode generation and download functionality.

### HTML Structure
The HTML file sets up the basic structure of the webpage, including:
- A container div to hold the content
- An input field for the user to enter the barcode text
- Buttons to generate and download the barcode
- A container div to display the generated barcode image

### CSS Styling
The CSS file styles the webpage, including:
- Setting the font and background colors
- Centering the content on the page
- Styling the input field, buttons, and barcode container

### JavaScript Functionality
The JavaScript code handles the barcode generation and download functionality:

1. The `generateBarcode()` function:
   - Retrieves the text from the input field
   - Creates a new canvas element
   - Uses the `JsBarcode()` function from the JsBarcode library to generate the barcode on the canvas
   - Converts the canvas to a data URL representing a PNG image
   - Creates an image element and sets its `src` to the data URL
   - Appends the image element to the barcode container

2. The `downloadBarcode()` function:
   - Retrieves the data URL of the generated barcode image
   - Creates a temporary anchor element (`<a>`) with the data URL as the `href` and sets the `download` attribute to the desired filename
   - Appends the anchor to the document body, triggers a click event to initiate the download, and then removes the anchor from the document body

## Getting Started
To use the Barcode Generator, simply copy the HTML, CSS, and JavaScript code provided and save them in your project directory. You can then open the HTML file in a web browser to start using the application.

## Contributions
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull request on the [GitHub repository](https://github.com/ademabdrei/barcode-generator).
