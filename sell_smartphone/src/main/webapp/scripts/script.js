function call() {
    var header = document.getElementById('htv-navbar');
    var menu = document.getElementById('menu');
    menu.onclick = function () {
        var isClosed = header.clientHeight === 83;
        if (isClosed) {
            header.style.height = 'auto';
        }
        else {
            header.style.height = '83px';
        }
    }
}