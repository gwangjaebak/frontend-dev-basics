console.log("==== global object(전역 객체) ====================");

global.name = '둘리';
console.log(name, global.name);

// cf
email = 'dooly@gmail.com';
console.log(email, global.email);

console.log("==== function의 객체 메소드 apply ====================");
var f1 = function() {
    console.log(this);
}

f1();

// this 바꾸기
var o = {
    name: '마이콜'
};

f1.apply(o);

console.log("==== function의 객체 메소드 call(실행때 this를 바꾸는 것) ====================");
var f2 = function(s1, s2) {
    console.log(s1 + " " + s2 + " " + this.name);
}

f2("hi", "");
f2.call(o, "hi", "again");      // 파라미터가 없을 때
f2.apply(o, ["hi", "again"]);   // 파라미터가 있을 때