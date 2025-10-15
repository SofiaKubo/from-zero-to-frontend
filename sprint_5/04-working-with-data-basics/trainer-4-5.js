function getMovieData() {
  const animatedMovies = [
    {
      title: 'The Lion King',
      director: 'Roger Allers, Rob Minkoff',
      releaseDate: new Date(1994, 5, 24),
      genre: 'Animation,Adventure, Drama',
    },
    {
      title: 'Zootopia',
      director: 'Byron Howard, Rich Moore',
      releaseDate: new Date(2016, 2, 4),
      genre: 'Animation, Adventure, Comedy',
    },
    {
      title: 'Finding Nemo',
      director: 'Andrew Stanton',
      releaseDate: new Date(2003, 4, 30),
      genre: 'Animation, Adventure, Comedy',
    },
    {
      title: 'Frozen',
      director: 'Chris Buck, Jennifer Lee',
      releaseDate: new Date(2013, 10, 27),
      genre: 'Animation, Adventure, Comedy',
    },
    {
      title: 'Toy Story',
      director: 'John Lasseter',
      releaseDate: new Date(1995, 10, 22),
      genre: 'Animation, Adventure, Comedy',
    },
  ];

  return animatedMovies;
}

function bubbleSort(array, compareFn) {
  let n = array.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (compareFn(array[i], array[i + 1]) > 0) {
        // Обмен значений
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
    n--; // Оптимизация: уменьшение области проверки
  } while (swapped);

  return array;
}

let movies = getMovieData();

let sortedMovies = bubbleSort(movies, (a, b) => {
  if (a.releaseDate < b.releaseDate) {
    return -1;
  }
  if (a.releaseDate > b.releaseDate) {
    return 1;
  }
  return 0;
});

console.log(sortedMovies);
