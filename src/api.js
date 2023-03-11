import axios from "axios"

const url_api = 'https://api.intern.d-tt.nl/api'

const config = {
    maxBodyLength: Infinity,
    headers: {
        'X-Api-Key': '6hZcRCabLp0nStN8rvsIBiHFM1lU_Vxj'
    }
};

const getListing = async () => {
    const response = await axios.get(`${url_api}/houses`, config)
    return response.data
}

export  {getListing}