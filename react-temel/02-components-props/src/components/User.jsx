import PropTypes from 'prop-types'

function User({name, surname, age, isLoggedIn, friends, address}) {

if (!isLoggedIn) {
  return <h1>Not logged in.</h1>;
}

  return  (
    <>
      <h1>{`Welcome ${name} ${surname}, ${age}, ${address.town} ${address.zip}`}</h1>
      {friends && friends.map((friend) => <div key={friend.id}>{friend.name}</div>)
      }
    </>
  )
}

//* propTypes and isRequired examples
User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]),
  isLoggedIn: PropTypes.bool.isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape ({
    town: PropTypes.string.isRequired,
    zip: PropTypes.number,
  })
}

//* defaultProps examples
User.defaultProps = {
  name: 'No name',
  isLoggedIn: false,
}

export default User;