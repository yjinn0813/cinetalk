/* sidebar - type filter components */

import { Box, Typography, Chip } from '@mui/material';

type TypeOption = {
  label: string;
  value: string;
  bgcolor: string;
  color: string;
};

type TypeFilterProps = {
  selectedTypes: string[];
  onToggle: (value: string) => void;
};

const typeOptions: TypeOption[] = [
  {
    label: '영화',
    value: 'movie',
    bgcolor: '#cee5fa',
    color: '#174b75',
  },
  {
    label: '드라마',
    value: 'drama',
    bgcolor: '#fbdbe4',
    color: '#70314f',
  },
  {
    label: '애니메이션',
    value: 'animation',
    bgcolor: '#ecdcf5',
    color: '#624273',
  },
];

// ====================
const TypeFilter = ({ selectedTypes, onToggle }: TypeFilterProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        sx={{
          fontWeight: 600,
          mb: 1,
        }}
      >
        타입
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {typeOptions.map((option) => {
          const isSelected = selectedTypes.includes(option.value);

          return (
            <Chip
              key={option.value}
              label={option.label}
              clickable
              onClick={() => onToggle(option.value)}
              sx={{
                minWidth: '100px',
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
          );
        })}
      </Box>
    </Box>
  );
};

export default TypeFilter;