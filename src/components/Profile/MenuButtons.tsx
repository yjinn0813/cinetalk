/* 프로필 페이지 - 메뉴 버튼 */

import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Menu = {
  name: string;
  path: string;
};

type Props = {
  menuList: Menu[];
};

const MenuButtons = ({ menuList }: Props) => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" gap={1.5}>
      {menuList.map((menu) => (
        <Button
          key={menu.name}
          fullWidth
          variant="outlined"
          onClick={() => navigate(menu.path)}
          sx={{
            fontSize: 16,
            borderRadius: '8px',
            padding: '14px 0',

            '&.MuiButton-outlined:hover': {
              backgroundColor: '#1e90ff',
              color: '#fff',
            },
          }}
        >
          {menu.name}
        </Button>
      ))}
    </Box>
  );
};

export default MenuButtons;