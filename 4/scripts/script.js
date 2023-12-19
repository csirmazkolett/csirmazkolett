function szoras(termekek) {
    if (termekek.length === 0) {
        throw new Error('Nem adtál meg termékeket');
    }
    var atl = atlag(termekek);
    return Math.sqrt(termekek.map(function (x) { return Math.pow((x.ar - atl), 2); }).reduce(function (a, b) { return a + b; }) / termekek.length);
}
function atlag(termekek) {
    if (termekek.length === 0) {
        throw new Error('Nem adtál meg termékeket');
    }
    var osszeg = 0;
    for (var i = 0; i < termekek.length; i++) {
        osszeg += termekek[i].ar;
    }
    return osszeg / termekek.length;
}
function legolcsobb(termekek) {
    if (termekek.length === 0) {
        throw new Error('Nem adtál meg termékeket');
    }
    var legolcsobb = termekek[0];
    for (var i = 0; i < termekek.length; i++) {
        if (termekek[i].ar <= legolcsobb.ar) {
            legolcsobb = termekek[i];
        }
    }
    return legolcsobb;
}
function ujSor() {
    var tabla = document.getElementById('termekek');
    var sor = document.createElement('tr');
    sor.innerHTML = '<td><input class="nev-input" /></td> <td><input class="ar-input" type="number" /></td>';
    tabla.appendChild(sor);
}
function szamol() {
    var sorok = document.getElementById('termekek').children;
    var termekek = [];
    for (var i = 0; i < sorok.length; i++) {
        var nev = sorok[i].querySelector('.nev-input').value;
        var ar = Number(sorok[i].querySelector('.ar-input').value);
        termekek.push({ nev: nev, ar: ar });
    }
    document.getElementById('atlag').textContent = atlag(termekek).toFixed(2).toString();
    document.getElementById('szoras').textContent = szoras(termekek).toFixed(2).toString();
    document.getElementById('legolcsobb').textContent = legolcsobb(termekek).nev;
}
