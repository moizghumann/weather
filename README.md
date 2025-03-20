# Weather MCP Server

This is a **Weather MCP Server** that provides weather data using the Model Context Protocol (MCP). It is built with TypeScript and runs on Node.js.

## 📌 Features
- Fetches and processes weather data.
- Uses Model Context Protocol (MCP) SDK.
- Built with TypeScript for type safety.
- Configurable via environment variables.

## 🛠 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/weather-mcp-server.git
cd weather-mcp-server
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Build the Project
```sh
npm run build
```

### 4️⃣ Run the Server
```sh
npm start
```

Alternatively, you can run the compiled JavaScript directly:
```sh
node build/index.js
```

## 🔧 Configuration
This project uses environment variables for configuration. You can create a `.env` file in the root directory:

```
API_KEY=your_weather_api_key
PORT=3000
```

## 📝 Scripts
| Command        | Description |
|---------------|-------------|
| `npm run build` | Compiles TypeScript into JavaScript |
| `npm start`    | Runs the compiled server |
| `npm run lint` | Lints TypeScript files using ESLint |

## 📁 Project Structure
```
weather-mcp-server/
│── src/
│   ├── index.ts       # Main entry point
│── build/             # Compiled JavaScript output
│── package.json       # Project dependencies and scripts
│── tsconfig.json      # TypeScript configuration
│── .eslintrc.js       # ESLint configuration
```

## 🐞 Troubleshooting
- If `npm run build` doesn't produce output, check TypeScript logs:
  ```sh
  npx tsc --diagnostics
  ```
- If Node.js cannot find `index.js`, ensure `build/` contains compiled files:
  ```sh
  ls build/
  ```
- If running on **Windows**, `chmod` will fail in `package.json`. Remove `chmod 755 build/index.js` from the build script.

## 📜 License
This project is licensed under the **ISC License**.

---
🔧 Developed by **Moiz Ghuman**

