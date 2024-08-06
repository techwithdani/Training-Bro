import PropTypes from 'prop-types';

const ExerciseDetails = ({ exercise }) => {
    return (
        <div className="exercise-details">
            <h3>{exercise.title}</h3>
            <p><strong>Weight in Kg: </strong>{exercise.load}</p>
            <p><strong>Reps: </strong>{exercise.reps}</p>
            <p>Created At: {new Date(exercise.createdAt).toLocaleString()}</p>
            <p>Updated At: {new Date(exercise.updatedAt).toLocaleString()}</p>
        </div>
    )
}

ExerciseDetails.propTypes = {
    exercise: PropTypes.shape({
        title: PropTypes.string.isRequired,
        load: PropTypes.number.isRequired,
        reps: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExerciseDetails;