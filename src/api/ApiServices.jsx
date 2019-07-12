// How to Use: 

// import  ApiServices  from  './ApiServices';
// const  Api  =  new  ApiServices();
  
import axios from 'axios';
const API_URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d4ebf18b365d48aa81c663728441697e';

class ApiServices{
 
    getData() {
        const url = `${API_URL}`;
        return axios.get(url);
    }  

    getDataById(pk) {
        const url = `${API_URL}${pk}`;
        return axios.get(url);
    }

    deleteData(inputobject){
        const url = `${API_URL}${inputobject.pk}`;
        return axios.delete(url);
    }

    createData(inputobject){
        const url = `${API_URL}`;
        return axios.post(url,inputobject);
    }

    updateUpdate(inputobject){
        const url = `${API_URL}${inputobject.pk}`;
        return axios.put(url,inputobject);
    }

}

export default ApiServices;