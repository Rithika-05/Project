const chatMessages = document.getElementById("chat-messages");

function appendMessage(content, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageElement.innerText = content;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(userInput) {
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm here to assist you!",
        "bye": "Goodbye! Have a great day!",
    };
    return responses[userInput.toLowerCase()] || "I'm sorry, I didn't understand that.";
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
    chatMessages.innerHTML = ""; // Clear all messages in the chatbox
}