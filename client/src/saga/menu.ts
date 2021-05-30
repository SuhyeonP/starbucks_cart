import axios from "axios";

function * getAllMenuAPI(){
    return axios.get('/menu');
}

function * getAllMenu(){
    try {

    } catch (err) {
        console.error(err);
    }
}
