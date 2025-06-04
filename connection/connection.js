const mongoose = require("mongoose");
class Connection {
  async serverConnect(app) {
    const port = process.env.PORT || 8000;
    try {
      app.listen(port, () => {
        console.log("Server Running on 3000");
      });
    } catch (err) {
      console.log(err);
    }
  }

  async dataConnect() {
    try {
      const connection = await mongoose.connect(
        `mongodb+srv://figmaplugin:figmaplugin@cluster0.r4rlcdi.mongodb.net/?retryWrites=true&w=majority`
      );
      console.log("Connected to MongoDB:", connection.connection.host);
    } catch (err) {
      console.log("MongoDB Connection Error:");
      console.log("Name:", err.name);
      console.log("Message:", err.message);
      console.log("Stack:", err.stack);
      if (err.code) console.log("Code:", err.code);
      if (err.reason) console.log("Reason:", err.reason);
    }
  }
}

const connection = new Connection();

module.exports = connection;
