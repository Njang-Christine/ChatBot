/*document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input');
    const sendButton = document.querySelector('.send');
    const bodyContainer = document.querySelector('.body');

    const predefinedResponses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "what is your name": "I am SpartanGPT, your virtual assistant.",
        "bye": "Goodbye! Have a great day!"
    };

    sendButton.addEventListener('click', () => {
        const userInput = inputField.value.trim().toLowerCase();
        if (userInput) {
            displayMessage(userInput, 'user');
            const botResponse = predefinedResponses[userInput] || "I'm sorry, I don't understand that.";
            displayMessage(botResponse, 'bot');
            inputField.value = '';
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender);
        messageElement.textContent = message;
        bodyContainer.appendChild(messageElement);
        bodyContainer.scrollTop = bodyContainer.scrollHeight;
    }
});*/


/*document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input');
    const sendButton = document.querySelector('.send');
    const bodyContainer = document.querySelector('.body');

    const predefinedResponses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "what is your name": "I am SpartanGPT, your virtual assistant.",
        "bye": "Goodbye! Have a great day!"
    };

    sendButton.addEventListener('click', () => {
        const userInput = inputField.value.trim().toLowerCase();
        if (userInput) {
            displayMessage(userInput, 'user');
            const botResponse = predefinedResponses[userInput] || "I'm sorry, I don't understand that.";
            displayMessage(botResponse, 'bot');
            inputField.value = '';
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender);
        messageElement.textContent = message;
        bodyContainer.appendChild(messageElement);

        // Add vertical spacing
        const spacingElement = document.createElement('div');
        spacingElement.style.height = '20px';
        bodyContainer.appendChild(spacingElement);

        bodyContainer.scrollTop = bodyContainer.scrollHeight;
    }
});*/


// document.addEventListener('DOMContentLoaded', () => {
//     const inputField = document.querySelector('.input');
//     const sendButton = document.querySelector('.send');
//     const bodyContainer = document.querySelector('.body');

//     const predefinedResponses = {
//         "hello": "Hi there! How can I help you today?",
//         "how are you": "I'm just a bot, but I'm doing great! How about you?",
//         "what is your name": "I am SpartanGPT, your virtual assistant.",
//         "bye": "Goodbye! Have a great day!"
//     };

//     sendButton.addEventListener('click', () => {
//         const userInput = inputField.value.trim().toLowerCase();
//         if (userInput) {
//             displayMessage(userInput, 'user');
//             const botResponse = predefinedResponses[userInput] || "I'm sorry, I don't understand that.";
//             displayMessage(botResponse, 'bot');
//             inputField.value = '';
//         }
//     });

//     function displayMessage(message, sender) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add(sender);
//         messageElement.textContent = message;
//         bodyContainer.appendChild(messageElement);

//         // Add vertical spacing
//         const spacingElement = document.createElement('div');
//         spacingElement.style.height = '20px';
//         bodyContainer.appendChild(spacingElement);

//         bodyContainer.scrollTop = bodyContainer.scrollHeight;
//     }
// });





// document.addEventListener('DOMContentLoaded', () => {
//     const inputField = document.querySelector('.input');
//     const sendButton = document.querySelector('.send');
//     const bodyContainer = document.querySelector('.body');

//     sendButton.addEventListener('click', () => {
//         const userInput = inputField.value.trim().toLowerCase();
//         if (userInput) {
//             displayMessage(userInput, 'user');
//             const botResponse = getBotResponse(userInput);
//             displayMessage(botResponse, 'bot');
//             inputField.value = '';
//         }
//     });

//     function getBotResponse(userInput) {
//         if (userInput === "hello") {
//             return "Hi there! How can I help you today?";
//         } else if (userInput === "how are you") {
//             return "I'm just a bot, but I'm doing great! How about you?";
//         } else if (userInput === "what is your name") {
//             return "I am SpartanGPT, your virtual assistant.";
//         } else if (userInput === "bye") {
//             return "Goodbye! Have a great day!";
//         } else {
//             return "I'm sorry, I don't understand that.";
//         }
//     }

//     function displayMessage(message, sender) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add(sender);
//         messageElement.textContent = message;
//         bodyContainer.appendChild(messageElement);

//         // Add vertical spacing
//         const spacingElement = document.createElement('div');
//         spacingElement.style.height = '20px';
//         bodyContainer.appendChild(spacingElement);

//         bodyContainer.scrollTop = bodyContainer.scrollHeight;
//     }
// });




// document.addEventListener('DOMContentLoaded', () => {
//     const inputField = document.querySelector('.input');
//     const sendButton = document.querySelector('.send');
//     const bodyContainer = document.querySelector('.body');

//     sendButton.addEventListener('click', () => {
//         const userInput = inputField.value.trim().toLowerCase();
//         if (userInput) {
//             displayMessage(userInput, 'user');
//             const botResponse = getBotResponse(userInput);
//             displayMessage(botResponse, 'bot');
//             inputField.value = '';
//         }
//     });

//     function getBotResponse(userInput) {
//         if (userInput === "hello") {
//             return "Hi there! How can I help you today?";
//         } else if (userInput === "how are you") {
//             return "I'm just a bot, but I'm doing great! How about you?";
//         } else if (userInput === "what is your name") {
//             return "I am SpartanGPT, your virtual assistant.";
//         } else if (userInput === "bye") {
//             return "Goodbye! Have a great day!";
//         } else {
//             return "I'm sorry, I don't understand that.";
//         }
//     }

//     function displayMessage(message, sender) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add(sender);
//         messageElement.textContent = message;
//         bodyContainer.appendChild(messageElement);

//         // Add vertical spacing
//         const spacingElement = document.createElement('div');
//         spacingElement.classList.add('spacing');
//         bodyContainer.appendChild(spacingElement);

//         bodyContainer.scrollTop = bodyContainer.scrollHeight;
//     }
// });




document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.send');
    const inputField = document.querySelector('.input');
    const chatBody = document.querySelector('.body');

    // Define some predefined bot responses
    const botResponses = [
        "Hello, Welcome to SpartanGPT?",
        "Have you eaten today",
        "Who is Mr Gita",
        "I'm SpartanGPT, I'll try to help as much as I can!"
    ];

    // Function to generate a bot response
    function getBotResponse() {
        const randomIndex = Math.floor(Math.random() * botResponses.length);
        return botResponses[randomIndex];
    }

    // Function to create a new message element
    function createMessageElement(content, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender);
        messageElement.textContent = content;
        return messageElement;
    }

    // Send the message when the send button is clicked
    sendButton.addEventListener('click', function() {
        const userMessage = inputField.value.trim();

        if (userMessage) {
            // Display the user's message
            const userMessageElement = createMessageElement(userMessage, 'user');
            chatBody.appendChild(userMessageElement);
            
            // Clear the input field
            inputField.value = '';
            
            // Generate the bot's response and display it
            const botMessage = getBotResponse();
            const botMessageElement = createMessageElement(botMessage, 'bot');
            chatBody.appendChild(botMessageElement);
            
            // Scroll to the bottom of the chat
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });

    // Optionally, handle pressing "Enter" to send the message
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
