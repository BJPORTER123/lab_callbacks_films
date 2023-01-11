const assert = require("assert");
const Cinema = require("../models/cinema.js");
const Film = require("../models/film.js");

describe("Cinema", function () {
  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film("Moonlight", "drama", 2016, 111);
    bladeRunner = new Film("Blade Runner 2049", "sci-fi", 2017, 164);
    dunkirk = new Film("Dunkirk", "history", 2017, 96);
    blackPanther = new Film("Black Panther", "action", 2018, 134);
    trainspotting = new Film("T2 Trainspotting", "drama", 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it("should have a collection of films", function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it("should be able to get a list of film titles", function () {
    const actual = cinema.films.title;
    assert.deepStrictEqual(actual, films.title);
  });
  it("should be able to filter films by genre", function () {
    const actual = cinema.films.filter((films) => films.genre === "sci-fi");
    assert.deepStrictEqual(actual, [bladeRunner]);
  });
  it("should be able to calculate total running time of all films", function () {
    const actual = cinema.films.reduce((acc, films) => {
      return acc + films.length;
    }, 0);
    assert.strictEqual(actual, 622);
  });

  it("should be able to find a film by title", function () {
    const actual = cinema.films.find((film) => film.title === "Black Panther");
    assert.strictEqual(actual, blackPanther);
  });

  it("should be able to check whether there are some films from a particular year", function () {
    const actual = cinema.films.some((film) => film.year === 2017);
    assert.strictEqual(actual, true);
  });

  it("should be able to check whether there are no films from a particular year", function () {
    const actual = cinema.films.every((film) => film.year === 2010);
    assert.strictEqual(actual, false);
  });

  it("should be able to check whether all films are over a particular length", function () {
    const actual = cinema.films.every((film) => film.length > 150);
    assert.strictEqual(actual, false);
  });

  // it("Cinema should be able to filter films by year", function () {
  //   const filmsByProperty =
  // });
});
