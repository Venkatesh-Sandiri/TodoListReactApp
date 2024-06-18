import '../Styles/header.css';
function Header() {
  return (
    <div>
      <h1 className="mainHeading">TODO App : </h1>
      <div className="bringContentsInCentre">
        <button className="all">All</button>
        <button className="inProgress">In Progress</button>
        <button className="onHold">On Hold</button>
        <button className="notStarted">Not Started</button>
        <button className="completed">Completed</button>
        <button className="delayed">Delayed</button>
      </div>
    </div>
  );
}
export default Header;
