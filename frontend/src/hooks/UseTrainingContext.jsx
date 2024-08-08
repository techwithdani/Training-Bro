import { TrainingContext } from "../context/TrainingContext";
import { useContext } from "react";

export const UseTrainingContext = () => {
    const context = useContext(TrainingContext)

    if (!context) {
        throw Error('This context must be used inside an TrainingContextProvider')
    }

    return context
}