const agePlayerOne = 17;
const agePlayerTwo = 17;

function isOldEnough(playerage) {
    let OldEnough = false;
    if (playerage >= 18) {
        OldEnough = true;
    }
    

    return OldEnough;
}

const playerOneIsOldEnough = isOldEnough(agePlayerOne);
const playerTwoIsOldEnough = isOldEnough(agePlayerTwo);

alert (playerOneIsOldEnough);
alert (playerTwoIsOldEnough);
