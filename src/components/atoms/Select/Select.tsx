import React, { FC, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { IGender } from '../../../redux/thunk/registration'
import useStyles from './style'

interface SelectLabels {
  genders: IGender
  register: () => void
}

const SelectLabels: FC<SelectLabels> = ({ genders, register }) => {
  const [gender, setGender] = useState('')
  const styles = useStyles()
  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }
  return (
    <div>
      <FormControl className={styles.formControl}>
        <div className="input_label">Your gender</div>
        <Select
          {...register()}
          value={gender}
          onChange={handleChange}
          displayEmpty
          className={styles.select}
        >
          {genders.genders.map((el) => (
            <MenuItem key={el.id} value={el.id}>
              {el.gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
export default SelectLabels
