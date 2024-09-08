// eslint-disable-next-line react/prop-types
function Button({ children, styles, onClick, ...props }) {
  return (
    <button className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
