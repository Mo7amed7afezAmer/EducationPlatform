const ArticlePaper = (props) => {
    return (
        <>
            {
                props.data.map((item) => props.mapSectionToComponent(item))
            }
        </>
    )
}


export { ArticlePaper };