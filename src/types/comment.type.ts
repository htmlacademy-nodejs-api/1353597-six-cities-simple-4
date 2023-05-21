import { Host } from './host.type';

export type Comment = {
  text: string;
  date: Date;
  rating: number;
  author: Host;
};
