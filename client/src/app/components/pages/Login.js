/**
 * Created by song on 16-10-16.
 *
 * 登录界面
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import FullWidthSection from '../FullWidthSection';
import {ClientWidth, SMALL} from '../util/ClientWidth';

class Login extends React.Component {

    state = {
        userName: '',
        password: '',
        userNameErrorText: '',
        passwordErrorText: '',
        signUpDisabled: true
    };

    componentDidMount() {
        this.refs.userName.focus();
    }

    handleChangeUserName = (e) => {
        let userName = e.target.value;

        if (userName === '') {
            this.setState({
                userNameErrorText: '手机号/用户名不能为空',
                signUpDisabled: true
            });
        } else {
            this.setState({userNameErrorText: ''});

            if (this.state.password !== '') {
                this.setState({signUpDisabled: false});
            }
        }

        this.setState({userName: userName.trim()});
    };

    handleChangePassword = (e) => {
        let password = e.target.value;

        if (password === '') {
            this.setState({
                passwordErrorText: '密码不能为空',
                signUpDisabled: true
            });
        } else {
            this.setState({passwordErrorText: ''});

            if (this.state.userName !== '') {
                this.setState({signUpDisabled: false});
            }
        }

        this.setState({password: password.trim()});
    };

    handleLogin = () => {
        this.props.onLogin();
    };

    handleSignUp = (e) => {
        this.props.onChangePage(e, '/signup');
    };

    render() {
        const style = {
            root: {
                padding: '0',
            },
            container_small: {
                width: 300,
                paddingLeft: '30px',
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            pager: {
                padding: '40px 100px 50px 130px',
                width: '500px',
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            signup: {
                marginLeft: '80px',
                marginRight: '-20px'
            }
        };

        return (
            <FullWidthSection style={style.root}>
                {ClientWidth === SMALL ?
                    <div style={style.container_small}>
                        <TextField
                            ref="userName"
                            floatingLabelText="用户名/手机号"
                            errorText={this.state.userNameErrorText}
                            onChange={this.handleChangeUserName}
                        /><br/>
                        <TextField
                            floatingLabelText="密码"
                            type="password"
                            errorText={this.state.passwordErrorText}
                            onChange={this.handleChangePassword}
                        /><br/>
                        <RaisedButton
                            label="登 录"
                            primary={true}
                            disabled={this.state.signUpDisabled}
                            onClick={this.handleLogin}
                        />
                        <FlatButton
                            label="注 册"
                            primary={true}
                            style={style.signup}
                            onClick={this.handleSignUp}
                        />
                    </div> :
                    <Paper style={style.pager} zDepth={5} rounded={true}>
                        <TextField
                            ref="userName"
                            floatingLabelText="用户名/手机号"
                            errorText={this.state.userNameErrorText}
                            onChange={this.handleChangeUserName}
                        /><br/>
                        <TextField
                            floatingLabelText="密码"
                            type="password"
                            errorText={this.state.passwordErrorText}
                            onChange={this.handleChangePassword}
                        /><br/>
                        <RaisedButton
                            label="登 录"
                            primary={true}
                            disabled={this.state.signUpDisabled}
                            onClick={this.handleLogin}
                        />
                        <FlatButton
                            label="注 册"
                            primary={true}
                            style={style.signup}
                            onClick={this.handleSignUp}
                        />
                    </Paper>
                }
            </FullWidthSection>
        )
    }
}

export default Login;
