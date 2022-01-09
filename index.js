const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");
const { DB_CONNECTION_STRING } = require("./config");

const LOCAL_PORT = 5000;
const PORT = process.env.PORT || LOCAL_PORT;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});
mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log("DB Connnection Successfull");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Sever running at ${res.url}`);
  })
  .catch((error) => console.error(error));
