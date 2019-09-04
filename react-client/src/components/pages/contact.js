import React from 'react';
import axios from 'axios'

class Contact extends React.Component {
  constructor (props) {
    super(props)

      this.state = {
        name: "",
        email: "",
        message: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange () {
    const {name,value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const {name, email, message} = this.state
    axios({
      method: 'post',
      url: '/user',
      data: {name,email, message}
    })
    .then(response => {
        console.log(response);
    })
    .catch(error =>{
        console.log(error);
    });
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
          <div className="thank">
            <h2 >
              Thank for your visiting! 
            </h2>
            <h3>
              Please leave a message or contact me via the links below!
            </h3>
          </div>

          <div className='contact-form'>
            <form className="ui form" onSubmit= {this.handleSubmit}>
              <label>
                Name: <input type="text"
                             placeholder="Name..." 
                             name="first" 
                             onChange={this.handleFormChange} 
                             style={{width:"39vmin", height: "4vmin"}}
                      /> 
              </label>
          
              <label >
                Email: <input type="text" 
                              name="email" 
                              placeholder="Enter Email" 
                              onChange={this.handleFormChange} 
                              style={{width:"39vmin", height: "4vmin"}}
                        />
              </label>
              <label >
                Leave a message: <textarea type="textarea"  
                                  onChange={this.handleFormChange} 
                                  name="message" 
                                  placeholder="Type a message..." rows="6" cols="40" 
                                  />
              </label>

                <div>
                  <button className='ui button'>Send</button>
                  <button onClick={this.handleClearForm}>Clear Form</button>
                </div>
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