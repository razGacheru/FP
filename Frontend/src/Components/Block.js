import * as React from 'react';
import Box from '@mui/material/Box';

export default function Block({value}) {
  return (
    <div style={{ width: '100%' }}>
      <Box
        component="span"
        sx={(theme) => ({
          display: 'block',
          p: 1,
          m: 1,
          width: '30%',
          margin: 'auto',
          bgcolor: '#ffx',
          border: '1px solid',
          borderColor: '#006eb6',
          borderRadius: 2,
          fontSize: '1.5rem',
          fontWeight: '700',
          ...theme.applyStyles('dark', {
            bgcolor: '#101010',
            color: 'grey.300',
            borderColor: 'grey.800',
          }),
        })}
      >
        ${value} per year
      </Box>
    </div>
  );
}