document
.getElementById("pdfForm")
.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
event.preventDefault(); // Prevent the default form submission

const file = document.getElementById("pdfInput").files[0];

if (file) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const pdfData = new Uint8Array(event.target.result);
    renderPDF(pdfData);
  };
  reader.readAsArrayBuffer(file);
}
}

async function renderPDF(pdfData) {
const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
  const page = await pdf.getPage(pageNum);
  const scale = 1.5; // Adjust scale as needed
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({
    canvasContext: context,
    viewport,
  }).promise;

  const img = new Image();
  img.src = canvas.toDataURL(); // Convert canvas to data URL
  document.getElementById("imageContainer").appendChild(img);
}
}