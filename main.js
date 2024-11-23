function showMsg() {
    window.open("message.html", "_blank", "width=600,height=500");
}


var message = "Welcome to the Typing Window!\nThis message will close in a moment.";
var typingMessageDiv = document.getElementById("typingMessage");
var index = 0;

function typeMessage() {
    if (index < message.length) {
        typingMessageDiv.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeMessage, 100); // Adjust typing speed here
    } else {
        setTimeout(() => window.close(), 1000); // Close the window after 3 seconds
    }
}

typeMessage();