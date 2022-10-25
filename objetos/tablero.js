
/** indicaciones
 *  0 (luz inactiva)
 *  1 (luz activa)
 */
 

function Tablero(){
    this.luces=new Array();

    const numeroPositivo=function(numero){
        if (numero<=0){
            throw ("Error en las dimensiones establecidas")
        }
    }
    const numeroEnRangoNumericoPositivo(cord1,cord2){
        numeroPositivo(cord1[0])
        numeroPositivo(cord1[1])
        numeroPositivo(cord2[0])
        numeroPositivo(cord2[1])
    }

    this.esTablero=function(){
        if (this.lucesTotales()==0){
            return false;
        }
        return true;
    }
    this.agragarLuces=function(filas,columnas){
        numeroPositivo(filas)
        numeroPositivo(columnas)
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
        for (let i=0;i<this.luces.length;i++){
            for (let j=0;j<this.luces[i].length;j++){
                if (i>=cord1[0] && i<=cord2[0] && j>=cord1[1] && j<=cord2[1]){
                    this.luces[i][j]=1;
                }
            }
        }
    }
    this.apagar=function(cord1,cord2){
        for (let i=0;i<this.luces.length;i++){
            for (let j=0;j<this.luces[i].length;j++){
                if (i>=cord1[0] && i<=cord2[0] && j>=cord1[1] && j<=cord2[1]){
                    this.luces[i][j]=0;
                }
            }
        }
    }
    this.cambiar=function(cord1,cord2){
        for (let i=0;i<this.luces.length;i++){
            for (let j=0;j<this.luces[i].length;j++){
                if (i>=cord1[0] && i<=cord2[0] && j>=cord1[1] && j<=cord2[1]){
                    if (this.luces[i][j]==1){
                        this.luces[i][j]=0;
                    } else {
                        this.luces[i][j]=1;
                   }                
                }
            }
        }
    }
    this.lucesEncendidas=()=>{
        let cont=0;
        for (let i=0;i<this.luces.length;i++){
            for (let j=0;j<this.luces[i].length;j++){
                if (this.luces[i][j]==1){
                    cont++;
                }
            }
        }
        return cont;
    }

}


module.exports=Tablero;