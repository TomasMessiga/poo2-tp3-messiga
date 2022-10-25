

function Tablero(){
    this.luces=new Array();

    this.esTablero=function(){
        return true;
    }
    this.agragarLuces=function(fila,columna){
        this.luces.push(0);
    }
    this.lucesTotales=function(){
        return 1;
    }
}


module.exports=Tablero;