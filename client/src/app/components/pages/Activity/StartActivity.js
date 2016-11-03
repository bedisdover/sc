/**
 * Created by song on 16-10-19.
 *
 * 发起活动界面
 */

import React, {Component} from 'react';
import {Step, Stepper, StepLabel, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import FullWidthSection from '../../FullWidthSection';

class StartActivity extends Component {
    state = {
        activityType: '',
        finished: false,
        stepIndex: 0,
        acceptLicense: false
    };

    getStyles() {
        const styles = {
            root: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            rootWhenSmall: {
                width: 300,
            }
        };

        return styles;
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions(step) {
        const {stepIndex} = this.state;

        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                    label={stepIndex !== 2 ? '下一步' : '发起活动'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{marginRight: 12}}
                />
                {step > 0 && (
                    <FlatButton
                        label="后 退"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    handleChangeType = (event, index, value) => this.setState({value});

    render() {
        const {finished, stepIndex} = this.state;

        const style = this.getStyles();

        return (
            <FullWidthSection>
                <div style={style.root}>
                    <Stepper activeStep={stepIndex} orientation="vertical">
                        <Step>
                            <StepLabel>活动详情</StepLabel>
                            <StepContent>
                                <TextField
                                    hintText="活动名称"
                                    floatingLabelText="活动名称"
                                /><br/>
                                <SelectField
                                    hintText="活动类型"
                                    value={this.state.activityType}
                                    onChange={this.handleChangeType}>
                                    <MenuItem value={1} primaryText="跑步"/>
                                    <MenuItem value={2} primaryText="篮球"/>
                                    <MenuItem value={3} primaryText="羽毛球"/>
                                    <MenuItem value={4} primaryText="健身"/>
                                    <MenuItem value={5} primaryText="滑雪"/>
                                    <MenuItem value={6} primaryText="其它"/>
                                </SelectField>
                                <DatePicker
                                    hintText="活动时间"
                                    container="inline"
                                    minDate={new Date()}
                                    autoOk={true}
                                    cancelLabel="取消"
                                />
                                <TextField
                                    hintText="活动地点"
                                    floatingLabelText="活动地点"
                                />
                                {this.renderStepActions(0)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>邀请好友</StepLabel>
                            <StepContent>
                                <RadioButtonGroup style={{padding: 20}} name="shipSpeed" defaultSelected="not_light">
                                    <RadioButton
                                        value="light"
                                        label="仅好友可见"
                                    />
                                    <RadioButton
                                        label="所有用户可见"
                                        style={{margin: '10px 0'}}
                                    />
                                    <RadioButton
                                        value="not_light"
                                        label="仅实名认证用户可见"
                                    />
                                </RadioButtonGroup>
                                {this.renderStepActions(1)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>发起活动</StepLabel>
                            <StepContent>
                                <p style={{background: '#eeeeee', padding: '20px 10px'}}>
                                    发起活动前请仔细阅读本协议
                                </p>
                                <Checkbox
                                    label="我已阅读并同意协议"
                                />
                                {this.renderStepActions(2)}
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
            </FullWidthSection>
        );
    }
}

export default StartActivity;
