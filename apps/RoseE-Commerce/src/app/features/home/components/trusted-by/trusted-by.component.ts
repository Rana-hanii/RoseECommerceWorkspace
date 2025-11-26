import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trusted-by',
  imports: [CommonModule],
  templateUrl: './trusted-by.component.html',
  styleUrl: './trusted-by.component.scss',
})
export class TrustedByComponent {

  logos:{src:string}[]=[
    {src:'/images/trusted-sec/1.png'},
    {src:'/images/trusted-sec/2.png'},
    {src:'/images/trusted-sec/3.png'},
    {src:'/images/trusted-sec/4.png'},
    {src:'/images/trusted-sec/5.png'},
    {src:'/images/trusted-sec/6.png'},
  ]


}
