
const ComicsCards = (props) => {
    return (
        <div className="prod-card">
            <img src={props.thumb} />
            <h3>{props.title}</h3>
        </div>
    )
}

export default ComicsCards