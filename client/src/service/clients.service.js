import { generateUrl ,clientInformationUrl , urlClientList} from "./url";
import {getService } from "service/http.service"


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


export {
    getClientInfo,getAllClient
    
}