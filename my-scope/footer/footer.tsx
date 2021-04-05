import React from 'react';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Footer = ( {children, ...rest}: FooterProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};