// fare-comparison.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fare-comparison',
  templateUrl: './fare-comparison.component.html',
  styleUrls: ['./fare-comparison.component.css']
})
export class FareComparisonComponent {
  @Input() fares: any[] =[];
}
