import { Card, ImageList, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import Layout from './components/Layout';
import { CluthFrenos } from './core/interface/CluthFrenos';
import Carrusel from './pages/Carrousel';
import Tarjeta from './pages/Tarjeta';
import axiosClient from './utils/axios';

function App() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts: YouTubeProps['opts'] = {
    height: '500vh',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [data, setData] = useState<CluthFrenos[]>([]);
  const properties = {
    arrayData: data
  }

  const getAll = () => {
    axiosClient.get('/getall').subscribe({
      next: (res) => {
        setData(res.data);
      },
      error: (err) => {
      },
      complete: () => {

      }
    })
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Layout>
      <Grid container sx={{ justifyContent: 'center' }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 5, sm: 10, md: 14 }}>
        <Card elevation={1} sx={{padding: '1vh', width: '100%', height: '60vh'}}>
        <Container fixed >
          <Box sx={{ height: '100%'}} >
          <YouTube videoId="4oPST6F-7q4" opts={opts} onReady={onPlayerReady} />
          </Box>
        </Container>
        </Card>
        
        <ImageList
          sx={{ width: '100%', height: '100%', paddingTop: '1vh' }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {properties.arrayData.map((item, i) => (
            <ImageListItem sx={{ padding: '1vh' }} key={item.img} cols={1} rows={2}>
              <Tarjeta arrayData={[item]} key={i} />
            </ImageListItem>
          ))}
        </ImageList>
        <Grid item xs={20}>
          {properties.arrayData.length > 0 ? <Carrusel
            {...properties} /> : <Grid />}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
