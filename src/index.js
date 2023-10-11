const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const point = '.';
    const dash = '-';
    const space = ' ';
    let result = '';
    
    const codedWords = expr.split('**********');

    for (const word of codedWords) {
        const wordLetters = word.match(/.{1,10}/g);
        const decodedWord = wordLetters
            .map(letter => {
                if (letter === '**********') {
                    return space;
                }

                const trimmedLetter = letter.replace(/^0+/, '');
                
                const morseCode = trimmedLetter
                    .replace(/10/g, point)
                    .replace(/11/g, dash);

                return MORSE_TABLE[morseCode];
                
            })
            .join('');

        result += decodedWord + space;
    }

    return result.trim();
}


module.exports = {
    decode
}