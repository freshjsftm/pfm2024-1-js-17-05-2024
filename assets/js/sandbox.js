'use strict';

// .      будь який один символ
//   \.   крапка
// [abc]  будь який один символ з перелічених
// [0-9]  будь яка цифра
// [^a-z] будь який один символ окрім перелічених
// {n}    знайди н разів попередню конструкцію
// {n,}   знайди від н разів до нескінченності попередню конструкцію
// {n,m}  знайди від н до м разів включно попередню конструкцію
// ?      знайди від 0 до 1 разів включно попередню конструкцію
// +      знайди від 1 до нескінченності разів включно попередню конструкцію   {1,}
// *      знайди від 0 до нескінченності разів включно попередню конструкцію   {0,}
// \d     будь яка цифра  [0-9]
// \D     будь який символ окрім цифри  [^0-9]
// \w     [0-9A-Za-z_]
// \W     [^0-9A-Za-z_]
// \s     [ ]
// \S     [^ ]
// \b     ескейп послідовність обмеження слова
// \b +\b знаходить пробіли між словами
// |      OR
// ()     group
// -------------
// $&     повністю весь шаблон

const str = `Yest78erday, all my 123troubles 9999 seemed so far away.
Now it looks as though they're here to stay.
Oh, I believe in yesterday.
Suddenly,
I'm not half the man I used to be,
There's a shadow hanging over me,
Oh, yesterday came suddenly.
Why she had to go
I don't know she wouldn't say.
I said something wrong,
Now I long for yesterday.
Yesterday, love was such an easy game to play.
Now I need a place to hide away.
Oh, I believe in yesterday.
Why'd she had to go
I don't know she wouldn't say.
I said something wrong,
Now I long for yesterday.
Yesterday, love 45was such an ea78sy game to play.`;

const regex1 = new RegExp('^[A-Z].*\\.$', 'g');
const regex2 = /\b[A-Z][a-z]{12}\b/g;

// console.log(regex2.test(str));

// console.dir(regex1);
// console.dir(regex2);


const regexSearch2 = /\b(?:\d+)([a-z]+)\b/gi;
const newStr3 = str.replace(regexSearch2, '$2$1');
// console.log(newStr3);



const regexSearch = /\b[A-Z]{7}\b/gi;
const newReplace = '@@@@@';

const newStr1 = str.replace(regexSearch, newReplace);
// console.log(newStr1);

const newStr2 = str.replace(regexSearch, '@$&@');
// console.log(newStr2);

const separator = /[,.!]?\s/;
const arrWord = str.split(separator);
// console.log(arrWord);

const regex4Letter = /\b[A-Z]{7}\b/gi;
const arrWord4Letter = str.match(regex4Letter);
// console.log(arrWord4Letter);
const arrWord4LetterIterator = str.matchAll(regex4Letter);
// console.log(...arrWord4LetterIterator);


