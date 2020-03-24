class Raindrop{
    constructor(){

        var options={
            'restitution':1.0,
            // isStatic:true
        }

    
        this.body=Bodies.rectangle(0,0,10,20,options);

        this.width = width;
        width = 10;
        this.height = height;
        height = 20;

     
        this.body.position.x = Math.random()*800;
        this.body.position.y = Math.random()*400; 


        World.add(world,this.body);

    }
    display(){

        var pos= this.body.position

        rectMode(CENTER);

        rect(pos.x, pos.y,width ,height);
    }
}