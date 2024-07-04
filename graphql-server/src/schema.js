export const typeDefs = `#graphql
type Movie {
    id: ID! 
    title: String!
    actors: [String]!
    year: String!
    reviews: [Review!]
}
type Review {
    id: ID! 
    rating: Int!
    content: String!
    movie: Movie!
    director: Director! 
}
type Director {
    id: ID! 
    name: String!
    verify: Boolean!
    reviews: [Review!]
}
type Query {
    reviews: [Review]
    review(id: ID!): Review
    movies: [Movie]
    movie(id: ID!): Movie
    directors: [Director]
    director(id: ID!): Director
}
type Mutation {
    addMovie(movie: AddMovieInput!): Movie
    deleteMovie(id: ID!): [Movie]
    updateMovie(id: ID!, edits: EditMovieInput!): Movie
}
input AddMovieInput {
    title: String!,
    actors: [String!]!,
    year: Int!
}
input EditMovieInput {
    title: String,
    actors: [String]!,
    year: Int!
}
`;
