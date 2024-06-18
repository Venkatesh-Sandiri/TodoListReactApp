import Header from './HeaderComponent';
import TodoBody from './BodyComponent';
import tasks from '../Tasks.json';
import { useState } from 'react';
import PopUp from './popupComponent';
import '../Styles/bodyStyle.css';

function C1() {
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [dataFromChild, setDataFromChild] = useState([]);

  function viewPopUp() {
    setDisplayPopUp(!displayPopUp);
    // console.log(`DisplayPopUp value ${displayPopUp}`);
  }

  function handleDataFromChild(data) {
    setDataFromChild((prevData) => {
      const newData = [data, ...prevData];
      // console.log(`old data in child ${prevData}`);
      // console.log(`new data to be added to child ${newData}`);
      return newData;
    });
    viewPopUp();
  }

  function closePopUpInParent() {
    setDisplayPopUp(!displayPopUp);
  }
  return (
    <div>
      <Header />
      <div className="bringContentsInCentre">
        <button onClick={viewPopUp} className="bgClr">
          Add Todo Item
        </button>
      </div>
      <div className="bringContentsInCentre">
        {displayPopUp && (
          <PopUp
            sendDataToParent={handleDataFromChild}
            closePopUp={closePopUpInParent}
          />
        )}
      </div>
      {Object.keys(tasks).map((taskKey) => {
        const task = tasks[taskKey];
        if (typeof task == 'object') {
          return (
            <div key={task.task}>
              <br />
              <br />
              <TodoBody task={task} />
              <br />
              <br />
            </div>
          );
        }
      })}
      <footer />
    </div>
  );
}

export default C1;
