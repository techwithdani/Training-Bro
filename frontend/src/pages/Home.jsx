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
                {exercises && exercises.map((exercise) => (
                    <p key={exercise._id}>{exercise}</p>
                ))}
            </div>
        </div>
    )
}

export default Home