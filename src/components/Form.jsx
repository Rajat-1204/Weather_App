import { useState } from 'react';
import { Box, InputBase, Button, styled } from '@mui/material';
import { getWeather } from '../services/api';

const Container = styled(Box)({
  background: 'black',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
});

const Input = styled(InputBase)({
  color: 'white',
  margin: '5px',
  fontSize: '18px',
});

const GetButton = styled(Button)({
  background: '#e67e22',
  width: '100px',
  margin: '5px',
});

const Form = ({ setValue }) => {
  const [data, setData] = useState({ city: '' });
  const handleChange = (e) => {
    setData({ city: e.target.value });
  };
  const getWeatherInfo = async () => {
    let response = await getWeather(data.city);
    setValue(response);
  };
  return (
    <Container>
      <Input placeholder="City" onChange={(e) => handleChange(e)} />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Search
      </GetButton>
    </Container>
  );
};

export default Form;
