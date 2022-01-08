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
        showSliceTickets: 5
    };
    componentDidUpdate(prevProps) {
        if (this.props.searchId !== prevProps.searchId) {
            axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.props.searchId}`)
                .then((res) => {
                    this.setState({
                        ticketList: res.data.tickets,
                        spinner: false
                    });
                });
        };
        if (this.props.filterSidebar !== prevProps.filterSidebar) {
            //selected.stops
            // res.data.tickets
            this.setState({ ticketList: [], spinner: true })
            axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.props.searchId}`)
                .then((res) => {
                    this.props.filterSidebar.forEach((selected) => {
                        if (selected.value) {
                            res.data.tickets.map((item) => {
                                if (item.segments[0].stops.length === selected.stops && item.segments[1].stops.length === selected.stops) {
                                    this.setState(({ ticketList }) => {
                                        return {
                                            ticketList: [...ticketList, { ...item }],
                                            spinner: false
                                        }
                                    });
                                };
                            });
                        }
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
                        {this.state.spinner ? null : <ShowMore5 onClick={() => this.show5()}>Показать еще 5 билетов!</ShowMore5>}
                    </Col>
                </Row>
            </>

        );
    };
};