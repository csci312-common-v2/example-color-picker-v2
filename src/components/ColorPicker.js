import {useState} from 'react';

import LabeledSlider from './LabeledSlider';
import styles from './ColorPicker.module.css';

export default function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const color = {background: `rgb(${red}, ${green}, ${blue})`};
  return (
    <div>
      <div className={styles.colorSwatch} style={color} ></div>
      <LabeledSlider label="red"   value={red}   setValue={setRed}/>
      <LabeledSlider label="green" value={green} setValue={setGreen}/>
      <LabeledSlider label="blue"  value={blue}  setValue={setBlue}/>
    </div>
  );
}