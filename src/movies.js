// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergMovies = [];
  spielbergMovies = movies.filter(function (movie) {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return spielbergMovies;
    }
  });
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let scores = movies.map(function (movies) {
    if (!movies.score) {
      return 0;
    } else {
      return movies.score;
    }
  });

  let sum = scores.reduce(function (score1, score2) {
    return score1 + score2;
  });

  sum /= Math.round(scores.length);
  return Number(sum.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = [];
  dramaMovies = movies.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return dramaMovies;
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  let dramaMoviesScore = dramaMovies.map(function (dramaMoviesScore) {
    return dramaMoviesScore.score;
  });
  let dramaMovieSum = dramaMoviesScore.reduce(function (score1, score2) {
    return score1 + score2;
  });
  dramaMovieSum /= dramaMovies.length;
  return Number(dramaMovieSum.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let ordered = [];
  ordered = movies.sort(function (movie1, movie2) {
    ordered = movie1.year - movie2.year;
    if (movie1.year === movie2.year) {
      if (movie1.title.toUpperCase() < movie2.title.toUpperCase()) {
        return -1;
      } else {
        return 1;
      }
    }
    return ordered;
  });
  return Array.from(ordered);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let alphabet = movies;
  alphabet.sort(function (title1, title2) {
    if (title1.title < title2.title) {
      return -1;
    } else {
      return 1;
    }
  });
  firstTitles = [];
  if (alphabet.length < 20) {
    for (let i = 0; i < alphabet.length; i++) {
      firstTitles.push(String(alphabet[i].title));
    }
    return firstTitles;
  }
  if (alphabet.length > 20) {
    for (let i = 0; i < 20; i++) {
      firstTitles.push(String(alphabet[i].title));
    }
  }
  return firstTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
