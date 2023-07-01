let again = true;

while ( again ){
//mengambil pilihan player
let player = prompt('pilih gajah, semut, atau orang!');


// membuat angka random
let random = Math.random();

//pilihan comp
let comp = '';

if( random < 0.34 ) {
    comp = "semut";
} else if( random >= 0.34 && random <= 0.67 ) {
    comp = "orang"
} else {
    comp = "gajah";
}

let h = "";
//menentukan rules

if ( player == comp ){
    h = " Hasilnya Seri"
} else if ( player == "gajah" ){
    if (comp == "orang"){
        h = "Menang"
    } else {
        h = "kalah"
    }
} else if ( player == "semut"){
    if (comp == "orang"){
        h = "Kalah"
    } else {
        h = "menang"
    }
}else if ( player == "orang"){
    if (comp == "gajah"){
        h = "Kalah"
    } else {
        h = "menang"
    } 
}else {
    h = "benar-benar ko milih qmack!!!"
}


//Hasilnya bre


let hasil = alert("Player milih " + player + " dan Komputer milih " + comp + " \nMaka Hasilnya " + h );

again = confirm("Mau Coba Lagi???");

}

alert("Terima Kasih Telah Bermain YA BREE");
