
/** indicaciones
 *  0 (luz inactiva)
 *  1 (luz activa)
 */
 
    const numeroPositivo=function(numero){
        if (numero<=0){
            throw ("Error en las dimensiones establecidas")
        }
    }
    const numeroNoNegativo=function(numero){
        if (numero<0){
            throw ("Error en las dimensiones establecidas")
        }
    }
    const numeroEnRangoNumericoPositivo=function(cord1,cord2){
        numeroNoNegativo(cord1[0])
        numeroNoNegativo(cord1[1])
        numeroNoNegativo(cord2[0])
        numeroNoNegativo(cord2[1])
        if (cord2[0]<cord1[0] || cord2[1]<cord1[1] ){
            throw("Error en el rango establecido")
        }
    }

    const estadoOpuesto={
        1:0,
        0:1,
    }
    
    const TableroNull =function(){
        this.luces=undefined;    
        this.encender=function(cord1,cord2){throw("El tablero no puede encender luces")}
        this.apagar=function(cord1,cord2){throw("No funcionan las luces, por ende todas las luces estan apagadas")}
        this.cambiar=function(cord1,cord2){throw("No se pueden alterar el estado de las luces")}
        this.lucesEncendidas=()=>{return 0}
    }



function Tablero(){
    this.luces=undefined;

    this.agragarLuces=function(filas,columnas){
        numeroPositivo(filas)
        numeroPositivo(columnas)
        this.luces=new Array();
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
        if (this.luces==undefined){
            return new TableroNull();
        }      
        let tableroUtil=new Tablero();
        tableroUtil.luces=this.luces;
        return tableroUtil;
    }

    
    this.encender=function(cord1,cord2){
                    numeroEnRangoNumericoPositivo(cord1,cord2)

        function analizarRango(cord1,cord2,criterioCambio){        
            for (let i=cord1[0];i<=cord2[0];i++){
                for (let j=cord1[1];j<=cord2[1];j++){
                        this.luces[i][j]=criterioCambio;
                }
            }
        }
        analizarRango(cord1,cord2,1);
        /** 
        numeroEnRangoNumericoPositivo(cord1,cord2)

        for (let i=cord1[0];i<=cord2[0];i++){
            for (let j=cord1[1];j<=cord2[1];j++){
                    this.luces[i][j]=1;
            }
        }*/

    }
    
    this.apagar=function(cord1,cord2){
        numeroEnRangoNumericoPositivo(cord1,cord2)
        for (let i=cord1[0];i<=cord2[0];i++){
            for (let j=cord1[1];j<=cord2[1];j++){
                    this.luces[i][j]=0;
            }
        } 
    }
    this.cambiar=function(cord1,cord2){
        
        numeroEnRangoNumericoPositivo(cord1,cord2)
        for (let i=cord1[0];i<=cord2[0];i++){
            for (let j=cord1[1];j<=cord2[1];j++){
                this.luces[i][j]=estadoOpuesto[this.luces[i][j]];
            }
        } 
    }
    this.lucesEncendidas=()=>{
        let cont=0;
        const filtrado=function(luz){return luz==1;};
        this.luces.forEach(aux1 => {
            cont+=(aux1.filter(filtrado)).length;   
        });
        return cont;
    }

}



module.exports=Tablero;