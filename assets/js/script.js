"use strict";

function insert(symbol){
    document.form.textView.value = document.form.textView.value + symbol;// закончил на 28:39, сделал кнопки, теперь нужно чтобы не применялось несколько знаков
}

function clean(){
    document.form.textView.value = '';
}
function equal(){
    document.form.textView.value = eval(document.form.textView.value);  
}
// function percent(){
//     document.form.textView.value = ХЗ
// }

