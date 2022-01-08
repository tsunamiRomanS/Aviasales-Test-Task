import React, { Component } from 'react';
import Checkbox from "./Checkbox/Checkbox";
import styled from "styled-components";
const WrapperSidebar = styled.div`
width: 232px;
height: 252px;
padding-top: 20px;
box-shadow: 0px 0px 15px #E5E5E5;
border-radius: 5px;
`;
const TitleSidebar = styled.span`
font-size: 12px;
text-transform: uppercase;
padding: 20px 0 0 20px;
`;
export default class FilterSideBar extends Component {
    render() {
        return (
            <WrapperSidebar>
                <TitleSidebar>Количество пересадок</TitleSidebar>
                {this.props.filterSidebar.map((item) => {
                    return <Checkbox key={item.id} {...item}
                        onChangeFilterSidebar={() => this.props.onChangeFilterSidebar(item.id)} />
                })}
            </WrapperSidebar>
        );
    };
};