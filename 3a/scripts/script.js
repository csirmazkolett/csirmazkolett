function paralleogramTerulet1(oldal, magassag) {
    if (isNaN(oldal) || oldal <= 0 || isNaN(magassag) || magassag <= 0) {
        throw new Error('Hibás adatok!');
    }
    return oldal * magassag;
}
function paralleogramTerulet2(oldal1, oldal2, szog) {
    if (isNaN(oldal1) || oldal1 <= 0 || isNaN(oldal2) || oldal2 <= 0 || isNaN(szog) || szog <= 0 || szog >= 180) {
        throw new Error('Hibás adatok!');
    }
    return oldal1 * oldal2 * Math.sin((szog * Math.PI) / 180);
}
function szamol1() {
    var oldal = Number(document.getElementById('oldal').value);
    var magassag = Number(document.getElementById('magassag').value);
    try {
        var terulet = paralleogramTerulet1(oldal, magassag);
        document.getElementById('terulet1').textContent = terulet.toString();
    }
    catch (error) {
        alert(error);
    }
}
function szamol2() {
    var oldal1 = Number(document.getElementById('oldal1').value);
    var oldal2 = Number(document.getElementById('oldal2').value);
    var szog = Number(document.getElementById('szog').value);
    try {
        var terulet = paralleogramTerulet2(oldal1, oldal2, szog);
        document.getElementById('terulet2').textContent = terulet.toString();
    }
    catch (error) {
        alert(error);
    }
}
