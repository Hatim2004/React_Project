import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { data, useNavigate } from "react-router-dom";

export default function Create() {
    const [Iteam, setItem] = useState("");
    const [Price, setPrice] = useState(0);
    const [id, setID] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            <Grid
                container
                spacing={0}
                direction={"column"}
                alignItems={"center"}
                mt={"18vh"}
            >
                <Typography variant="h4" mb={"1em"}>Create iteam</Typography>
                <TextField label='Iteam'
                    onChange={(eo) => {
                        setItem(eo.target.value)
                    }}
                    autoComplete="off"
                >

                </TextField>
                <TextField label='Price' placeholder="$" sx={{ mt: '2em' }}
                    onChange={(eo)=>{
                        setPrice(Number(eo.target.value))
                    }}
                    autoComplete="off"
                >

                </TextField>

                <Button onClick={() => {
                    fetch("http://localhost:3000/Mydata", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({Iteam, Price})
                    }
                    ).then(()=>{navigate('/')})
               
                }}
                    variant='contained' sx={{ mt: '2em' }}>Sumbit</Button>
            </Grid>
        </>
    )
}