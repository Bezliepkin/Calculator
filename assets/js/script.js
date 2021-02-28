"use strict";

function insert(symbol){
    document.form.textView.value = document.form.textView.value + symbol;
}

function clean(){
    document.form.textView.value = '';
}
function equal(){
    document.form.textView.value = eval(document.form.textView.value);
}

