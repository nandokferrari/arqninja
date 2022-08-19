import React from 'react';
import Label from '../Label';

const JobStatus = ({ value }) => {
  const prd = { title: 'PRD', color: 'success' };
  const dev = { title: 'DEV', color: 'warning' };

  const chosen = value === 'dev' ? dev : prd;

  return (
    <Label variant="ghost" color={chosen.color}>
      {chosen.title}
    </Label>
  );
};

export default JobStatus;
