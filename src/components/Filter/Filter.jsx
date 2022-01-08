import React, { Component } from 'react';
import styled from "styled-components";
const BtnGroup = styled.div`
display: flex;
justify-content: center;
width: 502px;
border-radius: 5px;
border: 1px solid #DFE5EC;
overflow: hidden;
margin-bottom: 40px;
`;
const Btn = styled.button`
outline: none;
border: none;
background: none;
height: 50px;
color: #4A4A4A;
&:hover {
    background: #2196F3;
    color: #FFFFFF;
};
&:active {
    background: #2196F3;
    color: #FFFFFF;
};
&:nth-child(2) {
    border-left: 1px solid #DFE5EC;
    border-right: 1px solid #DFE5EC;
}
width: 168px;
`;
export default class Filter extends Component {
    state = {
        active: false,
        colorActive: "primary",
        colorNotActive: "light"
    };
    filterForSmallPrice = () => { };
    filterInTheShortestTime = () => { };
    filterForOptimal = () => { };
    render() {
        return (
            <BtnGroup>
                <Btn>Самый дешевый</Btn>
                <Btn>Самый быстрый</Btn>
                <Btn>Оптимальный</Btn>
            </BtnGroup>
        );
    };
};
