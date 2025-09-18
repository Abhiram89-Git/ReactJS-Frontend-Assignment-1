import './index.css'

const ListDetails = props => {
  const {details} = props
  const {name, username, email, phone, website, address, company} = details
  const {street, suite, city, zipcode} = address

  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`

  return (
    <li className="list-item">
      <div className="avatar-container">
        <img src={avatarUrl} alt="Avatar" className="avatar" />
      </div>
      <div className="details-container">
        <p className='name'>{name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Company:</strong> {company.name}</p>
        <p><strong>Website:</strong> {website}</p>
        <p>
          <strong>Address:</strong> {street}, {suite}, {city}, {zipcode}
        </p>
      </div>
    </li>
  )
}

export default ListDetails
