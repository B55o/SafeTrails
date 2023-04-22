import cloudyImgUrl from "./../../assets/icons/cloudy.svg"
import windImgUrl from "./../../assets/icons/wind.svg"
import temperatureImgUrl from "./../../assets/icons/temperature.svg"
import sunsetSunriseImgUrl from "./../../assets/icons/sunsetSunrise.svg"
import CzarnyStawImgUrl from "./../../assets/images/CzarnyStaw.jpeg"

interface Icons {
    sunsetSunrise: any;
    temperature: any;
    wind: any;
    rain: any;
  }

  interface Images {
    czarnyStaw: any;
  }

  export class AssetsManager {
    public Icons!: Icons;
    public images!: Images;
  
    constructor(){
        this.loadAssets();
    }
  
    private loadAssets(): void {
        this.loadIcons();
    }
  
    private loadIcons(): void {
      this.Icons = {
        sunsetSunrise: sunsetSunriseImgUrl,
        rain: cloudyImgUrl,
        temperature: temperatureImgUrl,
        wind: windImgUrl
      };
    }

    private loadImages(): void {
      this.images = {
        czarnyStaw: CzarnyStawImgUrl,
      };
    }

  }
  