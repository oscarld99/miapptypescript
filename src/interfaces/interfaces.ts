export interface Votes {
  positive: number;
  negative: number;
}

export interface DataPerson {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: Date;
  votes: Votes;
}
