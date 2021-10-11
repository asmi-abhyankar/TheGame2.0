var brush,brushImg;
var bus,busAni;
var toothpaste,toothpasteImg;
var comb,combImg;
var perfume,perfumeImg;
var bag,bagImg;
var food,foodImg;
var money,moneyImg;
var uniform,uniformImg;
var uniBoy,uniBoyImg
var boy,boyImg;
var mother,motherImg;
var bgImg;
var ObjectGrp;
var help,helpImg
var score=0;
function preload() {

    bgImg = loadImage("images/bg.jpg");
    boyImg = loadImage("images/boy.png");
    motherImg = loadImage("images/mother.png");

    helpImg = loadImage("images/help.png");
    brushImg = loadImage("images/brush.png");
    toothpasteImg = loadImage("images/toothpaste.png");
    combImg = loadImage("images/comb.png");
    perfumeImg = loadImage("images/perfume.png");
    bagImg = loadImage("images/backpack.png");
    foodImg = loadImage("images/food.png");
    moneyImg = loadImage("images/money.png")
    uniformImg = loadImage("images/uniform.png")
    uniBoyImg = loadImage("images/uniforrm(boy).jpg")

    busAni = loadAnimation("images/bus1.png","images/bus2.png","images/bus3.png","images/bus4.png");


}

function setup(){
    var canvas = createCanvas(1200,600);

    boy = createSprite(750,300,20,20);
    boy.addImage("BOY",boyImg)
    boy.scale=0.3;

    mother = createSprite(600,300,20,20)
    mother.addImage("MOTHER",motherImg)
    mother.visible = false;

    help = createSprite(100,100,20,20)
    help.addImage("HELP",helpImg);
    help.scale=0.2;

    uniBoy = createSprite(900,550,40,40)
    uniBoy.addImage("UNIBOY",uniBoyImg)
    uniBoy.scale= 0.1;

    brush = createSprite(100,550,40,40)
    brush.addImage("BRUSH",brushImg)
    brush.scale= 0.1;

    toothpaste = createSprite(200,550,40,40)
    toothpaste.addImage("TOOTHPASTE",toothpasteImg)
    toothpaste.scale= 0.2;

    comb = createSprite(300,550,40,40)
    comb.addImage("COMB",combImg)
    comb.scale= 0.1;

    perfume = createSprite(400,550,40,40)
    perfume.addImage("PER",perfumeImg)
    perfume.scale= 0.1;

    bag = createSprite(500,550,40,40)
    bag.addImage("BAG",bagImg)
    bag.scale= 0.2;

    food = createSprite(600,560,40,40)
    food.addImage("FOOD",foodImg)
    food.scale= 0.4;

    money = createSprite(700,570,40,40)
    money.addImage("MONEY",moneyImg)
    money.scale= 0.2;

    uniform = createSprite(800,550,40,40)
    uniform.addImage("UNI",uniformImg)
    uniform.scale= 0.4;

    bus = createSprite(200,400,20,20)
    bus.addAnimation("BUS",busAni)
    bus.scale=0.5;

    ObjectGrp = new Group ()
    ObjectGrp.add(comb)
    ObjectGrp.add(bag)
    ObjectGrp.add(food)
    ObjectGrp.add(money)
    ObjectGrp.add(uniform)
    ObjectGrp.add(perfume)
    ObjectGrp.add(toothpaste)
    ObjectGrp.add(brush)
}

function draw(){
 background(bgImg);

 text("Score :"+ score, 50,50)
    showTime();

    if(keyDown(UP_ARROW)){
        boy.y=boy.y-5
    }
    if(keyDown(DOWN_ARROW)){
        boy.y=boy.y+5
    }
    if(keyDown(LEFT_ARROW)){
        boy.x=boy.x-5
    }
    if(keyDown(RIGHT_ARROW)){
        boy.x=boy.x+5
    }

    //use 
    if(mousePressedOver(brush)&& boy.isTouching(brush)){
        brush.destroy(); 
        score = score + 5; 
      };

    if(mousePressedOver(toothpaste)&& boy.isTouching(toothpaste)){
        toothpaste.destroy(); 
        score = score + 5; 
      };

    if(mousePressedOver(comb)&& boy.isTouching(comb)){
        comb.destroy(); 
        score = score + 5; 
      };
    
    if(mousePressedOver(perfume)&& boy.isTouching(perfume)){
        perfume.destroy(); 
        score = score + 5; 
      };

    if(mousePressedOver(uniform)&& boy.isTouching(uniform)){
        uniform.destroy(); 
        score = score + 5; 
      };

    if(mousePressedOver(food)&& boy.isTouching(food)){
        food.destroy(); 
        score = score + 5; 
      };

    if(mousePressedOver(money)&& boy.isTouching(money)){
        money.destroy(); 
        score = score + 5; 
      };

    if(mousePressedOver(bag)&& boy.isTouching(bag)){
        bag.destroy(); 
        score = score + 5; 
      };

    if(mousePressedOver(help)&& boy.isTouching(help)){
        mother.visible= true;
    }
    

    drawSprites()
}


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    //document.getElementById("MyClockDisplay").innerText = time;
    //document.getElementById("MyClockDisplay").textContent = time;
    fill ("white");
    textSize (30);
    text(time,1000,50)
    setTimeout(showTime, 1000);
    
}


