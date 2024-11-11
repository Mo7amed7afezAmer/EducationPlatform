import styles from "./index.module.css";

const BookGui = () => {

    return (
        <div dir="rtl" className={`shadow ${ styles.page }`}>
            <div className={ styles.bookArticle }>
                <div className={ styles.example }>
                    <div className={ styles.exampleQuestion }>
                        <div className={ styles.questionHint }><span>مثال</span></div>
                        <div className={ styles.questionInfo }>
                            <div>يلعب محمد بكره القدم، من يلعب بالكره؟</div>
                            <div className={ styles.choose }>
                                <div>
                                    <span>A</span>
                                    <p>محمد</p>
                                </div>
                                <div>
                                    <span>A</span>
                                    <p>محمد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.exampleLine }></div>
                    <div className={ styles.exampleAnswer }>
                        <div className={ styles.answerHint }><span>الحل</span></div>
                    </div>
                </div>
            </div>
            <div className={ styles.bookQuestion }>bookquestion</div>
        </div>
    )
}

export { BookGui };