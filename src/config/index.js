import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://gagres:Gagres1!@ds213239.mlab.com:13239/chattychatchat",
  "bodyLimit": "100kb"
}
