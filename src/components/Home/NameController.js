import React, { useState } from 'react';

import hubStore from '../../stores/hubStore';
import { hostPeerNameChange } from '../../actions/hubActions';

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import CheckIcon from '@material-ui/icons/Check';

export default function NameController() {
  const [name, setName] = useState(hubStore.hostPeerName);

  return (
    <FormControl variant="outlined">
      <InputLabel> change name </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              color="primary"
              aria-label="directions"
              onClick={() => {
                hostPeerNameChange(name);
              }}
            >
              <CheckIcon color="action" />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  );
}
