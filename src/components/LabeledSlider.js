import PropTypes from 'prop-types';

import styles from './LabeledSlider.module.css';

export default function LabeledSlider({ label, value, setValue }) {
  return (
    <div>
      <div className={styles.colorLabel}>{label}</div>
      <input type="range" 
         min="0"
         max="255"
         value={value}
         onChange={(event)=>{setValue(parseInt(event.target.value,10))}}/>
      <span>{value}</span>
      </div>
  );
}

LabeledSlider.propTypes = {
  label:PropTypes.string.isRequired,
  value:PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired
};