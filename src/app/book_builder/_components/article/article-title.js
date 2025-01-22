const ArticleTitle = (props) => {
    return (
        <div className="article-title">
            <div className="order"> { props.data[0] } </div>
            <div className="title"> { props.data[1] } </div>
        </div>
    )
}

export { ArticleTitle };