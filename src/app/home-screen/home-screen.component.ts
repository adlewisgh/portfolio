import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  
  array1: boolean = true;
  array2: boolean;
  array3: boolean;

projectArray1 = [
  // {name:'image1', description: 'This is image1', image: '../assets/fish-pics/big-fish.jpg', url: 'image1'},
  {name:'image2', description: 'This is image2', image: '../assets/fish-pics/clownfish.jpg', url: 'image2'},
  // {name:'image3', description: 'This is image3', image: '../assets/fish-pics/fish.jpeg', url: 'image3'},
];

projectArray2 = [
  // {name:'image3', description: 'This is image4', image: 'assets/fish-pics/reef.jpg', url: 'image4'},
  {name:'image4', description: 'This is image5', image: 'assets/fish-pics/sea-turtle.jpg', url: 'image5'},
  // {name:'image5', description: 'This is image6', image: 'assets/fish-pics/seahorse.jpg', url: 'image6'},
];

projectArray3 = [
  // {name:'image6', description: 'This is image7', image: 'assets/fish-pics/shark.jpg', url: 'image7'},
  {name:'image6', description: 'This is image7', image: 'assets/fish-pics/shark.jpg', url: 'image7'},
  // {name:'image6', description: 'This is image7', image: 'assets/fish-pics/shark.jpg', url: 'image7'},
];


  ngOnInit() {
  }

  toggleCarousel1() {
    this.array1 = true;
    this.array2 = false;
    this.array3 = false;
    if (this.array1){
      console.log(this.array1 + " " + this.array2 + " " + this.array3);
    }
  }

  toggleCarousel2(){
    this.array1 = false;
    this.array2 = true;
    this.array3 = false;
    if(this.array2){
      console.log(this.array1 + " " + this.array2 + " " + this.array3);
    }
  }

  toggleCarousel3(){
    this.array1 = false;
    this.array2 = false;
    this.array3 = true;
    if(this.array3 && this.array1 === false){
      console.log(this.array1 + " " + this.array2 + " " + this.array3);
    }
  }

}
