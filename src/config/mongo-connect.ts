import mongoose from 'mongoose'


const connectDb = () => {
  mongoose.connect('mongodb://localhost:2717/app', {
    useNewUrlParser: true, // Boilerplate
    // If you lose connectivity, try reconnecting every 2 seconds. After 60
    // attempts, give up and emit 'reconnectFailed'.
    reconnectTries: 60,
    reconnectInterval: 2000
  }, (err) => {
      if(err) throw err;
      console.log('Mongodb ready to use 🚀🚀🚀🚀')
  });
}


export default connectDb