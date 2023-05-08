import {Component} from 'react'

import {v4} from 'uuid'

import UserInput from '../UserInput'

import './index.css'

class CharacterCounter extends Component {
  state = {
    userInputList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      enteredTextLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputList = () => {
    const {userInputList} = this.state
    return userInputList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="no-inputs-image"
      />
    ) : (
      userInputList.map(eachInput => (
        <UserInput key={eachInput.id} userDetails={eachInput} />
      ))
    )
  }

  render() {
    const {userInput} = this.state

    return (
      <div className="app-container">
        <div className="left-container">
          <h1 className="characters-heading">
            Count the characters like a Boss...
          </h1>
          <ul>{this.renderUserInputList()}</ul>
        </div>
        <div className="right-container">
          <h1 className="right-characters-heading">Character Counter</h1>
          <form className="inner-container" onSubmit={this.onAddUserInput}>
            <input
              type="text"
              className="user-inputs"
              placeholder="Enter the Characters here..."
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
