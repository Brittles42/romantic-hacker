document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const adviceDisplay = document.getElementById('advice');

    const loveAdvice = [
        "Love yourself first and everything else falls into line.",
        "The best love story is when you fall in love with the most unexpected person at the most unexpected time.",
        "Keep coding and love will find its way to your repository.",
        "Your perfect match is just one commit away.",
        "Date like an AI—keep learning, avoid bias, and don't fall for bots.",
        "Love is like a good algorithm - it works in mysterious ways.",
        "Sometimes the best relationships begin with 'Hello World'.",
        "Your heart knows the right syntax for love.",
    ];

    // Show initial message when page loads
    adviceDisplay.textContent = "Click the button above to spin for romantic tech advice! 💝";

    // Create a shuffled copy of the advice array
    let currentAdviceSet = [];
    
    function shuffleAdvice() {
        currentAdviceSet = [...loveAdvice];
        for (let i = currentAdviceSet.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentAdviceSet[i], currentAdviceSet[j]] = [currentAdviceSet[j], currentAdviceSet[i]];
        }
    }

    // Initialize the shuffled set
    shuffleAdvice();

    let canSpin = true;
    let currentRotation = 0;

    spinButton.addEventListener('click', () => {
        if (!canSpin) return;
        
        canSpin = false;
        spinButton.disabled = true;
        
        // Random rotation between 5 and 10 full spins (1800-3600 degrees)
        const extraSpins = Math.floor(Math.random() * 5 + 5) * 360;
        const finalRotation = currentRotation + extraSpins;
        
        wheel.style.transform = `rotate(${finalRotation}deg)`;
        currentRotation = finalRotation;

        // Get next advice from shuffled set
        const advice = currentAdviceSet.pop();
        
        // If we've used all advice, reshuffle
        if (currentAdviceSet.length === 0) {
            shuffleAdvice();
        }
        
        // Show advice after wheel stops spinning
        setTimeout(() => {
            adviceDisplay.textContent = advice;
            adviceDisplay.style.opacity = '0';
            setTimeout(() => {
                adviceDisplay.style.opacity = '1';
            }, 100);
            canSpin = true;
            spinButton.disabled = false;
        }, 4000);
    });
});
