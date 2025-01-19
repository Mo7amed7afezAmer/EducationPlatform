const questions = {
    math: {
        questions31: [
            {
                id: 1,
                questionText: "what is equation? math 11",
                option1: "one",
                option2: "two",
                option3: "three",
                option4: "four",
                correct: "thress",
                collection: [2019- 2020]
            },
            {
                id: 2,
                questionText: "what is equation? math 22",
                option1: "one",
                option2: "two",
                option3: "three",
                option4: "four",
                correct: "thress",
                collection: [2015- 2021]
            }
        ]
    },
    english: {
        questions31: [
            {
                id: 3,
                questionText: "what is equation? math 11",
                option1: "one",
                option2: "two",
                option3: "three",
                option4: "four",
                correct: "thress",
                collection: [2019- 2020]
            },
            {
                id: 4,
                questionText: "what is equation? math 22",
                option1: "one",
                option2: "two",
                option3: "three",
                option4: "four",
                correct: "thress",
                collection: [2015- 2021]
            }
        ]
    }
};


// ================================================================
// ======== crud operations [get - add - edit - delete] ===========
// ================================================================
function createQuestion(material, newQuestion) {
    questions[material]["questions31"].push(newQuestion);
    console.log(questions.math)
}


export {
    createQuestion
}