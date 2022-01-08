import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import moment from "moment";
import styled from "styled-components";
/* styleds */
const TicketBox = styled.div`
box-shadow: 0px 0px 15px #E5E5E5;
width: 502px;
margin-bottom: 30px;
border-radius: 5px;`;
const InnerWrap = styled.div`
padding: 20px;`;
const TicketPrice = styled.h4`color: #2196F3`;
const ServiceCompany = styled.img``;
const Origin = styled.div``;
const destination = styled.div``;
const TravelTime = styled.div``;
const Transfer = styled.div``;
/* styleds */
export default class Ticket extends Component {
    state = {
        carrier: undefined,
        price: undefined,
        firstDate: undefined,
        firstDuration: undefined,
        firstSegmentsStops: [],
        secondSegmentsStops: [],
        secondDuration: undefined,
        secondDate: undefined,
    };
    componentDidMount() {
        this.setState({
            price: this.props.price,
            carrier: this.props.carrier,
            firstSegmentsStops: this.props.segments[0].stops,
            firstDuration: this.props.segments[0].duration,
            firstDate: this.props.segments[0].date,
            secondSegmentsStops: this.props.segments[1].stops,
            secondDuration: this.props.segments[1].duration,
            secondDate: this.props.segments[1].date
        })
    };
    render() {
        return (
            <Row>
                <Col>
                    <TicketBox data-carrier={this.props.carrier}>
                        <InnerWrap>
                            <div className="d-flex justify-content-between">
                                <TicketPrice>
                                    {`${this.state.price} Р`}
                                </TicketPrice>
                                <ServiceCompany src={`//pics.avs.io/99/36/${this.state.carrier}.png`} />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-black-50 text-uppercase fs-6">MOW&nbsp;–&nbsp;HKT</p>
                                    <span>
                                        {`${new Date(this.state.firstDate).getHours()}:${new Date(this.state.firstDate).getMinutes()}`}
                                        &nbsp;-&nbsp;
                                        {`${Math.abs(24 - (new Date(this.state.firstDate).getHours() + Math.trunc(this.state.firstDuration / 60)))}:${Math.abs(new Date(this.state.firstDate).getMinutes() - (this.state.firstDuration % 60))}`}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-black-50 text-uppercase fs-6">В пути</p>
                                    <span>{Math.trunc(this.state.firstDuration / 60)}ч</span>
                                    <span>&nbsp;</span>
                                    <span>{this.state.firstDuration % 60}м</span>
                                </div>
                                <div>
                                    <p className="text-black-50 text-uppercase fs-6">
                                        {this.state.firstSegmentsStops.length}&nbsp;пересадки</p>
                                    {this.state.firstSegmentsStops.map((el) =>
                                        <span className="text-uppercase fs-6">{el} </span>)}
                                </div>
                            </div>
                            {/*  */}
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-black-50 text-uppercase fs-6">MOW&nbsp;–&nbsp;HKT</p>
                                    <span>
                                        {`${new Date(this.state.secondDate).getHours()}:${new Date(this.state.secondDate).getMinutes()}`}
                                        &nbsp;-&nbsp;
                                        {`${Math.abs(24 - (new Date(this.state.secondDate).getHours() + Math.trunc(this.state.secondDuration / 60)))}:${Math.abs(new Date(this.state.secondDate).getMinutes() - (this.state.secondDuration % 60))}`}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-black-50 text-uppercase fs-6">В пути</p>
                                    <span>{Math.trunc(this.state.secondDuration / 60)}ч</span>
                                    <span>&nbsp;</span>
                                    <span>{this.state.secondDuration % 60}м</span>
                                </div>
                                <div>
                                    <p className="text-black-50 text-uppercase fs-6">
                                        {this.state.secondSegmentsStops.length}&nbsp;пересадка</p>
                                    {this.state.secondSegmentsStops.map((el) =>
                                        <span className="text-uppercase fs-6">{el} </span>)}
                                </div>
                            </div>
                        </InnerWrap>
                    </TicketBox>
                </Col>
            </Row >
        );
    };
};