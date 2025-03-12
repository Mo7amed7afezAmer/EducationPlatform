import i from "../../data/images/u1.png"


console.log(i)

const ImageComponent = (props) => {
    return (
        <img
            src={i.src}
            width="100%"
            height="100%"
            alt="Picture of the author"
        />
    )
}

export { ImageComponent };
