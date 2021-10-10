const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],

    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            d = new Date();
            let year = d.getFullYear() + 1;
            let month = d.getMonth();
            let day = d.getDate();
            let c = new Date(year, month, day);
            return c;
        }
    },

})
module.exports = mongoose.model('Flight', flightSchema);
