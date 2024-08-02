import React, { useState, useEffect } from 'react';
import { Container, Box, Button, Typography, Grid } from '@mui/material';
import QuoteCard from './components/QuoteCard';
import { fetchQuotes } from './services/quoteService';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const getQuotes = async () => {
    try {
      const newQuote = await fetchQuotes();
      setQuote(newQuote);
    } catch (error) {
      console.error('Error fetching quotes: ', error);
    }
  };

  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  const unsaveQuote = (quoteToRemove) => {
    setSavedQuotes(savedQuotes.filter(savedQuote => savedQuote !== quoteToRemove));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#f0f4c3',
        padding: 4,
      }}
    >
      <Container 
        sx={{ 
          textAlign: 'center', 
          padding: 4, 
          backgroundColor: '#ffffff', 
          borderRadius: 2, 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          maxWidth: '800px',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Ron Swanson Quotes
        </Typography>
        {quote && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <QuoteCard quote={quote} onSave={saveQuote} />
          </Box>
        )}
        <Button 
          variant="contained" 
          color="primary" 
          onClick={getQuotes} 
          sx={{ marginTop: 2 }}
        >
          Get New Quote
        </Button>
        <Typography variant="h5" component="h2" gutterBottom sx={{ marginTop: 4 }}>
          Saved Quotes
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {savedQuotes.map((savedQuote, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <QuoteCard quote={savedQuote} onUnsave={unsaveQuote} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
