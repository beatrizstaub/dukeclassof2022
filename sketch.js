let table;
let bubbles;
let bubbles2;
let bubbles3;

function preload(){
  table = loadTable('data/data.csv','header')
  console.log(table);
}

function setup (){ 
  createCanvas(3800, 700);
  loadData();
}

function draw (){
  background(237, 254, 255);

  textSize(45);
  text('Where do the members of Duke’s class of ’22 come from?', 10, 50);
  textFont('Garamond');
  fill(23, 89, 196);

  for(let i=0; i< bubbles.length; i++){
      bubbles[i].display();
      bubbles[i].hover(mouseX, mouseY);
  }

  for(let i=0; i< bubbles2.length; i++){
    bubbles2[i].display();
    bubbles2[i].hover(mouseX, mouseY);
  }

  for(let i=0; i< bubbles3.length; i++){
    bubbles3[i].display();
    bubbles3[i].hover(mouseX, mouseY);
  }

}

function loadData(){
  bubbles = [];
  bubbles2= [];
  bubbles3= [];
  for(let i=0; i<table.getRowCount(); i++){
      let row = table.getRow(i);
      let place = row.get('place');
      let number = row.get('number');
      let row2 = table.getRow(i);
      let place2 = row2.get('place2');
      let number2 = row2.get('number2');
      let row3 = table.getRow(i);
      let place3 = row3.get('place3');
      let number3 = row3.get('number3');
      bubbles[i] = new Bubble((i+0.75)*220, 200, place, number);
      bubbles2[i] = new Bubble((i+0.75)*220, 400, place2, number2);
      bubbles3[i] = new Bubble((i+0.75)*220, 600, place3, number3);
    } 
}

class Bubble{
  constructor(tempX, tempY, tempPlace, tempNumber){
    this.x = tempX;
    this.y = tempY;
    this.place = String(tempPlace);
    this.number = Number(tempNumber);
    this.num_color = map(this.number, 0, 150, 80, 200);
    this.speed = 0.1;
    this.hovering = false;
  }

  hover(px, py){
    let d = dist(px, py, this.x, this.y);
    if(d < this.x/15){
      this.hovering = true;
      console.log('hovering')
    } else{
      this.hovering = false;
    }
  }

  display(){
    stroke(this.number);

    fill(10, 38, this.num_color)
    ellipse(this.x, this.y, this.number, this.number);
    
    if (this.hovering){
      textSize(15); 
      textFont('Garamond');
      fill(255);
      text(this.place, this.x-9, this.y-10);
      text(this.number, this.x-9, this.y+20);
    }
  }
}