import React from 'react';
import { IconButton } from '@mui/material';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      style={{ ...style, display: 'block', position: 'absolute',right: '-50px', zIndex: 2, background: '#ed6c02', width: '50px', height: '50px'}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      style={{ ...style, display: 'block', position: 'absolute', left: '-50px', zIndex: 2, background: '#ed6c02', width: '50px', height: '50px' }}
      onClick={onClick}
    />
  );
}

export { NextArrow, PrevArrow };