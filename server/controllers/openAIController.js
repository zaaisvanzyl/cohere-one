const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const openAIGPT3 = async (prompt) => {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        });
    return "Openai response: " + response.data.choices[0].text
}

const openAIDALLE2 = async (prompt) => {
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });
      return response.data.data[0].url;
}

module.exports = {
    openAIGPT3,
    openAIDALLE2
}