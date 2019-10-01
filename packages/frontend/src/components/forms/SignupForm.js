import React from 'react';
import { Form, FormLayout, TextField, TextStyle, Button, Link, DisplayText } from '@shopify/polaris'

class SignupForm extends React.Component {
  
    state = {
      email: '',
      password: ''
    };
  
    render() {
      const { username, lastname, password, email, companyname, devicecount, employeecount } = this.state;
  
      return (
        <div className="login-box">
          <Form onSubmit={this.handleSubmit}>
              <FormLayout condensed>
                <FormLayout.Group condensed>
                  <TextField
                    value={username}
                    onChange={this.handleChange('username')}
                    label="FIRST NAME"
                    type="text"
                    placeholder="Jack"
                    helpText={
                      <span>
                      </span>
                    }
                  />
                  <TextField
                    value={lastname}
                    onChange={this.handleChange('lastname')}
                    label="LAST NAME"
                    type="text"
                    placeholder="Sparrow"
                    helpText={
                      <span>
                      </span>
                    }
                  />
                </FormLayout.Group>
              </FormLayout>
              <FormLayout>
                <TextField
                  value={email}
                  onChange={this.handleChange('email')}
                  label="EMAIL"
                  type="email"
                  placeholder="iamcsk90@gmail.com"
                  helpText={
                    <span>
                    </span>
                  }
                />
                <TextField
                  value={password}
                  onChange={this.handleChange('password')}
                  label="PASSWORD"
                  type="password"
                  placeholder="**********"
                  helpText={
                    <span>
                    </span>
                  }
                />
                <TextField
                  value={companyname}
                  onChange={this.handleChange('companyname')}
                  label="PHONE"
                  placeholder="+919789891669"
                  type="text"
                  helpText={
                    <span>
                    </span>
                  }
                />
            </FormLayout>

              <FormLayout>
                <div className="fx actr">
                    <div>
                       
                    </div>
                </div>

                <div className="fx actr">
                  <div>
                      <Button primary>Sign up</Button>
                  </div>
                  <div style={{marginLeft:8}}>
                  <TextStyle>Already have account</TextStyle>
                      <span style={{paddingLeft: 4}}>
                        <Link url="/login">Login here</Link>
                      </span>
                  </div>
                </div>   

              </FormLayout>
            </Form>
          </div>
      );
    }
  
    handleSubmit = (event) => {
      this.setState({ email: '', password:''});
      // this.props.getPlaylist()
    };
  
    handleChange = (field) => {
        console.log(' CSK field is here ', field)
      return (value) => this.setState({[field]: value});
    };
  }

 
  export default SignupForm