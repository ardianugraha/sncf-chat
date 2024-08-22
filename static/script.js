function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    if (userInput.value.trim() === '') return;

    // Add user message to chat
    addMessageToChat('user', userInput.value);

    // Send message to backend (you'll need to implement this)
    fetchResponse(userInput.value)
        .then(response => {
            // Add bot response to chat
            addMessageToChat('bot', response);
        })
        .catch(error => {
            console.error('Error:', error);
            addMessageToChat('bot', 'Sorry, there was an error processing your request.');
        });

    userInput.value = '';
}

function addMessageToChat(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function fetchResponse(message) {
    // This is a placeholder. You'll need to implement the actual API call to your backend.
    // For now, it just returns a mock response after a short delay.
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `This is a mock response to: "${message}". Implement your backend API to get real responses.`;
}

// Allow sending message with Enter key
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});