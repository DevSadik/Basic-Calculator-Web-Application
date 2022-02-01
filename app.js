

let calData = [];

let getVal = (val) => {
   calData.push(val)

   document.querySelector('.top_monitor').innerHTML = calData.join('');
   document.querySelector('.bottom_monitor').innerHTML = 0;

}

let totalResult = () => {

    let dataSrting = calData.join('');
    document.querySelector('.bottom_monitor').innerHTML = eval(dataSrting);

    
}
let Clear = () => {

    calData.pop() 
    document.querySelector('.top_monitor').innerHTML = calData.join('');
}

let allClear = () => {
    calData = [];
    document.querySelector('.top_monitor').innerHTML = 0;
    document.querySelector('.bottom_monitor').innerHTML = '';
}
