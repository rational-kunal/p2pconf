import React from 'react';

import Paper from '@material-ui/core/Paper';

export function Papered({ children }) {
  return (
    <Paper elevation={3} style={{ padding: 12 }}>
      {children}
    </Paper>
  );
}

export function MarginDown({ children }) {
  return <div style={{ marginBottom: 12 }}>{children}</div>;
}
