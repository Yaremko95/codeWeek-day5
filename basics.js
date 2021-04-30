let title = "Time";
let artist = " Hans Zimmer";
let duration = 245;
let isFree = true;

//console.log(title);

let nums = [3, 7, 8, 4, 3];
//console.log(nums[3]);
//console.log(nums.length);

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
}

let song = {
  title: "Time",
  artist: {
    name: "Hans Zimmer",
    id: 42542,
    picture:
      "https://cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/500x500-000000-80-0-0.jpg",
  },
  duration: 245,
  isFree: true,
};

// console.log(song["duration"]);
// console.log(song.duration);
// console.log(song.artist.name);

song.cover =
  "https://cdns-images.dzcdn.net/images/cover/c98ad40de8366e28ecc990c1e0014805/500x500-000000-80-0-0.jpg";
delete song.isFree;
//console.log(song);

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
      title:
        "Interstellar (Original Motion Picture Soundtrack) (Expanded Edition)",
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
  ],
};

// console.log(songs.data[0].title);
// console.log(songs.data[1].title);
// console.log(songs.data[2].title);

for (let i = 0; i < songs.data.length; i++) {
  console.log(songs.data[i].title);
}

function displayMessage(msg) {
  console.log(msg);
}

displayMessage("hello world");
displayMessage("hi");
displayMessage("I'm Tetiana");

function sum(a, b) {
  let total = a + b;
  return total;
}
let totalSum = sum(3, 4);

console.log(totalSum);
