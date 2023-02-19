import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import './MainContainer.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import SearchBar from "mui-searchbar"; 
import { useState } from 'react';
// import { makeStyles } from '@mui/material';
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";
import LeftMenu from './LeftMenu';

const baseURL = "https://jsonplaceholder.typicode.com/users";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
let allData:any[];
const UserListComponent = () => {
const [searched, setSearched] = useState<string>("");
const classes = useStyles();
const requestSearch = (searchedVal: string) => {
  console.log("Hiiiiiiiiiiii", searchedVal);
  const filteredRows = allData.filter((row) => {
    return row.name.toLowerCase().includes(searchedVal.toLowerCase());
  });
  setPost(filteredRows);
};
const cancelSearch = () => {
  console.log("byee");
  setSearched("");
  requestSearch(searched);
};
    const [post, setPost] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log("users***", post)
            setPost(response.data);
             allData = response.data;
        });
    }, []);
    if (!post) return null;
  return (

      <>
      
      <Paper>
        {/* <Toolbar/> */}
        <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()} />
        <TableContainer>
        
          
          <Table className={classes.table} sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>

                <TableCell align="center">id</TableCell>
                <TableCell align="center">name</TableCell>
                <TableCell align="center">username</TableCell>
                <TableCell align="center">email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {post.map((post) => (
                <TableRow
                  key={post.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {post.id}
                  </TableCell>
                  <TableCell align="center">{post.name}</TableCell>
                  <TableCell align="center">{post.username}</TableCell>
                  <TableCell align="center">{post.email}</TableCell>
                </TableRow>
              ))}


            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </>

    );
}

export default UserListComponent