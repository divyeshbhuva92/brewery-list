document.body.innerHTML = `
<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
  <a class="navbar-brand">Breweries for You!!</a>
  <form class="d-flex" role="search">
    <input
      id="search-input"
      class="form-control me-2"
      type="search"
      placeholder="Your Search Text"
    />
    <button class="btn btn-outline-info btn-dark" type="search">
      Search
    </button>
  </form>
</div>
</nav>
<div class = "head-container">
<img class = "img-icon" src = "https://cdn.create.vista.com/api/media/small/305416930/stock-photo-panoramic-shot-glasses-dark-light">
</div>

<div class = "main-container" id = "Container1"></div>`;

//fetch data
const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const breweries = await data.json();
    breweries.forEach((breweries) => {
      // console.log(breweries);
      displayData(breweries);
    });
  } catch (error) {
    console.log(error);
  }
};
getData();

const displayData = (Obj) => {
  Container1.innerHTML += `<div class="container">
    <h5>Brewery Name: ${Obj.name}</h4>
    <p>Type: ${Obj.brewery_type}</p>
    <p>Address: ${Obj.street}</p>
    <p>Website: ${Obj.website_url}</p>
    <p>Phone: ${Obj.phone}</p>`;
};


