document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const question = document.querySelector('.question');

    let isSwapped = false;

    function swapButtons() {
        if (isSwapped) {
            // Swap back to the initial positions
            yesBtn.style.order = 1;
            noBtn.style.order = 2;
        } else {
            // Swap positions
            yesBtn.style.order = 2;
            noBtn.style.order = 1;
        }

        isSwapped = !isSwapped;
    }

    // Swap only when hovering over the "No" button
    noBtn.addEventListener('mouseover', swapButtons);

    // Change the question when the "Yes" button is clicked
    yesBtn.addEventListener('click', function () {
        question.innerHTML = "It's a date then!";
    });
});
