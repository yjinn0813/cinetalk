/* sidebar - signal filter */

import { Box, Typography, Chip } from '@mui/material';

type SignalOption = {
  label: string;
  value: string;
  color: string;
  bgcolor: string;
}

type SignalFilterProps = {
  selectedSignals: string[];
  onToggle: (value: string) => void;
}

const signalOptions: SignalOption[] = [
  {
    label: '좋음',
    value: 'good',
    bgcolor: '#A5D6A7',
    color: '#034e06'
  },
  {
    label: '보통',
    value: 'neutral',
    bgcolor: '#FFE082',
    color: '#d09500'
  },
  {
    label: '별로',
    value: 'bad',
    bgcolor: '#ffb8b8',
    color: '#9b0a00'
  },
]

// ====================
const SignalFilter = ({ selectedSignals, onToggle }: SignalFilterProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{
        fontWeight: 600,
        mb: 1,
      }}>신호등</Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}>
        {signalOptions.map((option) => {
          const isSelected = selectedSignals.includes(option.value);
          
          return (
            <Chip
              key={option.value}
              label={option.label}
              clickable
              onClick={() => onToggle(option.value)}
              sx={{
                minWidth: '70px',
                transition: 'all 0.2s ease',
                backgroundColor: isSelected ? option.bgcolor : 'rgba(0, 0, 0, 0.08)',
                color: isSelected ? option.color : 'rgba(0, 0, 0, 0.87)',
                fontWeight: isSelected ? 600 : 400,

                '&:hover': {
                  backgroundColor: option.bgcolor,
                  color: option.color,
                },
              }}
            />
          )
        }
        )}
      </Box>
    </Box>
  )
}

export default SignalFilter;