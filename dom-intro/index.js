// Generates a random color in hexadecimal (e.g., #62b9cc)
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  // Changes the color of the background using STYLE
  function changeBackgroundColor() {
    const colorBg = document.getElementById("color-overlay");
    colorBg.style.backgroundColor = generateRandomColor();
  }
  
  function changeBackgroundText() {
    const textBg = document.getElementById("text-bg");
    const currentText = textBg.innerHTML;
  
    if (currentText === "BORN TO FISH") {
      textBg.innerHTML = "OR";
    } else if (currentText === "OR") {
      textBg.innerHTML = "FORCED TO WORK";
    } else if (currentText === "FORCED TO WORK") {
      textBg.innerHTML = "BORN TO FISH";
    }
  }
  
  function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
  }
  
  setInterval(changeBackground, 1000);
  