(function(window, document, undefined) {
  const btnChoose = document.getElementById('btnChoose');
  const txtResult = document.getElementById('txtResult');
  
  let names = [];
  
  btnChoose.disabled = true;  
  btnChoose.addEventListener('click', () => {
    let chosen = getRandomName();
    txtResult.innerText = chosen;
  });
  
  fetch('names.json')
    .then(response => response.json())
    .then(obj => names = obj.names)
    .then(() => btnChoose.disabled = false)
    .catch(() => console.error('Failed to fetch names :('));
    
  function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
  }
})(window, document);
