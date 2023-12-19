/**
 * Sztingek minimum 5 hosszúságú listájából visszad hármat.
 * @param sztringek
 * @returns Három véletlen sztring
 */
function haromVeletlenSztring(sztringek: string[]): string[] {
    if (sztringek.length < 5) {
        throw new Error('Túl kevés a bemenet');
    }
    let kivalasztott: string[] = [];

    for (let i = 0; i < 3; i++) {
        // Így lehet ismétlődés a visszaadott sztringekben, de a feladat nem kötötte ki hogy nem lehet ismétlődés.
        let index = Math.floor(Math.random() * sztringek.length);
        kivalasztott.push(sztringek[index]);
    }

    return kivalasztott;
}

function action() {
    const input = (document.getElementById('sztringek') as HTMLInputElement).value;
    const sztringek = input.split(',');
    const veletlen = haromVeletlenSztring(sztringek);

    document.getElementById('veletlen').textContent = veletlen.join(',');
}
