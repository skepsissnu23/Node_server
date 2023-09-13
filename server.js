const express = require('express')
const dotenv = require("dotenv") ;

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/src/Node_page/index.html')
})


// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log(" Database connected 📟 "))
//   .catch((err) => console.log(err))


app.listen(port, () => {
  console.log(` 🚀 Server node running on port ${port}`)
})