import styles from './Filter.module.css';
import propTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styles.inp}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default Filter;
