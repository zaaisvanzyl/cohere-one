const { openAIGPT3, openAIDALLE2 } = require('./openAIController')
const { triageData } = require('./data');


const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

const cohereClassification = async (req, res) => {
    const response = await cohere.classify({ 
        model: 'large', 
        inputs: [req.body.inputs],
        examples: triageData
      }); 

    const prompt = req.body.inputs
    const prediction = response.body.classifications[0].prediction
    console.log("Prediction: " + prediction)
    const confidences = response.body.classifications[0].confidences
    console.log(confidences)

    if (prediction === 'Cohere Generate') {
        res.status(200).json("Cohere (api not connected yet)")
    }


    if (prediction === 'Cohere Classify') {
        res.status(200).json("Cohere (api not connected yet)")
    }

    if (prediction === 'GPT-3') {
        const openAIResponse = await openAIGPT3(prompt)
        console.log("Openai response: " + openAIResponse)
        res.status(200).json(openAIResponse)
    }

    if (prediction === 'Codex') {
        res.status(200).json("Codex (api not connected yet)")
    }

    if (prediction === 'DALLE-2') {
        res.status(200).json("DALLE-2 (api not connected yet)")
    }

    if (prediction === 'Other') {
        res.status(200).json("Other (did not match any apis)")
    }

}


module.exports = {
    cohereClassification
}