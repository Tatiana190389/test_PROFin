import { Header } from '../Header/Header';
import { navWidth, Sidebar } from '../Sidebar/Sidebar';
import { Box } from '@mui/material';
import { AboutItem } from '../AboutItems/AboutItem';
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup';
import { TableData } from '../Table/Table';
import { useState } from 'react';
import data from '../Table/data';

export const MainScreen = () => {
  const [dataArr, setDataArr] = useState([]);

  const onClickLoadCSV = () => {
    setDataArr(data.dataItems);
  };

  console.log(dataArr);
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="nav" sx={{ width: navWidth, flexShrink: 0 }}>
        <Sidebar />
      </Box>

      <Box
        component="main"
        sx={{ marginLeft: '25px', p: 3, width: `calc(100% -${navWidth})`, minHight: '100vh', flexGrow: 1 }}
      >
        <Header />
        <AboutItem />
        <ButtonsGroup onClick={onClickLoadCSV} />
        <TableData arrData={dataArr} />
      </Box>
    </Box>
  );
};
