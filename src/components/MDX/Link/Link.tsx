import React from 'react';
import { StyledAnchor } from './styles';

export interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

export const Link: React.FC<CustomLinkProps> = ({ href, children, ...props }) => {
  const isExternal = href?.startsWith('http');

  return (
    <StyledAnchor
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </StyledAnchor>
  );
};