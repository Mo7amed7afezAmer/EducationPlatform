import "./design.css";

// import data
import unitData from "./data/units.json";
import bookInfo from "./data/book-info.json";

// components
import { LessonTitle, ArticleTitle, Define, SecondLevel, Law } from "@/app/book_builder/_components/article/index";
import { BookBarBottom } from "./_components/global";

/* ========= methods */
function mapSectionToComponent(item) {
    switch (item.type) {
        case "articleTitle": {
            return <ArticleTitle data={ item.data } />;
        }
        case "define": {
            return <Define data={ item.data } />;
        }
        case "law": {
            return <Law data={ item.data } />;
        }
        case "secondLevel": {
            return <SecondLevel data={ item.data } />;
        }
        default: {
            return <p>"=============mo7amed7afez"</p>;
        }
    }
}

/* ==================== */
const ArticlePaper = (props) => {
    return (
        <>
            {
                props.data.map((item) => mapSectionToComponent(unitData.lessons[0].articles[item]))
            }
        </>
    )
}



const BookBuilder = () => {
    return (
        <div className="container-paper" dir="rtl">
            <div className="paper unit-paper">
                <div class="unit-title">المالمح الطبيعية لقارة إفريقيا وحضاراتها القديمة</div>
            </div>
            {bookInfo.map((item, index) => {
                if (item.d[0]) {
                    return (
                        <div className={`paper ${item.type == "articlePaper" ? "article-paper" : "unit-paper"}`}>
                            <ArticlePaper data={ item.d } />
                            {/* <ArticlePaper data={ [0, 1, 2, 3, 4, 5] } /> */}
                            <BookBarBottom paperNumber={ index } />
                        </div>
                    ) 
                } else {
                    return (
                        <div className={`paper ${item.type == "articlePaper" ? "article-paper" : "unit-paper"}`}>
                            <LessonTitle lessonTitle={ unitData.lessons[item.lessonNumber].lessonName } />
                            <ArticlePaper data={ item.d } />
                            {/* <ArticlePaper data={ [0, 1, 2, 3, 4, 5] } /> */}
                            <BookBarBottom paperNumber={ index } />
                        </div>
                    ) 
                }
            })}
        </div>
    )
}

export default BookBuilder;