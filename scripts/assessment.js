const assessmentCard = document.getElementById("assessment-card");

let current = 1;

const questions = {
    1: {
        counter: "Question 1 of 3",
        question: "Where is your startup currently?",
        options: [
            "Pre-revenue chaos",
            "Found PMF, struggling to scale",
            "Growing but burning out",
            "Profitable but unstructured"
        ]
    },
    2: {
        counter: "Question 2 of 3",
        question: "Your biggest challenge right now?",
        options: [
            "Unclear strategy",
            "Execution bottlenecks",
            "Team alignment issues",
            "Investor pressure"
        ]
    },
    3: {
        counter: "Question 3 of 3",
        question: "How do you make decisions?",
        options: [
            "Gut feeling",
            "Data-driven but slow",
            "By consensus (takes forever)",
            "Clear frameworks"
        ]
    }
};


function loadQuestion() {
    let q = questions[current];

    assessmentCard.innerHTML = `
        <h2>Startup Health Check</h2>
        <p>Answer 3 questions. Get personalized recommendations on where you're stuck and what to fix first.</p>

        <div class="q-counter">${q.counter}</div>

        <div class="question">${q.question}</div>

        ${q.options
            .map(
                (op) =>
                    `<button class="option-btn" onclick="nextQuestion()">${op}</button>`
            )
            .join("")}
    `;
}


function showResult() {
    assessmentCard.innerHTML = `
        <h2>Startup Health Check</h2>
        <p>Answer 3 questions. Get personalized recommendations on where you're stuck and what to fix first.</p>

        <div class="result-box">
            <h3>Your Next Step: Design a Better Business</h3>
            <p>Your business model needs restructuring. Learn to design systems that work for you, not against you.</p>
            <p><strong>Recommended:</strong> Explore narrative-driven frameworks to embed sustainable practices.</p>
        </div>

        <div class="result-cta">
            <a href="community.html" class="btn-primary btn">Join Community</a>
            <a href="triology_page.html" class="btn-secondary btn">View Books</a>
        </div>

        <div class="start-over" onclick="restart()">Start over</div>
    `;
}

function nextQuestion() {
    if (current === 3) {
        showResult();
    } else {
        current++;
        loadQuestion();
    }
}

function restart() {
    current = 1;
    loadQuestion();
}

loadQuestion();