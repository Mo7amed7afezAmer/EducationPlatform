'use client'
import { useState } from 'react';
import styles from './page.module.css'
import CustomEditor from '@/app/components/custom-editor';

const Addquestion = (props) => {
    const [type, setType] = useState("multiple");
    const [questionNumber, setQuestionNumber] = useState("two");
    const [correctAnswer, setCorrectAnswer] = useState(null);
    // question and options
    const[question, setQuestion] = useState("<p>Add Question</p>");
    const[option1, setOption1] = useState("<p>option one</p>");
    const[option2, setOption2] = useState("<p>option two</p>");
    const[option3, setOption3] = useState("<p>option three</p>");
    const[option4, setOption4] = useState("<p>option four</p>");
    // تجميعات
    const years = Array.from({ length: 5 }, (_, i) => 2020 + i);

    return (
       <div className={`${styles.addQuestion} container`}>
             <form>
                <h2>Add a New Question</h2>
                <div className={`w-100`}>
                    <div className={`${styles.question} mb-3`}>
                        <CustomEditor editorData={ question } />
                    </div>
                    <div className={`${ styles.questionType} mb-3`}>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="" disabled>Question Type</option>
                            <option value="text">Short Answer</option>
                            <option value="multiple">Multiple Choice</option>
                        </select>
                    </div>
                    {type === "multiple" &&
                    <div className={`${ styles.questionType} mb-3`}>
                        <select
                            value={questionNumber}
                            onChange={(e) => setQuestionNumber(e.target.value)}
                        >
                            <option value="" disabled>Question Numbers</option>
                            <option value="two">2</option>
                            <option value="four">4</option>
                        </select>
                    </div>
                    }
                    {questionNumber === "two" &&
                    <>
                        <div className={`${ styles.chooseBox } row mb-3`}>
                            <div className={`${ styles.choose } col-10`}>
                                <CustomEditor editorData={ option1 } />
                            </div>
                            <div className={`${ styles.correctAnswer } col-2`}>
                                <label for="correctAnswer">Correct Answer</label>
                                <input
                                    id="correctAnswer"
                                    type="checkbox"
                                    value={option1}
                                    checked={correctAnswer === option1}
                                    onChange={(e) => setCorrectAnswer(e.target.value) }
                                />
                            </div>
                        </div>
                        <div className={`${ styles.chooseBox } row mb-3`}>
                            <div className={`${ styles.choose } col-10`}>
                                <CustomEditor editorData={ option2 } />
                            </div>
                            <div className={`${ styles.correctAnswer } col-2`}>
                                <label for="correctAnswer">Correct Answer</label>
                                <input
                                    id="correctAnswer"
                                    type="checkbox"
                                    value={option2}
                                    checked={correctAnswer === option2}
                                    onChange={(e) => setCorrectAnswer(e.target.value) }
                                />
                            </div>
                        </div>
                    </>
                    }
                    {questionNumber === "four" &&
                    <>
                        <div className={`${ styles.chooseBox } row mb-3`}>
                            <div className={`${ styles.choose } col-10`}>
                                <CustomEditor editorData={ option1 } />
                            </div>
                            <div className={`${ styles.correctAnswer } col-2`}>
                                <label for="correctAnswer">Correct Answer</label>
                                <input
                                    id="correctAnswer"
                                    type="checkbox"
                                    value={option1}
                                    checked={correctAnswer === option1}
                                    onChange={(e) => setCorrectAnswer(e.target.value) }
                                />
                            </div>
                        </div>
                        <div className={`${ styles.chooseBox } row mb-3`}>
                            <div className={`${ styles.choose } col-10`}>
                                <CustomEditor editorData={ option2 } />
                            </div>
                            <div className={`${ styles.correctAnswer } col-2`}>
                                <label for="correctAnswer">Correct Answer</label>
                                <input
                                    id="correctAnswer"
                                    type="checkbox"
                                    value={option2}
                                    checked={correctAnswer === option2}
                                    onChange={(e) => setCorrectAnswer(e.target.value) }
                                />
                            </div>
                        </div>
                        <div className={`${ styles.chooseBox } row mb-3`}>
                            <div className={`${ styles.choose } col-10`}>
                                <CustomEditor editorData={ option3 } />
                            </div>
                            <div className={`${ styles.correctAnswer } col-2`}>
                                <label for="correctAnswer">Correct Answer</label>
                                <input
                                    id="correctAnswer"
                                    type="checkbox"
                                    value={option3}
                                    checked={correctAnswer === option3}
                                    onChange={(e) => setCorrectAnswer(e.target.value) }
                                />
                            </div>
                        </div>
                        <div className={`${ styles.chooseBox } row mb-3`}>
                            <div className={`${ styles.choose } col-10`}>
                                <CustomEditor editorData={ option4 } />
                            </div>
                            <div className={`${ styles.correctAnswer } col-2`}>
                                <label for="correctAnswer">Correct Answer</label>
                                <input
                                    id="correctAnswer"
                                    type="checkbox"
                                    value={option4}
                                    checked={correctAnswer === option4}
                                    onChange={(e) => setCorrectAnswer(e.target.value) }
                                />
                            </div>
                        </div>
                    </>
                    }
                    {<div className={`${ styles.questionType} col-12 mb-3`}>
                        <select
                            value={"questionNumber"}
                        >
                            <option value="" disabled>collection exams</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    }
                    
                </div>
                
                
                <button type="submit">Submit Question</button>
            </form>
       </div>
    );
};

export default Addquestion;
