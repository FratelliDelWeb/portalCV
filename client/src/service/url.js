
const SERVER_URL = "http://localhost:3000/";

const authUrl = "/api/auth/"

const urlUsersList =  "api/users";
const urlClientList =  "api/candidates";
const modifyInformationClient = "api/candidates/modify";
const usersInformationUrl = (id) =>  `api/users/${id}`;
const clientInformationUrl = (id) =>  `api/candidates/${id}`;

 
const generateUrl = (url, params = []) => { 
    const urlServerWithAuth = `${SERVER_URL}${url}`;
   
    console.log(urlServerWithAuth)
   /*  if(params && params.length > 0){
        let paramsUrl = new URLSearchParams();
        params.forEach(p => {
            paramsUrl.append(p.key,p.value)
        })
        return urlServerWithAuth + `&${paramsUrl.toString()}`
    }
 */
    return urlServerWithAuth;
}


export { 
    SERVER_URL,
    authUrl,
    urlUsersList,
    urlClientList,
    modifyInformationClient,
    generateUrl,
    usersInformationUrl,
    clientInformationUrl
};


