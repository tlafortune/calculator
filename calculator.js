
function seeDisplay(value) {
    document.getElementById('display').value += value ;
}

function clear() {
    document.getElementById('display').value = '';
}

function result() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

