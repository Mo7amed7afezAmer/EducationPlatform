const RowComponents = (props) => {
    return (
        <div className="row-components">
            {props.data.map((item, index) => <li key={ index }> { item } </li>)}
        </div>
    )
}

export { ArticleTitle };