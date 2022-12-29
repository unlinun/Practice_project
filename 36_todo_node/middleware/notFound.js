const notFound = (req, res) => {
  res.status(404).send("No task found! Please try again!");
};

module.exports = notFound;
