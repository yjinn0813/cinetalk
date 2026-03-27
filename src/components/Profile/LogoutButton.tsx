/* 프로필 페이지 - 로그아웃 버튼 */

import { Button } from '@mui/material';

type Props = {
  onLogout: () => void;
};

const LogoutButton = ({ onLogout }: Props) => {
  return (
    <Button
      fullWidth
      variant="contained"
      color="error"
      onClick={onLogout}
      sx={{
        fontSize: 16,
        borderRadius: '8px',
        padding: '14px 0',
      }}
    >
      로그아웃
    </Button>
  );
};

export default LogoutButton;