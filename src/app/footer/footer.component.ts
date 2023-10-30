import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logoTF = '../../assets/img/TFS-logo.png';
  copyrightThermofisher: string = 'Copyright 2020 Thermo Fisher Scientific In. All rights reserved.';
  /* footerLinks = [
    {
      linkName: 'Accessability/Disability access',
      linkURL: '#'
    },
    {
      linkName: 'Terms and conditions',
      linkURL: '#'
    },
    {
      linkName: 'Company privacy statement',
      linkURL: '#'
    },
    {
      linkName: 'Privacy policy',
      linkURL: '#'
    },
    {
      linkName: 'EEO &Afirmative action statement',
      linkURL: '#'
    },
    {
      linkName: 'Sitemap',
      linkURL: '#'
    }
  ] */
  
  constructor() { }

  ngOnInit(): void {
  }

}
