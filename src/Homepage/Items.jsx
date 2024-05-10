import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './taxi.jpg';
import {Row} from 'react-bootstrap';
import { useState ,useEffect } from 'react';
import Itemsdata from './Itemsdata.json';

export default function MediaCard() {

    const [display, setDisplay] = useState([]);
    useEffect(() => {
        // Fetching data from the JSON file
        setDisplay(Itemsdata.Item);
      }, []);
    console.log(display);
  return (

    <Row md={2} xs={3} lg={3} className='g-3'>
        {display.map((i) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {i.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {i.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     ))}
    </Row>
  );
}
