import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent {
  countries: any;
  matchedCountries: any;
  searchTerm: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json')
      .subscribe(data => {
        this.countries = data.countries;
      });
  }

  searchCountry() {
    this.matchedCountries = this.countries.filter((country: { name: any; }) => country.name === this.searchTerm);
  }
}



