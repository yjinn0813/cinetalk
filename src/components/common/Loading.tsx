/* Loading Skeleton for React Query */

import { Box, Skeleton } from '@mui/material';

const Loading = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Skeleton variant="rectangular" height={200} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
};

export default Loading;