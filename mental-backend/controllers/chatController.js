const ChatSession = require('../models/ChatSession');
const aiService = require('../services/aiService');

exports.startChatSession = async (req, res) => {
    try {
        const newSession = new ChatSession({ userId: req.user.id });
        await newSession.save();
        res.status(201).json(newSession);
    } catch (error) {
        console.error('Error starting chat session:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.sendMessage = async (req, res) => {
    const { sessionId, message } = req.body;
    try {
        const session = await ChatSession.findById(sessionId);
        if (!session) {
            return res.status(404).json({ message: 'Chat session not found' });
        }
        const aiResponse = await aiService.getResponse(message);
        session.messages.push({ user: message, bot: aiResponse });
        await session.save();
        res.status(200).json({ aiResponse });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
