import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// Types
import { typeDefs } from "./src/schema.js";
// Resolvers
import { resolvers } from "./src/resolvers.js";

// Server
const server = new ApolloServer({
  typeDefs,
  // Resolvers: functions that hadle the queries
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
    path: "api/movies-reviews",
  },
});

console.log("server listening on port:", 4000);
