import { Component, OnInit } from '@angular/core';
import {RentalService} from '../shared/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: any[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.rentalService.getRentals().subscribe(
      (rentals) => {
        this.rentals = rentals;
      },
      (err) => {

      },
      () => {

      }
    );
  }

}
