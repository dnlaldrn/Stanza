import { Component, inject, OnInit, ChangeDetectionStrategy, computed , signal} from '@angular/core';
import { PropertyService, Property } from '../../services/property-service/property-service';
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
export class ListingPage implements OnInit  {


  private readonly propertyService = inject(PropertyService);
  public readonly properties = this.propertyService.allProperties;

  ngOnInit() {
   return this.propertyService.getAllProperty()
}
}


