
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
            this.luces.forEach(aux2 => {
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

    this.encender=function(){
        let cont=0;
        this.luces.forEach(aux1,fil => {
            aux1.forEach(aux2,col => {
                if (aux2==1){
                    this.luces[fil][col]=1;
                }            
            });       
        });
        return cont;    
    }

}


module.exports=Tablero;