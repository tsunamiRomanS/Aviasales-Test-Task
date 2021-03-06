import React, { Component } from "react";
import Ticket from './Ticket/Ticket';
import axios from "axios";
import Spin from "../Spinner/Spin";
import { Row, Col } from "reactstrap";
import styled from "styled-components"
const ShowMore5 = styled.button`
width: 502px;
height: 50px;
background: #2196F3;
border-radius: 5px;
color: #fff;
border: none;
margin-bottom: 30px;
&:active {
    background: #1f82d1;
};
`
export default class TicketList extends Component {
    state = {
        ticketList: [],
        spinner: true,
        showSliceTickets: 5,
    };
    componentDidUpdate(prevProps) {
        if (this.props.searchId !== prevProps.searchId) {
            axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.props.searchId}`)
                .then((res) => this.setState({ ticketList: res.data.tickets, spinner: false, }));
        };
        if (prevProps.filterSidebar !== this.props.filterSidebar) {
            this.setState({
                ticketList: [],
                spinner: true
            });
            axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.props.searchId}`)
                .then((res) => {
                    this.props.filterSidebar.filter((el) => {
                        if (el.value) {
                            const { stops } = el
                            console.log(stops);
                            res.data.tickets.map((item) => {
                                if (item.segments[0].stops.length === stops && item.segments[1].stops.length === stops) {
                                    this.setState(({ ticketList }) => ({
                                        ticketList: [...ticketList, item],
                                        spinner: false
                                    }));
                                };
                            });
                        };
                    });
                });
        };
    };
    show5 = () => {
        this.setState({
            showSliceTickets: this.state.showSliceTickets + 5
        });
    };
    render() {
        return (
            <>
                <Row>
                    <Col>
                        {this.state.spinner ? <Spin className="" /> :
                            this.state.ticketList.slice(0, this.state.showSliceTickets).map((item, itemIndex) =>
                                <Ticket {...item} key={(Math.random() + itemIndex)} />
                            )
                        }
                    </Col>
                </Row>
                <Row>
                    <Col sm={{
                    }}>
                        {this.state.spinner ? null : <ShowMore5 onClick={() => this.show5()}>???????????????? ?????? 5 ??????????????!</ShowMore5>}
                    </Col>
                </Row>
            </>

        );
    };
};