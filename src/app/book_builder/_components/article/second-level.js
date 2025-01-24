const SecondLevel = (props) => {
    return (
        <div className="second-level">
            <ul>
                {props.data.map((item, index) => <li key={ index }> { item } </li>)}
            </ul>
        </div>
    )
}

export { SecondLevel };