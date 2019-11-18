const urlApi = "https://us-central1-proyectoweb-67fae.cloudfunctions.net/app/functions";

const getHomeList = (data) => {

    var complement = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            data
        }
    };

    console.log(data)

    console.log("hola estoy a punto de hacer fetch")

    fetch(`${urlApi}/homelist`, complement)
        .then(res => {
            console.log(res)
            return res.json();
        })
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log("Respuesta ", response);
            return response
        })

}

export default getHomeList