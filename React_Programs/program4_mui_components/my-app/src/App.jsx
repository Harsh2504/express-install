import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Alert,
  Switch,
  AppBar,
  Toolbar,
  Typography,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Container,
  Box,
  Paper,
} from "@mui/material";

function App() {
  const [checked, setChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");

  return (
    <div>
      {/* 1. AppBar (Navbar) */}
      <AppBar position="static" style={{ marginBottom: "30px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Components Demo
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" style={{ marginTop: "30px" }}>
        <h2>Material-UI Components Showcase</h2>

        {/* 2. Typography */}
        <Paper style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Typography Component
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is a body text using Typography component
          </Typography>
          <Typography variant="caption" display="block">
            This is caption text
          </Typography>
        </Paper>

        {/* 3. Button */}
        <Box style={{ marginBottom: "20px" }}>
          <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
            Contained
          </Button>
          <Button variant="outlined" color="secondary" style={{ marginRight: "10px" }}>
            Outlined
          </Button>
          <Button variant="text">Text Button</Button>
        </Box>

        {/* 4. TextField */}
        <Box style={{ marginBottom: "20px" }}>
          <TextField
            label="Enter Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Enter Email"
            variant="filled"
            type="email"
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <TextField label="Enter Message" variant="standard" fullWidth multiline rows={3} />
        </Box>

        {/* 5. Card */}
        <Card style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              MUI Card Component
            </Typography>
            <Typography variant="body2">
              This is a Material UI card component with CardContent.
            </Typography>
          </CardContent>
        </Card>

        {/* 6. Alert */}
        <Alert severity="success" style={{ marginBottom: "15px" }}>
          This is a Success Alert!
        </Alert>
        <Alert severity="warning" style={{ marginBottom: "15px" }}>
          This is a Warning Alert!
        </Alert>

        {/* 7. Switch */}
        <Box style={{ marginBottom: "20px" }}>
          <Typography variant="subtitle2" gutterBottom>
            Toggle Switch:
          </Typography>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Enable Notifications"
          />
        </Box>

        {/* 8. Checkbox */}
        <Box style={{ marginBottom: "20px" }}>
          <Typography variant="subtitle2" gutterBottom>
            Checkboxes:
          </Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I agree to terms"
          />
          <FormControlLabel control={<Checkbox />} label="Subscribe to updates" />
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
            label={`Checkbox is ${checked ? "Checked" : "Unchecked"}`}
          />
        </Box>

        {/* 9. Radio Button */}
        <Box style={{ marginBottom: "20px" }}>
          <Typography variant="subtitle2" gutterBottom>
            Radio Buttons - Select Theme:
          </Typography>
          <RadioGroup
            value={selectedRadio}
            onChange={(e) => setSelectedRadio(e.target.value)}
          >
            <FormControlLabel value="option1" control={<Radio />} label="Light Theme" />
            <FormControlLabel value="option2" control={<Radio />} label="Dark Theme" />
            <FormControlLabel value="option3" control={<Radio />} label="Auto Theme" />
          </RadioGroup>
          <Typography variant="caption" display="block" style={{ marginTop: "10px" }}>
            Selected: {selectedRadio}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
