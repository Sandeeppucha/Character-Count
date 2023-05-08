import './index.css'

const UserInput = props => {
  const {userDetails} = props
  const {userEnteredText, enteredTextLength} = userDetails

  return (
    <li className="list-style">
      <p className="list-para">
        {userEnteredText} : {enteredTextLength}
      </p>
    </li>
  )
}

export default UserInput
