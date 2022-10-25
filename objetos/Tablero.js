

function Tablero(){
    this.luces=new Array();

    this.esTablero=function(){
        return true;
    }
    this.agregarLuces=function(cantidad){
        this.luces.push(0);
    }
}


module.exports=Tablero;