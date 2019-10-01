import React, { Component } from 'react'
import { FormLayout, TextField, Form, Button, Checkbox, Link, TextStyle } from '@shopify/polaris'

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
             email:'',
             password:''
        }
    }

    login = () => {
        console.log(' CSK trying to login ', this.state.email, this.state.password, this.props.login)
        // this.props.onAuthenticate({email:this.state.email,password: this.state.password})
        // this.props.login({email:this.state.email,password: this.state.password})
        this.props.LoginUser( { variables: { email: this.state.email, password: this.state.password} } );
    }

    handleSubmit = (event) => {
        this.setState({email: '', password: ''});
    }

    handleChange = (field) => {
        return (value) => this.setState({[field]: value});
    };

    render() {

        const { email, password, remeberme } = this.state
        
        return (
            <div className="login-box">
                     <Form onSubmit={this.handleSubmit}>
                         <FormLayout>
                             <TextField
                                 value={email}
                                 onChange={this.handleChange('email')}
                                 label="EMAIL"
                                 placeholder="iamcsk90@gmail.com"
                                 type="text"
                             />

                             <TextField
                                 value={password}
                                 onChange={this.handleChange('password')}
                                 label="PASSWORD"
                                 placeholder="**********"
                                 type="password"
                             />

                             <div className="fx actr">
                                <div className='grow-2'>
                                    <Checkbox
                                        label="Remeber me"
                                        checked={remeberme}
                                        onChange={this.handleChange('remeberme')}
                                    />
                                </div>
                                <div className='grow-2 tend'>
                                    <TextStyle>Forgot password</TextStyle>
                                </div>
                             </div>  

                             <div className="fx actr">
                                <div>
                                    <Button primary onClick={this.login}>Login</Button>
                                </div>
                                <div style={{marginLeft:8}}>
                                    <TextStyle>Create new have account</TextStyle>
                                    <span style={{paddingLeft: 10}}>
                                        <Link url="/signup">Signup here</Link>
                                    </span>
                                </div>
                             </div>   
                             
                         </FormLayout>
                     </Form>    
            </div>
        )
    }
}

export default LoginForm