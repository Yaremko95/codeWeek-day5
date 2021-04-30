let songs = {
  data: [
    {
      id: 3535,
      title: "Time",
      duration: 275,
      isFree: true,
      cover:
        "https://cdns-images.dzcdn.net/images/cover/c98ad40de8366e28ecc990c1e0014805/500x500-000000-80-0-0.jpg",
      artist: {
        name: "Hans Zimmer",
        id: 42542,
        picture:
          "https://cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/500x500-000000-80-0-0.jpg",
      },
    },
    {
      id: 0357,
      title: "Interstellar",
      duration: 219,
      isFree: false,
      cover:
        "https://cdns-images.dzcdn.net/images/cover/5a02690056ec7f97030788109498ac5a/500x500-000000-80-0-0.jpg",
      artist: {
        name: "Hans Zimmer",
        id: 42542,
        picture:
          "https://cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/500x500-000000-80-0-0.jpg",
      },
    },
    {
      id: 1537,
      title: "Tennessee",
      duration: 300,
      isFree: true,
      cover:
        "https://cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/500x500-000000-80-0-0.jpg",
      artist: {
        name: "Hans Zimmer",
        id: 42542,
        picture:
          "https://cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/500x500-000000-80-0-0.jpg",
      },
    },
    {
      id: 1537,
      title: "Tennessee",
      duration: 300,
      isFree: true,
      cover:
        "https://cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/500x500-000000-80-0-0.jpg",
      artist: {
        name: "Hans Zimmer",
        id: 42542,
        picture:
          "https://cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/500x500-000000-80-0-0.jpg",
      },
    },
  ],
};

{
  /* <div class="card">
        <div class="media">
            <img src="assets/album-cover.jpeg" />
            <ion-icon name="play-sharp"></ion-icon>
        </div>
        <div class="card-body">
        <p>Song title</p>
        <span>Artist Name</span>
        </div>
        </div>
</div> */
}

function displayData(arr) {
  let parent = document.querySelector("#main");
  console.log(parent);
  parent.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i].title, arr[i].artist.name, arr[i].cover);
    // let card = document.createElement("div");
    // card.classList.add("card");

    // let media = document.createElement("div");
    // media.classList.add("media");

    // let cardBody = document.createElement("div");
    // cardBody.classList.add("card-body");

    // card.appendChild(media);
    // card.appendChild(cardBody);

    // let img = document.createElement("img");
    // img.src = arr[i].cover;
    // let icon = document.createElement("ion-icon");
    // icon.name = "play-sharp";

    // media.appendChild(img);
    // media.appendChild(icon);

    // let p = document.createElement("p");
    // p.innerText = arr[i].title;
    // let span = document.createElement("span");
    // span.innerText = arr[i].artist.name;

    // cardBody.appendChild(p);
    // cardBody.appendChild(span);

    // console.log(card);
    // parent.appendChild(card);
    let card = `<div class="card">
                    <div class="media">
                        <img src="${arr[i].album.cover}" />
                        <ion-icon name="play-sharp"></ion-icon>
                    </div>
                    <div class="card-body">
                    <p>${arr[i].title}</p>
                    <span>${arr[i].artist.name}</span>
                    </div>
                    </div>
                </div>`;
    parent.innerHTML += card;
  }
}

async function getData(query) {
  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
      },
    }
  );
  let result = await response.json();

  console.log(result.data);
  displayData(result.data);
}

getData("hans zimmer");

let search = document.getElementById("search-input");
search.addEventListener("input", function () {
  // console.log(search.value);
  getData(search.value);
});
