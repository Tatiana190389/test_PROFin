import { Typography, Stack, Button, TextField } from '@mui/material';
import { MenuBook, KeyboardArrowDown, AddBox } from '@mui/icons-material';
import {
  exportButtonStyle,
  buttonInstructionStyle,
  bigStackStyle,
  inputStyle,
  sizeStackStyle,
  categoryStackStyle,
  createButtonStyle,
} from './Styles';

import { CSVLink } from 'react-csv';
import data from '../Table/data';

const headers = [
  { label: 'barcode', key: 'barcode' },
  { label: 'item', key: 'item' },
  { label: 'article_number', key: 'article_number' },
  { label: 'size', key: 'size' },
  { label: 'available_to_order', key: 'available_to_order' },
  { label: 'goods_on_way', key: 'goods_on_way' },
  { label: 'total', key: 'total' },
];

const csvReport = {
  filename: 'report.csv',
  headers: headers,
  data: data.dataItems,
};

export const AboutItem = () => {
  return (
    <Stack sx={{ width: '70%', marginTop: '5%' }}>
      <Stack sx={{ flexDirection: 'row', alignItems: 'left', gap: 2 }}>
        <Typography variant="h6">Остатки сформированы на 01.04.2023г.</Typography>
        <Button sx={buttonInstructionStyle} startIcon={<MenuBook fontSize="small" />}>
          Инструкции
        </Button>
      </Stack>

      <Stack sx={{ mt: '3%', flexDirection: 'row', justifyContent: 'space-around', gap: 1 }}>
        <Stack sx={bigStackStyle}>
          <Typography variant="caption">Баркод</Typography>
          <TextField
            size="small"
            variant="filled"
            type="text"
            inputProps={{ style: inputStyle }}
            value="5555555555555"
          />
        </Stack>

        <Stack sx={bigStackStyle}>
          <Typography variant="caption">Артикул</Typography>
          <TextField
            size="small"
            variant="filled"
            value="ДжЖнсМом0823"
            type="text"
            inputProps={{ style: inputStyle }}
          />
        </Stack>

        <Stack sx={sizeStackStyle}>
          <Typography variant="caption">Размер</Typography>
          <TextField size="small" variant="filled" value="44" type="text" inputProps={{ style: inputStyle }} />
        </Stack>

        <Stack sx={categoryStackStyle}>
          <Typography variant="caption" sx={{ color: '#a0a5ad' }}>
            Категория
          </Typography>
          <Button
            endIcon={<KeyboardArrowDown />}
            sx={{
              p: 0,
              fontSize: '10px',
              textTransform: 'capitalize',
              color: '#000',
            }}
          >
            Джинсы
          </Button>
        </Stack>
      </Stack>

      <Stack sx={{ flexDirection: 'row', justifyContent: 'left', gap: 1, mt: '1%' }}>
        <Button sx={createButtonStyle}>Сформировать</Button>

        <Button startIcon={<AddBox />} sx={exportButtonStyle}>
          <CSVLink style={{ textDecoration: 'none', color: '#fff' }} {...csvReport}>
            Экспорт
          </CSVLink>
        </Button>
      </Stack>
    </Stack>
  );
};
