import { useState } from "react";

const ExerciseForm = () => {
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');

    const submission = async (e) => {
        e.preventDefault()

        const workout = {title, reps, load}

        const response = await fetch('/api/exercises', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (response.ok) {
            setError(null)
            setTitle('')
            setReps('')
            setLoad('')
        }

        if (!response.ok) {
            setError(json.error)
        }
    }

    return (
        <form onSubmit={submission}>
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