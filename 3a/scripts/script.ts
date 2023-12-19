/**
 * Paralelogramma területének kiszámítása egy oldal és a maqgasság segítségével
 * 
 * @param oldal 
 * @param magassag 
 * @returns Pralelogramma területe
 */
function paralleogramTerulet1(oldal: number, magassag: number) {
    if (isNaN(oldal) || oldal <= 0 || isNaN(magassag) || magassag <= 0) {
        throw new Error('Hibás adatok!');
    }
    return oldal * magassag;
}

/**
 * Paralelogramma területének kiszámítása a két oldal és a szögük segítségével
 * 
 * @param oldal1 
 * @param oldal2 
 * @param szog 
 * @returns Pralelogramma területe
 */
function paralleogramTerulet2(oldal1: number, oldal2: number, szog: number) {
    if (isNaN(oldal1) || oldal1 <= 0 || isNaN(oldal2) || oldal2 <= 0 || isNaN(szog) || szog <= 0 || szog >= 180) {
        throw new Error('Hibás adatok!');
    }
    return oldal1 * oldal2 * Math.sin((szog * Math.PI) / 180);
}

function szamol1() {
    const oldal = Number((document.getElementById('oldal') as HTMLInputElement).value);
    const magassag = Number((document.getElementById('magassag') as HTMLInputElement).value);

    try {
        const terulet = paralleogramTerulet1(oldal, magassag);
        document.getElementById('terulet1').textContent = terulet.toString();
    } catch (error) {
        alert(error);
    }
}

function szamol2() {
    const oldal1 = Number((document.getElementById('oldal1') as HTMLInputElement).value);
    const oldal2 = Number((document.getElementById('oldal2') as HTMLInputElement).value);
    const szog = Number((document.getElementById('szog') as HTMLInputElement).value);

    try {
        const terulet = paralleogramTerulet2(oldal1, oldal2, szog);
        document.getElementById('terulet2').textContent = terulet.toString();
    } catch (error) {
        alert(error);
    }
}
