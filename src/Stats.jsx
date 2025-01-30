

function TemperatureMeter({ temperature, keyState }) {
    return (
        <div className="stats">
            <div className="stat-item">
                <p>Temperture:</p>
                <h1>{temperature}°C</h1>
            </div>
            <div className="stat-item">
                <p>The key is</p>
                <h1>{keyState}</h1>
            </div>
            
        </div>
    );
}

export default TemperatureMeter;
