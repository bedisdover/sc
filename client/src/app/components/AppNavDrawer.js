/**
 * 导航栏,负责路由跳转
 */

import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import {spacing, typography, zIndex} from 'material-ui/styles';
import {cyan500} from 'material-ui/styles/colors';

const SelectableList = MakeSelectable(List);

const styles = {
    logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan500,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8,
    }
};

class AppNavDrawer extends Component {
    static propTypes = {
        docked: PropTypes.bool.isRequired,
        location: PropTypes.object.isRequired,
        onChangeList: PropTypes.func.isRequired,
        onRequestChangeNavDrawer: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        style: PropTypes.object,
    };

    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired,
    };

    componentDidMount() {

    }

    handleTouchTapHeader = () => {
        this.context.router.push('/');
        this.props.onRequestChangeNavDrawer(false);
    };

    render() {
        const {
            docked,
            onRequestChangeNavDrawer,
            onChangeList,
            open,
            style,
        } = this.props;

        return (
            <Drawer
                style={style}
                open={open}
                docked={docked}
                onRequestChange={onRequestChangeNavDrawer}
                containerStyle={{zIndex: zIndex.drawer - 100}}
            >
                <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
                    SC
                </div>

                <SelectableList
                    value=""
                    onChange={onChangeList}
                >
                    <ListItem primaryText="首&nbsp;&nbsp;&nbsp;&nbsp;页" value="/"/>
                    <ListItem primaryText="我的运动" value="/sports"/>
                    <ListItem
                        primaryText="活&nbsp;&nbsp;&nbsp;&nbsp;动"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="所有活动" value="/activities"/>,
                            <ListItem primaryText="发起活动" value="/startActivity"/>,
                        ]}
                    />
                    <ListItem
                        primaryText="圈&nbsp;&nbsp;&nbsp;&nbsp;子"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="好友列表" value="/friends"/>,
                            <ListItem primaryText="消息列表" value="/chatlist"/>,
                        ]}
                    />
                </SelectableList>
            </Drawer>
        );
    }
}

export default AppNavDrawer;
