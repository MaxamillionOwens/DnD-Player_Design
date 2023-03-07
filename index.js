const rollDice = () => {
    let diceRolls = [7];
    total = 0;

        for (let i = 0; i < 7; i++) {
            diceRolls[i] = ((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1));
            total = total + diceRolls[i];
        }
    console.log(total);
}

for(let i = 0; i < 5; i++){
    rollDice();
}

