import { Weather } from "../../models/weather.model";

export type WeatherOutDaily = {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
  rain_sum: number;
  snowfall_sum: number;
  windspeed_10m_max: number;
  windgusts_10m_max: number;
  winddirection_10m_dominant: number;
};

export function weatherDto(weatherIn: Weather): WeatherOutDaily[] {
  const weatherOutDaily: WeatherOutDaily[] = [];
  let weatherEl: WeatherOutDaily = {
    time: "",
    temperature_2m_max: "",
    temperature_2m_min: "",
    sunrise: "",
    sunset: "",
    rain_sum: 0,
    snowfall_sum: 0,
    windspeed_10m_max: 0,
    windgusts_10m_max: 0,
    winddirection_10m_dominant: 0,
  };

  if (weatherIn.daily !== undefined) {
    for (
      let counter: number = 0;
      counter < weatherIn.daily?.time.length;
      counter++
    ) {
      (weatherEl.time = weatherIn.daily.time[counter].slice(5)),
        (weatherEl.temperature_2m_max =
          weatherIn.daily.temperature_2m_max[counter]),
        (weatherEl.temperature_2m_min =
          weatherIn.daily.temperature_2m_min[counter]),
        (weatherEl.sunrise = weatherIn.daily.sunrise[counter]),
        (weatherEl.sunset = weatherIn.daily.sunset[counter]),
        (weatherEl.rain_sum = weatherIn.daily.rain_sum[counter]),
        (weatherEl.snowfall_sum = weatherIn.daily.snowfall_sum[counter]),
        (weatherEl.windspeed_10m_max = weatherIn.daily.windspeed_10m_max[counter]),
        (weatherEl.windgusts_10m_max = weatherIn.daily.windgusts_10m_max[counter]),
        (weatherEl.winddirection_10m_dominant =
          weatherIn.daily.winddirection_10m_dominant[counter]),
        weatherOutDaily.push(weatherEl);
      weatherEl = {
        time: "",
        temperature_2m_max: "",
        temperature_2m_min: "",
        sunrise: "",
        sunset: "",
        rain_sum: 0,
        snowfall_sum: 0,
        windspeed_10m_max: 0,
        windgusts_10m_max: 0,
        winddirection_10m_dominant: 0,
      };
    }
    return weatherOutDaily;
  }
  return weatherOutDaily;
}
