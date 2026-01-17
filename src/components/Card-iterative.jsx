import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// Importando a imagens
import Cozinha1 from "../assets/Cozinha1.jpg"
import Cozinha2 from "../assets/Cozinha0b4.avif"
import Cozinha3 from "../assets/Cozinha023.avif"
import Cozinha4 from "../assets/Cozinha04.jpg"
import Banheiro1 from "../assets/Banheiro024.avif"
import Quarto2 from "../assets/Quarto02.avif"
import Painel1 from "../assets/Painel01.webp"
import Painel2 from "../assets/Painel02.webp"





export default function TitlebarBelowMasonryImageList() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',  // Alinha horizontalmente ao centro
        alignItems: 'center',      // Alinha verticalmente ao centro
        overflowY: 'scroll',       // Adiciona rolagem vertical
      }}
    >
      <Box sx={{ width: 1200, height: 780 }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: Cozinha3,
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: Banheiro1,
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: Cozinha2,
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: Cozinha1,
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
      img: Cozinha3,
      title: 'Chairs',
      author: 'Taylor Simpson',
    },
    {
    img: Quarto2,
    title: 'Laptop',
    author: 'Ben Kolde',
},
  {
      img: Painel1,
      title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
      img: Painel2,
      title: 'Coffee',
      author: 'Jen P.',
    },
    {
      img: Cozinha1,
      title: 'Blinds',
      author: 'Darren Richardson',
    },
  {
    img: Banheiro1,
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: Cozinha4,
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: Quarto2,
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  {
    img: Banheiro1,
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: Cozinha4,
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: Quarto2,
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  }
];
