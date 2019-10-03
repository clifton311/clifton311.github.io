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
              Feel free to contact me via the links below!
            </h3>
          </div>

          <div className= 'icons'>
            <a href="https://www.facebook.com" class="fa fa-facebook"></a>
            <a href="https://www.github.com/clifton311" class="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/clifton-ho" class="fa fa-linkedin"></a>
            <a href="mailto:cliftonho311@gmail.com" class="fa fa-envelope"></a>
          </div>
          <div className="footer">Created By Clifton Ho @ 2019</div>
        </div>

      )
  }
}

export default Contact