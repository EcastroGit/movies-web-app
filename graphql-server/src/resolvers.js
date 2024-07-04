import db from "./db.js";

const resolvers = {
  Query: {
    movies() {
      return db.movies;
    },
    movie(_, args) {
      return db.movies.find((movie) => movie.id === args.id);
    },
    directors() {
      return db.directors;
    },
    director(_, args) {
      return db.directors.find((director) => director.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Movie: {
    reviews(parent) {
      return db.reviews.filter((r) => r.movie_id === parent.id);
    },
  },
  Director: {
    reviews(parent) {
      return db.reviews.filter((r) => r.director_id === parent.id);
    },
  },
  Review: {
    director(parent) {
      return db.directors.find((d) => d.id === parent.director_id);
    },
    movie(parent) {
      return db.movie.find((m) => m.id === parent.director_id);
    },
  },
  Mutation: {
    deleteMovie(_, args) {
      db.movies = db.movies.filter((m) => m.id !== args.id);
      return db.movies;
    },
    addMovie(_, args) {
      let movie = {
        ...args.movie,
        id: Math.floor(Math.random() * 100000).toString(),
      };
      db.movies.push(movie);
      return movie;
    },
    updateMovie(_, args) {
      db.movies = db.movies.map((m) => {
        if (m.id === args.id) {
          return { ...m, ...args.edits };
        }

        return m;
      });
      return db.movies.find((m) => m.id === args.id);
    },
  },
};

export { resolvers };
