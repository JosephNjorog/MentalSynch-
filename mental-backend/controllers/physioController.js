const PhysioSession = require('../models/PhysioSession');
const vrService = require('../services/vrService');

exports.startPhysioSession = async (req, res) => {
    try {
        const newSession = new PhysioSession({ userId: req.user.id });
        await newSession.save();
        res.status(201).json(newSession);
    } catch (error) {
        console.error('Error starting physio session:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.completeExercise = async (req, res) => {
    const { sessionId, exerciseId, performanceData } = req.body;
    try {
        const session = await PhysioSession.findById(sessionId);
        if (!session) {
            return res.status(404).json({ message: 'Physio session not found' });
        }
        const analysis = await vrService.analyzePerformance(performanceData);
        session.exercises.push({ exerciseId, performanceData, analysis });
        await session.save();
        res.status(200).json({ analysis });
    } catch (error) {
        console.error('Error completing exercise:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
