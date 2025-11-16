const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require('morgan');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.text());

// CORS middleware - Allow access from any IP/port
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Max-Age", "86400");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use(morgan('dev'));

// Helper function to read files
const readFile = (filePath) => {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    return null;
  }
};

app.get("/", (req, res) => {
  res.json({
    message: "APL Practical Programs API",
    endpoints: {
      programs: "/program/:id",
      description: "Returns the source code for the specified program",
      usage: "Use /program/:id to get plain text source code that you can copy-paste",
      notes: {
        react: "Programs 1-4 (includes related CSS files)",
        nodeBasics: "Programs 5-19",
        express: "Programs 20-26 (22-24 combined, 25 has two files)",
        mongodb: "Program 27 (returns three files)"
      }
    }
  });
});

app.get("/program/:id", (req, res) => {
  const { id } = req.params;
  const programId = parseInt(id);

  try {
    // REACT PROGRAMS (1-4)
    if (programId === 1) {
      const content = readFile(path.join(__dirname, "React_Programs/program1_class_registration/my-app/src/RegistrationForm.js"));
      if (content) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.send(content);
        return;
      }
    }

    if (programId === 2) {
      const appContent = readFile(path.join(__dirname, "React_Programs/program2_function_registration/my-app/src/App.jsx"));
      const formContent = readFile(path.join(__dirname, "React_Programs/program2_function_registration/my-app/src/RegistrationForm.jsx"));
      
      if (appContent && formContent) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        let response = `========== App.jsx ==========\n\n${appContent}\n\n`;
        response += `========== RegistrationForm.jsx ==========\n\n${formContent}`;
        res.send(response);
        return;
      }
    }

    if (programId === 3) {
      const appContent = readFile(path.join(__dirname, "React_Programs/program3_css_demo/my-app/src/App.jsx"));
      const appCss = readFile(path.join(__dirname, "React_Programs/program3_css_demo/my-app/src/App.css"));
      const buttonModuleCss = readFile(path.join(__dirname, "React_Programs/program3_css_demo/my-app/src/Button.module.css"));
      const indexCss = readFile(path.join(__dirname, "React_Programs/program3_css_demo/my-app/src/index.css"));
      
      if (appContent && appCss && buttonModuleCss) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        let response = `========== App.jsx ==========\n\n${appContent}\n\n`;
        response += `========== App.css ==========\n\n${appCss}\n\n`;
        response += `========== Button.module.css ==========\n\n${buttonModuleCss}\n\n`;
        response += `========== index.css ==========\n\n${indexCss}`;
        res.send(response);
        return;
      }
    }

    if (programId === 4) {
      const appContent = readFile(path.join(__dirname, "React_Programs/program4_mui_components/my-app/src/App.jsx"));
      
      if (appContent) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.send(appContent);
        return;
      }
    }

    // NODE BASICS (5-19)
    if (programId >= 5 && programId <= 19) {
      let fileName = "";

      if (programId === 5) fileName = "5_hello.js";
      else if (programId === 6) fileName = "6_callback.js";
      else if (programId === 7) fileName = "7_readfile.js";
      else if (programId === 8) fileName = "8_writefile.js";
      else if (programId === 9) fileName = "9_readdir.js";
      else if (programId === 10) fileName = "10_fs_functions.js";
      else if (programId === 11) fileName = "11_console_functions.js";
      else if (programId === 12) fileName = "12_process_functions.js";
      else if (programId === 13) fileName = "13_os_functions.js";
      else if (programId === 14) fileName = "14_path_functions.js";
      else if (programId === 15) fileName = "15_net_functions.js";
      else if (programId === 16) fileName = "16_dns_functions.js";
      else if (programId === 17) fileName = "17_stream_read.js";
      else if (programId === 18) fileName = "18_stream_write.js";
      else if (programId === 19) {
        const arithmeticModule = readFile(path.join(__dirname, "Node_Basics/arithmetic_module/arithmetic.js"));
        const useModule = readFile(path.join(__dirname, "Node_Basics/arithmetic_module/use_module.js"));
        
        if (arithmeticModule && useModule) {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          let response = `========== arithmetic.js ==========\n\n${arithmeticModule}\n\n`;
          response += `========== use_module.js ==========\n\n${useModule}`;
          res.send(response);
          return;
        }
      }

      if (fileName) {
        const content = readFile(path.join(__dirname, "Node_Basics", fileName));
        if (content) {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.send(content);
          return;
        }
      }
    }

    // EXPRESS PROGRAMS (20-26)
    if (programId >= 20 && programId <= 26) {
      let fileName = "";

      if (programId === 20) fileName = "20_request_methods.js";
      else if (programId === 21) fileName = "21_response_methods.js";
      else if (programId >= 22 && programId <= 24) {
        fileName = "22_23_24_combined.js";
        const content = readFile(path.join(__dirname, "Express_Programs", fileName));
        if (content) {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.send(content);
          return;
        }
      }
      else if (programId === 25) {
        const appJs = readFile(path.join(__dirname, "Express_Programs/25_router_demo/app.js"));
        const usersJs = readFile(path.join(__dirname, "Express_Programs/25_router_demo/users.js"));
        
        if (appJs && usersJs) {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          let response = `========== app.js ==========\n\n${appJs}\n\n`;
          response += `========== users.js ==========\n\n${usersJs}`;
          res.send(response);
          return;
        }
      }
      else if (programId === 26) fileName = "26_app_use.js";

      if (fileName) {
        const content = readFile(path.join(__dirname, "Express_Programs", fileName));
        if (content) {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.send(content);
          return;
        }
      }
    }

    // MONGODB (27)
    if (programId === 27) {
      const createDb = readFile(path.join(__dirname, "MongoDB/create_db.js"));
      const insertRecords = readFile(path.join(__dirname, "MongoDB/insert_records.js"));
      const appJs = readFile(path.join(__dirname, "MongoDB/app.js"));

      if (createDb && insertRecords && appJs) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        let response = `========== create_db.js ==========\n\n${createDb}\n\n`;
        response += `========== insert_records.js ==========\n\n${insertRecords}\n\n`;
        response += `========== app.js ==========\n\n${appJs}`;
        res.send(response);
        return;
      }
    }

    // If no content found
    res.status(404).send(`Program ${programId} not found. Valid IDs are 1-27`);

  } catch (err) {
    res.status(500).send(`Server error: ${err.message}`);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Internal Server Error: ${err.message}`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}..`);
  console.log(`API is running at http://localhost:${PORT}`);
  console.log(`Accessible from any IP on port ${PORT}`);
  console.log(`Get a program at http://localhost:${PORT}/program/:id (1-27)`);
});
