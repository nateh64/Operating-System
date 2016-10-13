function App(n,m,s){

    //Declare your instance variables here.
    this.name =n;
    this.memory =m;
    this.state =s;

    //Declare the instance function open here.
    this.open = function(){
      this.state = "active"


    };
    //Declare the instance function sleep here.
    this.sleep(){
      if(this.state = "active"){
        this.state = "sleep";
        this.memory = this.memory / 2;

      }
    }



    //Declare the instance function active here.
    this.active == function(){
      if(this.state = "active"){
        this.state = "active";
        this.memory = this.memory *2;

      }

    }


    //Declare the instance function close here.
    this.close == function(){
      if (this.state != null){
        this.state = null;
        this.memory = 0;
      }
    }



}

//Use the constructor to create 4 App objects below.
var firstapp = new App("Gears of War",400000,"active");
var secondapp = new App("NBA2k17", 500000, "active");
var thirdapp = new App("MW3", 160000, "active");


//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
