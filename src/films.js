// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movi) => movi.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movi) => movi.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = getMoviesFromDirector(array, director);

  let i = 0;
  let result = movies.reduce((count, movi) => {
    i++;

    return (count += movi.score);
  }, 0);

  return parseFloat((result / i).toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let quantity = 20;
  let item = 0;
  let arrayOrderedFirst20 = [];

  let arrayCopia = [...array];

  for (let i = 0; i < array.length; i++) {
    arrayCopia[i] = array[i].title;
  }

  let arrayCopiaOrdered = arrayCopia.toSorted();

  while (item < quantity && arrayCopiaOrdered[item] != null) {
    arrayOrderedFirst20[item] = arrayCopiaOrdered[item];
    item++;
  }

  return arrayOrderedFirst20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayFinal = [];
  let arrayYears = array.map(function (element) {
    return element.year;
  });
  arrayYears.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arrayYears.length; i++) {
    let currentYear = arrayYears[i];

    let arrayConjunto = array.filter(function (element) {
      return element.year === currentYear;
    });

    arrayConjunto.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });

    for (let j = 0; j < arrayConjunto.length; j++) {
      arrayFinal.push(arrayConjunto[j]);
    }

    while (i + 1 < arrayYears.length && arrayYears[i + 1] === currentYear) {
      i++;
    }
  }

  return arrayFinal;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, cat) {
  let i = 0;

  let arrayByCat = array.filter(function (element) {
    for (let i = 0; i < element.genre.length; i++) {
      if (element.genre[i] == cat) {
        return true;
      }
    }
    return false;
  });

  let total = arrayByCat.reduce(function (acc, item) {
    i++;
    return (acc += item.score);
  }, 0);


  return parseFloat((total / i).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let modifiedArray = array.map((element) => {
    return { ...element, duration: calculaDurada(element.duration) };
  });
  return modifiedArray;

  function calculaDurada(s) {
    let hEnInt = extraeH(s);
    let mEnInt = extraeM(s);
    return hEnInt + mEnInt;
  }

  function extraeH(s) {
    let h = s.indexOf('h');
    let n = s[h - 1];
    return parseInt(n) * 60;
  }

  function extraeM(s) {
    let m = s.indexOf('m');
    if (m != -1) {
      let totalM = 0;
      totalM = parseInt(s[m - 1]);
      if (s[m - 2] != ' ') {
        totalM += parseInt(s[m - 2]) * 10;
      }
      return totalM;
    } else {
      return 0;
    }
  }
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let movisByYear = array.filter((element) => element.year == year);

  let movisByScore = movisByYear.sort((a, b) => b.score - a.score);
  let winner = [movisByScore[0]];

  return winner;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
