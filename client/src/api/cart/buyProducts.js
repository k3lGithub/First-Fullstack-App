import { apiUrl } from "../../consts.js";

const buyProduct = async (id, data) => {
    console.log(id,data);
  const response = await fetch(`${apiUrl}/product/update/${id}`, {
    method: 'PATCH',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'                
      },
    body: JSON.stringify(data)
});
  return await response;
};

export default buyProduct;