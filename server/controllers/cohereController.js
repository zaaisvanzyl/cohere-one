const { openAIGPT3, openAIDALLE2 } = require('../controllers/openAIController')


const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

const cohereClassification = async (req, res) => {
    const response = await cohere.classify({
        model: 'large',
        inputs: [req.body.inputs],
        examples: [{"text": "Write a python function that adds two numbers", "label": "Codex"}, {"text": "Create an image of a dog wearing a space suit", "label": "DALLE-2"}, {"text": "Classify the text from this chat conversation", "label": "Cohere"}, {"text": "Create a picture of a cowboy on mars", "label": "DALLE-2"}, {"text": "Create a Java method that checks two integers for equality", "label": "Codex"}, {"text": "Summarize this academic paper", "label": "GPT-3"}, {"text": "Create a SQL request to find all users who live in California and have over 1000 credits", "label": "GPT-3"}, {"text": "Write an outline for an essay about Ben Franklin", "label": "GPT-3"}, {"text": "Classify the sentiment of this tweet", "label": "Cohere"}, {"text": "Identify the toxic language in this chat", "label": "Cohere"}, {"text": "Write a Python function that prints \"Hello world\"", "label": "Codex"}, {"text": "Create an image of a monkey piloting a space ship", "label": "DALLE-2"}, {"text": "Create a video of a car driving", "label": "Other"}, {"text": "Text my mum \"Hello\"", "label": "Other"}, {"text": "Build a new internet", "label": "Other"}]
    });
    const result = `Prediction: ${response.body.classifications[0].prediction} \nConfidence level: ${response.body.classifications[0].confidence}`

    const prompt = req.body.inputs
    const prediction = response.body.classifications[0].prediction
    console.log("Prediction: " + prediction)

    if (prediction === 'GPT-3') {
        const openAIResponse = await openAIGPT3(prompt)
        console.log("Openai response: " + openAIResponse)
        res.status(200).json(openAIResponse)
    }

    if (prediction === 'DALLE-2') {
        const response = await openAIDALLE2(prompt)
        console.log("Image url: " + response)
        res.status(200).json(response)
    }


    // console.log(result)

    // res.status(200).json(openAIResponse)
}

module.exports = {
    cohereClassification
}