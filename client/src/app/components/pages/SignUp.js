/**
 * Created by song on 16-10-17.
 *
 * 注册界面
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import FullWidthSection from '../FullWidthSection';
import {ClientWidth, SMALL} from '../util/ClientWidth';

class SignUp extends React.Component {
    state = {
        phoneNum: '',
        codes: '',
        password: '',
        passwordRepeated: '',
        phoneNumErrorText: '',
        codesErrorText: '',
        passwordErrorText: '',
        passwordRepeatedErrorText: '',
        getCodesDisabled: true,
        passwordDisabled: true,
        passwordRepeatedDisabled: true,
        signUpDisabled: true
    };

    componentDidMount() {
        this.refs.phoneNum.focus();
    }

    handleChangePhoneNum = (e) => {
        let phoneNum = e.target.value;

        if (phoneNum === '') {
            this.setState({
                phoneNumErrorText: '手机号不能为空',
                getCodesDisabled: true,
            })
        } else {
            this.setState({
                phoneNumErrorText: '',
                getCodesDisabled: false
            });
        }

        this.setState({phoneNum: phoneNum.trim()});
    };

    handleChangeCodes = (e) => {
        let codes = e.target.value;

        if (codes === '' || codes.length !== 4) {
            this.setState({
                codesErrorText: '验证码错误',
                passwordDisabled: true,
                passwordRepeatedDisabled: true,
                signUpDisabled: true
            })
        } else {
            this.setState({
                codesErrorText: '',
                passwordDisabled: false,
                passwordRepeatedDisabled: false
            });
        }

        this.setState({phoneNum: codes.trim()});
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

            if (this.state.passwordRepeated === password) {
                this.setState({signUpDisabled: false});
            }
        }

        this.setState({password: password.trim()});
    };

    handleChangePasswordRepeated = (e) => {
        let passwordRepeated = e.target.value;

        if (passwordRepeated !== this.state.password) {
            this.setState({
                passwordRepeatedErrorText: '密码不一致',
                signUpDisabled: true
            });
        } else {
            this.setState({passwordRepeatedErrorText: ''});

            if (this.state.phoneNumErrorText === '' && this.state.codesErrorText === '') {
                this.setState({signUpDisabled: false});
            }
        }

        this.setState({passwordRepeated: passwordRepeated.trim()});
    };

    handleGetCodes() {
        alert('验证码为: 5721');
    }

    checkPassword(password) {
        if (password === undefined) {
            password = this.state.password;
        }

        if (password === '') {
            this.setState({
                passwordErrorText: '密码不能为空'
            });

            return false;
        }

        this.setState({
            passwordErrorText: ''
        });

        return true;
    }

    checkPasswordRepeated() {

    }

    handleSignUp() {

    }

    handleLogin = (e) => {
        this.props.onChangePage(e, '/login');
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
            codes_container: {
                display: 'inline'
            },
            codes: {
                width: 140
            },
            getCodes: {
                margin: 12
            },
            pager: {
                padding: '40px 150px 50px 180px',
                width: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            login: {
                marginLeft: '80px',
                marginRight: '-20px'
            }
        };

        let codesLabel = '验证码';
        if (this.state.codesErrorText !== '') {
            style.codesUnderLine = {
                borderColor: 'red',
                borderSize: 2
            };

            style.codesLabel = {
                color: 'red'
            };

            codesLabel = '验证码错误';
        }

        return (
            <FullWidthSection style={style.root}>
                {ClientWidth === SMALL ?
                    <div style={style.container_small}>
                        <TextField
                            floatingLabelText="手机号"
                        /><br/>
                        <TextField
                            floatingLabelText="验证码"
                            style={style.codes}
                        /><RaisedButton label="获取验证码" primary={true} style={style.getCodes}/><br/>
                        <TextField
                            floatingLabelText="密码"
                            type="password"
                        /><br/>
                        <TextField
                            floatingLabelText="确认密码"
                            type="password"
                        /><br/>
                        <RaisedButton label="注 册" primary={true}/>
                        <FlatButton label="登 录" primary={true} style={style.login}/>
                    </div> :
                    <Paper style={style.pager} zDepth={5} rounded={true}>
                        <TextField
                            ref="phoneNum"
                            floatingLabelText="手机号"
                            errorText={this.state.phoneNumErrorText}
                            onChange={this.handleChangePhoneNum}
                        /><br/>
                        <div style={style.codes_container}>
                            <TextField
                                floatingLabelText={codesLabel}
                                style={style.codes}
                                floatingLabelFocusStyle={style.codesLabel}
                                underlineStyle={style.codesUnderLine}
                                underlineFocusStyle={style.codesUnderLine}
                                onChange={this.handleChangeCodes}
                            />
                            <RaisedButton
                                label="获取验证码"
                                primary={true}
                                style={style.getCodes}
                                disabled={this.state.getCodesDisabled}
                                onClick={this.handleGetCodes}
                            /><br/>
                        </div>
                        <TextField
                            floatingLabelText="密码"
                            type="password"
                            errorText={this.state.passwordErrorText}
                            disabled={this.state.passwordDisabled}
                            onChange={this.handleChangePassword}
                        /><br/>
                        <TextField
                            floatingLabelText="确认密码"
                            type="password"
                            errorText={this.state.passwordRepeatedErrorText}
                            disabled={this.state.passwordRepeatedDisabled}
                            onChange={this.handleChangePasswordRepeated}
                        /><br/>
                        <RaisedButton
                            label="注 册"
                            primary={true}
                            disabled={this.state.signUpDisabled}
                            onClick={this.handleSignUp}
                        />
                        <FlatButton
                            label="登 录"
                            primary={true}
                            style={style.login}
                            onClick={this.handleLogin}
                        />
                    </Paper>
                }
            </FullWidthSection>
        )
    }
}

export default SignUp;