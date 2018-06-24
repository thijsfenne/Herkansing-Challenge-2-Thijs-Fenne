window.onload = function () {
    startTime();
};

function startTime() {
    var today = new Date();
    var monthArray = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    var dayArray = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
    var day = dayArray[today.getDay()]; 
    var dayNumber = today.getDate();
    var month = monthArray[today.getMonth()]; 
    var year = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('klok').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
     document.getElementById('dayMonthYear').innerHTML = day + " " + dayNumber + " " + month + " " + year;
    
    if (h >= 7 && h < 8) {
        document.getElementById("content").style.backgroundImage =  'url(images/' + 'breakfast' + '.jpg)';
        document.getElementById("opAarde").innerHTML = 'Op aarde wordt nu ontbeten';
        document.getElementById("sun").style.display = "initial"; 
        document.getElementById("moon").style.display = "none"; 

    } else if (h >= 9 && h < 10) {
        document.getElementById("content").style.backgroundImage =  'url(img/' + 'briefing' + '.jpg)';
        document.getElementById("opAarde").innerHTML = 'Op aarde is de ochtend briefing nu bezig';

    } else if (h >= 10 && h < 12) {
        document.getElementById("content").style.backgroundImage =  'url(img/' + 'morning-work' + '.jpg)';
        document.getElementById("opAarde").innerHTML = 'Op aarde wordt nu gewerkt';
    
    } else if (h >= 12 && h < 14) {
        document.getElementById("content").style.backgroundImage =  'url(img/' + 'lunch' + '.jpg)';
        document.getElementById("opAarde").innerHTML = 'Op aarde wordt nu gelunchd';

    } else if (h >= 14 && h < 18) {
        document.getElementById("content").style.backgroundImage =  'url(img/' + 'mid-day-work' + '.jpg)';
        document.getElementById("opAarde").innerHTML = 'Op aarde wordt nu het tweede deel van de werkdag hervat';
       
    } else if (h >= 19 && h <= 23) {
        document.getElementById("content").style.backgroundImage =  'url(img/' + 'relax' + '.jpg)';
        document.getElementById("opAarde").innerHTML = 'Op aarde is de werkdag voorbij';

    } else {
        document.getElementById("content").style.backgroundImage =  'url(img/' + 'night' + '.jpg)';
        document.getElementById("opAarde").innerHTML = 'Op aarde wordt nu geslapen';
        document.getElementById("wolken").style.filter = 'brightness(0.7)'; // Wolken donkerdeg gemaakt omdat het nacht is
        document.getElementById("wolken2").style.filter = 'brightness(0.7)';
        document.getElementById("wolken3").style.filter = 'brightness(0.7)';
        document.getElementById("wolken4").style.filter = 'brightness(0.7)';
        document.getElementById("maan").style.display = 'block'; // Maan omdat het nacht is
        document.getElementById("zon").style.display = 'none'; // 
        document.getElementById("opacity").style.backgroundColor = 'rgba(0,0,0,0.5)'; //donkere kleur want het is nacht
        document.getElementById("gras").style.filter = 'brightness(0.4)'; // gras wordt donkerder want het is nacht
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    return i;
}

function doenVraag() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('klok').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    if (h >= 7 && h <= 8) {
        document.getElementById('advies').innerHTML = 'Bak een eitje en lees de krant';
        TweenMax.to('#advies',2,{
            top:660
        });
    } else if (h >= 9 && h < 10) {
        document.getElementById('advies').innerHTML = 'Neem initiatief om iets te doen op werk';
        TweenMax.to('#advies',2,{
                top:660
        })
    } else if (h >= 10 && h < 12) {
        document.getElementById('advies').innerHTML = 'Zet dat ene business plan op voor die organisatie';
        TweenMax.to('#advies',2,{
            top:660
        })
    } else if (h >= 12 && h < 14) {
        document.getElementById('advies').innerHTML = 'Probeer dat nieuwe lunchtentje op de hoek uit';
        TweenMax.to('#advies',2,{
            top:660
        })
    } else if (h >= 14 && h < 18) {
        document.getElementById('advies').innerHTML = 'Je hebt een afspraak met een klant. Kijk uit dat je niet te laat komt.';
        TweenMax.to('#advies',2,{
            top:660
        })
    } else if (h >= 18 && h <= 23) {
        document.getElementById('advies').innerHTML = 'Spendeer tijd met de kinderen en kijk je serie. Relax in ieder geval.';
        TweenMax.to('#advies',2,{
            top:660
        })
    } else {
        document.getElementById('advies').innerHTML = 'Je kan het beste maar gaan slapen, de wekker gaat weer om 7 uur.' ;
        TweenMax.to('#advies',2,{
            top:660
        })
    }
}

// zon-, maan en wolkanimaties

var zon = document.getElementById('zon');
TweenMax.to (zon, 100, {
    left: '100%',
    repeat: -1,
    yoyo: true,
    ease: Linear.easeInOut,
});

var maan = document.getElementById('maan');
TweenMax.to (maan, 100, {
    left: '100%',
    repeat: -1,
    yoyo: true,
    ease: Linear.easeInOut,
});

var wolken = document.getElementById('wolken');
TweenMax.to (wolken, 20, {
    right: '100%',
    repeat: -1,
    yoyo: true,
    ease: Linear.easeInOut,
});

var wolken = document.getElementById('wolken2');
TweenMax.to (wolken, 20, {
    left: '100%',
    repeat: -1,
    yoyo: true,
    ease: Linear.easeInOut,
});

var wolken = document.getElementById('wolken3');
TweenMax.to (wolken, 40, {
    right: '100%',
    repeat: -1,
    yoyo: true,
    ease: Linear.easeInOut,
});

var wolken = document.getElementById('wolken4');
TweenMax.to (wolken, 30, {
    left: '100%',
    repeat: -1,
    yoyo: true,
    ease: Linear.easeInOut,
});






