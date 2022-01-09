const DB_PASSWORD = "Azeemz511";
const SECRET_KEY = "SOME VERY SECRET KEY";
const DB_CONNECTION_STRING = "mongodb://localhost:27017/merng-social-media-app";
const DB_CONNECTION_STRING_LIVE = `mongodb+srv://azeem:${DB_PASSWORD}@cluster0.aht6s.mongodb.net/merng-social-media-app?retryWrites=true&w=majority`;
module.exports = {
  SECRET_KEY,
  DB_CONNECTION_STRING,
  DB_CONNECTION_STRING_LIVE,
};
