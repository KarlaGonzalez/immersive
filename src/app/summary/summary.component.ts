import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../shared/models/product.model';
import { CsvDataService } from '../shared/services/csv-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() productDetail: ProductModel;
  summaryTitle: string = 'Evaluation Summary'; // Harcoded - future rows addition
  featureHelpTitle: string = 'How will this help me?'; // Harcoded - future rows addition
  defaultDotsList = new Array(5); // Harcoded - Total # of dots
  defaultListItems = new Array(6); // Harcoded - Total # of dots
  tabRows: Object[] = [
    /* {
      feature: 'Erase of Use',
      dots: 3
    }*/
  ]
  innerWidth: any;

  summaryList = [];
  totalTopics: number;
  
  constructor(private csvService: CsvDataService) { }

  ngOnInit(): void {
    //console.log('SUMMARY productDetail', this.productDetail);
    //this.createRowsObj();
    /* console.log('tabRows init');
    console.log(this.tabRows); */
    
    //this.fillSummaryList();
    /* if (this.productDetail) {
      this.totalTopics = this.csvService.clearData(this.productDetail.helpTopics);//this.productDetail.helpTopics.length;
      console.log('totalTopics');
    console.log(this.totalTopics);
    } */
    
    //this.isDesktop();
  }

  isDesktop() {
    console.log('Resize SUMMARY, ', this.innerWidth = window.innerWidth)
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 3900 && this.innerWidth >= 1150) {
      
    }
  }

  createRowsObj() {
    if (this.productDetail) {
      const {feature1, feature2, feature3, featureVal1, featureVal2, featureVal3} = this.productDetail;
      this.tabRows.push(
        {
          feature: feature1,
          dots: featureVal1
        },
        {
          feature: feature2,
          dots: featureVal2,
        },
        {
          feature: feature3,
          dots: featureVal3,
        }
      );
      
      console.log('tabRows: ', this.tabRows);
    }
  }

  fillSummaryList() {
    this.summaryList = [];
    if (this.productDetail) {
      this.summaryList = this.csvService.clearData(this.productDetail.helpTopics);
    }
    console.log('summaryList ');
    console.log(this.summaryList);
  }

}
