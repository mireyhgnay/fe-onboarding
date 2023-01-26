/*
    [퀴즈 #1] add 함수 구현하기
    add(2)(5)의 결과가 7이 나오는 함수 add를 구현해보세요.
*/

const Add = (a) => {
    const otherAdd = (b) => {
        return a + b;
    }
    return otherAdd;
}

console.log(Add(2),5);

// 풀어서 이해해보자면~
// const add2 = Add(2);
// console.log(add,5);