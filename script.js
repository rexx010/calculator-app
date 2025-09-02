// let display = document.getElementById('display');
// let buttons = Array.from(document.getElementsByClassName('button'));
// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '←':
//                 if (display.innerText){
//                     display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             case '=':
//                 try {
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = 'Error';
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });

let display = document.getElementById('display');

let buttons = document.getElementsByClassName('button');
for (let button of buttons) {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
        if (value === 'C') {
            display.innerText = '';
        } else if (value === '←') {
            display.innerText = display.innerText.slice(0, -1);
        } else if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            }
        } else {
            display.innerText += value;
        }
    });
}