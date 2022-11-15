import { UserRegister } from "../../../pages/auth/user-register.interface";
import axios from "axios"

const registerAdmin = async (data: UserRegister) => {
  const { data: response } = await axios.post(
    "http://localhost:3000/api/users",
    data
  );
  return response.data;
};
export default registerAdmin
