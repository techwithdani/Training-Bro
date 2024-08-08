import PropTypes from 'prop-types';
import { createContext, useReducer } from "react"
import { trainingReducer } from './TrainingReducer';

export const TrainingContext = createContext()

export const TrainingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(trainingReducer, {
        exercises: null
    })

    return (
        <TrainingContext.Provider value={{...state, dispatch}}>
            { children }
        </TrainingContext.Provider>
    )
}

TrainingContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};