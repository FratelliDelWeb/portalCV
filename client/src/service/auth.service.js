import { authUrl  } from "./url";




const doLogin = async (user,pass) => {
    const paramsMap = [
        { key : 'username' , value : user },
        { key : 'password' , value : pass },
    ];

    const url = authUrl + "/login";
    return await doLogin(url , paramsMap);
}


