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
        res.render('not_found', {
            movies: movies,
            title:'Not Found',
        });
    }
    
};

exports.notFound = (req, res) => {
    const movies = moviesJson.movies;
    res.render("not_found",{
        movies:movies,
        title:'Not Found 404',
    });
};

exports.test = (req, res) => {
    res.render("not_found");
};