import { Clothes } from '../../clothes/interfaces/clothes.interface';

export interface LocaleStorageBagItem {
  product: Clothes;
  selectedSize: string;
  selectedQuantity: number;
}
