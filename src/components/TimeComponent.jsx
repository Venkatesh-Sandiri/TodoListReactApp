import '../Styles/bodyStyle.css';
function GetTimeComp(name, currentState, date, time) {
  return (
    <div
      className={`status ${currentState}`}
      style={{ borderRadius: '5px', padding: '3px' }}
    >
      {name} : {date} {time}
    </div>
  );
}

export default GetTimeComp;
