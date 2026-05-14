/* sidbar - rate filter */

import { Box, Typography, Chip } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
const ratingOptions = [
  0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0,
];

type RatingFilterProps = {
  selectedRatings: number[];
  onToggle: (value: number) => void;
};

// ====================
const RateFilter = ({ selectedRatings, onToggle }: RatingFilterProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{
        fontWeight: 600,
        mb: 1,
      }}>평점</Typography>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}>
        {ratingOptions.map((rating) => {
          const isSelected = selectedRatings.includes(rating);

          return (
            <Chip
              key={rating}
              label={rating.toFixed(1)}
              icon={<StarRoundedIcon />}
              clickable
              onClick={() => onToggle(rating)}
              sx={{
                minWidth: '80px',
                transition: 'all 0.2s ease',
                backgroundColor: isSelected ? '#1e90ff': 'rgba(0, 0, 0, 0.08)',
                color: isSelected ? '#f0f0f0' : 'rgba(0, 0, 0, 0.87)',
                fontWeight: isSelected ? 600 : 400,

                '&:hover': {
                  backgroundColor: '#1e90ff',
                  color: '#f0f0f0',
                },

                '& .MuiChip-icon': {
                  color: isSelected
                    ? '#f0f0f0'
                    : 'rgba(0, 0, 0, 0.54)',
                },
                '&:hover .MuiChip-icon': {
                  color: '#f0f0f0',
                },
              }}
            />)
          }
        )}
      </Box>
    </Box>
  )
}

export default RateFilter;