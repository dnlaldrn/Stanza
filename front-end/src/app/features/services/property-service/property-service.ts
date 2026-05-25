import { Injectable, signal, computed } from '@angular/core';

export interface Property {

  readonly property_id:number;
  readonly property_name:string;
  readonly category:string;
  readonly address:string;
  readonly rating:number;
  readonly img:string;
  readonly price:number;
  readonly electricity:boolean;
  readonly water:boolean;
  readonly internet:boolean;
  readonly airconditioned:boolean;

}

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private readonly propertiesState = signal<Property[]>([
    {
      property_id: 1,
      property_name: 'House 1',
      category: 'House',
      rating: 5,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 3000,
      electricity: true,
      water: true,
      internet: true,
      airconditioned: false,
    },
    {
      property_id: 2,
      property_name: 'House 1',
      category: 'Bed Space',
      rating: 3,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2500,
      electricity: true,
      water: true,
      internet: true,
      airconditioned: false,
    },
    {
      property_id: 3,
      property_name: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
      electricity: true,
      water: false,
      internet: true,
      airconditioned: false,
    },
    {
      property_id: 4,
      property_name: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
      electricity: true,
      water: true,
      internet: false,
      airconditioned: false,
    },
    {
      property_id: 5,
      property_name: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2100,
      electricity: true,
      water: true,
      internet: true,
      airconditioned: false,
    },
    {
      property_id: 6,
      property_name: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
      electricity: false,
      water: false,
      internet: false,
      airconditioned: false,
    },
    {
      property_id: 7,
      property_name: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
      electricity: false,
      water: false,
      internet: false,
      airconditioned: false,
    },
    {
      property_id: 8,
      property_name: 'Bed 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
      electricity: false,
      water: false,
      internet: false,
      airconditioned: false,
    },
  ]);

  readonly allProperties = this.propertiesState.asReadonly();

  getAllProperty() {
    return this.allProperties;
  }
  getPropertyById(id: number): Property | undefined {
    return this.propertiesState().find((p) => p.property_id === id);
  }
  getPropertiesByCategory(category: string): Property[] {
    return this.propertiesState().filter((p) => p.category === category);
  }
}
