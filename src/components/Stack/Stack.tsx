import { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface StackProps {
  children?: ReactNode;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: boolean;
  spacing?: number;
}

export default function Stack({
  children,
  direction = 'row',
  wrap = false,
  spacing = 2,
}: StackProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: `${spacing * 0.25}rem`,
      }}
    >
      {children}
    </div>
  );
}

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  // children: PropTypes.node.isRequired
};
