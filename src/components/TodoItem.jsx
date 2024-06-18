import { useState } from 'react';
import '../Styles/bodyStyle.css';
import GetTimeComp from './TimeComponent';

function Todo({ task }) {
  const cssStates = new Map();
  cssStates.set('Not Started', 'notStarted');
  cssStates.set('In Progress', 'inProgress');
  cssStates.set('On Hold', 'onHold');
  cssStates.set('Completed', 'completed');
  cssStates.set('Delayed', 'delayed');

  const [currentState, setCurrentState] = useState(0);
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());

  return (
    <div className="completeTodo" style={{}}>
      <div
        className={`status ${cssStates.get(task.currentState)}`}
        style={{
          borderRadius: '5px',
          padding: '3px',
          marginRight: '3px',
          fontWeight: 'bold',
        }}
      >
        {task.currentState}
      </div>
      <div>
        <div className="bringContentsInCentre">
          <div
            className={`status startTime`}
            style={{ borderRadius: '5px', padding: '3px', marginleft: '3px' }}
          >
            Start Time : {startDateTime.toLocaleDateString()}{' '}
            {startDateTime.toLocaleTimeString()}
          </div>

          <div
            className={`status endTime`}
            style={{ borderRadius: '5px', padding: '3px', marginLeft: '3px' }}
          >
            End Time : {endDateTime.toLocaleDateString()}{' '}
            {endDateTime.toLocaleTimeString()}
          </div>
        </div>
        <div className="bringContentsInCentre">
          <div className="todoItem" style={{ fontWeight: 'bolder' }}>
            {task.task}
          </div>
        </div>
        <div className="bringContentsInCentre">
          <div
            className={`status endTime`}
            style={{ borderRadius: '5px', padding: '3px', marginLeft: '3px' }}
          >
            Total Time : 6 Hours
          </div>
          <div
            className={`status endTime`}
            style={{ borderRadius: '5px', padding: '3px', marginLeft: '3px' }}
          >
            Time Left: 3hours
          </div>
        </div>
      </div>
      <div>
        <div className="bringContentsInCentre">
          {task.currentState === 'Not Started' && (
            <button className="bgClr btn start">Start Now</button>
          )}
          <button className="bgClr btn start">Set Start Time</button>
          <button className="bgClr btn start">Set End Time</button>
          <button className="bgClr btn start">Set Time</button>
          <button className="bgClr btn start">Add Time</button>
        </div>
        <div className="bringContentsInCentre">
          <button className="bgClr btn completed">Mark Completed</button>
          {task.currentState == 'In Progress' && (
            <button className="bgClr btn onHold">Hold Task</button>
          )}
          <button className="bgClr btn delayed">Delete Task</button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
