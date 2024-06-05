import { Box, Typography, styled } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';
import AirIcon from '@mui/icons-material/Air';

const Container = styled(Box)({
  margin: '30px 60px',
});
const Row = styled(Typography)({
  padding: '10px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  letterSpacing: 2,
  '& > svg': {
    margin: '-4px 10px',
  },
});

const Error = styled(Typography)({
  color: 'Red',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
});

const Result = ({ value }) => {
  return value && Object.keys(value).length > 0 ? (
    <Container>
      <Row>
        <LocationOnIcon />
        Location: {value.name},{value.sys.country}
      </Row>
      <Row>
        <DeviceThermostatIcon />
        Temperature: {value.main.temp}°C
      </Row>
      <Row>
        <OpacityIcon />
        Humidity: {value.main.humidity}
      </Row>
      <Row>
        <Brightness7Icon />
        Sun-rise: {new Date(value.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6Icon />
        Sun-set: {new Date(value.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <DehazeIcon />
        Weather: {value.weather[0].main}
      </Row>
      <Row>
        <CloudIcon />
        Clouds: {value.clouds.all}%
      </Row>
      <Row>
        <AirIcon />
        Wind: {value.wind.speed} m/s
      </Row>
    </Container>
  ) : (
    <Error>Please Enter the city name to check weather</Error>
  );
};
export default Result;
