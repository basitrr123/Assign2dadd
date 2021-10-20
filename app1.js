//taking values from Matrix X

let inputq1 = document.getElementById('q1');
let inputq2 = document.getElementById('q2');
let inputq3 = document.getElementById('q3');
let inputq4 = document.getElementById('q4');
let inputq5 = document.getElementById('q5');
let inputq6 = document.getElementById('q6');
let inputq7 = document.getElementById('q7');
let inputq8 = document.getElementById('q8');
let inputq9 = document.getElementById('q9');

//taking values from Matrix Y

let inputr1 = document.getElementById('r1');
let inputr2 = document.getElementById('r2');
let inputr3 = document.getElementById('r3');
let inputr4 = document.getElementById('r4');
let inputr5 = document.getElementById('r5');
let inputr6 = document.getElementById('r6');
let inputr7 = document.getElementById('r7');
let inputr8 = document.getElementById('r8');
let inputr9 = document.getElementById('r9');

//showing values from Matrix Z

let inputs1 = document.getElementById('s1');
let inputs2 = document.getElementById('s2');
let inputs3 = document.getElementById('s3');
let inputs4 = document.getElementById('s4');
let inputs5 = document.getElementById('s5');
let inputs6 = document.getElementById('s6');
let inputs7 = document.getElementById('s7');
let inputs8 = document.getElementById('s8');
let inputs9 = document.getElementById('s9');

const matrixAdd = () => {
    let n1 = [
        [Number(inputq1.value),Number(inputq2.value),Number(inputq3.value)],
        [Number(inputq4.value),Number(inputq5.value),Number(inputq6.value)],
        [Number(inputq7.value),Number(inputq8.value),Number(inputq9.value)]
    ];

    let n2 = [
        [Number(inputr1.value),Number(inputr2.value),Number(inputr3.value)],
        [Number(inputr4.value),Number(inputr5.value),Number(inputr6.value)],
        [Number(inputr7.value),Number(inputr8.value),Number(inputr9.value)]
    ];

    console.log(n1);
    console.log(n2);

    let n3 = [
    [Number(inputs1.value),Number(inputs2.value),Number(inputs3.value)],
    [Number(inputs4.value),Number(inputs5.value),Number(inputs6.value)],
    [Number(inputs7.value),Number(inputs8.value),Number(inputs9.value)]
    ];


    for (let i= 0; i < 3 ; i++ ) {

        for( let j = 0; j < 3; j++) {

            n3[i][j] = n1[i][j] + n2[i][j];

        }
    }

    document.getElementById('s1').value = n3[0][0];
    document.getElementById('s2').value = n3[0][1];
    document.getElementById('s3').value = n3[0][2];
    document.getElementById('s4').value = n3[1][0];
    document.getElementById('s5').value = n3[1][1];
    document.getElementById('s6').value = n3[1][2];
    document.getElementById('s7').value = n3[2][0];
    document.getElementById('s8').value = n3[2][1];
    document.getElementById('s9').value = n3[2][2];
}