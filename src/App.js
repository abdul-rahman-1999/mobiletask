import './App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function App() {

  const mobile = [{
    "model": "OnePlus 9 5G",
    "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
    "company": "Oneplus"
    },
    {
    "model": "Iphone 13 mini",
    "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
    "company": "Apple"
    },
    {
    "model": "Samsung s21 ultra",
    "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
    "company": "Samsung"
    },
    {
    "model": "Xiomi mi 11",
    "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
    "company": "Xiomi"
    }
    ]

  return <>
  <Box sx={{textAlign:"center",display:"flex",flexDirection:{xs:"column",sm:"row",md:"row"},gap:10,justifyContent:"center"}}>
{
  mobile.map((lst) => <Cards data={lst} />)
}  
</Box>
  </>
}

function Cards({data}){
  return<>

<Card sx={{width:"250px",padding:"20px"}}>
<CardMedia
sx={{objectFit:"contain"}}
        component="img"
        height="140"
        image={data.img}
        alt="green iguana"
/>
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
          {data.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.company}
        </Typography>
      </CardContent>
  </Card>

  </>
}


export default App;
