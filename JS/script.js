// javascript

function gantiNama() {
    let nama = prompt("Siapa namamu?", "");
    document.getElementById('nama-user').innerHTML = nama;     
    if (nama.length =="") {
        gantiNama();}  

}
gantiNama();

let slideIndex = [1,1];
let slideId = ["banner-img", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
let i;
let slides = document.getElementsByClassName("slideshowimg");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }
setInterval(() => {
plusSlides(1); 
}, 3000);