const getService = async (url) => {
    const api = await fetch(url);
    const data = await api.json();
    console.log("Dati che ritornanto da httpservice JSON" + data)
    return data;
}



const getServiceHeaders = async (url,params) => {
    const api = await fetch(url)

    const data = await api.json();
    return data;
}

export { getService, getServiceHeaders }