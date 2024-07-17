import './index.css'

const TravelItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data

  return (
    <li className="card-item">
      <img src={imageUrl} alt={name} className="thumbnail" />
      <h1 className="card-heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelItem
