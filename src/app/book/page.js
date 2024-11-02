import data from './data.json';
import styles from './page.module.css';

function QuestioArea (props) {
    return (
        <div className={ styles.questionArea }>
            <div className={ styles.questionInfo }> { props.questionNumber } </div>
            <div className={ styles.questionMain }>
                <div className={ styles.questionTitle }>
                    <p> { props.questionTitle } </p>
                </div>
                <ul className={ styles.questionChoose }>
                    <li className={ styles.chooseOne }>
                        <p> { props.one } </p>
                    </li>
                    <li className={ styles.chooseOne }>
                        <p> { props.two } </p>
                    </li>
                    <li className={ styles.chooseOne }>
                        <p> { props.three } </p>
                    </li>
                    <li className={ styles.chooseOne }>
                        <p> { props.four } </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default function Book() {
    return (
        <div className={ styles.paper}>
            <div className={ styles.borderLeft }></div>
            <div className={ styles.partExplain }>partExplain</div>
            <div className={ styles.partQuestion }>
                {
                    data.map((el, index) => <QuestioArea key={ el.A } questionNumber={ index+1 } questionTitle={ el.question } one={ el.A } two={ el.B } three={ el.C } four={ el.D } />)
                }
            </div>
        </div>
    )
}