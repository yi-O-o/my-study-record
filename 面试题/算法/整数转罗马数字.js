/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let symbol = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let str =''
   for(let i = 0; i<val.length;i++){
       while(num >= val[i]){
           num -=val[i]
            str += symbol[i] 
       }
   }
   return str
};

console.log(intToRoman(1994));
