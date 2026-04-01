// footer

import { Link } from 'react-router-dom';
import { Box, Typography, Divider, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PaletteIcon from '@mui/icons-material/Palette';
import ArticleIcon from '@mui/icons-material/Article';

const snsList = [
  {
    icon: <GitHubIcon sx={{ color:'#f0f0f0' }} />,
    link: 'https://github.com/yjinn0813',
  },
  {
    icon: <LinkedInIcon sx={{ color:'#f0f0f0' }} />,
    link: 'https://linkedin.com/in/yjinn0813',
  },
  {
    icon: <PaletteIcon sx={{ color:'#f0f0f0' }} />,
    link: 'https://yjinn0813.vercel.app',
  },
  {
    icon: <ArticleIcon sx={{ color:'#f0f0f0' }} />,
    link: 'https://hjinn0813.tistory.com',
  },
]

// ====================
const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e90ff',
        color: '#f0f0f0',
        padding: 4,
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
        <Typography sx={{ fontSize: 26, fontWeight: 600, mb: 1 }}>
          cinetalk
        </Typography>
      </Link>

      <Box
        sx={{
          maxWidth: 1200,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        {/* 왼쪽 영역 */}
        <Box>
          <Box sx={{
              display:'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Typography variant="body2" sx={{ mr:1}}>주식회사 시네톡</Typography>
            <Divider orientation="vertical" sx={{ borderColor: '#fff', height: 14 }} />
            <Typography variant="body2" sx={{ ml:1}}>대표 조유진</Typography>
          </Box>
          <Typography variant="body2">서울시 서초구 사평대로 52길</Typography>
          <Typography variant="body2">사업자등록번호: 123-45-67890</Typography>
          
          <Box sx={{
              my: 1,
              display:'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" sx={{ mr:1 }} >서비스 이용약관</Typography>
            <Divider orientation="vertical" sx={{ borderColor: '#fff', height: 14 }} />
            <Typography variant="body2" sx={{ mx:1 }} >개인정보 처리방침</Typography>
            <Divider orientation="vertical" sx={{ borderColor: '#fff', height: 14 }} />
            <Typography variant="body2" sx={{ ml:1 }} >회사 소개</Typography>
          </Box>
        </Box>

        {/* 오른쪽 영역 */}
        <Box>
          <Box>
            <Typography variant="body2">FAX : 1234-5678</Typography>
            <Typography variant="body2">고객센터 : 1588-0000 (유료)</Typography>
            <Typography variant="body2">이메일 :
              <Box component="a"
                href='mailto:hjc3790@gmail.com'
                target='_blank'
                sx={{
                  ml: 0.5,
                  color: '#f0f0f0',
                  textDecoration: 'underline',
                  rel: 'noopener noreferrer'
                }}
              >hjc3790@gmail.com</Box>
            </Typography>
          </Box>
          
          {/* sns links */}
          <Box sx={{
            my: 2,
            display: 'flex',
            gap: 1,
            color: '#f0f0f0'
          }}>
            {snsList.map((sns, idx) => (
              <a
                key={idx}
                href={sns.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sns.icon}
              </a>
            ))}
          </Box>
        </Box>
      </Box>

      {/* copyright */}
      <Typography sx={{ fontSize: 12 }}>
        © 2024 cinetalk Corp.
      </Typography>
    </Box>
  );
};

export default Footer;