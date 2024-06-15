import '../../css/card.css'
const Card = (props) => {
    return (
        <div className="card">
            <img className={props.type} src={props.imageUrl} alt="Service" />
            <h2>{props.service}</h2>
        </div>
    )
}
export default Card