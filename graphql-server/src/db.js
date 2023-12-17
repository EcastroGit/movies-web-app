let movies = [
    {id: "1", title: "los asesinos de la luna", actors: [""], year: 2023 },
    {id: "2", title: "Wonka", actors: [""], year: 2023 },
    {id: "3", title: "", actors: [""], year: 2023 },
    {id: "4", title: "", actors: [""], year: 2023 },
    {id: "5", title: "", actors: [""], year: 2023 }
]

let directors = [
    { id: "1", name: "mario", verified: true},
    { id: "2", name: "pepito", verified: true},
    { id: "3", name: "fulanito", verified: true}
]

let reviews = [
    {id: "1", rating: 9, content: "", director_id: "1", movie_id: "2"},
    {id: "2", rating: 10, content: "", director_id: "2", movie_id: "1"},
    {id: "3", rating: 8, content: "", director_id: "3", movie_id: "3"},
    {id: "4", rating: 7, content: "", director_id: "2", movie_id: "4"},
    {id: "5", rating: 10, content: "", director_id: "2", movie_id: "5"},
    {id: "6", rating: 8, content: "", director_id: "3", movie_id: "2"}
]

export default { movies, directors, reviews }