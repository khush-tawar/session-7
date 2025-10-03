function getRandomRotation() {
    return {
        x: Math.floor(Math.random() * 360),
        y: Math.floor(Math.random() * 360),
        z: Math.floor(Math.random() * 360)
    };
}

function rollDice() {
    // Generate random numbers for both dice
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;
    
    // Get random rotations for 3D effect
    const rotation1 = getRandomRotation();
    const rotation2 = getRandomRotation();
    
    // Update dice 1
    const dice1 = document.getElementById('dice1');
    dice1.style.transform = `rotateX(${rotation1.x}deg) rotateY(${rotation1.y}deg) rotateZ(${rotation1.z}deg)`;
    setTimeout(() => {
        dice1.querySelector('.dice-face').textContent = dice1Value;
    }, 750);

    // Update dice 2
    const dice2 = document.getElementById('dice2');
    dice2.style.transform = `rotateX(${rotation2.x}deg) rotateY(${rotation2.y}deg) rotateZ(${rotation2.z}deg)`;
    setTimeout(() => {
        dice2.querySelector('.dice-face').textContent = dice2Value;
    }, 750);
    
    // Calculate and update total after animation
    setTimeout(() => {
        const total = dice1Value + dice2Value;
        document.getElementById('total').textContent = `Total: ${total}`;
    }, 1500);

    // Disable button during animation
    const button = document.querySelector('button');
    button.disabled = true;
    button.style.opacity = '0.5';
    setTimeout(() => {
        button.disabled = false;
        button.style.opacity = '1';
    }, 1500);
}