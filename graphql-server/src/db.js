let games = [
    {id: "1", title: "Zelda", platform: ["Switch"]},
    {id: "2", title: "Resident Evil 3", platform: ["Play Station, Xbox"]},
    {id: "3", title: "Last of Us", platform: ["Xbox"]},
    {id: "4", title: "Age of Empires", platform: ["PC"]},
    {id: "5", title: "Fifa 23", platform: ["Play Station"]}
]

let authors = [
    { id: "1", name: "mario", verified: true},
    { id: "2", name: "pepito", verified: true},
    { id: "3", name: "fulanito", verified: true}
]

let reviews = [
    {id: "1", rating: 9, content: "Review 1: Awesome Game", author_id: "1", game_id: "2"},
    {id: "2", rating: 10, content: "Zelda is an awesome game", author_id: "2", game_id: "1"},
    {id: "3", rating: 8, content: "Review for Last of Us", author_id: "3", game_id: "3"},
    {id: "4", rating: 7, content: "I used to play Age of Empires when I was younger", author_id: "2", game_id: "4"},
    {id: "5", rating: 10, content: "lorem ipsum", author_id: "2", game_id: "5"},
    {id: "6", rating: 8, content: "Impressive but diffiucult to control the characters", author_id: "3", game_id: "2"}
]

export default { games, authors, reviews }