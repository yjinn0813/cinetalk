/* filter sidebar for review lists */

import { useState } from 'react';
import { Drawer, Box, Typography, Button } from '@mui/material';
import TypeFilter from './TypeFilter';
import SignalFilter from './SignalFilter';
import RateFilter from './RateFilter';

type SideBarProps = {
  open: boolean;
  onClose: () => void;
};

const SideBar = ({ open, onClose }: SideBarProps) => {
  // type chip
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const handleTypeClick = (value: string) => {
    setSelectedTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // signal chip
  const [selectedSignals, setSelectedSignals] = useState<string[]>([]);
  const handleSignalClick = (value: string) => {
    setSelectedSignals((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

  // rating chip
  const [selectedRate, setSelectedRate] = useState<number[]>([]);
  const handleSelectedRate = (value: number) => {
    setSelectedRate((prev) => 
      prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value]
    )
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box sx={{
        p: 3,
        maxWidth: 300,
      }}>
        <Typography sx={{
          fontSize: 22,
          fontWeight: 600,
          mb: 3,
        }}>필터</Typography>

        <Box>
          {/* 타입 */}
          <TypeFilter
            selectedTypes={selectedTypes}
            onToggle={handleTypeClick}
          />

          {/* 신호등 */}
          <SignalFilter 
            selectedSignals={selectedSignals}
            onToggle={handleSignalClick}
          />

          {/* 평점 */}
          <RateFilter 
            selectedRatings={selectedRate}
            onToggle={handleSelectedRate}
          />

          {/* 버튼 */}
          <Box sx={{
            display: 'flex',
            gap: 1,
          }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={onClose}
              sx={{
                p: '8px 0',
                fontSize: 15,
                color: '#1e90ff',
                border: '1px solid #1e90ff'
              }}
            >취소</Button>
            <Button
              fullWidth
              variant='contained'
              sx={{
                p: '8px 0',
                fontSize: 15,
                backgroundColor: '#1e90ff',
                color: '#f0f0f0',
              }}
            >적용</Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;