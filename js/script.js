document.addEventListener('DOMContentLoaded', () => {
    const starCountLabel = document.querySelector('.star-count strong label');
    const callHistoryContainer = document.getElementById('call-history');
    const callButtons = document.querySelectorAll('.card .card-footer-button2');
    const clearHistoryButton = document.querySelector('.history-clear .clear-button');
    let callHistory = [];
    callHistoryContainer.innerHTML = ' <div class=" call-history"> <p padding-top: 20px;">No recent calls.</p> </div>';
    function renderCallHistory() {
        callHistoryContainer.innerHTML = '';
        if (callHistory.length === 0) {
            callHistoryContainer.innerHTML = ' <div class=" call-history"> <p padding-top: 20px;">No recent calls.</p> </div> ';
            return;
        }
        for (let i = callHistory.length - 1; i >= 0; i--) {
            const call_history = callHistory[i];
            const call_Item = document.createElement('div');
            call_Item.className = 'log-item'; 
            call_Item.innerHTML = `
                <div class="call-information-container call-history">
                    <div class="details">
                        <strong><p class="name">${call_history.name}</p></strong>
                        <p style="color:#5c5c5c; text-align:left; ">${call_history.number}</p>
                    </div>
                    <div class="time">
                        <p class="time">${call_history.time}</p>
                    </div>
                </div>
            `;
            callHistoryContainer.appendChild(call_Item);
        }
    }
    callButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            if (!card) return;
            const serviceName = card.querySelector('.card-header-text').textContent;
            const serviceNumber = card.querySelectorAll('.card-header-text')[1].textContent;
            let currentStars = parseInt(starCountLabel.textContent, 10);
            if (currentStars >= 20) {
                currentStars -= 20;
                starCountLabel.textContent = currentStars;
                const now = new Date();
                const timeString = now.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                });
                const newCallHistory = { name: serviceName, number: serviceNumber, time: timeString };
                callHistory.push(newCallHistory);
                renderCallHistory();
                alert('Calling '+serviceName+' '+serviceNumber);
            } else {
                alert('Not enough coins to make a call!, Minimum 20 coins required');
            }
        });
    });
    if (clearHistoryButton) {
        clearHistoryButton.addEventListener('click', () => {
            callHistory = []; 
            renderCallHistory(); 
            alert('Call history cleared.');
        });
    }
});


