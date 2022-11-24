var styleSheet = document.createElement('style');
function openForm() {
  var styles = `
    .wrapper > *:not(#exit) {filter: blur(2px);}
    #exit {border: 1px solid black;}
    #exit h2 {margin-top: 10px;}
  `;
  styleSheet.innerHTML = styles;
  document.head.appendChild(styleSheet);
  document.getElementById('exit').style.display = 'block';
}

function closeForm() {
  document.getElementById('exit').style.display = 'none';
  styleSheet.innerHTML = ""; // you just need to reset the style as it was: blank
  document.getElementsByTagName('head')[0].appendChild(styleSheet);
}
