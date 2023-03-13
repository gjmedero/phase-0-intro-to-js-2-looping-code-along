// Code your solutions in this file
function writeCards(gifts, eventName) {
    const messages = [];
    for (let index = 0; index < gifts.length; index++) {
        messages[index] = `Thank you, ${gifts[index]}, for the wonderful surprise gift!`
    }

    return messages;
}
function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}