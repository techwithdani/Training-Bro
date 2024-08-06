import { useEffect, useState } from "react"
import ExerciseDetails from "../components/ExerciseDeatails";

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
                       <ExerciseDetails key={exercise._id} exercise={exercise}/>
                    ))
                ) : (
                    <p>Loading exercises...</p>
                )}
            </div>
        </div>
    )
}

export default Home