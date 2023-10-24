export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location : Location;
}

export type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type TypeOfferMock = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host:Host;
  id:number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location : Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating:number;
  title: string;
  type: string;
}

export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type TypeReviewMock = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};
