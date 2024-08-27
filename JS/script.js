// javascript

function gantiNama() {
    let nama = prompt("Siapa namamu?", "");
    document.getElementById('nama-user').innerHTML = nama;     
    if (nama.length =="") {
        gantiNama();}  

}
gantiNama();