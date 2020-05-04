import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { homepage } from '../../../package.json';

import hubStore from '../../stores/hubStore';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';

export default function JoinLink() {
  const [peerId, setPeerId] = useState(hubStore.hostPeerId);
  const joinUrl = homepage + 'follow/' + peerId;

  useEffect(() => {
    hubStore.addChangeListener(() => {
      if (hubStore.hostPeerId !== peerId) {
        setPeerId(hubStore.hostPeerId);
      }
    });
  }, []);

  return (
    <Paper
      style={{
        width: '50%',
        overflow: 'hidden',
        marginBottom: 12,
        position: 'relative',
      }}
    >
      {peerId ? (
        <Box>
          <Typography
            variant="subtitle1"
            style={{
              padding: 12,
              width: 'calc(100% - 30px)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            share link
            <i> {joinUrl}</i>
          </Typography>
          <IconButton
            aria-label="copy"
            onClick={() => {
              copy(joinUrl);
            }}
            style={{ position: 'absolute', right: 0, top: 0, bottom: 0 }}
          >
            <FileCopyIcon />
          </IconButton>
        </Box>
      ) : (
        <Box style={{ padding: 12 }}>
          <CircularProgress />
        </Box>
      )}
    </Paper>
  );
}
