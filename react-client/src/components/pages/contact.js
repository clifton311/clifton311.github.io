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
          <h2>
            Thank for your visiting! Please leave a message or contact me via the links below!
          </h2>
          <div className='form'>

            <form >
              <label className="firstname">
                Name: <input type="text" placeholder="Name..." name="first" style={{width:"39vmin", height: "4vmin"}}/> 
              </label>
              {/* <label>
                Last Name: <input type="text" name="last" style={{width:"39vmin", height: "4vmin"}}/> 
              </label> */}
              <label className='email'>
                Email: <input type="text" name="email" placeholder="email..." style={{width:"39vmin", height: "4vmin"}}/>
              </label>
              <label className="message">
                Leave a message: <textarea type="textarea" name="message" placeholder="Leave a message..." />
              </label>

              <button onClick={this.handleClick}>Send</button>
              <button onClick={this.handleClearForm}>Clear Form</button>
            </form>
          </div>


          <div className= 'icons'>
            <a href="https://www.facebook.com" class="fa fa-facebook"></a>
            <a href="https://www.github.com/clifton311" class="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/clifton-ho" class="fa fa-linkedin"></a>
            <a href="mailto:cliftono311@gmail.com" class="fa fa-envelope"></a>
          </div>
        </div>
      )
  }
}

export default Contact