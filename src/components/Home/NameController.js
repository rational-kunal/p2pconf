import React, { useState } from 'react';

import hubStore from '../../stores/hubStore';
import { hostPeerNameChange } from '../../actions/hubActions';

export default function NameController() {
  const [name, setName] = useState(hubStore.hostPeerName);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          hostPeerNameChange(name);
        }}
      >
        change name
      </button>
    </div>
  );
}
