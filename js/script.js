const searchPhones = () => {
          const searchField = document.getElementById('search-field');
          const searchText = searchField.value;
          searchField.value = '';
          const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
          fetch(url)
                    .then(res => res.json())
                    .then(data => displaySearchResult(data.data))
}

const displaySearchResult = phones => {
          const searchResult = document.getElementById('search-result');
          console.log(phones);
          phones.forEach(phone => {
                    const div = document.createElement('div');
                    div.classList.add('col');
                    div.innerHTML = `
                     <div class="card h-100">
                                          <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
                                         <div class="card-body">
                                                    <h5 class="card-title">Name: ${phone.phone_name}</h5>
                                                    <p class="card-text">Brand: ${phone.brand}</p>
                                                    <a href="#" class="btn btn-primary">Explore</a>
                                          </div>
                                </div>
                     `
                    searchResult.appendChild(div);
          });
}