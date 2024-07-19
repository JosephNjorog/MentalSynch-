const mongoose = require('mongoose');

const PhysioSessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    exercises: [
        {
            exerciseId: String,
            performanceData: Object,
            analysis: Object
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('PhysioSession', PhysioSessionSchema);
