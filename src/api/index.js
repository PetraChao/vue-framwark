import axios from "axios";
import { debug } from "util";

export const getHomeInfo = function (params) {
    console.log(axios)
    return axios.get('/api/gethomeinfo/')
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}