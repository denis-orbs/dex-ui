import React, { ReactNode } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function Modal({
  children,
  open,
  onClose,
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Popup open={open} onClose={onClose} position="right center" 
    contentStyle={{
      backgroundColor: 'black',
      border: 'unset',
      maxHeight: '90vh',
      overflowY: 'auto',
    }}
    >
      {children}
    </Popup>
  );
}
