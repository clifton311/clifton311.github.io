import React from 'react';

class Contact extends React.Component {
  constructor (props) {
    super(props)

      this.state = {
        name: "",
        last: "",
        email: "",
        message: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

    handleClick() {

    }

    handleClearForm() {
      this.setState ({
        name: "",
        last: "",
        email: "",
        message: ""
      })
    }

  render() {
    return (
        <div>
          <form className='form'>
            <label>
              First Name: <input type="text" placeholder="Name..." name="first" style={{width:"39vmin", height: "4vmin"}}/> 
            </label>
            <label>
              Last Name: <input type="text" name="last" style={{width:"39vmin", height: "4vmin"}}/> 
            </label>
            <label>
              Email: <input type="text" name="email" placeholder="email..." style={{width:"39vmin", height: "4vmin"}}/>
            </label>
            <label>
              Leave a message: <textarea type="textarea" name="message" placeholder="Leave a message..." />
            </label>

            <button onClick={this.handleClick}>Send</button>
            <button onClick={this.handleClearForm}>Clear Form</button>
          </form>
        </div>
      )
  }
}

export default Contact