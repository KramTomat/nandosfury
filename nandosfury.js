(function(window, document, undefined) {
  const btnChoose = document.getElementById('btnChoose');
  const txtResult = document.getElementById('txtResult');
  
  console.log(btnChoose, txtResult);
  
  fetch('names.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
})(window, document);
