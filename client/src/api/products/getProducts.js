import {apiUrl} from '../../consts.js';

const getProduct = async(data) => {
   const response = await $.ajax({
        type: "GET",
        url: `${apiUrl}/product/`,
        data: JSON.stringify(data),
        contentType: 'application/json',
    })
    return response
}

export default getProduct