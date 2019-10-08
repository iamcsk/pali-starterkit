import React from 'react';
import { Form, FormLayout, TextField, TextStyle, Button, Link } from '@shopify/polaris'

class SignupForm extends React.Component {
  
    state = {
      email: '',
      password: ''
    };
  
    render() {
      const { username, lastname, password, email } = this.state;
  
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
            </FormLayout>

              <FormLayout>
                <div className="fx actr">
                    <div>
                       
                    </div>
                </div>

                <div className="fx actr">
                  <div>
                    <Button primary onClick={this.signupUser}>Sign up</Button>
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
  
    handleSubmit = () => {
      this.props.CreateUser( { variables: { username: this.state.username, email: this.state.email, password: this.state.password} } );
    };

    signupUser = () => {
      this.props.CreateUser( { variables: { username: this.state.username, email: this.state.email, password: this.state.password} } );
    }
  
    handleChange = (field) => {
      return (value) => this.setState({[field]: value});
    };
  }

 
  export default SignupForm