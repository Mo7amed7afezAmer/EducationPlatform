import "./style.css";

// import data
import unitData from "../data/units.json";
import bookInfo from "../data/book-info.json";

// components
import { LessonTitle, ArticleTitle, Define, SecondLevel, Law, ImageComponent, Table, TableTwo, Text, Alert } from "@/app/book_builder/_components/article/index";
import { BookBarBottom } from "../_components/global";



/* ==================== */
const ArticlePaper = (props) => {
    return (
        <>
            {
                props.data.map((item, index) => mapSectionToComponent(unitData.lessons[0].articles[item], index))
            }
        </>
    )
}
const RowContainer = (props) => {
    return (
        <div className="row-container">
            {props.data.map((item, index) => (
                <div className={ `child${index}` }>
                    { mapSectionToComponent(item) }
                </div>
            ))}
        </div>
    )
}
const ColContainer = (props) => {
    return (
        <div className="col-container">
            {props.data.map((item, index) => (
                <div className={ `col${index}` }>
                    { mapSectionToComponent(item) }
                </div>
            ))}
        </div>
    )
}
const MainTable = (props) => {
    return (
        <div className="main-table">
            <div className="table-title">
                <p> { props.tableTitle } </p>
            </div>
            <table className="main-table">
                {props.data.map((item, index) => (
                    <tr className={ `row${index}` }>
                        { mapSectionToComponent(item) }
                    </tr>
                ))}
            </table>
        </div>
    )
}
const TableRow = (props) => {
    return (
        <>
            {props.data.map((item, index) => (
                <td className={ item.design }>
                    { mapSectionToComponent(item) }
                </td>
            ))}
        </>
    )
}
const TableOne = (props) => {
    return (
        <table>
            <tr>
                <td className="title-col"><p>النمو والتطور</p></td>
                <td className="title-col"><p>الاستجابة للمؤثرات</p></td>
            </tr>
            <tr>
                <td><p>تتفلبيئة المحيطة به مع البيئة المحيطة بها مع .</p></td>
                <td><p>تتفلبيئة المحيطة به مع البيئة المحيطة بها مع .</p></td>
            </tr>
        </table>
    )
}
// const TableOne = (props) => {
//     return (
//         <table>
//             <tr>
//                 <td className="title-col"><p>النمو والتطور</p></td>
//                 <td className="title-col"><p>الاستجابة للمؤثرات</p></td>
//             </tr>
//             <tr>
//                 <td><p>تنمو وتتغير مع مرور الوقت وتتغير مع مرور الوقت وتتغير مع مرور الوقت وتتغير مع مرور الوقت وتتغير مع مرور الوقت وتتغير مع مرور الوقت وتتغير مع مرور الوقت وتتغير مع مرور الوقت وتتغير مع مرور الوقت وتتغير مع مرور الوقت.</p></td>
//                 <td><p>تتفاعل مع البيئة المحيطة بها  مع البيئة المحيطة بها  مع البيئة المحيطة بها  مع البيئة المحيطة بها  مع البيئة المحيطة بها  مع البيئة المحيطة بها  مع البيئة المحيطة بها  مع البيئة المحيطة بها .</p></td>
//             </tr>
//         </table>
//     )
// }


/* ========= methods */
function mapSectionToComponent(item, index) {
    switch (item.type) {
        case "articleTitle": {
            return <ArticleTitle key={ index } data={ item.data } />;
        }
        case "define": {
            return <Define key={ index } data={ item.data } />;
        }
        case "law": {
            return <Law key={ index } data={ item.data } />;
        }
        case "image": {
            return <ImageComponent key={ index } data={ item.data } />;
        }
        case "secondLevel": {
            return <SecondLevel key={ index } data={ item.data } />;
        }
        case "rowContainer": {
            return <RowContainer key={ index } data={ item.data } />;
        }
        case "colContainer": {
            return <ColContainer key={ index } data={ item.data } />;
        }
        case "table": {
            return <Table key={ index } data={ item.data } />;
        }
        case "tableTwo": {
            return <TableTwo key={ index } data={ item.data } />;
        }
        case "tableOne": {
            return <TableOne key={ index } data={ item.data } />;
        }
        case "text": {
            return <Text key={ index } data={ item.data } />;
        }
        case "mainTable": {
            return <MainTable key={ index } data={ item.data } tableTitle={ item.tableTitle } />;
        }
        case "tableRow": {
            return <TableRow key={ index } data={ item.data } />;
        }
        case "alert": {
            return <Alert key={ index } data={ item.data } />;
        }
        default: {
            return <p key={ index }>=============mo7amed7afez</p>;
        }
    }
}

const BookBuilder = () => {
    return (
        <div className="container-paper unit1" dir="rtl">
            <div className="paper d-none" style={{marginBottom: "2mm"}}></div>
            <div className="paper unit-paper d-nonse">
                <div class="unit-title">المالمح الطبيعية لقارة إفريقيا وحضاراتها القديمة</div>
            </div>
            <div className="article-container">
                {bookInfo.map((item, index) => {
                    if (item.d[0]) {
                        return (
                            <div key={ index } className={`paper paper${index + 1} ${item.type == "articlePaper" ? "article-paper" : "unit-paper"}`}>
                                <div className="header-paper">
                                    <div className="unit-lesson d-none">
                                        <p>الوحدة</p>
                                        <span>01</span>
                                    </div>
                                    <div className="book-logo">الامتحان</div>
                                </div>
                                <ArticlePaper data={ item.d } />
                                {/* <ArticlePaper data={ [0, 1, 2, 3, 4, 5] } /> */}
                                <div className="footer-paper">
                                    <p className="techer-name">أ/ احمد فوزي</p>
                                    <p className="page-number"> { index + 1 } </p>
                                    <p className="phone">01090854321</p>
                                </div>
                            </div>
                        ) 
                    } else {
                        return (
                            <div key={ index } className={`paper paper${index + 1} ${item.type == "articlePaper" ? "article-paper" : "unit-paper"}`}>
                                <div className="header-paper">
                                    <div className="lesson-name">المالمح الطبيعية لقارة إفريقيا وحضاراتها القديم</div>
                                    <div className="unit-lesson">
                                        <p>الوحدة</p>
                                        <span>01</span>
                                    </div>
                                    <div className="book-logo">الامتحان</div>
                                </div>
                                <ArticlePaper data={ item.d } />
                                <div className="footer-paper">
                                    <p className="techer-name">أ/ احمد فوزي</p>
                                    <p className="page-number"> { index + 1 } </p>
                                    <p className="phone">01090854321</p>
                                </div>
                            </div>
                        ) 
                    }
                })}
            </div>
        </div>
    )
}

export default BookBuilder;