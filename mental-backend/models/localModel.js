const mongoose = require('mongoose');

const LocalModelSchema = new mongoose.Schema({
    modelName: {
        type: String,
        required: true
    },
    modelData: {
        type: Buffer,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('LocalModel', LocalModelSchema);
