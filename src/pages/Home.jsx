import { useState } from 'react';
import { Box, styled } from '@mui/material';
// import Sunset from '../assets/bg.jpg';
import Form from '../components/Form';
import Result from '../components/Result';

const Component = styled(Box)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
});

// const Image = styled(Box)({
//   backgroundImage: `url(${Sunset})`,
//   width: '30%',
//   height: '100%',
//   backgroundSize: 'cover',
// });

const Home = () => {
  const [value, setValue] = useState({});
  return (
    <Component>
      <Box style={{ width: '100%', height: '100%' }}>
        <Form setValue={setValue} />
        <Result value={value} />
      </Box>
    </Component>
  );
};

export default Home;
