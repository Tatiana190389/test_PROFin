import { Typography, Stack, Button } from '@mui/material';
import { AccountCircle, CalendarMonth, ArrowRight } from '@mui/icons-material';

export const Header = () => {
  return (
    <Stack
      sx={{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: '15px',
        p: '3px',
        alignItems: 'center',
      }}
    >
      <Stack sx={{ width: '60%', mr: 'auto', flexDirection: 'row', gap: 2 }}>
        <Stack sx={{ alignItems: 'center', flexDirection: 'row', gap: 1 }}>
          <AccountCircle fontSize="small" />
          <Typography variant="caption">Иванов И.И</Typography>
        </Stack>

        <Stack
          sx={{
            width: '30%',
            p: '4px',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#e4ecf7',
            borderRadius: '15px',
          }}
        >
          <CalendarMonth fontSize="small" sx={{ color: '#175fbd', marginLeft: '10px' }} />
          <Typography variant="caption" sx={{ color: '#175fbd', p: '2px' }}>
            Тариф до 15.04.2024
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ alignItems: 'center', flexDirection: 'row', gap: 1 }}>
        <Button
          sx={{
            height: '60%',
            textTransform: 'capitalize',
            color: '#000',
            border: '1px solid #000',
            borderRadius: '25px',
            fontSize: '10px',
            p: '1px',
          }}
        >
          Выйти
        </Button>
        <Button
          sx={{
            height: '60%',
            textTransform: 'capitalize',
            backgroundColor: '#ff810c',
            borderRadius: '25px',
            fontSize: '10px',
            color: '#fff',
            p: '1px',
          }}
          endIcon={<ArrowRight fontSize="small" sx={{ color: '#fff' }} />}
        >
          О нас
        </Button>
      </Stack>
    </Stack>
  );
};
