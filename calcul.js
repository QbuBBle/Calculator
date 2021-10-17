function insert(cf) {
    document.form.textview.value = document.form.textview.value + cf;
}

function clean() {
    document.form.textview.value = "";
}

 function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

function equal() {
    var exp = document.form.textview.value;
    if(exp) {
    document.form.textview.value = eval(exp);
    }
}

function procent() {
    document.form.textview.value = eval( document.form.textview.value) / 100;
}

function sin() {
    document.form.textview.value = Math.sin(eval(document.form.textview.value)).toFixed(8);
}
   
function cos() {
    document.form.textview.value =Math.cos(eval(document.form.textview.value)).toFixed(8);
}

function tan() {
    document.form.textview.value =Math.tan(eval(document.form.textview.value)).toFixed(8);
}

function ctg() {
    document.form.textview.value =1/Math.tan(eval(document.form.textview.value)).toFixed(8);
}

function sqrt() {
    document.form.textview.value =Math.sqrt(eval(document.form.textview.value)).toFixed(8);

}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fact() {
    document.form.textview.value = factorial(eval(document.form.textview.value))
}

function log(name) {
    document.form.textview.value = Math.log10(eval(document.form.textview.value)).toFixed(8);
    }

function vozved(n){
    return (n*n);
}

function vozv(){
    document.form.textview.value = vozved(eval(document.form.textview.value))
}

function mod(){
    document.form.textview.value = Math.abs(eval(document.form.textview.value))
}

function per(){
    $('.engineer-menu').toggleClass('viezd');
  }

 