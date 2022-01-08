import React, { Component } from 'react';
import styled from "styled-components";
const ShowMore5 = styled.button`
width: 502px;
height: 50px;
background: #2196F3;
border-radius: 5px;
color: #fff;
border: none;
&:active {
    background: #1f82d1;
};
`
export default class BtnShow5More extends Component {
    render() {
        return (
            <ShowMore5 >Показать еще 5 билетов!</ShowMore5>
        );
    };
};
