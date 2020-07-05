import {apiUrl} from '../../consts.js';

const buyProduct = async(data) => {
   const response = await $.ajax({
        type: "GET",
        url: `${apiUrl}/products`,
        data: JSON.stringify(data),
        contentType: 'application/json',
    })
    return response
}

export default buyProduct