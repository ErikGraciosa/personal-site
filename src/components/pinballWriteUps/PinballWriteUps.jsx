import React from 'react';
import Pinball from '../../fixtures/pinball.json';

function PinballWriteUps() {

  return (
    <pre style={{padding: "10px", overflowX: "auto", whiteSpace: "pre-wrap", wordWrap: "break-word"}}>
      {JSON.stringify(Pinball, null, 2)} 
    </pre>
  );
}

export default PinballWriteUps;
