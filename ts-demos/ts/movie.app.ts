import { Movie } from "./movie.class";

console.log('Welcome to the movie app!~');

let m1: Movie = new Movie(1,"A movie",2023,"PG-13","A director");
console.log(m1.details());
