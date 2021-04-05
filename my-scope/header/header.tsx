import React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Header = ( {children, ...rest}: HeaderProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};