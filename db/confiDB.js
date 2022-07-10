const { MongoClient} = require('mongodb');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


const uri = "mongodb+srv://Genesis:fXnxaaqsYZ@Q9Jb@cluster0.dkpbj.mongodb.net/mantenimiento?retryWrites=true&w=majority";
const client = new MongoClient(uri, options);

client.connect(err => {
  client.db("test").collection("devices");
  client.close();
  console.log("base de datos encendida")
});
