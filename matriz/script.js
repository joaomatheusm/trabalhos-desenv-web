// 7 - Funcao que recebe uma matriz e um numero e substitui a linha equivalente ao numero por zeros

function replaceRow(matrix, number) {
    number--;
    if (number < 0 || number >= matrix.length) {
        console.log("Número inválido");
        return;
    }

    for (let i = 0; i < matrix[number].length; i++) {
        matrix[number][i] = 0;
    }
}

let matrix = [
    [3, 2, 5],
    [4, 9, 1],
    [7, 2, 2],
    [4, 5, 6],
    [1, 5, 3],
    [9, 5, 7],
    [8, 5, 6]
];

replaceRow(matrix, 3);
console.log(matrix);