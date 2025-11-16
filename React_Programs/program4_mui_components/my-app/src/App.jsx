import React from "react";
import { Button, TextField, Card, CardContent, Alert, Switch } from "@mui/material";

function App() {
  return (
    <div style={{ width: "450px", margin: "auto", marginTop: "40px" }}>
      <h2>Display of 5 MUI Components</h2>

      {/* 1. Button */}
      <Button variant="contained" color="primary" style={{ marginBottom: "15px" }}>
        MUI Button
      </Button>

      {/* 2. TextField */}
      <div style={{ marginBottom: "15px" }}>
        <TextField label="Enter Name" variant="outlined" fullWidth />
      </div>

      {/* 3. Card */}
      <Card style={{ marginBottom: "15px" }}>
        <CardContent>
          <h3>MUI Card</h3>
          <p>This is a Material UI card component.</p>
        </CardContent>
      </Card>

      {/* 4. Alert */}
      <Alert severity="success" style={{ marginBottom: "15px" }}>
        This is a Success Alert!
      </Alert>

      {/* 5. Switch */}
      <div>
        <p>Toggle Switch:</p>
        <Switch defaultChecked />
      </div>
    </div>
  );
}

export default App;
