import { apiUrl } from "../../consts.js";

const loginUser = async (data) => {
  const response = await fetch(`${apiUrl}/user/login`, {
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

export default loginUser;