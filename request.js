axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz/';

axios.interceptors.response.use((response) => {
    const {baseURL,url} = response.config;
    const {status} = response;
    if(status == 200){
        if(url == baseURL + 'video'){
            return {
                count:response.data.count,
                data:response.data.data
            }
        }
        return  response.data.data;
    }
    
    return response;
})
