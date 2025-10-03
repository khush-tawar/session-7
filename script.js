function rollDice() {
    // Generate random numbers for both dice
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;
    
    // Update the dice display
    document.getElementById('dice1').textContent = dice1Value;
    document.getElementById('dice2').textContent = dice2Value;
    
    // Calculate and update total
    const total = dice1Value + dice2Value;
    document.getElementById('total').textContent = `Total: ${total}`;
}