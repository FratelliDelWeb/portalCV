const SERVER_URL = "http://localhost:5000/";

const authUrl = "/api/auth/"

const url =  "api/users";

const usersInformationUrl = (id) =>  `api/users/${id}`

const generateUrl = (url, params = []) => { 
    const urlServerWithAuth = `${SERVER_URL}${url}`;
    console.log(urlServerWithAuth)
    if(params && params.length > 0){
        let paramsUrl = new URLSearchParams();
        params.forEach(p => {
            paramsUrl.append(p.key,p.value)
        })
        return urlServerWithAuth + `&${paramsUrl.toString()}`
    }

    return urlServerWithAuth;
}


export { 
    SERVER_URL,
    authUrl,
    url,
    generateUrl,
    usersInformationUrl
 
};


