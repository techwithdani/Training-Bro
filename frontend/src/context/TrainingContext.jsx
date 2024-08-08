import PropTypes from 'prop-types';
import { createContext, useReducer } from "react"

export const TrainingContext = createContext()

export const trainingReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EXERCISES':
            return {
                exercises: action.payload
            }
        case 'CREATE_EXERCISE':
            return {
                exercises: [action.payload, ...state.exercises]
            }
        default:
            return state
    }
}

export const TrainingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(trainingReducer, {
        exercises: null
    })

    return (
        <TrainingContext.Provider value={{state, dispatch}}>
            { children }
        </TrainingContext.Provider>
    )
}

TrainingContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};