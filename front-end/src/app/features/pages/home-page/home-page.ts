import { Component, inject } from '@angular/core';
import {HeroSectionComponent} from '../../components/hero-section-component/hero-section-component'
import {CategoryCardComponent} from '../../../shared/components/category-card-component/category-card-component'
import {CardComponent} from '../../../shared/components/card-component/card-component'
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../services/property-service/property-service';


@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, CommonModule,RouterLink, CategoryCardComponent,CardComponent,],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private readonly propertyService = inject(PropertyService);
  
    protected readonly properties = this.propertyService.allProperties;
  
    ngOnInit(): void {
      this.propertyService.getAllProperty();
    }
}
