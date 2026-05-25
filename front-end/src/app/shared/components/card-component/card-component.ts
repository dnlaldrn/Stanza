import { Component, input ,OnInit} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {PropertyService,Property} from '../../../features/services/property-service/property-service';



@Component({
  selector: 'app-card-component',
  imports: [CurrencyPipe],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  // Inject the service
 properties = input.required<Property>();
}
