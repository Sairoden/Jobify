const register = async (req, res) => {
  return res.status(200).send("register");
};

const login = async (req, res) => {
  return res.status(200).send("login");
};

export { register, login };
