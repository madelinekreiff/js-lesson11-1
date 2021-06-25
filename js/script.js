const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// API function to get a list of 100 image objects
const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    // console.log(images); verify that the API retrieved an array of 100 image objects
    selectRandomImage(images);
};

// Function that accepts an array of 100 image objects & selects a random one
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex); verify that a random whole number between 0 and 99 has been pulled
    const randomImage = images[randomIndex];
    // console.log(randomImage); verify that a single random image object has been selected
    displayImage(randomImage);
};

// Function that accepts a random image object & displays it on the web page
const displayImage = function(randomImage) {
    const author = randomImage["author"];
    const imageAddress = randomImage["download_url"];

    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// Add a click event listener to the button to select and display the random image
button.addEventListener("click", function () {
    getImage();
});
