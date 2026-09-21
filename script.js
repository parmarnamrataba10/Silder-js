
let images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
];

let index = 0;

let image = document.getElementById("image");
let next = document.getElementById("next");

next.addEventListener("click", function () {

    index++;

    if (index == images.length) {
        index = 0;
    }

    image.src = images[index];

});