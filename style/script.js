// script.js

function startListening() {

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech recognition is not supported in this browser.");
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.start();

    document.getElementById("question").innerHTML =
        "<b>Listening...</b> 🎤";

    recognition.onresult = function (event) {

        const question = event.results[0][0].transcript;

        document.getElementById("question").innerHTML =
            "<b>You:</b> " + question;

        const answer = getAnswer(question);

        document.getElementById("answer").innerHTML =
            "<b>Assistant:</b> " + answer;

        speak(answer);
    };

    recognition.onerror = function (event) {

        console.log("Speech recognition error:", event.error);

        document.getElementById("answer").innerHTML =
            "<b>Assistant:</b> Sorry, I couldn't understand your question. Please try again.";
    };

    recognition.onend = function () {
        console.log("Voice recognition ended.");
    };
}


// Generate simple learning responses

function getAnswer(question) {

    const text = question.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! I am your Smart Learning Assistant. How can I help you?";
    }

    if (text.includes("python")) {
        return "Python is a high-level programming language widely used in artificial intelligence, data science, web development, and automation.";
    }

    if (text.includes("artificial intelligence") || text.includes("ai")) {
        return "Artificial Intelligence is the technology that enables computers to perform tasks that normally require human intelligence, such as learning, reasoning, and problem solving.";
    }

    if (text.includes("machine learning")) {
        return "Machine Learning is a branch of Artificial Intelligence that allows computers to learn patterns from data and make predictions or decisions.";
    }

    if (text.includes("data science")) {
        return "Data Science combines statistics, programming, and machine learning to analyze data and extract useful information.";
    }

    if (text.includes("what is nlp") ||
        text.includes("natural language processing")) {
        return "Natural Language Processing, or NLP, enables computers to understand, process, and generate human language.";
    }

    if (text.includes
