export const authenticateUser = async (req, res, next) => {
  console.log("AUTH MIDDLEWARE");
  next();
};
