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
          <h2 style={{color:"red"}}>
            Thank for your visiting! 
          </h2>
          <h3>
            Please leave a message or contact me via the links below!
          </h3>

          <div className='ui form'>
            <form className="ui form">
              <label>
                Name: <input type="text" placeholder="Name..." name="first" style={{width:"39vmin", height: "4vmin"}}/> 
              </label>
              {/* <label>
                Last Name: <input type="text" name="last" style={{width:"39vmin", height: "4vmin"}}/> 
              </label> */}
              <label >
                Email: <input type="text" name="email" placeholder="Enter Email" style={{width:"39vmin", height: "4vmin"}}/>
              </label>
              <label >
                Leave a message: <textarea type="textarea" name="message" placeholder="Type a message..." rows="6" cols="40" />
              </label>
              <button className='ui button'onClick={this.handleClick}>Send</button>
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