import { apiUrl } from "../../consts.js";

const createUser = async (data) => {
  const response = await fetch(`${apiUrl}/user/signup`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'                
      },
    body: JSON.stringify(data)
});
  return await response.json();
};

export default createUser;