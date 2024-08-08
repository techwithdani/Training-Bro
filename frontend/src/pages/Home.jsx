import { useEffect, useState} from "react"
import ExerciseDetails from "../components/ExerciseDetails";
import ExerciseForm from "../components/ExerciseForm";

const Home = () => {
    const [exercises, setExercises] = useState(null)    

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
        <>
        <div className="bg-slate-300">
            <div>
                {exercises ? (
                    exercises.map((exercise) => (
                       <ExerciseDetails key={exercise._id} exercise={exercise}/>
                    ))
                ) : (
                    <p>Loading exercises...</p>
                )}
            </div>
        </div>
        <ExerciseForm/>
        </>
    )
}

export default Home