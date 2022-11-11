function adder(){
    // let div = document.createElement('div');
    const targetDiv = document.querySelector('.origin');
    // const allDivs = document.querySelectorAll('')
    let newDiv = document.createElement('div');
    newDiv.className = 'count';
    newDiv.innerHTML = '<input type = "text" class = "vlue" id = "vlue"><input type ="text" class = "text" id = "frst"><button class = "" onclick = "upper(this)">↑</button><button class = "" onclick = "downer(this)">↓</button><button class = "" onclick = "remover(this)">x</button>';
    targetDiv.append(newDiv);
}   
function upper(e){
    console.log(e);
    const a = e.parentElement.previousSibling;
    const b = e.parentElement;
    const parent = document.querySelector('.origin')
    console.log('qwerty');
    console.log(e.parentElement);
    console.log(b);
    parent.insertBefore(b,a)
}
function downer(e){
    const a = e.parentElement;
    const b = e.parentElement.nextSibling;
    const parent = document.querySelector('.origin')
    parent.insertBefore(b,a)
}
function remover(e){
    const remm = e.parentElement;
    remm.remove();
}