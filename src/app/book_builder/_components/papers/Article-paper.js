const ArticlePaper = (props) => {
    return (
        <div key={ index } className={`paper ${item.type == "articlePaper" ? "article-paper" : "unit-paper"}`}>
            <LessonTitle lessonTitle={ unitData.lessons[item.lessonNumber].lessonName } />
            <ArticlePaper data={ item.d } />
            {/* <ArticlePaper data={ [0, 1, 2, 3, 4, 5] } /> */}
            <BookBarBottom paperNumber={ index } />
        </div>
    )
}


export { ArticlePaper };