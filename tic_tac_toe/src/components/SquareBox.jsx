const SquareBox = (props) => {
  const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    width: '100px',
    fontSize: '30px',
    color: 'white',
    margin: '2px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  };
  return (
    <div
      className={`square-box ${props.value === 'X' ? 'red' : ''} ${
        props.value === 'O' ? 'blue' : ''
      }  `}
      style={boxStyle}
      onClick={props.onClick}
    >
      <p>{props.value}</p>
    </div>
  );
};

export default SquareBox;
