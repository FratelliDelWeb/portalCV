import { generateUrl ,usersInformationUrl , urlUsersList} from "./url";
import {getService } from "service/http.service"


const getUsersInfo = async (id) => {

    const url = generateUrl( usersInformationUrl(id));
    console.log(url);
    return await getService(url);
}

const getUsersList = async () => {

    const url = urlUsersList;
    console.log(url);
    return await getService(url);
}


export {
    getUsersInfo,getUsersList
    
}