import './App.css'
function App() {
let count = 0;
  return (
      <div className="card">
        <button onClick={()=>count++}>
          count is {count}
        </button>
      </div>
  )
}

export default App
