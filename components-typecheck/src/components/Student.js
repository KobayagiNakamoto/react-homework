import PropTypes from "prop-types";

const Student = ({
  age,
  indexNo,
  firstName,
  lastName,
  examsPassed,
  hasFinished,
}) => {
  return (
    <div id="student">
      <p>Age: {age}</p>
      <p>Inedx number: {indexNo}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Number of exams passed: {examsPassed}</p>
      <p>Has finished studies: {hasFinished.toString()}</p>
    </div>
  );
};

Student.propTypes = {
  age: PropTypes.number.isRequired,
  indexNo: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  examsPassed: PropTypes.number.isRequired,
  hasFinished: PropTypes.bool,
};

export default Student;
