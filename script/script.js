let urls = [
    "https://pngimg.com/uploads/cat/cat_PNG50550.png",
    "https://pngimg.com/uploads/cat/cat_PNG50547.png",
    "https://pngimg.com/uploads/cat/cat_PNG50549.png",
    "https://pngimg.com/uploads/cat/cat_PNG50537.png",
    "https://pngimg.com/uploads/cat/cat_PNG50542.png",
    "https://pngimg.com/uploads/cat/cat_PNG50527.png",
    "https://pngimg.com/uploads/cat/cat_PNG50520.png",
    "https://pngimg.com/uploads/cat/cat_PNG50511.png",
];
document.getElementById("random-link").addEventListener("click", function(){
    let url = urls[Math.floor(Math.random()*urls.length)]
  this.href = url;
});