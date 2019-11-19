const urlApi = "https://us-central1-proyectoweb-67fae.cloudfunctions.net/app/functions";

const getHomeList = (data) => {

    var complement = {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    console.log(data)

    fetch(`${urlApi}/homelist`, complement)
        .then(res => {
            console.log(res)
            return res.json();
        })
        .catch(error => console.error('Error fetch:', error))
        .then(response => {
            console.log("Respuesta ", response);
            return response
        })

}

export default getHomeList