import productData from '../data/stackline_frontend_assessment_data_2021.json'
import { ProductData } from '../types/ProductData';

export const fetchProductData = async (): Promise<ProductData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 1000);
  });
};