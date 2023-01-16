import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../models/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
 
  
  constructor(private http:HttpClient) { }

  enquiryFormSubmit(enquiryDetails:Enquiry)
  {
      alert("successfully submitted")
      return this.http.post("http://localhost:9090/enquiry/insert",enquiryDetails)
  }


  getdata() {
    
    return this.http.get("http://localhost:9090/enquiry/getAllEnquiries")
  }

  getsingledata() {
    return this.http.get("http://localhost:9090/enquiry/getEligibleEnquiries")
  }

}
