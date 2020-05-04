import React from 'react';
import { Link } from 'react-router-dom';

import { Papered, MarginDown } from '../muiUtil';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

export default function Home() {
  return (
    <Papered>
      <MarginDown>
        <Typography variant="subtitle1" gutterBottom>
          some instatructions
        </Typography>
      </MarginDown>
      <Link to="/create">
        <Button variant="outlined" endIcon={<AddIcon />}>
          Create room
        </Button>
      </Link>
    </Papered>
  );
}
