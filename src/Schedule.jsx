

import { useState, useEffect } from "react";

export default function Schedule({ tasks }) {
    if (!tasks || tasks.length === 0) {
        return <div className="schedule">No tasks scheduled for today.</div>;
    }

    const nowTask = tasks[0];
    const nextTask = tasks[1] || null;
    const futureTasks = tasks.slice(2);

    return (
        <div className="schedule">
            {/* Current Task */}
            <div className="now">
                <div className="taskName">{nowTask.name}</div>
                <div className="startTime">{nowTask.startTime}</div>
                <button className="TaskFinishedButton">Finished</button>
                <div className="finishTime">{nowTask.finishTime}</div>
            </div>

            {/* Next Task */}
            {nextTask && (
                <div className="next">
                    <div className="taskName">{nextTask.name}</div>
                    <div className="startTime">{nextTask.startTime}</div>
                    <div className="finishTime">{nextTask.finishTime}</div>
                </div>
            )}

            {/* Scrollable Future Tasks */}
            <div className="future">
                {futureTasks.map((task, index) => (
                    <div className="task" key={index}>
                        <div className="taskName">{task.name}</div>
                        <div className="startTime">{task.startTime}</div>
                        <div className="finishTime">{task.finishTime}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
