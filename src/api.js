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

const configPost = {
    maxBodyLength: Infinity,
    headers: {
        'X-Api-Key': '6hZcRCabLp0nStN8rvsIBiHFM1lU_Vxj',
    }
};

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

    const response = await axios.post(`${url_api}/houses`, data, configPost)
    return response.data
}

const editListing = async (houseData, id) => {

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

    const response = await axios.post(`${url_api}/houses/${id}`, data, configPost)
    return response.data
}


const uploadImage = async (id, image) => {

    var data = new FormData();
    data.append('image', image)

    const response = await axios.post(`${url_api}/houses/${id}/upload`, data, configPost)
    return response.data
}

const deleteListing = async (id) => {
    await axios.delete(`${url_api}/houses/${id}`, config)
}

export { getListing, createListing, uploadImage, deleteListing, editListing }