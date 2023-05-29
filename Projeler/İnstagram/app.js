document.getElementById("form-register").style.display = "none"

function Kayıtol(){
    document.getElementById("form-register").style.display = "block"
    document.getElementById("form-login").style.display = "none"
}

function Kayıtol_Giris(){
    document.getElementById("form-register").style.display = "none"
    document.getElementById("form-login").style.display = "block"
}
function Girisyap(){
    document.getElementById("form-register").style.display = "none"
    document.getElementById("form-login").style.display = "none"
    document.getElementById("girisyapıldı").innerHTML = "HOŞGELDİNİZ"
}
