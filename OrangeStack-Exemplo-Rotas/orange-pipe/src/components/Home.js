import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <h1>Home page Orange Pipe</h1>
          <Link to="/pipe">
            <Button>
              Ver pipes
            </Button>
          </Link>
      </main>
    </React.Fragment>
  );
}
