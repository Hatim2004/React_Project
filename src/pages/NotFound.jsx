import { Box, Typography, useTheme } from "@mui/material";

export default function NotFound() {
    const theme = useTheme();
    return (
        <Box>
            <Typography variant="h4" color={theme.palette.error.dark} sx={{ mt: '10vh', textAlign:'center'}}>
                Page not found :(
            </Typography>
        </Box>

    )
}