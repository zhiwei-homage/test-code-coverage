const getPrintNumber = (number) => {
    let numberString = 'Invalid';
    switch (number) {
        case 1:
            numberString = 'One';
            break;
        case 2:
            numberString = 'Two';
            break;
        case 3:
            numberString = 'Three';
            break;
        case 4:
            numberString = 'Four';
            break;
        case 5:
            numberString = 'Five';
            break;
        case 6:
            numberString = 'Six';
            break;
        case 7:
            numberString = 'Seven';
            break;
        case 8:
            numberString = 'Eight';
            break;
        case 9:
            numberString = 'Nine';
            break;
    }
    console.log(`Number ${number} should be printed as ${numberString}`);

    return numberString;
}

const getNumber = (numberString) => {
    let number = NaN;
    switch (numberString) {
        case 'One':
            number = 1;
            break;
        case 'Two':
            number = 2;
            break;
        case 'Three':
            number = 3;
            break;
    }
    console.log(`Number ${number} should be taken as ${number}`);

    return number;
}

const getRandomNumber = () => {
    let number = Math.random();
    return number;
}

const getCurrentTime = () => {
    let number = new Date().getTime();
    return number;
}

const getCurrentDate = () => {
    let number = new Date().getDate();
    return number;
}

const getCurrentMonth = () => {
    let number = new Date().getMonth();
    return number;
}

console.log('--> done');

module.exports = {
    getPrintNumber,
    getNumber,
    getRandomNumber,
    getCurrentTime,
    getCurrentDate,
    getCurrentMonth,
}
