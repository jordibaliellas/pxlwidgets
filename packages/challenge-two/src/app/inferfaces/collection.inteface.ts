import { GeneralObject } from './util.interface';

export interface Collection {
  artObjects: ArtObject[];
  count: number;
  elapsedMilliseconds: number;
}

export interface ArtObject {
  links: ArtObjectLink;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: ArtObjectWebImage;
  headerImage: ArtObjectHeaderImage;
  productionPlaces: string[];
}

interface ArtObjectLink {
  self: string;
  web: string;
}

interface ArtObjectWebImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

interface ArtObjectHeaderImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

export interface CollectionQuery {
  language: string;
  query: GeneralObject;
}
