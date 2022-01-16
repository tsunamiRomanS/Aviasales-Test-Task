import React, { Component } from 'react';
import Logo from "./components/Logo/Logo";
import { Container, Row, Col, Input } from "reactstrap";
import Logotype from "./img/Logo.svg";
import ServicesAPI from "../src/servicesAPI/ServicesAPI";
import TicketList from "../src/components/TicketList/TicketList";
import Filter from "./components/Filter/Filter";
import FilterSideBar from "./components/FilterSideBar/FilterSideBar";
export default class App extends Component {
    servicesAPI = new ServicesAPI();
    state = {
        searchId: null,
        filterSidebar: [
            { id: 0, name: "Все", value: false, stops: false},
            { id: 4, name: "Без пересадок", value: false, stops: 0 },
            { id: 1, name: "1 пересадка", value: false, stops: 1 },
            { id: 2, name: "2 пересадки", value: false, stops: 2 },
            { id: 3, name: "3 пересадки", value: false, stops: 3 },
        ]
    };
    componentDidMount() {
        this.servicesAPI.getSearchId().then((req) => {
            this.setState({ searchId: req.data.searchId })
        });
    };
    onChangeFilterSidebar = (id) => {
        const index = this.state.filterSidebar.findIndex((item) => item.id === id)
        this.setState(({ filterSidebar }) => {
            return {
                filterSidebar: [...filterSidebar.slice(0, index), { ...filterSidebar[index], value: !filterSidebar[index].value }, ...filterSidebar.slice(index + 1)]
            };
        });
    };
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Logo CompanyLogo={Logotype} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={{
                            size: 3,
                            offset: 2
                        }}>
                            <FilterSideBar filterSidebar={this.state.filterSidebar} onChangeFilterSidebar={this.onChangeFilterSidebar} />
                        </Col>
                        <Col md={{
                            size: 5
                        }}>
                            <Filter />
                            <TicketList searchId={this.state.searchId} filterSidebar={this.state.filterSidebar} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
};