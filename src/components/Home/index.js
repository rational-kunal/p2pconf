import React from 'react';
import { Link } from 'react-router-dom';

import NameController from './NameController';

export default function Home() {
  return (
    <nav>
      <NameController />
      <ul>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/follow">Follow</Link>
        </li>
      </ul>
    </nav>
  );
}
