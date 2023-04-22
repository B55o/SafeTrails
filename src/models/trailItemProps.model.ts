import { Warning } from "./warning.model";

export type TrailsItemProps = {
    trialID?: number;
    name: string;
    height: string;
    lat: number;
    lon: number;
    warnings?: Warning[];
    trailImgUrl?: string;
    trailSecImgUrl: string;
    exposure: string;
    avgTime: string;
    gradient: string;
    attention: string;
    wzniesienie: string;
  };