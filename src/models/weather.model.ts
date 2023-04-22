import { DailyUnits, Daily} from "./daily.model";
import { HourlyUnits, Hourly } from "./hourly.model";


export type Weather = {
  latitude?: number;
  longitude?: number;
  generationtime_ms?: number;
  utc_offset_seconds?: number;
  timezone?: string;
  timezone_abbreviation?: string;
  elevation?: number;
  hourly_units?: HourlyUnits;
  hourly?: Hourly;
  daily_units?: DailyUnits;
  daily?: Daily;
};
