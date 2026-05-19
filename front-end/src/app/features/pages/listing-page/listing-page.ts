import { Component, inject, OnInit, ChangeDetectionStrategy, computed } from '@angular/core';
import { PropertyService, Property } from '../../../core/services/property-service/property-service';
import { CardComponent } from '../../../shared/components/card-component/card-component';
import {InputSearchComponent} from '../../../shared/components/input-search-component/input-search-component'
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listing-page',
  imports: [CardComponent,RouterLink, FormsModule],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingPage  {

  searchText = "";
  products: Property[] = [];
  filteredProperty: Property[] = [];

  private readonly propertyService = inject(PropertyService);


  applySearch(searchText:string){
    const value = this.searchText.trim();

    if(value == ''){
      this.filteredProperty = this.propertyService.getAllProperty()
    }
    else{
      this.filteredProperty = this.propertyService.getPropertiesByCategory()
    }

  }



 

 
}
