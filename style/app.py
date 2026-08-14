from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def get_answer(question):
    question = question.lower()

    if "hello" in question or "hi" in question:
        return "Hello! I am your Smart Learning Assistant. How can I help you?"

    elif "python" in question:
        return (
            "Python is a high-level programming language used in "
            "Artificial Intelligence, Data Science, Web Development, and Automation."
        )

    elif "artificial intelligence" in question or question == "ai":
        return (
            "Artificial Intelligence is a technology that enables computers "
            "to perform tasks that normally require human intelligence."
        )

    elif "machine learning" in question:
        return (
            "Machine Learning is a branch of Artificial Intelligence "
            "that allows computers to learn patterns from data and make predictions."
        )

    elif "data science" in question:
        return (
            "Data Science combines programming, statistics, and machine learning "
            "to analyze data and extract useful information."
        )

    elif "natural language processing" in question or "nlp" in question:
        return (
            "Natural Language Processing enables computers to understand, "
            "process, and generate human language."
        )

    elif "thank" in question:
        return "You're welcome! Keep learning and exploring new concepts."

    elif "bye" in question:
        return "Goodbye! Have a great learning session."

    else:
        return (
            "I can help you learn about Python, Artificial Intelligence, "
            "Machine Learning, Data Science, and Natural Language Processing."
        )


@app.route("/")
def home():
    return "Voice-Based Smart Learning Assistant is running!"


@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()

    if not data or "question" not in data:
        return jsonify({
            "error": "Please provide a question."
        }), 400

    question = data["question"]

    answer = get_answer(question)

    return jsonify({
        "question": question,
        "answer": answer
    })


if __name__ == "__main__":
    app.run(debug=True)
