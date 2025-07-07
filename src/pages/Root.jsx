import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { teal } from '@mui/material/colors';
import Appbar from "../components/AppBar";


const Root = () => {
    const [myMode, setmyMode] = useState("dark");
    const darkTheme = createTheme({
        palette: {
            // @ts-ignore
            mode: myMode,
            primary: { main: teal[500] }

        },
    });
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Appbar  setMode={setmyMode} Mode={myMode}/>
                <Outlet />
            </ThemeProvider>
        </div>
    )
}

export default Root;