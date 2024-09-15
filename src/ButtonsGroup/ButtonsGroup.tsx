import { Stack, Button, Divider } from '@mui/material';
import { Clear, CreateNewFolder, DriveFolderUpload } from '@mui/icons-material';

const buttonStyle = {
  width: '35%',
  textTransform: 'capitalize',
  color: '#2f2f3f',
  fontSize: '10px',
};

export const ButtonsGroup = ({ onClick }: { onClick: () => void }) => {
  return (
    <Stack sx={{ width: '80%' }}>
      <Divider variant="fullWidth" sx={{ bgcolor: '#a8a8aa', mt: '2%' }} />
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'left', width: '100%' }}>
          <Button onClick={onClick} startIcon={<DriveFolderUpload sx={{ color: '#2f2f3f' }} />} sx={buttonStyle}>
            Загрузить данные из csv
          </Button>
          <Button startIcon={<CreateNewFolder sx={{ color: '#2f2f3f' }} />} sx={buttonStyle}>
            Изменить данные
          </Button>
        </Stack>

        <Divider orientation="vertical" flexItem variant="middle" sx={{ bgcolor: '#a8a8aa' }} />
        <Button
          endIcon={<Clear sx={{ color: '#2f2f3f' }} />}
          sx={{ width: '20%', textTransform: 'capitalize', color: '#2f2f3f', fontSize: '10px' }}
        >
          Очистить
        </Button>
      </Stack>
      <Divider variant="fullWidth" sx={{ bgcolor: '#a8a8aa' }} />
    </Stack>
  );
};
