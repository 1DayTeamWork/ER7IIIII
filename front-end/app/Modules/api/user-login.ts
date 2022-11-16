import UserLogin from "../../../pages/auth/user-login.interface";
import axios from "axios"

const loginUser = async (data: UserLogin) => {
  const { data: response } = await axios.post(
    "http://localhost:3000/api/auth/signin",
    data
  );
  return response.data;
};

export default loginUser