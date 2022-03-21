import axios from "axios";
export default class RestClient {    
    static GetRequest=(getUrl)=> {
        return axios.get(getUrl)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return null;
            })
    }
    static PostRequest=(postUrl,postJson)=>{
        let config = {
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }
        return axios.post(postUrl,postJson,config)
        .then(response=>{
            return response.data;
        })
        .catch(error=>{
            return null;
        })

    }
    // static GetRandomPhoto=()=>{
    //     let getPhotoUrl = 'https://randomuser.me/api/'
    //     return axios.get(getPhotoUrl).then(success=>{
    //         return success.data
    //     }).catch(e=>{
    //         return null;
    //     })

    // }

}