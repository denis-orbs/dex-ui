import React from 'react'

interface Props {
    className?: string;
    value?: string
}

export function USD({ className, value }: Props) {
  return <div className={className}>{value}</div>;
}

