const chatMessages = document.getElementById("chat-messages");

function appendMessage(content, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageElement.innerText = content;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(userInput) {
    const lowercaseInput = userInput.toLowerCase();
    
    if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (/how\s+(are|r)\s+you/.test(lowercaseInput)) {
        return "I'm just a bot, but I'm here to help you with any questions!";
    } else if (lowercaseInput.includes("your name")) {
        return "I'm your friendly chatbot, here to assist!";
    } else if (lowercaseInput.includes("help")) {
        return "Sure, I can help! What would you like to know?";
    } else if (lowercaseInput.includes("joke")) {
        return "Why don't scientists trust atoms? Because they make up everything!";
    } else if (lowercaseInput.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "I'm here to help! Can you rephrase that or ask something else?";
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    appendMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    const response = botResponse(userInput);
    setTimeout(() => appendMessage(response, "bot"), 500);
}

function clearChat() {
    chatMessages.innerHTML = "";
}