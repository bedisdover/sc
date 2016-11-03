/**
 * Created by song on 16-10-18.
 *
 * 活动界面
 */

import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import FullWidthSection from '../../FullWidthSection';

const activities = [
    '业余足球联盟',
    '业余足球联盟1',
    '业余足球联盟2',
    '户外跑步',
    '攀岩',
];

const styles = {
    root: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    search: {
        float: 'right',
        marginTop: -70,
    },
    searchText: {

    },
    list: {
        marginTop: 60,
    }
};

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="更  多"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400}/>
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>参  与</MenuItem>
        <MenuItem>关  注</MenuItem>
        <MenuItem>删  除</MenuItem>
    </IconMenu>
);

class Activities extends Component {
    render() {
        return (
            <FullWidthSection style={styles.root}>
                <div style={styles.search}>
                    <AutoComplete
                        floatingLabelText="搜索活动"
                        filter={AutoComplete.fuzzyFilter}
                        dataSource={activities}
                    />
                </div>
                <div style={styles.list}>
                    <List>
                        <Subheader>Today</Subheader>
                        <ListItem
                            leftAvatar={<Avatar src="images/ok-128.jpg"/>}
                            rightIconButton={rightIconMenu}
                            primaryText="足球比赛"
                            secondaryText={
                                <p>
                                    <br/>
                                    时间: 2016-10-30 地点: 南京大学鼓楼校区体育场
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true}/>
                        <ListItem
                            leftAvatar={<Avatar src="images/kolage-128.jpg"/>}
                            rightIconButton={rightIconMenu}
                            primaryText="羽毛球"
                            secondaryText={
                                <p>
                                    <br/>
                                    时间: 2016-10-29 地点: 南京大学鼓楼校区体育馆
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true}/>
                        <ListItem
                            leftAvatar={<Avatar src="images/uxceo-128.jpg"/>}
                            rightIconButton={rightIconMenu}
                            primaryText="户外爬山"
                            secondaryText={
                                <p>
                                    <br/>
                                    时间: 2016-10-25 地点: 栖霞山
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true}/>
                        <ListItem
                            leftAvatar={<Avatar src="images/kerem-128.jpg"/>}
                            rightIconButton={rightIconMenu}
                            primaryText="露营"
                            secondaryText={
                                <p>
                                    <br/>
                                    时间: 2016-10-24 地点: 栖霞山
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true}/>
                        <ListItem
                            leftAvatar={<Avatar src="images/raquelromanp-128.jpg"/>}
                            rightIconButton={rightIconMenu}
                            primaryText="足球比赛"
                            secondaryText={
                                <p>
                                    <br/>
                                    时间: 2016-10-30 地点: 南京大学鼓楼校区体育场
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true}/>
                    </List>
                </div>
            </FullWidthSection>
        )
    }
}

export default Activities;
