import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

 interface IProps {
  disabled?: boolean;
  handleChange: (event: string) => Promise<void>;
  label: string;
  options: string[];
  value: string;
}

function BreedDropdown(props: IProps) {
  const handleChange = (event: SelectChangeEvent) => {
    props.handleChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{props.label}</InputLabel>
      <Select
        disabled={props.disabled || false}
        label={props.label}
        onChange={handleChange}
        value={props.value}
      >
        {props.options.map((breed: string, index: number) => (
          <MenuItem key={index} value={breed}>{breed}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default BreedDropdown;
