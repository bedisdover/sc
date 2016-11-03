/**
 * Created by song on 16-10-19.
 *
 * 好友列表
 */

import React from 'react';
import MobileTearSheet from '../util/MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import FullWidthSection from '../FullWidthSection';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="更 多"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400}/>
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>发消息</MenuItem>
        <MenuItem>邀  请</MenuItem>
        <MenuItem>删  除</MenuItem>
    </IconMenu>
);

class FriendsList extends React.Component {
    render() {
        const style = {
            list: {
                width: 300,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        };

        return (
            <FullWidthSection style={style.list}>
                <MobileTearSheet>
                    <Subheader>Previous chats</Subheader>
                    <ListItem
                        primaryText="Chelsea Otakan"
                        leftAvatar={<Avatar src="images/chexee-128.jpg"/>}
                        rightIconButton={rightIconMenu}
                    />
                    <ListItem
                        primaryText="James Anderson"
                        leftAvatar={<Avatar src="images/jsa-128.jpg"/>}
                        rightIconButton={rightIconMenu}
                    />
                    <ListItem
                        primaryText="Brendan Lim"
                        leftAvatar={<Avatar src="images/ok-128.jpg"/>}
                        rightIconButton={rightIconMenu}
                    />
                    <ListItem
                        primaryText="Eric Hoffman"
                        leftAvatar={<Avatar src="images/kolage-128.jpg"/>}
                        rightIconButton={rightIconMenu}
                    />
                    <ListItem
                        primaryText="Grace Ng"
                        leftAvatar={<Avatar src="images/uxceo-128.jpg"/>}
                        rightIconButton={rightIconMenu}
                    />
                    <ListItem
                        primaryText="Kerem Suer"
                        leftAvatar={<Avatar src="images/kerem-128.jpg"/>}
                        rightIconButton={rightIconMenu}
                    />
                    <ListItem
                        primaryText="Raquel Parrado"
                        leftAvatar={<Avatar src="images/raquelromanp-128.jpg"/>}
                        rightIconButton={rightIconMenu}
                    />
                </MobileTearSheet>
            </FullWidthSection>
        );
    }
}

export default FriendsList;

