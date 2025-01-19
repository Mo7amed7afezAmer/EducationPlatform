import styles from "./page.module.css";
import "./design.css";

// import data
import data from "./data.json";


// template components
const UnitTitle = (props) => {
    return (
        <div className="unit-title">
            { props.unitTitle }
        </div>
    )
}
/* ==================== */
const LessonTitle = (props) => {
    return (
        <div className="lesson-title">
            { props.lessonTitle }
        </div>
    )
}
/* ==================== */
const MainTitle = (props) => {
    return (
        <div className="main-title">
            { props.mainTitle }
        </div>
    )
}
/* ==================== */
const Define = (props) => {
    return (
        <div className="define">
            <p><span> { props.define[0] } </span> { props.define[1] } </p>
        </div>
    )
}
/* ==================== */
const SecondLevel = (props) => {
    return (
        <div className="second-level">
            secondLevel
        </div>
    )
}
/* ==================== */


/* ========= methods */
function mapArticlesToComponent(item) {
    switch (item.type) {
      case "title": {
        return "<title />";
      }
      case "define": {
        return "<define />";
      }
      case "secondLevel": {
        return "<secondLevel />";
      }
      default: {
        return "=============mo7amed7afez";
      }
    }
  }

  console.log(data)

const BookBuilder = () => {
    return (
        <div className="container-paper" dir="rtl">
            <div className="paper unit-paper">
                <div class="unit-title">المالمح الطبيعية لقارة إفريقيا وحضاراتها القديمة</div>
            </div>
            <div className="paper">
                <LessonTitle lessonTitle={ data.lessons[0].lessonName } />
                <LessonTitle lessonTitle={ data.lessons[0].lessonName } />
                <LessonTitle lessonTitle={ data.lessons[0].lessonName } />
                <LessonTitle lessonTitle={ data.lessons[0].lessonName } />
                <LessonTitle lessonTitle={ data.lessons[0].lessonName } />
                
            </div>
        </div>
    )
}

export default BookBuilder;