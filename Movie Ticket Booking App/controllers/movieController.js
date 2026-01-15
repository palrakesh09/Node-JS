const Movie = require('../models/Movie');
const Show = require('../models/Show');
const Ticket = require('../models/Ticket');

const getHomePage = async (req, res) => {
    const movies = await Movie.find({});
    res.render('user/home', { movies });
};

const getMovieDetails = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    const shows = await Show.find({
        movieID: movie._id,
        showDate: { $gte: new Date() },
        availableSeats: { $gt: 0 }
    }).populate('screenID');
    res.render('user/movie-details', { movie, shows });
};

const bookTicket = async (req, res) => {
    const { showID, seatNumbers } = req.body;
    const seatArray = seatNumbers.split(',').map(s => s.trim());
    const numberOfSeats = seatArray.length;

    try {
        const show = await Show.findById(showID);
        if (show.availableSeats < numberOfSeats) {
            return res.send("Not enough seats available.");
        }

        // 1. Create Ticket
        await Ticket.create({
            showID: show._id,
            custID: req.session.user_id,
            seatNumbers: seatArray
        });

        // 2. Update Show availability
        show.availableSeats -= numberOfSeats;
        await show.save();

        res.redirect('/my-tickets');

    } catch (err) {
        res.status(500).send("Booking failed.");
    }
};

const getMyTickets = async (req, res) => {
    const tickets = await Ticket.find({ custID: req.session.user_id })
        .populate({
            path: 'showID',
            populate: { path: 'movieID screenID' }
        });
    res.render('user/my-tickets', { tickets });
};

module.exports = {
    getHomePage,
    getMovieDetails,
    bookTicket,
    getMyTickets
}