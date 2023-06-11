import { Button, Typography } from "@mui/material";
import { Settings, Add } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary" size="small">Contained</Button>
      <Button startIcon={<Add />} variant="contained" color="success" size="small">Add new post</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>
      <Button variant="contained" disabled sx={{
        backgroundColor: "skyblue",
        color: "#888",
        margin: 5,
        "&:hover": {
          backgroundColor: "lightblue",
        },
        "&:disabled": {
          backgroundColor: "gray",
          color: "white"
        }
      }}>My button</Button>
    </div>
  );
}

export default App;
