import {
  Button,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Close, KeyboardArrowDown } from '@mui/icons-material';
import { menuData } from './MenuData';

const linkStyle = {
  backgroundColor: '#0f6be4f9',
  color: '#fff',
  p: '3px',
  borderRadius: '5px',
  textDecoration: 'none',
};

export const Menu = () => {
  return (
    <List sx={{ m: '3px', backgroundColor: '#1a1a31', borderRadius: '10px' }}>
      <Toolbar>
        <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            <Link sx={linkStyle}>ФИН</Link> Контроль
          </Typography>
          <Button
            sx={{
              textTransform: 'capitalize',
              width: '10%',
              fontSize: '9px',
              backgroundColor: '#2e2e3b',
              color: '#4e4e5c',
            }}
            endIcon={<Close fontSize="small" sx={{ color: '#4e4e5c' }} />}
          >
            Меню
          </Button>
        </Stack>
      </Toolbar>
      {menuData.map((el) => (
        <ListItemButton
          key={el.id}
          sx={{ m: '4px', borderRadius: '5px', backgroundColor: '#2e2e3b', color: '#f1ededc0' }}
        >
          <ListItemText sx={{ color: '#fff' }}>
            <ListItemIcon sx={{ color: '#fff', fontSize: 'small' }}>{el.icon}</ListItemIcon>
            {el.name}
          </ListItemText>

          <KeyboardArrowDown />
        </ListItemButton>
      ))}
    </List>
  );
};
