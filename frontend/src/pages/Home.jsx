import { useEffect, useState } from "react"

const Home = () => {
    const [exercises, setExercises] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            const response = await fetch('http://localhost:1305/api/exercises')
            const json = await response.json()

            if (response.ok) {
                setExercises(json)
            }
        }

        fetchExercises()
    }, [])

    return (
        <div className="home">
            <div className="exercises">
                {exercises ? (
                    exercises.map((exercise) => (
                        <div key={exercise._id}>
                            <h3>{exercise.title}</h3>
                            <p>Reps: {exercise.reps}</p>
                            <p>Load: {exercise.load}Kg</p>
                            <p>Created At: {new Date(exercise.createdAt).toLocaleString()}</p>
                            <p>Updated At: {new Date(exercise.updatedAt).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading exercises...</p>
                )}
            </div>
        </div>
    )
}

export default Home