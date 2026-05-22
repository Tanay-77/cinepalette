export interface MoviePalette {
  id: string;
  title: string;
  year: number;
  director: string;
  category: string;
  barcodeUrl: string; // The URL to the real movie barcode image
  posterUrl: string; // The URL to the real movie poster image
  colorTheme: 'green' | 'blue' | 'orange' | 'pink' | 'red';
}

export const MOVIE_PALETTES: MoviePalette[] = [
  {
    id: "m1",
    title: "Blade Runner 2049",
    year: 2017,
    director: "Denis Villeneuve",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Blade-Runner-2049-color-of-cinema-1200x500.png",
    posterUrl: "https://i.pinimg.com/1200x/2d/d5/02/2dd502fffcb78eb63c3b9ba5a7607cc5.jpg",
    colorTheme: "orange"
  },
  {
    id: "m2",
    title: "Titanic",
    year: 1997,
    director: "James Cameron",
    category: "Romance",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Titanic-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/10/27/09/102709a174fa7c0c9740e5ed1705f548.jpg",
    colorTheme: "blue"
  },
  {
    id: "m3",
    title: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    category: "Thriller",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2022/06/Jaws-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/20/41/f6/2041f61f1c54f6fcd66d101f9e1ced19.jpg",
    colorTheme: "blue"
  },
  {
    id: "m4",
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/The-Matrix-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/736x/1d/80/85/1d8085e37c443d07f9f383b7cd178a98.jpg",
    colorTheme: "green"
  },
  {
    id: "m5",
    title: "Joker",
    year: 2019,
    director: "Todd Phillips",
    category: "Drama",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2020/02/Joker-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/ab/93/99/ab9399d4928087e66e3db782b554c70b.jpg",
    colorTheme: "green"
  },
  {
    id: "m6",
    title: "Moonlight",
    year: 2016,
    director: "Barry Jenkins",
    category: "Drama",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Moonlight-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/5a/fc/2a/5afc2a476296eb2d675f9331df4424b3.jpg",
    colorTheme: "blue"
  },
  {
    id: "m7",
    title: "Amélie",
    year: 2001,
    director: "Jean-Pierre Jeunet",
    category: "Romance",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2020/05/Am%C3%A9lie-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/736x/34/75/b0/3475b0f1b19fb8d057a7765569ec9c31.jpg",
    colorTheme: "green"
  },
  {
    id: "m8",
    title: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    category: "Action",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2020/02/Mad-Max-Fury-Road-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/0e/c4/97/0ec497104b9643e9adf2998765773af1.jpg",
    colorTheme: "orange"
  },
  {
    id: "m9",
    title: "Interstellar",
    year: 2017,
    director: "Christopher Nolan",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Interstellar-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/36/65/6e/36656e1fabeb3f61c484794490c65abf.jpg",
    colorTheme: "green"
  },
  {
    id: "m10",
    title: "Avatar",
    year: 2009,
    director: "James Cameron",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Avatar-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/40/0f/c9/400fc9b652cc7c2881d928f17807e8ae.jpg",
    colorTheme: "blue"
  },
  {
    id: "m11",
    title: "Dune",
    year: 2021,
    director: "Denis Villeneuve",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2021/12/Dune-2021-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/8f/da/b3/8fdab34821e24a443003d0d8bcbf357b.jpg",
    colorTheme: "orange"
  },
  {
    id: "m12",
    title: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/The-Martian-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/40/0f/c9/400fc9b652cc7c2881d928f17807e8ae.jpg",
    colorTheme: "orange"
  },
  {
    id: "m13",
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    category: "Drama",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Fight-Club-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/736x/61/ce/0b/61ce0b0ba064d3d4371d3e61a31d548e.jpg",
    colorTheme: "green"
  },
  {
    id: "m14",
    title: "Se7en",
    year: 1995,
    director: "David Fincher",
    category: "Thriller",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Seven-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/736x/97/ac/2e/97ac2e3a2bb4e23f1699746380f218c1.jpg",
    colorTheme: "green"
  },
  {
    id: "m15",
    title: "Barbie",
    year: 2023,
    director: "Greta Gerwig",
    category: "Comedy",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2023/09/Barbie-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/1200x/c1/d4/26/c1d42613921a3574d3fb81d53f4db629.jpg",
    colorTheme: "pink"
  },
  {
    id: "m16",
    title: "La La Land",
    year: 2016,
    director: "Damien Chazelle",
    category: "Musical",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/La-La-Land-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/736x/8f/6d/0e/8f6d0ec3205a2f67062c6d466c6dc35c.jpg",
    colorTheme: "blue"
  },
  {
    id: "m17",
    title: "Life of Pi",
    year: 2012,
    director: "Ang Lee",
    category: "Adventure",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Life-of-Pi-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/736x/f5/21/44/f52144dc5ed9718a3f6abe1917abfa0f.jpg",
    colorTheme: "green"
  },
  {
    id: "m18",
    title: "John Wick",
    year: 2014,
    director: "Chad Stahelski",
    category: "Action",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/11/John-Wick-color-of-cinema-800x451.png",
    posterUrl: "https://i.pinimg.com/736x/41/a5/42/41a5420f5f904f54dad88a9d778b84ab.jpg",
    colorTheme: "blue"
  }
];

export const DUMMY_MOVIES: MoviePalette[] = [
  { id: "d1", title: "The Godfather", year: 1972, director: "Francis Ford Coppola", category: "Crime", barcodeUrl: "", posterUrl: "", colorTheme: "orange" },
  { id: "d2", title: "Pulp Fiction", year: 1994, director: "Quentin Tarantino", category: "Crime", barcodeUrl: "", posterUrl: "", colorTheme: "orange" },
  { id: "d3", title: "The Dark Knight", year: 2008, director: "Christopher Nolan", category: "Action", barcodeUrl: "", posterUrl: "", colorTheme: "blue" },
  { id: "d4", title: "Inception", year: 2010, director: "Christopher Nolan", category: "Sci-Fi", barcodeUrl: "", posterUrl: "", colorTheme: "blue" },
  { id: "d5", title: "Forrest Gump", year: 1994, director: "Robert Zemeckis", category: "Drama", barcodeUrl: "", posterUrl: "", colorTheme: "green" },
  { id: "d6", title: "The Shawshank Redemption", year: 1994, director: "Frank Darabont", category: "Drama", barcodeUrl: "", posterUrl: "", colorTheme: "blue" },
  { id: "d7", title: "Goodfellas", year: 1990, director: "Martin Scorsese", category: "Crime", barcodeUrl: "", posterUrl: "", colorTheme: "red" },
  { id: "d8", title: "The Lord of the Rings", year: 2001, director: "Peter Jackson", category: "Fantasy", barcodeUrl: "", posterUrl: "", colorTheme: "green" },
  { id: "d9", title: "Gladiator", year: 2000, director: "Ridley Scott", category: "Action", barcodeUrl: "", posterUrl: "", colorTheme: "orange" },
  { id: "d10", title: "Jurassic Park", year: 1993, director: "Steven Spielberg", category: "Sci-Fi", barcodeUrl: "", posterUrl: "", colorTheme: "green" },
  { id: "d11", title: "The Silence of the Lambs", year: 1991, director: "Jonathan Demme", category: "Thriller", barcodeUrl: "", posterUrl: "", colorTheme: "blue" },
  { id: "d12", title: "Saving Private Ryan", year: 1998, director: "Steven Spielberg", category: "War", barcodeUrl: "", posterUrl: "", colorTheme: "green" },
  { id: "d13", title: "Schindler's List", year: 1993, director: "Steven Spielberg", category: "Biography", barcodeUrl: "", posterUrl: "", colorTheme: "blue" },
  { id: "d14", title: "The Departed", year: 2006, director: "Martin Scorsese", category: "Crime", barcodeUrl: "", posterUrl: "", colorTheme: "green" },
  { id: "d15", title: "Whiplash", year: 2014, director: "Damien Chazelle", category: "Drama", barcodeUrl: "", posterUrl: "", colorTheme: "orange" },
  { id: "d16", title: "The Prestige", year: 2006, director: "Christopher Nolan", category: "Mystery", barcodeUrl: "", posterUrl: "", colorTheme: "blue" },
  { id: "d17", title: "The Lion King", year: 1994, director: "Roger Allers", category: "Animation", barcodeUrl: "", posterUrl: "", colorTheme: "orange" },
  { id: "d18", title: "Star Wars: Episode IV", year: 1977, director: "George Lucas", category: "Sci-Fi", barcodeUrl: "", posterUrl: "", colorTheme: "blue" },
  { id: "d19", title: "Spirited Away", year: 2001, director: "Hayao Miyazaki", category: "Animation", barcodeUrl: "", posterUrl: "", colorTheme: "pink" },
  { id: "d20", title: "Parasite", year: 2019, director: "Bong Joon Ho", category: "Thriller", barcodeUrl: "", posterUrl: "", colorTheme: "green" },
  { id: "d21", title: "The Truman Show", year: 1998, director: "Peter Weir", category: "Comedy", barcodeUrl: "", posterUrl: "", colorTheme: "blue" },
  { id: "d22", title: "WALL-E", year: 2008, director: "Andrew Stanton", category: "Animation", barcodeUrl: "", posterUrl: "", colorTheme: "orange" },
  { id: "d23", title: "Everything Everywhere", year: 2022, director: "Daniel Kwan", category: "Sci-Fi", barcodeUrl: "", posterUrl: "", colorTheme: "pink" },
  { id: "d24", title: "No Country for Old Men", year: 2007, director: "Ethan Coen", category: "Crime", barcodeUrl: "", posterUrl: "", colorTheme: "orange" },
  { id: "d25", title: "Spider-Man: Into the Spider-Verse", year: 2018, director: "Bob Persichetti", category: "Animation", barcodeUrl: "", posterUrl: "", colorTheme: "pink" }
];
