const BookBarBottom = (props) => {
    return (
        <div className="bar-bottom">
            <ul>
                <li>أ/ أحمد محمود</li>
                <li><span> { props.paperNumber } </span></li>
                <li>نبراس في اللغة العربية</li>
            </ul>
        </div>
    )
}

export { BookBarBottom };