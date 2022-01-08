import React, { Component } from 'react';
import { Input } from "reactstrap";
import styled from "styled-components";
/* styled */
const Label = styled.label`
cursor: pointer;`
const TextForLabel = styled.span`
margin-top: 5px;
font-size: 13px;`
const InputEl = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-left: 20px;
width: 232px;
height: 40px;
&:hover {
    background: #F1FCFF;
}`;
export default class Checkbox extends Component {
    render() {
         return (
            <Label>
                <InputEl>
                    <Input type="checkbox"
                        value={this.props.value} checked={this.props.value}
                        onChange={this.props.onChangeFilterSidebar}
                    />
                    <TextForLabel>&nbsp;&nbsp;&nbsp;
                        {this.props.name}
                    </TextForLabel>
                </InputEl>
            </Label>
        );
    };
};
