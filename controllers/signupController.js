module.exports.signup = function (req, res) {
  console.log(req.body);
  return res.status(200).json({ ...req.body, status: "Success" });
};