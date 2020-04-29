import React from 'react';
import { useParams } from 'react-router-dom';

import hubStore from '../../stores/hubStore';

import VideoLounge from './VideoLounge';

export default function Room() {
  const { masterPeerId } = useParams();
  if (masterPeerId) {
    hubStore.masterPeerId = masterPeerId;
  }

  return (
    <>
      <VideoLounge />
    </>
  );
}
