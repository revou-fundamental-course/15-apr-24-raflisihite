var stateSuhu = true;

function konSuhu() {
    var c = document.getElementById("suhuCelcius").value 

    if((c > 0) || (c <= 0 )) {
        if(stateSuhu) {
            var s = (c*1.8) + 32
            document.getElementById("caraKalkulasi").value = c+"°C * (9/5) + 32 = "+s+"°F";
        } else {
            var s = (c-32)/1.8
            document.getElementById("caraKalkulasi").value = "("+c+"°F - 32) * 5/9  = "+s+"°C";
        }
        document.getElementById("outputSuhu").value = s;
        document.getElementById("peringatan").innerHTML = "";
    } else {
        document.getElementById("outputSuhu").value ="";
        document.getElementById("caraKalkulasi").value ="";
        document.getElementById("peringatan").innerHTML = "Input harus berupa Angka !!!";
    }
}

function resetAll() {
    document.getElementById("suhuCelcius").value ="";
    document.getElementById("outputSuhu").value ="";
    document.getElementById("caraKalkulasi").value ="";
    document.getElementById("peringatan").innerHTML = "";
}

function reverse() {
    if(stateSuhu) {
        stateSuhu = false;
        document.getElementById("suhuAwal").innerHTML = "Fahrenheit (°F) :";
        document.getElementById("suhuKedua").innerHTML = "Celcius (°C) :";
        document.getElementById("stateKonversiSuhu").innerHTML = "Celcius ke Fahrenheit";
    } else {
        stateSuhu = true;
        document.getElementById("suhuAwal").innerHTML = "Celcius (°C) :";
        document.getElementById("suhuKedua").innerHTML = "Fahrenheit (°F) :";
        document.getElementById("stateKonversiSuhu").innerHTML = "Fahrenheit ke Celcius";
        
    }
    document.getElementById("newF").classList.toggle('active');
    document.getElementById("newC").classList.toggle('active');
    resetAll();
    
}
