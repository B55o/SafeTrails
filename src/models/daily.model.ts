export type DailyUnits = {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
    rain_sum: string;
    snowfall_sum: string;
    windspeed_10m_max: string;
    windgusts_10m_max: string;
    winddirection_10m_dominant: string;
  };
  
  export type Daily = {
    time: string[];
    temperature_2m_max: string[];
    temperature_2m_min: string[];
    sunrise: string[];
    sunset: string[];
    rain_sum: number[];
    snowfall_sum: number[];
    windspeed_10m_max: number[];
    windgusts_10m_max: number[];
    winddirection_10m_dominant: number[];
  };