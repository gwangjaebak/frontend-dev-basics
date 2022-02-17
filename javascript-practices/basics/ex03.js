/* null과 undefined */

var myVar1 = undefined;     // 명시적으로 undefined 대입시킴.
var myVar2;                 // 암시적으로 undefined 대입된다.
var myVar3 = null;

console.log(myVar1 + ":" + myVar3);
console.log(typeof(myVar1) + ":" + typeof(myVar3));

console.log(myVar1 == myVar3);      // 값비교
console.log(myVar1 === myVar3);     // 타입비교 + 값비교

console.log("================================");

// == : equality, 값의 동치성, 형변환
console.log( 4 == '4' );
console.log( false == 0 );
console.log( 'abc' == new String('abc') );

console.log(true + 10); // 에러? > 11
console.log('abc' + new String('abc')); // abcabc? > abcabc
console.log(1 + "1"); // 11? > 11(number > string)
console.log("1" + 1); // 11? > 11

console.log("================================");
// === : identity
// 1. 타입의 동일성 + 값의 동일성 : 원시 타입일 때 적용
// 2. 객체의 동일성 : 객체일 때 적용
console.log("2" === 2);   // false
console.log(true === 1);   // false
console.log(2 === 4);   // false
console.log(new Number(4) === new Number(4));   //  객체의 동일성에서 어긋남 false