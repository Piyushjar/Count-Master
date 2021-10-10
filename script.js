const textArea = document.getElementById("textArea");
const wordCount = document.getElementById("Word-count");
const characterCount = document.getElementById("Character-count");

textArea.addEventListener("input", count);

function count() {
  const text = textArea.value;
  wordCount.textContent = text.match(/\S+/g).length;
  characterCount.textContent = text.replace(/\s+/g, "").length;
}
