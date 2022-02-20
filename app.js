function izracunaj(){
    var prviBroj = document.getElementById("prviBrojInput").value;
    var drugiBroj = document.getElementById("drugiBrojInput").value;
    var operacija = document.getElementById("operacijaSelect").value;

    prviBroj = parseInt(prviBroj);
    drugiBroj = parseInt(drugiBroj);

    var rezultat = 0;

    if(operacija == '+'){
        rezultat = prviBroj + drugiBroj;
    }
    if(operacija == '-'){
        rezultat = prviBroj - drugiBroj;
    }
    if(operacija == '*'){
        rezultat = prviBroj * drugiBroj;
    }
    if(operacija == '/'){
        rezultat = prviBroj / drugiBroj;
    }
    document.getElementById("rezultatInput").value = rezultat;

}