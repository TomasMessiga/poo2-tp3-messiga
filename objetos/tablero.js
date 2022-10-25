
/** indicaciones
 *  0 (luz inactiva)
 *  1 (luz activa)
 */
 

function Tablero(){
    this.luces=new Array();

    this.esTablero=function(){
        if (this.lucesTotales()==0){
            return false;
        }
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
        this.luces.forEach(aux1 => {
            aux1.forEach(aux2 => {
                cont++;
            });       
        });
        return cont;
    }
    this.prueba=function(){
        if (this.lucesTotales()==0){
            return undefined;
        }      
        let tableroUtil=new Tablero();
        tableroUtil.luces=this.luces;
        return tableroUtil;
    }

    this.encender=function(cord1,cord2){
        this.luces[0][0]=1;
    }

}


module.exports=Tablero;