/**
 * Created by song on 16-10-19.
 *
 * 消息列表
 */

import React from 'react';
import MobileTearSheet from '../util/MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import FullWidthSection from '../FullWidthSection';

const style = {
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto'
};

const ChatList = () => (
    <FullWidthSection style={style}>
        <MobileTearSheet>
            <List>
                <Subheader>未 读</Subheader>
                <ListItem
                    primaryText="Brendan Lim"
                    leftAvatar={<Avatar src="images/ok-128.jpg"/>}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Eric Hoffman"
                    leftAvatar={<Avatar src="images/kolage-128.jpg"/>}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="系统消息"
                    leftAvatar={<Avatar src="images/raquelromanp-128.jpg"/>}
                />
            </List>
            <Divider />
            <List>
                <Subheader>已 读</Subheader>
                <ListItem
                    primaryText="Chelsea Otakan"
                    leftAvatar={<Avatar src="images/chexee-128.jpg"/>}
                />
                <ListItem
                    primaryText="James Anderson"
                    leftAvatar={<Avatar src="images/jsa-128.jpg"/>}
                />
            </List>
        </MobileTearSheet>
    </FullWidthSection>
);

export default ChatList;