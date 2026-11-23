
import './App.css';

function App() {
  return (
    <div className="form">
      <h2>Student Form</h2>

      <form>
        <label>Name:</label>
        <input type="text" />
        <br /><br />

        <label>Department:</label>
        <input type="text" />
        <br /><br />

        <label>Age:</label>
        <input type="number" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
