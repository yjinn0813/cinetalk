/* filter sidebar for review lists */

import { Drawer, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TypeFilter from './TypeFilter';
import SignalFilter from './SignalFilter';
import RateFilter from './RateFilter';

type SideBarProps = {
  open: boolean;
  onClose: () => void;
  onReset: () => void;
  selectedTypes: string[];
  selectedSignal: string[];
  selectedRate: number[];
  onTypeToggle: (value: string) => void;
  onSignalToggle: (value: string) => void;
  onRateToggle: (value: number) => void;
};

const SideBar = ({ open, onClose, onReset,
  selectedTypes, onTypeToggle, 
  selectedSignal, onSignalToggle, 
  selectedRate, onRateToggle
}: SideBarProps) => {

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box sx={{
        p: '24px 16px 24px 24px',
        maxWidth: 260,
      }}>
        <Box sx={{
          mb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Typography sx={{
            fontSize: 22,
            fontWeight: 600,
          }}>필터</Typography>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ my:1 }} />

        <Box sx={{ my: 3 }}>
          {/* 타입 */}
          <TypeFilter
            selectedTypes={selectedTypes}
            onToggle={onTypeToggle}
          />

          {/* 신호등 */}
          <SignalFilter 
            selectedSignals={selectedSignal}
            onToggle={onSignalToggle}
          />

          {/* 평점 */}
          <RateFilter 
            selectedRatings={selectedRate}
            onToggle={onRateToggle}
          />
        </Box>
        
        <Divider sx={{ my: 2 }}/>
        
        <Box sx={{ mt: 3 }}>
          <Button
            fullWidth
            variant='text'
            onClick={onReset}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              color: 'rgba(0, 0, 0, 0.87)',
              py: 1,

              '&:hover': {
                backgroundColor: '#1e90ff',
                color: '#f0f0f0',
              }
            }}
          >초기화</Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;

/* 
  MUI button variant
  주요 액션 → contained
  보조 액션 → outlined
  가벼운 액션 → text
*/ 