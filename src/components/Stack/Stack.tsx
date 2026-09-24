import PropTypes from 'prop-types';

export default function Stack({ children, wrap = false }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '0.25rem',
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
