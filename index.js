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

console.log('--> done');

module.exports = {
    getPrintNumber
}
