import axios from "axios";
const burl = "http://localhost:8000";
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
};

export default {

  getImage: function () {
    return axios.get(`${burl}/api/home`, {headers: headers })
  },

  getCategorie: function () {
    return axios.get(`${burl}/api/cat`, {headers: headers })
  },

  signup: function(fields) {
    return axios.post(`${burl}/api/user/signup`, fields, { headers: headers });
  },

  login: function(fields){
    return axios.post(`${burl}/api/user/login`, fields, { headers: headers });
  },

  getPageCategorie: function (id) {
    return axios.get(`${burl}/api/categorie/${id}`, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }})
  },

  getProduct: function (id) {
    return axios.get(`${burl}/api/product/${id}`, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }})
  }
};