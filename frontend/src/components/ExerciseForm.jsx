import { useState } from "react";

const ExerciseForm = () => {
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');

    return (
        <form>
            <h2>ADD A NEW EXERCISE</h2>
            
            <label>Exercise Name:</label>
            <input
                type="text"
                onChange={(e) => {setTitle(e.target.value)}}
                value={title}
            />
             <label>Number of Repetitions:</label>
            <input
                type="text"
                onChange={(e) => {setReps(e.target.value)}}
                value={reps}
            />
             <label>Weight in Kg:</label>
            <input
                type="text"
                onChange={(e) => {setLoad(e.target.value)}}
                value={load}
            />

            <button>ADD WORKOUT</button>
        </form>
    )
}

export default ExerciseForm