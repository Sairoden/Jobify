export const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);

  const statusCode = err.statusCode || 500;
  const msg = err.message || "Something went wrong, try again later";
  return res.status(statusCode).send({ msg });
};
