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
  power: boolean = true;

projectArray1 = [
  {name:'image2', description: 'This is image2', image: '../assets/fish-pics/clownfish.jpg', url: 'image2'},
];

projectArray2 = [
  {name:'image4', description: 'This is image5', image: 'assets/fish-pics/sea-turtle.jpg', url: 'image5'},
];

projectArray3 = [
  {name:'image6', description: 'This is image7', image: 'assets/fish-pics/shark.jpg', url: 'image7'},
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

  togglePower(){
    if(this.power){
      this.power = false;
    }
    else if( this.power === false){
      this.power = true;
    }
  }

}
