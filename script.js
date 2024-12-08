const bubble = document.getElementById('bubble');
const percentageDisplay = document.getElementById('percentage');
const statusDisplay = document.getElementById('status');
const chargeButton = document.getElementById('chargeButton');
const phoneContainer = document.getElementById('phoneContainer');
let batteryPercentage = 0; 
let chargingInterval;

function createBubbles() {
    const smallBubblesContainer = document.querySelector('.small-bubbles');
    for (let i = 0; i < 10; i++) { 
        const smallBubble = document.createElement('div');
        smallBubble.classList.add('small-bubble');
        smallBubble.style.animationDelay = `${i * 0.5}s`; 
        smallBubble.style.animationDuration = `${Math.random() * 4 + 4}s`; 
        smallBubble.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg) translateY(-${Math.random() * 100 + 150}px)`;
        smallBubblesContainer.appendChild(smallBubble);
    }
}

function updateChargingAnimation() {
    percentageDisplay.innerText = `${batteryPercentage.toFixed(2)}%`; 
    if (batteryPercentage < 20) {
        bubble.classList.remove('blue');
        bubble.classList.add('brown');
        document.querySelectorAll('.small-bubble').forEach(bubble => {
            bubble.style.background = 'linear-gradient(145deg, #7f4d24, #c86f36)'; 
        });
    } else {
        bubble.classList.remove('brown');
        bubble.classList.add('blue');
        document.querySelectorAll('.small-bubble').forEach(bubble => {
            bubble.style.background = 'linear-gradient(145deg, #006eb8, #00b7ff)'; 
        });
    }

    if (batteryPercentage > 50) {
        bubble.classList.add('glow');
    } else {
        bubble.classList.remove('glow');
    }

    if (batteryPercentage < 100) {
        batteryPercentage += Math.random() * 1; 
    } else {
        clearInterval(chargingInterval);
        percentageDisplay.innerText = "100.00%";
        statusDisplay.innerText = "Battery Full";
        bubble.classList.remove('glow');
        document.querySelectorAll('.small-bubble').forEach(bubble => {
            bubble.style.animation = 'none'; 
        });
    }
}

chargeButton.addEventListener('click', () => {
    batteryPercentage = 0; 
    phoneContainer.style.display = 'flex'; 
    createBubbles(); 
    chargingInterval = setInterval(updateChargingAnimation, 1000); 
});
phoneContainer.style.display = 'none';
