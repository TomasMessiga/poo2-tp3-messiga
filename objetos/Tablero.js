

function Tablero(){
    this.luces=new Array();

    this.esTablero=function(){
        return true;
    }
    this.agragarLuces=function(filas,columnas){
        this.luces.push(0);
    }
    this.lucesTotales=function(){
        let cont=0;
        this.luces.forEach(element => {
            cont++;
        });
        return cont;
    }
}


module.exports=Tablero;