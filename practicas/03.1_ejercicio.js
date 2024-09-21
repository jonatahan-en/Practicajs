/*
Crea una función para que con estos datos de entrada se produzca los siguientes
*/


const input1 = [
'Downloads',
'Videos',
'capture',
'mp4',
]

const getInput = (list) => {
    const getElemet = list.length -1;
    const extension = list[getElemet];
    const newList = [...list];
    newList.pop();
    return (`${newList.join('/')}.${extension}`)
};

console.log(getInput(input1)); // 'Downloads/Videos/capture.mp4'
const input2 = [
'CodinGame',
'python',
'py',
];
console.log(getInput(input2)); // 'CodinGame/python.py'
const input3 = [
'programming',
'languages',
'easy',
'beginner',
'useful',
'pythonstuff',
'py',
]
console.log(getInput(input3));
// 'programming/languages/easy/beginner/useful/pythonstuff.py
