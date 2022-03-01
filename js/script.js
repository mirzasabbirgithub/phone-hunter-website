const searchPhones = () => {
          document.getElementById('search-result').innerHTML = ''
          document.getElementById('phone-detials').innerHTML = ''
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
          //error message if phone not found
          if (phones == '') {
                    alert('No phone found');
          }
          else {
                    phones.forEach(phone => {
                              const div = document.createElement('div');
                              div.classList.add('col');
                              div.innerHTML = `
                               <div class="card h-100">
                                                    <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
                                                   <div class="card-body">
                                                              <h5 class="card-title">Name: ${phone.phone_name}</h5>
                                                              <p class="card-text">Brand: ${phone.brand}</p>
                                                              <a onclick="loadPhoneDetials('${phone.slug}')" class="btn btn-primary">Explore</a>
                                                    </div >
                                          </div >
          `
                              searchResult.appendChild(div);
                    });
          }
}

const loadPhoneDetials = id => {
          document.getElementById('phone-detials').innerHTML = ''
          const url = `https://openapi.programming-hero.com/api/phone/${id}`;
          fetch(url)
                    .then(res => res.json())
                    .then(data => displayPhoneDetials(data.data));
}

const displayPhoneDetials = phone => {
          const phoneDetials = document.getElementById('phone-detials');
          const div = document.createElement('div');
          div.classList.add('card');
          div.innerHTML = `
          <div class="card w-100 mx-auto ">
          <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
                    <h5 class="card-title">${phone.name}</h5>   
                    <p class="card-text">${phone.releaseDate}</p >
                    <p class="card-text">Id: ${phone.slug}</p>
                    <h4 class="card-text">Main Features</h4>
                    <p class="card-text">ChipSet: ${phone.mainFeatures.chipSet}</p>
                    <p class="card-text">Display Size: ${phone.mainFeatures.displaySize}</p>
                    <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
                    <p class="card-text">Sensors: ${phone.mainFeatures.sensors}</p>
                    <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
                    <h4 class="card-text">Other Information</h4>
                    <p class="card-text">WLAN: ${phone.others.WLAN}</p>
                    <p class="card-text">Bluetooth: ${phone.others.Bluetooth}</p>
                    <p class="card-text">GPS: ${phone.others.GPS}</p>
                    <p class="card-text">Radio: ${phone.others.Radio}</p>
                    <p class="card-text">NFC: ${phone.others.NFC}</p>
                    <p class="card-text">USB: ${phone.others.USB}</p>

          </div >
</div >
          `;
          phoneDetials.appendChild(div);
}