let movies = [
  { id: "1", title: "los asesinos de la luna", actors: [""], year: 2023 },
  { id: "2", title: "Wonka", actors: [""], year: 2023 },
  { id: "3", title: "The Covenant", actors: [""], year: 2023 },
  { id: "4", title: "Oppenheimer", actors: [""], year: 2023 },
  { id: "5", title: "Aquaman 2", actors: [""], year: 2023 },
];

let directors = [
  { id: "1", name: "director 1", verified: true },
  { id: "2", name: "director 2", verified: true },
  { id: "3", name: "director 3", verified: true },
];

let reviews = [
  {
    id: "1",
    rating: 9,
    content: "The movie was great",
    director_id: "1",
    movie_id: "2",
  },
  {
    id: "2",
    rating: 10,
    content: "Excelent movie",
    director_id: "2",
    movie_id: "1",
  },
  {
    id: "3",
    rating: 8,
    content: "Not a bad movie",
    director_id: "3",
    movie_id: "3",
  },
  {
    id: "4",
    rating: 7,
    content: "I recommend to watch the movie",
    director_id: "2",
    movie_id: "4",
  },
  {
    id: "5",
    rating: 10,
    content: "A 100% recommended",
    director_id: "2",
    movie_id: "5",
  },
  {
    id: "6",
    rating: 8,
    content: "Great story that keeps you catched",
    director_id: "3",
    movie_id: "2",
  },
];

export default { movies, directors, reviews };
