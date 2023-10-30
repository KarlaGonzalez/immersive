import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../shared/models/product.model';
import { CsvDataService } from '../shared/services/csv-data.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
  bannerTitle: string = 'D365 Guides'; // Harcoded - No csv data 
  @Input() productDetail: ProductModel;
  @Input() heroFades: boolean;

  constructor(private csvService: CsvDataService) { }

  ngOnInit(): void {
    //console.log('HERO productDetail', this.productDetail);
    //this.suscribeToProduct(); missing observable susbscription
    this.suscribeToOptionChanged();
  }

  suscribeToOptionChanged() {
    this.csvService.dropdownOption$.subscribe(
      productName => {
        //console.log('HERO productName', productName)
        if(productName) {
          this.bannerTitle = productName;
        }
      },
      err => console.log('something went wrong: ', err)
    ) 
  }

}
