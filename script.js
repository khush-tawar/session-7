// Define the dot patterns for each face of the dice
const dotPatterns = {
    1: '<div class="dot center"></div>',
    2: '<div class="dot top-left"></div><div class="dot bottom-right"></div>',
    3: '<div class="dot top-left"></div><div class="dot center"></div><div class="dot bottom-right"></div>',
    4: '<div class="dot top-left"></div><div class="dot top-right"></div><div class="dot bottom-left"></div><div class="dot bottom-right"></div>',
    5: '<div class="dot top-left"></div><div class="dot top-right"></div><div class="dot center"></div><div class="dot bottom-left"></div><div class="dot bottom-right"></div>',
    6: '<div class="dot top-left"></div><div class="dot top-right"></div><div class="dot center-left"></div><div class="dot center-right"></div><div class="dot bottom-left"></div><div class="dot bottom-right"></div>'
};

// Function to get final rotation for a dice value
function getFinalRotation(value) {
    // Define rotations that show each face front-facing
    const rotations = {
        1: { x: 0, y: 0, z: 0 },        // Front face (1)
        6: { x: 0, y: 180, z: 0 },      // Back face (6)
        2: { x: -90, y: 0, z: 0 },      // Top face (2)
        5: { x: 90, y: 0, z: 0 },       // Bottom face (5)
        3: { x: 0, y: -90, z: 0 },      // Right face (3)
        4: { x: 0, y: 90, z: 0 }        // Left face (4)
    };
    return rotations[value];
}

function getRandomSpins() {
    return {
        x: Math.floor(Math.random() * 5 + 3) * 360,
        y: Math.floor(Math.random() * 5 + 3) * 360,
        z: Math.floor(Math.random() * 5 + 3) * 360
    };
}

// Initialize dice when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeDice(document.getElementById('dice1'));
    initializeDice(document.getElementById('dice2'));
    initializeDice(document.getElementById('dice3'));
    initializeDice(document.getElementById('dice4'));
});

function initializeDice(diceElement) {
    const faces = diceElement.querySelectorAll('.face');
    faces.forEach((face, index) => {
        // Assign values to each face
        let faceValue;
        switch(index) {
            case 0: faceValue = 1; break; // front
            case 1: faceValue = 6; break; // back
            case 2: faceValue = 3; break; // right
            case 3: faceValue = 4; break; // left
            case 4: faceValue = 2; break; // top
            case 5: faceValue = 5; break; // bottom
        }
        face.innerHTML = dotPatterns[faceValue];
    });
}

function setupDice(diceElement, value) {
    // No need to reset the dots as they're already set up
    return;
}

function rollDice() {
    // Generate random numbers for all four dice
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;
    const dice3Value = Math.floor(Math.random() * 6) + 1;
    const dice4Value = Math.floor(Math.random() * 6) + 1;
    
    // Get random spins for animation
    const spins1 = getRandomSpins();
    const spins2 = getRandomSpins();
    const spins3 = getRandomSpins();
    const spins4 = getRandomSpins();
    
    // Get final rotations based on dice values
    const final1 = getFinalRotation(dice1Value);
    const final2 = getFinalRotation(dice2Value);
    const final3 = getFinalRotation(dice3Value);
    const final4 = getFinalRotation(dice4Value);
    
    // Update dice 1
    const dice1 = document.getElementById('dice1');
    setupDice(dice1, dice1Value);
    dice1.style.transform = `rotateX(${spins1.x + final1.x}deg) rotateY(${spins1.y + final1.y}deg) rotateZ(${spins1.z + final1.z}deg)`;

    // Update dice 2
    const dice2 = document.getElementById('dice2');
    setupDice(dice2, dice2Value);
    dice2.style.transform = `rotateX(${spins2.x + final2.x}deg) rotateY(${spins2.y + final2.y}deg) rotateZ(${spins2.z + final2.z}deg)`;

    // Update dice 3
    const dice3 = document.getElementById('dice3');
    setupDice(dice3, dice3Value);
    dice3.style.transform = `rotateX(${spins3.x + final3.x}deg) rotateY(${spins3.y + final3.y}deg) rotateZ(${spins3.z + final3.z}deg)`;

    // Update dice 4
    const dice4 = document.getElementById('dice4');
    setupDice(dice4, dice4Value);
    dice4.style.transform = `rotateX(${spins4.x + final4.x}deg) rotateY(${spins4.y + final4.y}deg) rotateZ(${spins4.z + final4.z}deg)`;
    
    // Calculate and update total after animation
    setTimeout(() => {
        const total = dice1Value + dice2Value + dice3Value + dice4Value;
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