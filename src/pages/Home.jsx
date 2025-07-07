import '../index.css'
import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { data, useNavigate } from 'react-router-dom';

export default function Home() {
    const [Total, setTotal] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:3000/Mydata")
            .then((response) => response.json())
            .then((data) => setTotal(data))
    }, [Total]);

    return (
        <>
            <Typography variant="h3" mb={'2vh'} mt={'14vh'} textAlign={'center'}>
                Home Page
            </Typography>
            <Box>
                {Total.map((iteam) => {
                    return (
                        <Paper className='paper' key={iteam.id}>

                            <Typography variant='h6'>{iteam.Iteam}</Typography>
                            <Typography variant='h6'>{iteam.Price}</Typography>

                            <IconButton className='close' onClick={() => {
                                fetch(`http://localhost:3000/Mydata/${iteam.id}`, {
                                    method: "DELETE"
                                }).then()
                                }}>
                                <CloseIcon />
                            </IconButton>

                        </Paper>
                    )
                })}
            </Box>


        </>
    )
}