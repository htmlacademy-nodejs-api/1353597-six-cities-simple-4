import { readFileSync } from 'node:fs';

import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../../types/offer.type.js';
import { OfferCity } from '../../../types/offer-city.enum.js';
import { OfferType } from '../../../types/offer-type.enum.js';
import { OfferGoods } from '../../../types/offer-goods.enum.js';
export default class FileReaderTSV implements FileReaderInterface {
  private rawData = '';
  private readonly encoding = 'utf8';

  constructor(public filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: this.encoding });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(
        ([
          title,
          description,
          date,
          city,
          previewImage,
          images,
          isPremium,
          rating,
          type,
          amountRooms,
          maxQuests,
          price,
          goods,
          name,
          email,
          avatarUrl,
          password,
          isPro,
          countComments,
          latitude,
          longitude,
          id,
        ]) => ({
          title,
          description,
          date: new Date(date),
          city: city as OfferCity,
          previewImage,
          images: images.split(';').map((item) => item),
          isPremium: Boolean(isPremium),
          rating: Number(rating),
          type: type as OfferType,
          amountRooms: Number(amountRooms),
          maxQuests: Number(maxQuests),
          price: Number(price),
          goods: goods.split(';') as OfferGoods[],
          host: { name, email, avatarUrl, password, isPro },
          countComments: Number(countComments),
          location: { latitude: Number(latitude), longitude: Number(longitude) },
          id: Number(id),
        })
      );
  }
}
