const colors = [
    '#FF5733', '#33FF57', '#3357FF', 
    '#F1C40F', '#E67E22', '#2ECC71', 
    '#1ABC9C', '#3498DB', '#9B59B6', 
    '#34495E', '#2C3E50'
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomizePart(selector) {
    document.querySelector(selector).style.backgroundColor = getRandomColor();
}

// Add event listeners for each button
document.getElementById('randomizeTopButton').addEventListener('click', () => randomizePart('.top'));
document.getElementById('randomizeLeftSleeveButton').addEventListener('click', () => randomizePart('.sleeve.left'));
document.getElementById('randomizeRightSleeveButton').addEventListener('click', () => randomizePart('.sleeve.right'));
document.getElementById('randomizeBottomButton').addEventListener('click', () => randomizePart('.bottom'));
