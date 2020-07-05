import {apiUrl} from '../../consts.js';

const newProduct = async(data) => {
   const response = await $.ajax({
        type: "POST",
        url: `${apiUrl}/products/new`,
        data: JSON.stringify(data),
        contentType: 'application/json',
    })
    return response
}

export default newProduct