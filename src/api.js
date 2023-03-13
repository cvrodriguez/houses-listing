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

const createListing = async (houseData) => {

    var data = new FormData();
    data.append('price', houseData.price);
    data.append('bedrooms', houseData.bedrooms);
    data.append('bathrooms', houseData.bathrooms);
    data.append('size', houseData.size);
    data.append('streetName', houseData.streetName);
    data.append('houseNumber', houseData.houseNumber);
    data.append('numberAddition', houseData.numberAddition);
    data.append('zip', houseData.zip);
    data.append('city', houseData.city);
    data.append('constructionYear', houseData.constructionYear);
    data.append('hasGarage', houseData.hasGarage);
    data.append('description', houseData.description);


    const configPost = {
        maxBodyLength: Infinity,
        headers: {
            'X-Api-Key': '6hZcRCabLp0nStN8rvsIBiHFM1lU_Vxj',
            
        }
    };
    const response = await axios.post(`${url_api}/houses`, data, configPost)
    return response.data
}
export { getListing, createListing }