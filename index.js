
let number = document.getElementById('count');
let cnt = 0;

function change(event){
    if(event == 1){
        number.innerHTML = `${--cnt}`;
    }else if(event == 2){
        number.innerHTML = `${cnt = 0}`;
    }else{
        number.innerHTML = `${++cnt}`;
    }
    number.style.color = (cnt > 0) ? 'green': (cnt < 0) ? 'red' : 'black';
}