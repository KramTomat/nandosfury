(function(window, document, undefined) {
  const btnChoose = document.getElementById('btnChoose');
  const txtResult = document.getElementById('txtResult');
  
  console.log(btnChoose, txtResult);
  
  fetch('names.json')
    .then(response => response.json())
    .then(names => console.log(names));
})(window, document);
