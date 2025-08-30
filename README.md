# AI-Agents-Fun
AI Agents fun dev with Node.js

# AI Agent with Weather Lookup

This is a **Node.js app** that has an AI-powered agent.

## To Run

```bash
➜  AI-Agents-Fun git:(main) ✗ node agent.js "What's the weather in New York?"

[dotenv@17.2.1] injecting env (2) from .env -- tip: ⚙️  write to custom object with { processEnv: myObject }
I looked it up: New York: 21.1°C, Partly cloudy


This project demonstrates a simple AI agent powered by OpenAI's API that can respond to user input and fetch live weather information.

## Features
- Uses **OpenAI GPT model** (`gpt-4o-mini`) to process natural language input.
- Includes a **weather lookup tool** via the [WeatherAPI](https://www.weatherapi.com/).
- Accepts input from the **command line**.
- Falls back to OpenAI responses when weather lookup is not requested.

## How It Works
1. User enters input via CLI.
2. The agent sends the input to OpenAI for processing.
3. If the input mentions "weather in \<city\>", the agent:
   - Calls the WeatherAPI with the provided city.
   - Returns the current temperature and condition.
4. Otherwise, it responds using OpenAI.

## Requirements
- Node.js (v18+ recommended)
- API keys for:
  - [OpenAI](https://platform.openai.com/)
  - [WeatherAPI](https://www.weatherapi.com/)

## Setup
1. Clone this repo and install dependencies:
   ```bash
   npm install



