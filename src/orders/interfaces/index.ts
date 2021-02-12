export interface Order {
  user: {
    name: string;
    phoneNumber: string;
  };
  location: string;
  latitude: number;
  longitude: number;
  product: string;
}
