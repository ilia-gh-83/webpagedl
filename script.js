function showStep2(option) {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    if (option === 'upload') {
        document.getElementById('uploadInput').style.display = 'block';
    } else if (option === 'insert') {
        document.getElementById('insertInput').style.display = 'block';
    }
}

function showStep3() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function goBack() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
}

function editCode() {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('loadingOverlay').style.display = 'block';
    
    // Simulate editing code
    setTimeout(function() {
        // After editing code
        document.getElementById('loadingOverlay').style.display = 'none';
        document.getElementById('step4').style.display = 'block';

        // Display alert if no delivery method selected
        if (!document.getElementById('discordHook').checked && !document.getElementById('telegramBot').checked) {
            alert('Please select at least one delivery method.');
        }
    }, 2000); // Simulating loading time
}

function receiveCode() {
    var receiveMethod = document.querySelector('input[name="receiveMethod"]:checked').value;
    if (receiveMethod === 'download') {
        // Simulate downloading HTML
        alert('Downloading HTML...');
    } else if (receiveMethod === 'copy') {
        // Simulate copying HTML code to clipboard
        alert('Copying HTML code to clipboard...');
    }
}

// Simulated server-side logic for uploading file
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('htmlFile', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('codeInput').value = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Simulated server-side logic for sending data to Discord webhook
function sendToDiscord(message) {
    // Simulate sending data to Discord webhook
    console.log('Sending to Discord:', message);
}

// Simulated server-side logic for sending data to Telegram bot
function sendToTelegram(message) {
    // Simulate sending data to Telegram bot
    console.log('Sending to Telegram:', message);
}