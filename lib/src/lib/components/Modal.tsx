import React, { ReactNode } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function Modal({ children, open }: { children: ReactNode; open: boolean }) {
  return (
    <Popup open={open} position="right center">
      {children}
    </Popup>
  );
}
