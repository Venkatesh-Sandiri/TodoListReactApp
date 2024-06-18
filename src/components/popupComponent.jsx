import '../Styles/bodyStyle.css';
import { useState } from 'react';
function PopUp({ sendDataToParent, closePopUp }) {
  const [textData, settextData] = useState('');
  function addItemToTodo() {
    sendDataToParent(textData);
  }
  return (
    <div className="popUp">
      <input
        value={textData}
        onInput={(e) => settextData(e.target.value)}
      ></input>
      <button onClick={addItemToTodo}>Add</button>
      <button onClick={closePopUp}>Cancel</button>
    </div>
  );
}
export default PopUp;
