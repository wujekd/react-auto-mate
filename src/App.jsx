import { useState, useEffect } from 'react';
import './style.css';
import Stats from "./Stats"
import Schedule from "./Schedule"

function App() {
    const [temperature, setTemperature] = useState(16);
    const [keyState, setKeyState] = useState('off');

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
            <Stats temperature={temperature} keyState={keyState} />
            <Schedule />
        </div>
    );
}

export default App;