// Apollo
const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

// Express
const express = require('express');
const expressJwt = require('express-jwt');
const app = express();

// Other
const resolvers = require('./schemas/resolvers');
const typeDefs = require('./schemas/typeDefs');
const models = require('./models');
const { JWT_SECRET } = require('./config');

app.use(
  expressJwt({
    secret: JWT_SECRET,
    algorithms: ['HS256'],
    credentialsRequired: false,
  })
);

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

models.sequelize.sync({}).then(() => {
  startServer();
});
