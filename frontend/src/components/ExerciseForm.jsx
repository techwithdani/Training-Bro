import { useState } from "react";

const ExerciseForm = () => {
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');

    const submission = async (e) => {
        e.preventDefault()

        const workout = {title, reps, load}

        try {
            const response = await fetch('http://localhost:1305/api/exercises', {
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            let json

            try {
                json = await response.json();
            } catch (err) {
                throw new Error('Failed to parse JSON response');
            }

            if (response.ok) {
                setError(null);
                setTitle('');
                setReps('');
                setLoad('');
                console.log(json);
            } else {
                setError(json.error || 'An unknown error occurred');
            }

        } catch (error) {
            setError(error.message)
        } 
    }

    return (
        <form className="bg-slate-300" onSubmit={submission}>
            <h2 className="p-2 m-2 text-center">ADD A NEW EXERCISE</h2>

            <label className="p-1 mr-1">Exercise Name:</label>
            <input
                type="text"
                onChange={(e) => {setTitle(e.target.value)}}
                value={title}
            />
             <label className="p-1 m-1">Number of Repetitions:</label>
            <input
                type="text"
                onChange={(e) => {setReps(e.target.value)}}
                value={reps}
            />
             <label className="p-1 m-1">Weight in Kg:</label>
            <input
                type="text"
                onChange={(e) => {setLoad(e.target.value)}}
                value={load}
            />

            <button className="p-2 ml-5 bg-emerald-600">ADD WORKOUT</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default ExerciseForm