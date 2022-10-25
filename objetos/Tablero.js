
/** indicaciones
 *  0 (luz inactiva)
 *  1 (luz activa)
 */ 

function Tablero(){
    this.luces=new Array();

    this.esTablero=function(){
        return true;
    }
    this.agragarLuces=function(filas,columnas){
        for (let i=0;i<filas;i++){
            let filaAuxiliar=new Array();
            for (let f=0;f<columnas;f++){
                filaAuxiliar.push(0);
            }
            this.luces.push(filaAuxiliar);
        }
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