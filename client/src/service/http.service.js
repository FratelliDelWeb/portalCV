const getService = async (url) => {
    const api = await fetch(url);
    const data = await api.json();
    console.log("Dati che ritornanto da httpservice JSON" + data)
    return data;
}



const getServiceHeaders = async (url , dati) => {
    let datas;
    fetch(url, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(
            dati
        ),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          datas = data
        });

        return datas;
}

export { getService, getServiceHeaders }