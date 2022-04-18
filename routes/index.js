const express = require('express');
const Movie = require('../models/movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movie.find()
      .then(function (allMovies) {
        console.log("Found movies", allMovies);
        res.render("movies", { allMovies: allMovies });
      })
      .catch(function (err) {
        console.log("Something went wrong", err.message);
      });
  });
router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
      .then(function (foundMovie) {
        console.log("Found movies", foundMovie);
        res.render("movie-details", { foundMovie: foundMovie });
      })
      .catch(function (err) {
        console.log("Something went wrong", err.message);
      });
  });

module.exports = router;

// app.get("/", function (req, res, next) {
//     res.render("index", { title: "Iron Cinema" });
//   });

// app.get("/movies", function (req, res, next) {
//     movie.find()
//       .then(function (results) {
//         console.log("Success!", results);
//         res.render("movie", {movie: results});
//       })
//       .catch(function (err) {
//         console.log("Something went wrong", err.message);
//       });
//   });

//   app.post("/movies", function(req, res, next){
//     movie.create({
//       title: req.body.title,
//       director: req.body.director,
//       stars: req.body.stars,
//       image: req.body.image,
//       description: req.body.description,
//       showtimes: req.body.showtimes,
//     })
//     .then(function (createdMovie) {
//       res.json(createdMovie);
//     })
//     .catch(function (error) {
//       res.json(error.message);
//     });
//   });