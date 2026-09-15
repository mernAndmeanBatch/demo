const Card = (props) => {
    return (
        <>
            <div>
                <h1 style={{backgroundColor: props.color}}>{props.name}</h1>
                <h1>{props.x}</h1>
            </div>
        </>
    )
}

export default Card