// javascript

function gantiNama() {
    let nama = prompt("Siapa namamu?", "");
    document.getElementById('nama-user').innerHTML = nama;     
    if (nama.length =="") {
        gantiNama();}  

}
gantiNama();

let slideIndex = [1,1];
let slideId = ["image-slide", "second-slide"]
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
showSlides(slideIndex[no] += n, no);
}


function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    if (n > slides.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        slides[slideIndex[no]-1].style.display = "block";

    }
setInterval(() => {
plusSlides(1,1); 
}, 3000);

setInterval(() => {
    plusSlides(1,0); 
}, 3500);