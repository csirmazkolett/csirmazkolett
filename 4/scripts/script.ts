type termek = {
    nev: string;
    ar: number;
};

function szoras(termekek: termek[]): number {
    if (termekek.length === 0) {
        throw new Error('Nem adtál meg termékeket');
    }
    const atl = atlag(termekek);
    return Math.sqrt(termekek.map((x) => (x.ar - atl) ** 2).reduce((a, b) => a + b) / termekek.length);
}

function atlag(termekek: termek[]): number {
    if (termekek.length === 0) {
        throw new Error('Nem adtál meg termékeket');
    }
    let osszeg = 0;
    for (let i = 0; i < termekek.length; i++) {
        osszeg += termekek[i].ar;
    }
    return osszeg / termekek.length;
}

function legolcsobb(termekek: termek[]): termek {
    if (termekek.length === 0) {
        throw new Error('Nem adtál meg termékeket');
    }
    let legolcsobb = termekek[0];
    for (let i = 0; i < termekek.length; i++) {
        if (termekek[i].ar <= legolcsobb.ar) {
            legolcsobb = termekek[i];
        }
    }
    return legolcsobb;
}

function ujSor() {
    const tabla = document.getElementById('termekek') as HTMLTableElement;
    const sor = document.createElement('tr');
    sor.innerHTML = '<td><input class="nev-input" /></td> <td><input class="ar-input" type="number" /></td>';
    tabla.appendChild(sor);
}

function szamol() {
    const sorok = document.getElementById('termekek').children;
    const termekek: termek[] = [];
    for (let i = 0; i < sorok.length; i++) {
        const nev = (sorok[i].querySelector('.nev-input') as HTMLInputElement).value;
        const ar = Number((sorok[i].querySelector('.ar-input') as HTMLInputElement).value);
        termekek.push({ nev, ar });
    }

    document.getElementById('atlag').textContent = atlag(termekek).toFixed(2).toString();
    document.getElementById('szoras').textContent = szoras(termekek).toFixed(2).toString();
    document.getElementById('legolcsobb').textContent = legolcsobb(termekek).nev;
}
