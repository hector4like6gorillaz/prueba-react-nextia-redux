import axios from "axios";

//Utilizando la api principal
const URL: string = `${process.env.REACT_APP_BASE_URL}`;

//Obtener una lectura de una api publica que no requiera login utilizando la base URL del .env

export async function envAPI(props: string) {
  try {
    const response = await axios({
      url: `${URL}${props}`,
      method: `GET`,
    });
    //console.log(response.headers );
    return response;
  } catch (e) {
    console.log(e);
  }
}



export const ApiPost = async (props: string, dat: string) => {
  try {
    const resp = await axios.post(`${URL}${props}`, dat);
    return resp;
  } catch (err) {
    return err;
  }
};

//Leer datos de una api privada que necesite un acces token
export async function envApiDirToken(props: string, tokken: string) {
  try {
    const resp = await axios.get(`${URL}${props}`, {
      headers: {
        Authorization:  tokken,
      },
    });
    return resp;
  } catch (e) {
    return e;
  }
}

