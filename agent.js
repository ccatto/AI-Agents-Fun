  import OpenAI from "openai";
  import fetch from "node-fetch";
  import dotenv from "dotenv";

  dotenv.config();

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Tool: weather lookup
  async function getWeather(city) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=${city}`
    );
    const data = await response.json();
    return `${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
  }

  // Agent loop
  async function agent(userInput) {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an assistant AI Agent. You can call tools if needed." },
        { role: "user", content: userInput },
      ],
    });

    const message = response.choices[0].message.content;

    if (userInput.toLowerCase().includes("weather")) {
      const city = userInput.split("in ")[1];
      const weather = await getWeather(city);
      return `I looked it up: ${weather}`;
    }

    return message;
  }

  // Run from CLI
  const input = process.argv.slice(2).join(" ") || "Hello agent!";
  agent(input).then(console.log);
