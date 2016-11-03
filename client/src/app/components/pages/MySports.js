/**
 * Created by song on 16-10-18.
 *
 * 我的运动界面
 */

import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Alarm from 'material-ui/svg-icons/action/alarm';
import {
    Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

import FullWidthSection from '../FullWidthSection';

const tableData = [
    {date: '2016-09-14', item: '跑步',},
    {date: '2016-09-17', item: '跑步',},
    {date: '2016-09-19', item: '跑步',},
    {date: '2016-09-20', item: '跑步',},
    {date: '2016-09-14', item: '跑步',},
    {date: '2016-09-15', item: '足球',},
    {date: '2016-09-25', item: '足球',},
    {date: '2016-09-25', item: '足球',},
    {date: '2016-09-25', item: '足球',},
    {date: '2016-09-25', item: '足球',},
];

class MySports extends Component {
    state = {
        sportsDayNum: 0,
        sportsDistance: 0.0,
        sportsCalorie: 0.0,
        refresh: false,
        dialogOpen: false,
        snackBarOpen: false,
        snackBarMessage: ''
    };

    getStyles() {
        const style = {
            root: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            circle: {
                width: 150,
                height: 150,
                margin: 'auto 25px',
                textAlign: 'center',
                display: 'inline-block',
                background: '#FFCA28'
            },
            container: {
                marginTop: 50,
            }
        };

        return style;
    }

    handleRowHover = (rowNumber) => {
        tableData[rowNumber].hover = true;

        this.setState({refresh: true});
    };

    handleRowHoverExit = (rowNumber) => {
        tableData[rowNumber].hover = false;

        this.setState({refresh: false});
    };

    handleOpenDialog = () => {
        this.setState({dialogOpen: true});
    };

    handleCloseDialog = (data) => {
        if (data !== undefined) {
            this.handleAddData(data.date, data.item);
        }

        this.setState({dialogOpen: false});
    };

    handleAddData(date, item) {
        tableData.push({
            date: date,
            item: item
        });

        this.setState({
            snackBarOpen: true,
            snackBarMessage: '添加成功'
        });
    }

    handleDeleteData = (index) => {
        tableData.splice(index, 1);

        this.setState({refresh: true});
    };

    handleCloseSnackBar = () => {
        this.setState({
            snackBarOpen: false,
            snackBarMessage: ''
        })
    };

    handleUndoAddData = () => {
        this.handleCloseSnackBar();
        this.handleDeleteData(tableData.length - 1);
    };

    render() {
        let style = this.getStyles();

        return (
            <FullWidthSection>
                <div style={style.root}>
                    <div>
                        <Paper style={style.circle} zDepth={5} circle={true}>
                            <div style={style.container}>
                                已运动 <p>{this.state.sportsDayNum} 天</p>
                            </div>
                        </Paper>
                        <Paper style={style.circle} zDepth={5} circle={true}>
                            <div style={style.container}>
                                积累里程 <p>{this.state.sportsDistance} 公里</p>
                            </div>
                        </Paper>
                        <Paper style={style.circle} zDepth={5} circle={true}>
                            <div style={style.container}>
                                累计燃烧 <p>{this.state.sportsCalorie} 大卡</p>
                            </div>
                        </Paper>
                    </div>
                    <div style={{paddingTop: 80}}>
                        <Table
                            height='400px'
                            fixedHeader={true}
                            multiSelectable={true}
                            onRowHover={this.handleRowHover}
                            onRowHoverExit={this.handleRowHoverExit}
                        >
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                            >
                                <TableRow>
                                    <TableHeaderColumn
                                        colSpan="3"
                                        style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
                                        运动记录
                                    </TableHeaderColumn>
                                    <TableHeaderColumn style={{float: 'right'}}>
                                        <FloatingActionButton
                                            mini={true}
                                            onClick={this.handleOpenDialog}
                                        >
                                            <ContentAdd/>
                                        </FloatingActionButton>
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn>序&nbsp;&nbsp;&nbsp;&nbsp;号</TableHeaderColumn>
                                    <TableHeaderColumn>日&nbsp;&nbsp;&nbsp;&nbsp;期</TableHeaderColumn>
                                    <TableHeaderColumn>项&nbsp;&nbsp;&nbsp;&nbsp;目</TableHeaderColumn>
                                    <TableHeaderColumn>&nbsp;</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                showRowHover={true}
                                selectable={false}
                                displayRowCheckbox={false}
                            >
                                {tableData.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        selected={row.selected}
                                    >
                                        <TableRowColumn>{index + 1}</TableRowColumn>
                                        <TableRowColumn>{row.date}</TableRowColumn>
                                        <TableRowColumn>{row.item}</TableRowColumn>
                                        <TableRowColumn >
                                            <div
                                                style={row.hover ?
                                                {display: 'inline-block', float: 'right'}
                                                    : {display: 'none', float: 'right'}}
                                            >
                                                <FloatingActionButton
                                                    mini={true}
                                                    secondary={true}
                                                    onClick={(e) => {
                                                        this.handleDeleteData(index);
                                                    }}
                                                >
                                                    <ContentDeleteSweep/>
                                                </FloatingActionButton>
                                            </div>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <DataDialog open={this.state.dialogOpen} onCloseDialog={this.handleCloseDialog}/>
                        <Snackbar
                            open={this.state.snackBarOpen}
                            message={this.state.snackBarMessage}
                            action="撤 销"
                            autoHideDuration={3000}
                            onActionTouchTap={this.handleUndoAddData}
                            onRequestClose={this.handleCloseSnackBar}
                        />
                    </div>
                </div>

                <div>

                </div>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
                    </Menu>
                </Popover>
            </FullWidthSection>
        );
    }
}

class DataDialog extends React.Component {
    state = {
        date: '',
        item: ''
    };

    handleChangeDate = (e, date) => {
        this.setState({
            date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        });
    };

    handleChangeItem = (e) => {
        this.setState({item: e.target.value});
    };

    handleClose = () => {
        this.props.onCloseDialog();
    };

    handleConfirm = () => {
        this.props.onCloseDialog({
            date: this.state.date,
            item: this.state.item
        });
    };

    render() {
        const actions = [
            <FlatButton
                label="取 消"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="确 认"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleConfirm}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="新增运动记录"
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.handleClose}
                >
                    <DatePicker
                        hintText="时间"
                        autoOk={true}
                        ref="date"
                        onChange={this.handleChangeDate}
                    />
                    <TextField
                        hintText="运动项目"
                        floatingLabelText="运动项目"
                        ref="item"
                        onChange={this.handleChangeItem}
                    />
                </Dialog>
            </div>
        );
    }
}

export default MySports;