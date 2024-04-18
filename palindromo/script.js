// 1 - Funcao javacript que recebe uma palavra de entrada e retorna se é um palindromo ou nao

// Exemplos de palíndromos em frases

// A base do teto desaba.
// A cara rajada da jararaca.
// Acuda cadela da Leda caduca.
// A dama admirou o rim da amada.
// A Daniela ama a lei? Nada!
// Adias a data da saída.
// A diva em Argel alegra-me a vida.
// A droga do dote é todo da gorda.
// A gorda ama a droga.
// A grama é amarga.
// Aí, Lima falou: "Olá, família!".
// Ajudem Edu, já!
// A lupa pula.

function reverseString(word) {
    let reversedString = '';
    const lastIndex = word.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        reversedString += word[i];
    }

    return reversedString;
}

function removeAccents(word) {
    const accents = [
        /[\300-\306]/g, /[\340-\346]/g, // À-Æ, à-æ
        /[\310-\313]/g, /[\350-\353]/g, // Ð-Ô, ð-ô
        /[\314-\317]/g, /[\354-\357]/g, // ×-Ý, ÷-ý
        /[\322-\330]/g, /[\362-\370]/g, // Þ-ß, þ-ÿ
        /[\321]/g, /[\361]/g            // Ñ, ñ
    ];

    const replacements = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n'];

    for (let i = 0; i < accents.length; i++) {
        word = word.replace(accents[i], replacements[i]);
    }

    return word;
}

function isPalindrome(word) { //                 g -> global (aplica a todos os caracteres)
    const treatedWord = removeAccents(word.toLowerCase().replace(/[ ,.!?:'"]/g, ''));
    return reverseString(treatedWord) === treatedWord;
}

console.log(isPalindrome('A gorda ama a droga.') ? 'É palíndromo' : 'Não é palíndromo');