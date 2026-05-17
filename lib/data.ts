export interface MoviePalette {
  id: string;
  title: string;
  year: number;
  director: string;
  category: string;
  barcodeUrl: string; // The URL to the real movie barcode image
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
    colorTheme: "orange"
  },
  {
    id: "m2",
    title: "Titanic",
    year: 1997,
    director: "James Cameron",
    category: "Romance",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Titanic-color-of-cinema-800x451.png",
    colorTheme: "blue"
  },
  {
    id: "m3",
    title: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    category: "Thriller",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2022/06/Jaws-color-of-cinema-800x451.png",
    colorTheme: "blue"
  },
  {
    id: "m4",
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/The-Matrix-color-of-cinema-800x451.png",
    colorTheme: "green"
  },
  {
    id: "m5",
    title: "Joker",
    year: 2019,
    director: "Todd Phillips",
    category: "Drama",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2020/02/Joker-color-of-cinema-800x451.png",
    colorTheme: "green"
  },
  {
    id: "m6",
    title: "Moonlight",
    year: 2016,
    director: "Barry Jenkins",
    category: "Drama",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Moonlight-color-of-cinema-800x451.png",
    colorTheme: "blue"
  },
  {
    id: "m7",
    title: "Amélie",
    year: 2001,
    director: "Jean-Pierre Jeunet",
    category: "Romance",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2020/05/Am%C3%A9lie-color-of-cinema-800x451.png",
    colorTheme: "green"
  },
  {
    id: "m8",
    title: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    category: "Action",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2020/02/Mad-Max-Fury-Road-color-of-cinema-800x451.png",
    colorTheme: "orange"
  },
  // --- New additions for difficulty scaling ---
  {
    id: "m9",
    title: "Interstellar",
    year: 2017,
    director: "Christopher Nolan",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Interstellar-color-of-cinema-800x451.png",
    colorTheme: "green"
  },
  {
    id: "m10",
    title: "Avatar",
    year: 2009,
    director: "James Cameron",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Avatar-color-of-cinema-800x451.png",
    colorTheme: "blue"
  },
  {
    id: "m11",
    title: "Dune",
    year: 2021,
    director: "Denis Villeneuve",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2021/12/Dune-2021-color-of-cinema-800x451.png",
    colorTheme: "orange"
  },
  {
    id: "m12",
    title: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    category: "Sci-Fi",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/The-Martian-color-of-cinema-800x451.png",
    colorTheme: "orange"
  },
  {
    id: "m13",
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    category: "Drama",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Fight-Club-color-of-cinema-800x451.png",
    colorTheme: "green"
  },
  {
    id: "m14",
    title: "Se7en",
    year: 1995,
    director: "David Fincher",
    category: "Thriller",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Seven-color-of-cinema-800x451.png",
    colorTheme: "green"
  },
  {
    id: "m15",
    title: "Barbie",
    year: 2023,
    director: "Greta Gerwig",
    category: "Comedy",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2023/09/Barbie-color-of-cinema-800x451.png",
    colorTheme: "pink"
  },
  {
    id: "m16",
    title: "La La Land",
    year: 2016,
    director: "Damien Chazelle",
    category: "Musical",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/La-La-Land-color-of-cinema-800x451.png",
    colorTheme: "blue"
  },
  {
    id: "m17",
    title: "Life of Pi",
    year: 2012,
    director: "Ang Lee",
    category: "Adventure",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/05/Life-of-Pi-color-of-cinema-800x451.png",
    colorTheme: "green"
  },
  {
    id: "m18",
    title: "John Wick",
    year: 2014,
    director: "Chad Stahelski",
    category: "Action",
    barcodeUrl: "https://www.colorofcinema.com/wp-content/uploads/2019/11/John-Wick-color-of-cinema-800x451.png",
    colorTheme: "blue"
  }
];
