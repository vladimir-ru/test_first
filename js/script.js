let num = 50;

if (num < 49) {
    console.log('Smaller');
} else if (num > 100) {
    console.log('Bigger');
} else {
    console.log('Good!');
};

(num == 150) ? console.log('Good!') : console.log('Bad!'); 

switch (num) {
    case num < 49:
        console.log('Smaller');
        break;
    case num > 100:
        console.log('Bigger');
        break;
    case 50:
        console.log('Good!');
        break;
    default:
        console.log('Somthing work bedli!');
        break;
} ;

let pr = 0;
