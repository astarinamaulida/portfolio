import * as React from 'react';

interface Props {
  description: string
}

export const About = (props: Props) => {
  return (
    <div>
      <h1>{props.description}</h1>
    </div>
  );
}
