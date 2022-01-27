// Apollo
const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

// Express
const express = require('express');
const app = express();

const cors = require('cors');

// Other
const resolvers = require('./schemas/resolvers');
const typeDefs = require('./schemas/typeDefs');
const models = require('./models');

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 3001 }, () => {
    console.log('🚀 Server running on http://localhost:3001/graphql');
  });
}

models.sequelize.sync().then(() => {
  startServer();
});
