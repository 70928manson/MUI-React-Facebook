import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {

  const theme = createTheme({
    palette: {

    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;