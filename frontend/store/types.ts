export interface CryptoType {
  id: string;
  rank: string;
  name: string;
  price: number;
  marketCap: number;
  change: number;
  iconUrl: string;
}

export interface iSimplified {
  simplified: boolean;
}

export interface iNews {
  url: string;
  name: string;
  description: string;
  image: { thumbnail: { contentUrl: string } };
  provider: { image: { thumbnail: { contentUrl: string } }; name: string }[];
  datePublished: string;
}
