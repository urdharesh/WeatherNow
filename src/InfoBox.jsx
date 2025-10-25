import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

import Typography from '@mui/material/Typography';


export default function InfoBox({info}){

    const init_url="https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/QB6JJZJTHNFVRJGGBOGUUMVHPE.jpg";

    const hot_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMHFERmBsiMPilr7L5pnPLUuSbv-uhnWtXw&s";
    const cold_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDiWLg-mVLMWsKM0wU8uEqQ9d1zwNwxXpn0A&s";
    const rain_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkUQWamYGqLl2uLsRG7l1RbCBCJaQcB-IMw&s";




    return(
        <div className="InfoBox">
         <br />
<div className='cardContainer'>
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? rain_url : info.temp>15?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80? <ThunderstormIcon/> : info.temp>15?<SunnyIcon/>:<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color='text.secondary' component={'span'} >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temperature = {info.tempMin}&deg;C</p>
            <p>Max Temperature = {info.tempMax}&deg;C</p>
            <p>
                The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
            </p>

  
        </Typography>
      </CardContent>
 
    </Card>

        </div>
        </div>
    );

}