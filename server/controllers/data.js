const triageData = [
    {"text": "Write a python function that adds two numbers", "label": "Codex"},
    {"text": "Create a Java method that checks two integers for equality", "label": "Codex"},
    {"text": "Create a SQL query to find all users who live in California and have over 1000 credits", "label": "Codex"},
    {"text": "Write a python function that prints \"Hello world\"", "label": "Codex"},
    {"text": "Table customers, columns = [CustomerId, FirstName, LastName, Company, Address, City, State, Country, PostalCode, Phone, Fax, Email, SupportRepId, TotalSpend] Create a MySQL query for all customers in Texas who have spent over five thousand dollars.", "label": "Codex"},
    {"text": "Python 3 Get the current value of a Bitcoin in US dollars using the bitcoincharts api", "label": "Codex"},
    {"text": "Extract all the html from the string and replace the tags with \'\'", "label": "Codex"},
    {"text": "Classify the text from the following chat conversation", "label": "Cohere Classify"},
    {"text": "Classify the sentiment of this tweet", "label": "Cohere Classify"},
    {"text": "Triage inbound chatbot or email requests to understand user intent and automatically issue responses", "label": "Cohere Classify"},
    {"text": "Route inbound customer support requests to their respective teams.", "label": "Cohere Classify"},
    {"text": "Classify posts, reviews, and more to understand how they perceive your company/brand", "label": "Cohere Classify"},
    {"text": "Summarize the following academic paper", "label": "Cohere Generate"},
    {"text": "Idenfy the toxic language in this chat", "label": "Cohere Generate"},
    {"text": "Write a story about a robot who falls in love with a human", "label": "Cohere Generate"},
    {"text": "Generate an introductory paragraph to a blog post given a blog title, audience, and tone of voice.", "label": "Cohere Generate"},
    {"text": "Summarize this dialogue: Cohere offers an API to add cutting-edge language processing to any system. Cohere trains massive language models and puts them behind a simple API. Moreover, through training, users can create massive models customized to their use case and trained on their data. This way, Cohere handles the complexities of collecting massive amounts of text data, the ever evolving neural network architectures, distributed training, and serving models around the clock.\n\n", "label": "Cohere Generate"},
    {"text": "Create an image of a dog wearing a space suit", "label": "DALLE-2"},
    {"text": "Create a picture of a cowboy on mars", "label": "DALLE-2"},
    {"text": "Create an image of a monkey piloting a space ship", "label": "DALLE-2"},
    {"text": "Create an image of an astronaut riding a horse in a photorealistic style", "label": "DALLE-2"},
    {"text": "Write an outline for an essay about Ben Franklin", "label": "GPT-3"},
    {"text": "What would the world look like if AI became sentient and decided to take over?", "label": "GPT-3"},
    {"text": "Create a detailed map of an imaginary world", "label": "GPT-3"},
    {"text": "Create promo copy for the FamilyTime mobile application. It allows unlimited uploading, special filters and makes it easy to create albums of photos and videos. It runs on iOS and Android:", "label": "GPT-3"},
    {"text": "Create a video of a car driving through a meadow", "label": "Other"},
    {"text": "Text mom \"Hello\"", "label": "Other"},
    {"text": "Build a new internet", "label": "Other"},
    {"text": "Design a new type of AI that can beat humans at any game", "label": "Other"},
    {"text": "Invent a brand new form of transportation that doesn\'t use any fossil fuels", "label": "Other"},
    {"text": "Solve world hunger", "label": "Other"},
    {"text": "Build a motorcycle", "label": "Other"}
]

module.exports = {
    triageData
}