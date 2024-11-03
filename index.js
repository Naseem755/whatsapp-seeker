// script.js

function extractMessages() {
    const fileInput = document.getElementById('chatFile');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const myName = "OGT"; // Replace with your name as it appears in the chat

        // Extract and filter messages
        const messages = text.split(/\r?\n/);
        const myMessages = messages.filter(msg => msg.includes(myName));

        let outputDiv = document.getElementById('output');
        outputDiv.innerHTML = ''; // Clear previous output

        if (myMessages.length) {
            myMessages.forEach(msg => {
                const messageElement = document.createElement('p');
                messageElement.textContent = msg;
                outputDiv.appendChild(messageElement);
            });
        } else {
            outputDiv.innerHTML = '<p>No messages found</p>';
        }
    };

    if (file) {
        reader.readAsText(file);
    } else {
        alert("Please select a file first.");
        let messages = document.querySelectorAll(".message-in, .message-out");
let ogtMessages = [];
messages.forEach(msg => {
    if (msg.textContent.includes("OGT:")) {
        ogtMessages.push(msg.textContent);
    }
x});
console.log(ogtMessages);

    }
}
