/**
 * 界面主体，分为AppBar、content、footer三个部分
 */

import React, {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import AppNavDrawer from './AppNavDrawer';
import FullWidthSection from './FullWidthSection';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import Snackbar from 'material-ui/Snackbar';

class Master extends Component {

    indexName = '首 页';

    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object,
        width: PropTypes.number.isRequired,
    };

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    static childContextTypes = {
        muiTheme: PropTypes.object,
    };

    state = {
        navDrawerOpen: false, // 左侧导航栏默认隐藏
        docked: false, // 导航栏悬停，点击页面导航栏隐藏
        isLogin: false, // 默认未登录
        pageBefore: '/', // 跳转到登录界面前点击的界面
        loginTooltipOpen: false,
    };

    getChildContext() {
        return {
            muiTheme: this.state.muiTheme,
        };
    }

    componentWillMount() {
        this.setState({
            muiTheme: getMuiTheme(),
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
        this.setState({
            muiTheme: newMuiTheme,
        });
    }

    getStyles() {
        const styles = {
            appBar: {
                position: 'fixed',
                zIndex: this.state.muiTheme.zIndex.appBar + 1,
                top: 0
            },
            title: {
                fontSize: 18
            },
            loginContainer: {
                display: 'inline-block',
                marginTop: 13,
                marginRight: 30,
                textAlign: 'center',
            },
            login: {
                color: darkWhite,
                fontSize: 18,
                paddingTop: 20,
                cursor: 'pointer',
                textDecoration: 'none',
            },
            signup: {
                color: darkWhite,
                fontSize: 18,
                marginLeft: 20,
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'inline-block'
            },
            avatar: {
                padding: 0,
                marginRight: 20
            },
            root: {
                paddingTop: spacing.desktopKeylineIncrement,
                minHeight: 400,
            },
            content: {
                margin: spacing.desktopGutter,
            },
            contentWhenMedium: {
                margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
            },
            footer: {
                backgroundColor: grey900,
                textAlign: 'center',
            },
            a: {
                color: darkWhite,
            },
            p: {
                margin: '0 auto',
                padding: 0,
                color: lightWhite,
                maxWidth: 356,
            },
            browserstack: {
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                margin: '25px 15px 0',
                padding: 0,
                color: lightWhite,
                lineHeight: '25px',
                fontSize: 12,
            },
            browserstackLogo: {
                margin: '0 3px',
            },
            iconButton: {
                color: darkWhite,
            },
        };

        if (this.props.width === MEDIUM || this.props.width === LARGE) {
            styles.content = Object.assign(styles.content, styles.contentWhenMedium);
        }

        return styles;
    }

    handleTouchTapLeftIconButton = () => {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        });

        if (this.props.location.pathname !== '/') {
            this.setState({
                docked: !this.state.docked,
            });
        }
    };

    handleChangeRequestNavDrawer = (open) => {
        this.setState({
            navDrawerOpen: open,
            docked: false
        });
    };

    /**
     * 处理页面跳转, 跳转前判断需要登录,若需要,跳转至登录界面,并记录跳转请求,登录成功后响应此次请求
     *
     * @param event
     * @param value
     * @param loginFlag @see#handleLogin 中设置isLogin状态后,此处并未改变,此处强行加一个参数,
     * 以标识由 @see login 调用此方法
     */
    handleChangePage = (event, value, loginFlag) => {
        if (this.state.isLogin || value === '/' || loginFlag) {
            this.handleJump(event, value);
        } else {
            this.handleJump(event, '/login');
            this.setState({
                pageBefore: value,
                loginTooltipOpen: true
            });
        }
    };

    handleJump = (e, value) => {
        if (this.props.location.pathname !== value) {
            this.context.router.push(value);
        }

        if (value !== '/' && this.props.width === LARGE) {
            this.setState({
                docked: true,
                navDrawerOpen: true
            });
        } else { // 首页和移动端不固定导航栏
            this.setState({
                docked: false,
                navDrawerOpen: false
            });
        }
    };

    handleChangeMuiTheme = (muiTheme) => {
        this.setState({
            muiTheme: muiTheme,
        });
    };

    handleClickAvatar = (e) => {
        this.handleChangePage(e, '/sports');
    };

    handleClickLogin = (e) => {
        this.handleChangePage(e, '/login');
    };

    handleClickSignUp = (e) => {
        this.handleChangePage(e, '/signup');
    };

    handleLogin = (e) => {
        this.setState({isLogin: true});
        this.handleChangePage(e, this.state.pageBefore, true);
    };

    handleCloseLoginTooltip = () => {
        this.setState({loginTooltipOpen: false});
    };

    render() {
        const {
            location,
            children,
        } = this.props;

        const {
            prepareStyles,
        } = this.state.muiTheme;

        const router = this.context.router;
        const styles = this.getStyles();
        const title =
            router.isActive('/sports') ? '我的运动' :
                router.isActive('/activities') ? '活 动' :
                    router.isActive('/startActivity') ? '发起活动' :
                        router.isActive('/friends') ? '我的好友' :
                            router.isActive('/chatlist') ? '消息列表' :
                                router.isActive('/login') ? '登 录' :
                                    router.isActive('/signup') ? '注 册' : this.indexName;

        if (this.props.width === LARGE && this.state.docked) {
            styles.navDrawer = {
                zIndex: styles.appBar.zIndex - 1,
            };
            styles.appBar.paddingLeft = 270;
            styles.root.paddingLeft = 256;
            styles.footer.paddingLeft = 256;
        }

        let iconElementRight;
        if (this.state.isLogin) {
            iconElementRight =
                <IconButton
                    style={styles.avatar}
                    onClick={this.handleClickAvatar}
                >
                    <Avatar src="images/allisongrayce-128.jpg"/>
                </IconButton>;
        } else {
            iconElementRight =
                <div style={styles.loginContainer}>
                    <a onClick={this.handleClickLogin} style={styles.login}>登 录</a>
                    <a className="signup" onClick={this.handleClickSignUp} style={styles.signup}>注 册</a>
                </div>
        }

        let appTitle = title === this.indexName ? undefined
            : <div style={styles.title}> {title} </div>;

        return (
            <div>
                <Title render={title + ' | SC'}/>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
                    title={appTitle}
                    zDepth={0}
                    iconElementRight={iconElementRight}
                    style={styles.appBar}
                />

                {title !== this.indexName ?
                    <div style={prepareStyles(styles.root)}>
                        <div>
                            {React.cloneElement(children, {
                                onChangeMuiTheme: this.handleChangeMuiTheme,
                                onChangePage: this.handleChangePage,
                                onLogin: this.handleLogin,
                            })}
                        </div>
                    </div> :
                    children
                }

                <AppNavDrawer
                    style={styles.navDrawer}
                    location={location}
                    open={this.state.navDrawerOpen}
                    docked={this.state.docked}
                    onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
                    onChangeList={this.handleChangePage}
                />

                {title === this.indexName ?
                    <FullWidthSection style={styles.footer}>
                        <p style={prepareStyles(styles.p)}>
                            &copy;&nbsp;CopyRight by bedisdover
                        </p>
                        <p style={styles.p}>
                            bedisdover@gmail.com
                        </p>
                    </FullWidthSection> : ''
                }

                <Snackbar
                    style={{textAlign: 'center'}}
                    open={this.state.loginTooltipOpen}
                    message="请先登录"
                    autoHideDuration={2000}
                    onRequestClose={this.handleCloseLoginTooltip}
                />
            </div>
        );
    }
}

export default withWidth()(Master);
