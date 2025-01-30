import { useState, useEffect } from 'react';
import './style.css';
import Stats from "./Stats"
import Schedule from "./Schedule"
import Menu from "./Menu"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef } from "react";


function App() {
    const [temperature, setTemperature] = useState(16);
    const [keyState, setKeyState] = useState('off');
    const [view, setView] = useState("home");

    const nodeRef = useRef(null);



    const tasks = [
        { name: "Morning Meeting", startTime: "09:00", finishTime: "09:30" },
        { name: "Code Review", startTime: "10:00", finishTime: "11:00" },
        { name: "Lunch Break", startTime: "12:00", finishTime: "12:30" },
        { name: "Client Call", startTime: "14:00", finishTime: "15:00" },
        { name: "Lunch Break", startTime: "12:00", finishTime: "12:30" },
        { name: "Client Call", startTime: "14:00", finishTime: "15:00" },
        { name: "Lunch Break", startTime: "12:00", finishTime: "12:30" },
        { name: "Client Call", startTime: "14:00", finishTime: "15:00" },
    ];



    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3001');

        socket.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.temperature !== undefined) setTemperature(data.temperature);
                if (data.key !== undefined) setKeyState(data.key);
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };


        socket.onclose = () => {
            console.log('Disconnected from WebSocket server');
        };

        return () => {
            socket.close();
        };
    }, []);


    return (
        <div className='frame'>
        <div className="sideContainer">
            <Menu setView={setView} view={view} />
            <Stats temperature={temperature} keyState={keyState} />
        </div>

                    {view === "home" && <Schedule tasks={tasks} />}
                    {view === "weather" && <div>🌤 Weather View</div>}
                    {view === "system" && <div>⚙️ System View</div>}

    </div>
    );
}


export default App;