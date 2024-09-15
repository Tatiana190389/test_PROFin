import { Button, Stack } from '@mui/material';
import { Menu } from '../Menu/Menu';
import { InfoMenu } from '../InfoMenu/InfoMenu';
import { Textsms } from '@mui/icons-material';

export const navWidth = 350;

export const Sidebar = () => {
  return (
    <Stack sx={{ width: navWidth, position: 'fixed', m: '15px', flexGrow: 0 }}>
      <Menu />
      <InfoMenu />

      <Button
        sx={{
          width: '100%',
          m: '3px',
          p: '15px',
          color: '#fff',
          borderRadius: '15px',
          backgroundColor: '#0f6be4f9',
        }}
        startIcon={<Textsms size="small" sx={{ color: '#fff' }} />}
      >
        Связаться с нами
      </Button>
    </Stack>
  );
};
