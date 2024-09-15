import { Divider, Link, List, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import { infoMenuData, IInfoMenuItem } from './InfoMenuData';

const styleStackItem = {
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'left',
};

const listStyle = {
  m: '5px',
  backgroundColor: '#1a1a31',
  borderRadius: '15px',
};

export const InfoMenu = () => {
  return (
    <List sx={listStyle}>
      <Toolbar>
        <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ color: '#fff', marginBottom: '25px', mt: '15px', textAlign: 'left' }}>
            Техническая поддержка
          </Typography>
          <Stack
            sx={{
              width: '100%',
              marginBottom: '10px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Stack sx={{ styleStackItem }}>
              <Typography variant="caption" sx={{ color: '#4e506d' }}>
                Номер поддержки:
              </Typography>
              <Typography variant="caption" sx={{ color: '#fff' }}>
                8(999)999 99 99
              </Typography>
            </Stack>

            <Stack sx={styleStackItem}>
              <Typography variant="caption" sx={{ color: '#4e506d' }}>
                Почта поддержки:
              </Typography>
              <Typography variant="caption" sx={{ color: '#fff' }}>
                pf1@werthesest.ru
              </Typography>
            </Stack>
          </Stack>

          <Stack
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'left',
              marginBottom: '10px',
            }}
          >
            <Typography variant="caption" sx={{ color: '#4e506d' }}>
              Часы работы:
            </Typography>
            <Typography variant="caption" sx={{ color: '#fff' }}>
              Пн-Пт с 9:00 до 19:00 мск
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>

      {infoMenuData.map((item: IInfoMenuItem) => (
        <>
          <ListItem key={item.id} sx={{ textDecoration: 'none' }}>
            <Link href="#" sx={{ color: '#4e506d', fontSize: '10px', textDecoration: 'none' }}>
              {item.name}
            </Link>
          </ListItem>
          <Divider variant="middle" component="li" sx={{ bgcolor: '#4e506d' }} />
        </>
      ))}
    </List>
  );
};
