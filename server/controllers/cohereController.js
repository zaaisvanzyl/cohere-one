const mongoose = require('mongoose')

const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

const cohereClassification = async (req, res) => {
    const response = await cohere.classify({
        model: 'large',
        inputs: [req.body.inputs],
        examples: [{"text": "Write a python function that adds two numbers", "label": "Codex"}, {"text": "Create an image of a dog wearing a space suit", "label": "DALLE-2"}, {"text": "Classify the text from this chat conversation", "label": "Cohere"}, {"text": "Create a picture of a cowboy on mars", "label": "DALLE-2"}, {"text": "Create a Java method that checks two integers for equality", "label": "Codex"}, {"text": "Summarize this academic paper", "label": "GPT-3"}, {"text": "Create a SQL request to find all users who live in California and have over 1000 credits", "label": "GPT-3"}, {"text": "Write an outline for an essay about Ben Franklin", "label": "GPT-3"}, {"text": "Classify the sentiment of this tweet", "label": "Cohere"}, {"text": "Identify the toxic language in this chat", "label": "Cohere"}, {"text": "Write a Python function that prints \"Hello world\"", "label": "Codex"}, {"text": "Create an image of a monkey piloting a space ship", "label": "DALLE-2"}, {"text": "Create a video of a car driving", "label": "Other"}, {"text": "Text my mum \"Hello\"", "label": "Other"}, {"text": "Build a new internet", "label": "Other"}]
    });
    console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`);
    res.status(200).json(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`)
}

module.exports = {
    cohereClassification
}