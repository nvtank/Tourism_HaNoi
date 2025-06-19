export interface Tour {
  id: string;
  name: string;
  price: number;
  duration: string;
  image: string;
  description: string;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  specialRequests: string;
}

export interface Pricing {
  subtotal: number;
  discount: number;
  total: number;
}

export interface BookingData {
  tour: Tour;
  date: string;
  adults: number;
  children: number;
  customerInfo: CustomerInfo;
  pricing: Pricing;
  bookingId: string;
  createdAt: string;
}

export interface OrderData extends BookingData {
  paymentMethod: string;
  paymentStatus: string;
  orderId: string;
  paidAt: string;
}

export interface CardInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}