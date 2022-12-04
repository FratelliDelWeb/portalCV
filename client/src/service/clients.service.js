import { generateUrl ,clientInformationUrl , urlClientList, modifyInformationClient } from "./url";
import {getService , getServiceHeaders} from "service/http.service"


const getClientInfo = async (id) => {

    const url = generateUrl( clientInformationUrl(id));
    console.log(url);
    return await getService(url);
}

const getAllClient = async () => {

    const url = urlClientList;
    console.log(url);
    return await getService(url);
}
const modifyClient = async (data) => {

   
    const url = generateUrl(modifyInformationClient);
   
    return await getServiceHeaders(url , data) ;
}





export {
    getClientInfo,
    getAllClient,
    modifyClient
    
}