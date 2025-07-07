import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Facts() {
  const [Fact, setFact] = useState("Cats facts");
  const [ImageUrl, setImageUrl] = useState("https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NodXR0ZXJzdG9jay0yMjc4Nzc2MTg3LWhlcm8uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=");
  async function getFact() {
    const url = "https://catfact.ninja/fact?max_length=140";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setFact(json.fact)
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getCatImage() {
    const url = "https://api.thecatapi.com/v1/images/search";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setImageUrl(json[0].url)
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <Typography variant="h3" mt={'1vh'} textAlign={'center'}>
        Fun fact about cats
      </Typography>

      <Card sx={{ maxWidth: 445, marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '2vh' }}>
        <CardMedia
          sx={{ height: 240 }}
          image={ImageUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cats
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {Fact}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" onClick={() => { getFact(); getCatImage(); }}>learn more about cats</Button>
        </CardActions>
      </Card>
      <Grid
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        mt={'2vh'}
      >
      </Grid>

    </>
  )
}
