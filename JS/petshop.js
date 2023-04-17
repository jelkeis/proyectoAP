const apiUrl = "https://api.mercadolibre.com/sites/MLA/search?q=Alimentoperro"


await fetch(`${apiUrl}/usuarios`)
  .then(response => response.json())
  .then(data => console.log(data.results))