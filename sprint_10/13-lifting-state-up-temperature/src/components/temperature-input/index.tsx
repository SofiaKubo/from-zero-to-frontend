import './styles.css';
import { TemperatureScale } from '../../types';

type TTemperatureInputProps = {
  scale: TemperatureScale;
  value: string;
  onChange: (temperature: string) => void;
};

export const TemperatureInput = ({ scale, value, onChange }: TTemperatureInputProps) => {
  return (
    <fieldset className="card">
      <label className="label">
        Введите температуру в {scale}:
        <input
          className="input"
          name="name"
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
};
