module.exports = function reverse (n) {
    if (n < 0 ) {
    n = Math.abs(n);
    }
    let num, k=0, rez = "";
    let i = n;
    while(i>0){
        i = Math.floor(i/10);
        k++;
    }
    for(k;k>0;k--){
    num = n % 10;
    n = Math.floor(n/10);
    rez = rez + num;
    }
    return rez;
}
