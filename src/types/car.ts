export type CarType = {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
  accessories: [
    {
      type:
        | "speed"
        | "acceleration"
        | "turning_diameter"
        | "electric_motor"
        | "exchange"
        | "seats"
        | "gasoline_motor";
      name: string;
    }
  ];
  photos: Array<{
    id: string;
    car_id: string;
    photo: string;
  }>;
};
