import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const QuoteCard = ({ quote, onSave, onUnsave }) => {
  return (
    <Card 
      sx={{ 
        width: 'fit-content', 
        marginBottom: 2, 
        animation: 'fadeIn 1s ease-in-out', 
        border: '1px solid #1976d2', 
        borderRadius: 2, 
        backgroundColor: '#e3f2fd',
        display: 'inline-block',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" color="text.primary">
          {quote}
        </Typography>
      </CardContent>
      {onSave && (
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => onSave(quote)}
          sx={{ margin: 1 }}
        >
          Save
        </Button>
      )}
      {onUnsave && (
        <Button 
          variant="contained" 
          color="error" 
          onClick={() => onUnsave(quote)}
          sx={{ margin: 1 }}
        >
          Unsave
        </Button>
      )}
    </Card>
  );
};

export default QuoteCard;
