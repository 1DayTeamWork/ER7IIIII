const userApi = {
  getAllUser: async () => {
    const res = await fetch("http://localhost:3000/users/all")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    return res.json();
  },
};
export default userApi;
