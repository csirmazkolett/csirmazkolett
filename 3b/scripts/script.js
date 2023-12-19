function haromVeletlenSztring(sztringek) {
    if (sztringek.length < 5) {
        throw new Error('Túl kevés a bemenet');
    }
    var kivalasztott = [];
    for (var i = 0; i < 3; i++) {
        var index = Math.floor(Math.random() * sztringek.length);
        kivalasztott.push(sztringek[index]);
    }
    return kivalasztott;
}
function action() {
    var input = document.getElementById('sztringek').value;
    var sztringek = input.split(',');
    var veletlen = haromVeletlenSztring(sztringek);
    document.getElementById('veletlen').textContent = veletlen.join(',');
}
