

export default function Menu({ setView }) {

    return(
        <div className="menu">
            <button onClick={() => setView("home")}>Home</button>
            <button onClick={() => setView("weather")}>Weather</button>
            <button onClick={() => setView("system")}>System</button>
        </div>)
}