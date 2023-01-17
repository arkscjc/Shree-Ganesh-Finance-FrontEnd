import { Component } from '@angular/core';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.scss']
})
export class HomecompComponent 
{
  images = [
    {path: 'https://source.unsplash.com/800x600/?nature'},
    {path: 'https://source.unsplash.com/800x600/?car'},
    {path: 'https://source.unsplash.com/800x600/?moto'},
    {path: 'https://source.unsplash.com/800x600/?fantasy'},
  ]
  
}
