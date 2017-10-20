const moviesJson = require('../movies.json');

exports.home = (req, res) => {
    const movies = moviesJson.movies;
    res.render('home', {
        title: "Star Wars Movies",
        movies: movies,
    });
};
exports.singleMovie = (req,res) => {
    const movies = moviesJson.movies;
    const episode_number = req.params.episode_number;
    if(episode_number >= 1 && episode_number <= 6) {
        const movie = movies[episode_number -1];
        const title = movie.title;
        res.render('movie_single',{
            movies:movies,
            title:title,
            movie:movie,
        });
    } else {
        res.send('Episode doess not exist.');``
    }
    
};

exports.test = (req, res) => {
    const movies = moviesJson.movies;
    res.render("home",{
        movies:movies,
        title:'test title',
    });
};

exports.notFound = (req, res) => {
    res.send("404 Not Found this page.");
};