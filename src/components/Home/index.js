import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NameController from './NameController';

import { Papered, MarginDown } from '../muiUtil';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

export default function Home() {
  const [masterId, setMasterId] = useState('');

  return (
    <Papered>
      <MarginDown>
        <NameController />
      </MarginDown>

      <MarginDown>
        <Link to="/create">
          <Button variant="outlined" endIcon={<AddIcon />}>
            Create
          </Button>
        </Link>
      </MarginDown>

      <TextField
        label="Master Id"
        style={{ marginRight: 12 }}
        variant="outlined"
        size="small"
        value={masterId}
        onChange={(e) => setMasterId(e.target.value)}
      />
      <Link to={'/follow/' + masterId}>
        <Button variant="outlined">Join</Button>
      </Link>
    </Papered>
  );
}
