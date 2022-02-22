/**
 * string primitive type과 String 객체 메소드(String.prototype.*) [타입은 오브젝트인데 String의 인스턴스다])
 */

// 배열처럼 접근이 가능하다.
var str1 = "Hello World";
for(var i=0; i<str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = "Hello";
var str3 = "World";
var str4 = str2 + " " + str3;
console.log(str4);  // String str4 = new StringBuffer(str2).append(" ").append(str3).toString();
                    // 따라서 for문에 string 합치기 식을 큰 수로 돌리면 객체를 그만큼 생성하기 때문에 CPU에 심각한 손상을 입힌다.
                    // 해결방법 : StringBuffer로 변수를 만들어서 s.append만 해준다.

// 캐스팅
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean : " + true;
console.log(str6);

// 메소드
var str7 = "string1 string2 string3";

var index = str7.indexOf("string2");
console.log(index);

var index = str7.indexOf("string4");
console.log(index); // 찾지 못하면 -1

var str8 = str7.substr(10, 3/*count*/);
console.log(str8);

var str8 = str7.substring(10, 13/*last index -1*/);
console.log(str8);

var a = str7.split(" ");
console.log(a);

var str11 = "abcdef";
var a = str11.split(":");
console.log(a);