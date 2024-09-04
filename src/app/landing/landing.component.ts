import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  location!: string;
  destination!: string;
  fares!: any[];

  compareFares() {
    // Perform fare comparison logic with Ola, Uber, Rapido, and Namma Yatri APIs
    // Update the fares array with the comparison results
    this.fares = [
      { service: 'Ola', price: 150, eta: '5 mins', logo: 'assets/images/o.svg',url: 'https://www.olacabs.com/' },
      { service: 'Uber', price: 130, eta: '7 mins', logo: 'assets/images/u.jpeg' ,url: 'https://www.uber.com/in/en/'},
      { service: 'Rapido', price: 100, eta: '4 mins', logo: 'assets/images/r.png' ,url: 'https://www.rapido.bike/'},
      { service: 'Namma Yatri', price: 120, eta: '6 mins', logo: 'assets/images/n.jpeg',url: 'https://nammayatri.in/' }
    ];
  }
}
