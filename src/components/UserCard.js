const UserCard = (props) => {
    const { tribeMember } = props
    const { name, aliases, occupation, birthday, bio } = tribeMember
    return (
        <div className='user-card' key={name}>
            <img className='user-image'src='./images/silhouette.jpg' alt='profile-pic' height={50} width={50}></img>
            <div className='user-name'><strong>Name:</strong> {name}</div>
            <div className='user-alias'><strong>Known Aliases:</strong> {aliases}</div>
            <div className='user-age'><strong>Age:</strong> {birthday}</div>
            <div className='user-occupation'><strong>Occupation:</strong> {occupation}</div>
            <div className='user-bio'><strong>Bio:</strong> "{bio}"</div>
        </div>
    )
}

export default UserCard;