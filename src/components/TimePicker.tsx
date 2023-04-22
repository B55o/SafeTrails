import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateAndTimePickerMUI() {
  const [timeValue, setTimeValue] = React.useState<Dayjs | null>(
    dayjs('2022-10-26T12:00'),
  );

  const handleChange = (newTimeValue: Dayjs | null) => {
    setTimeValue(newTimeValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          value={timeValue}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>

  );
}
