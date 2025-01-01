import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import axios from 'axios';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

// const API_URL = import.meta.env.DEV ? 'http://localhost:3000' : '';

export const Login=()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${API_URL}/api/login`, {
  //       username,
  //       password,
  //     });
  //     login(response.data.token);
  //     navigate('/');
  //   } catch (err) {
  //     setError('Invalid username or password');
  //   }
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login to Birthday Surprise
        </Typography>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Link to="/register">
            Don't have an account? Register
          </Link>
        </Box>
      </Box>
    </Container>
  );
}