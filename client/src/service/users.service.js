import { generateUrl ,usersInformationUrl} from "./url";
import {getService } from "service/http.service"


const getUsersInfo = async (id) => {

    const url = usersInformationUrl(id)
    return await getService(url);
}


export {
    getUsersInfo
}