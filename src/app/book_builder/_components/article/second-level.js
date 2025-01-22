const SecondLevel = (props) => {
    return (
        <div className="second-level">
            <ul>
                {props.data.map((item) => <li> { item } </li>)}
            </ul>
        </div>
    )
}

export { SecondLevel };