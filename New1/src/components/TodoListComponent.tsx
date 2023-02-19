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

const baseURL = "https://jsonplaceholder.typicode.com/todos";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
let allData:any[];
const TodoListComponent = () => {
const [searched, setSearched] = useState<string>("");
const classes = useStyles();
const requestSearch = (searchedVal: string) => {
  const filteredRows = allData.filter((row) => {
    return row.title.toLowerCase().includes(searchedVal.toLowerCase());
  });
  setPost(filteredRows);
};
const cancelSearch = () => {
  setSearched("");
  requestSearch(searched);
};
    const [post, setPost] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            
            setPost(response.data);
            console.log("users***", post);
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
                <TableCell align="center">title</TableCell>
                <TableCell align="center">completed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {post.map((p) => (
                <TableRow
                  key={p.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {p.id}
                  </TableCell>
                  <TableCell align="center">{p.title}</TableCell>
                  <TableCell align="center">{p.completed?"true":"false"}</TableCell>
                </TableRow>
              ))}


            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </>

    );
}

export default TodoListComponent