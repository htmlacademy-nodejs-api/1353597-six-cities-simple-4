import { Host } from './host.type';
import { Location } from './location.type';
import { OfferCity } from './offer-city.enum';
import { OfferGoods } from './offer-goods.enum';
import { OfferType } from './offer-type.enum';

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: OfferCity;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  rating: number;
  type: OfferType;
  amountRooms: number;
  maxQuests: number;
  price: number;
  goods: OfferGoods[];
  host: Host;
  countComments: number;
  // location: string;
  location: Location;
  id: number;
};
