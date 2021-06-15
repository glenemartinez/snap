let str1 = "Snap";
let str2 = "Crackle";
let str3 = "Prime";

function snapCrackle(maxValue) {
  let str4 = [];
  for (let i = 1; i <= maxValue; i++) {
    if (i % 2 > 0 && i % 5 === 0) {
      str4[i] = str1 + str2;
    } else if (i % 5 === 0) {
      str4[i] = str2;
    } else if (i % 2 > 0) {
      str4[i] = str1 + " ";
    } else if (i % 2 === 0) {
      str4[i] = i;
    }
  }
  return str4.toString().replace(",", " ");
}
/*
console.log(snapCrackle());

function snapCracklePrime(maxValue) {
  let str4 = [];
  for (let i = 1; i <= maxValue; i++) {
    str4.push(maxValue[i]);
	
		if( i % 2 > 0 ){
		str4[i] = 'impar'; }
		
		else	if(i % 2 > 0 && i % 5 === 0){
		str4[i] = 'impar 5'; }	

		else if(i % 2 === 0){
		str4[i] = i; }

		else if( i % 1  === 0 && i % i === 0 ) {
		str4[i] =  'Primo';}	

		else if( i % 5 === 0){
		str4[i] = "de5";}
  }
  console.log(str4);
}
snapCracklePrime();*/
