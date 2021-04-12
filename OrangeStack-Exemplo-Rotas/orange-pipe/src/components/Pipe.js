import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';

export default function Pricing() {
  return (
    <React.Fragment>
      <h1>Todos os Pipes</h1>
        <CardHeader
          title='Pipe 1'
          subheader='Pipe'
        />
           <CardHeader
          title='Pipe 2'
          subheader='Pipe'
        />
    </React.Fragment>
  );
}
