import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvDataService {
  csvData: Array<Array<string>> = [];
  emitData$ = new Subject<Array<Array<string>>>();
  dropdownOption$: Subject<string> = new Subject();
  //productOptions$: Subject<Array<String>> = new Subject();

  constructor(
    private http: HttpClient,
    private papa: Papa) {
    this.loadCSV();
  }

  public loadCSV() {
    this.http
      .get('./assets/csv/draftStream.csv', { // ImmersiveLinkStories this file it's a conversion of the excel sheet of the catalog data available on teams
        responseType: 'text'
      })
      .subscribe(
        data => this.extractData(data),
        err => console.log('something went wrong: ', err)
      );
  }

  private extractData(response) {
    let csvData = response || '';
    //return
    this.papa.parse(csvData, {
      complete: parsedData => {
        // this.headerRow = parsedData.data.splice(0, 1)[0];
         //console.log(this.csvData);
        
        this.csvData = parsedData.data;
        //this.csvData = this.clearData(parsedData.data)
        this.emitData$.next(this.csvData);
       
        /* setTimeout(() => { // TEST 2nd emission 
          this.emitData$.next(this.csvData);
        }, 3000); */
        
      }
    });
  }

  public sendDropdownOption(optionName: string) {
    //console.log('SERVICE optionName: ', optionName);
    this.dropdownOption$.next(optionName);
  }

  /* public setproductsMenu(products: Array<string>) {
    console.log('MENU options service: ', products);
    this.productOptions$.next(products);
  } */

  /* getMessage(): Observable<any> {
    return this.dropdownOption$.asObservable();
  } */

  clearData(csvArr) {
    let filteredData = csvArr.filter( el => {
      return (el != null && el != "");
    });
    return filteredData;
  }

  /* Video methods - Tab & Stories components */
  /* isYouTubeLink(url) {
    return url.includes('youtu.be');
  }

  getVideoId(url) {
    let id = '';
    if (url.match('https://youtu.be/')) {
      id = url.replaceAll('https://youtu.be/', '');
    }
    return id
  } */

}
