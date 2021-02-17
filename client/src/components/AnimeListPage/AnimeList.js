import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

function animeSort(a, b) {
  return a.id - b.id;
}
function AnimeList() {
  const [ list, setList ] = useState([])
  const classes = useStyles();
  useEffect(() => {
    let arr = [];
    fetch('/api/master_list').then( (response) => response.json()).then( resArr => {
      resArr.forEach( resAnime => {
        if (resAnime.name !== "We'd need an entire new chart") {
          arr.push({
            name: resAnime.name,
            id: resAnime.id
          });
        }
      })
      arr.sort(animeSort)
      setList(arr);
    })
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map( (animeName, i) => {
            return(
              <TableRow key={animeName.name}>
              <TableCell component="th" scope="row">
                {animeName.name}
              </TableCell>
              <TableCell align="right">{animeName.id}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AnimeList