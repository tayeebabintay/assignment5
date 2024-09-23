// Navbar transperant scroll

window.onscroll = function () {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    }
};



// donate card function


function updateDonationBalance(cardId, donationAmount) {
    if (!Number.isInteger(donationAmount) || donationAmount <= 0) {
        alert("Invalid donation amount");
        return;
    }


    var cardBalanceElement = document.getElementById(cardId).querySelector('.stat-value');
    var currentCardBalance = parseFloat(cardBalanceElement.textContent) || 0;


    currentCardBalance += donationAmount;
    cardBalanceElement.textContent = currentCardBalance.toFixed(2) + ' BDT';


    var mainBalanceElement = document.querySelector('.navbar .stat-value');
    var currentMainBalance = parseFloat(mainBalanceElement.textContent) || 0;


    currentMainBalance += donationAmount;
    mainBalanceElement.textContent = currentMainBalance.toFixed(2) + ' BDT';
}


var buttons = document.getElementsByClassName('btn-primary');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (function (index) {
        return function () {
            var input = this.closest('.card-body').querySelector('input[type="number"]');
            var donationAmount = parseFloat(input.value) || 0;
            var cardId = 'card-' + (index + 1);


            // functon call
            updateDonationBalance(cardId, donationAmount);
        };
    })(i));
}



// history page js




// script.js

// Add event listeners to each FAQ question
document.querySelectorAll('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
        var answer = this.nextElementSibling; // Get the corresponding answer

        // Toggle the display of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            // Hide all answers first
            document.querySelectorAll('.faq-answer').forEach(function (ans) {
                ans.style.display = 'none';
            });
            // Show the clicked answer
            answer.style.display = 'block';
        }
    });
});
