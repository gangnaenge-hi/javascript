// document.addEventListener('DOMContentLoaded', () => {
//     const operatorBtns = document.getElementById('calc-actions');
//     let baseValue = 0;
//     let baseDesc = '';

//     operatorBtns.onclick = (e) => {
//         const operator = e.target.innerHTML;
//         const inputValue = userInput.value;
//         const desc = baseDesc + inputValue + operator;
//         let result = 0;
//         switch (operator) {
//             case '+':
//                 result = baseValue + Number(inputValue);
//                 break;
//             case '-':
//                 result = baseValue - Number(inputValue);
//                 break;
//             case '*':
//                 result = baseValue * Number(inputValue);
//                 break;
//             case '/':
//                 result = baseValue / Number(inputValue);
//                 break;

//         }
//         outputResult(result, desc);
//         baseDesc = desc;
//         baseValue = result;
//     };
//     console.log(baseValue);
// });


// 클로저 이용하기
document.addEventListener('DOMContentLoaded', () => {
    // 전역
    const operatorBtns = document.getElementById('calc-actions');
    const makeCalcHandler = () => {
        // 렉시컬 환경
        let baseValue = 0;
        let baseDesc = '0';
  
        return (e) => { // 함수를 리턴
            const operator = e.target.innerHTML;
            const inputNum = Number(userInput.value);
            const desc = `${baseDesc} ${operator} ${inputNum}`;
            let result = baseValue;
    
            switch (operator) {
            case '+':
                result = baseValue + inputNum;
                break;
            case '-':
                result = baseValue - inputNum;
                break;
            case '*':
                result = baseValue * inputNum;
                break;
            case '/':
                result = inputNum === 0 ? Infinity : baseValue / inputNum;
                break;
            default:
                return;
            }
    
            outputResult(result, desc);
            baseDesc = desc;
            baseValue = result;
        };
    };
  
    operatorBtns.addEventListener('click', makeCalcHandler());


    console.log(1+'2', 1*'2', 1-'2'); // +가 문자열 접합을 제공하기 때문
    console.log('h'+'i', 'hi'-'i');
    // a++ 증가되기 전 값 반환, ++a 증가된 후 값 반환
  });
  