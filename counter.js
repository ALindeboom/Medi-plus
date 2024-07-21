const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
    const incrementCounter = () => {
        const target_number = num.getAttribute("data-target-number");
        const current_number = parseInt(num.innerText);

        if (current_number < target_number) {
            num.innerText = Math.floor(current_number + 5);
            setTimeout(incrementCounter, 1);
        } else {
            num.innerText = target_number;
        }

    };
    incrementCounter();
});