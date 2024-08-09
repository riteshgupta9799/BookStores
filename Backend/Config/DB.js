const mongoose = require("mongoose");
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected");
    
} catch (error) {
    console.log("error:",error);
}
