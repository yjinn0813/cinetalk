/* 프로필 페이지 - 유저정보 영역 */

import { Box, Typography } from '@mui/material';
import UserStats from './UserStats';

type Props = {
  userName?: string;
};

const UserInfo = ({ userName }: Props) => {
  return (
    <Box textAlign="center" mb={3}>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: 26,
        }}
      >
        {userName || '홍길동'}
      </Typography>

      <UserStats />
    </Box>
  );
};

export default UserInfo;