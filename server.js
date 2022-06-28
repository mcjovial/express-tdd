const app = require("./app");
const mongodb = require("./mongodb/mongodb.connect");

mongodb.connect();

app.listen(4000, () => {
  console.log("Server is now running!");
});
