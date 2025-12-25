
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  images?: string[];
  previewLink?: string;
  technologies?: string[];
  description?: string;
  imageUrlLight?: string;
  imagesLight?: string[];
}
