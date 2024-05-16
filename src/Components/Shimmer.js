import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        margin:'3px',
        width: '100%',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.600' }}
        variant="rectangular"
        width={400}
        margin={2}
        height={200}
      />
       <Skeleton
        sx={{ bgcolor: 'grey.700' }}
        variant="rectangular"
        width={400}
        margin={2}
        height={200}
      />
       <Skeleton
        sx={{ bgcolor: 'grey.700' }}
        variant="rectangular"
        width={400}
        margin={2}
        height={200}
      />
       <Skeleton
        sx={{ bgcolor: 'grey.700' }}
        variant="rectangular"
        width={400}
        margin={2}
        height={200}
      />
     </Box>
  );
}