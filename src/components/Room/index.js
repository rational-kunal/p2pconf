import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import hubStore from '../../stores/hubStore';

import VideoLounge from './VideoLounge';
import JoinLink from './JoinLink';

export default function Room() {
  const { masterPeerId } = useParams();

  useEffect(() => {
    if (masterPeerId) {
      hubStore.masterPeerId = masterPeerId;
    }
  }, []);

  return (
    <>
      {masterPeerId == null && <JoinLink />}
      <VideoLounge />
    </>
  );
}
