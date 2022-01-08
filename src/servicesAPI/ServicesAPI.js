import axios from "axios";
export default class ServicesAPI {
    async getSearchId() {
        return await axios.get("https://front-test.beta.aviasales.ru/search");
    };
    async getTicketList(searchId) {
        return await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
    };
};