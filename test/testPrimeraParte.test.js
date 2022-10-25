const Tablero=require("../objetos/tablero.js");

const contadorDeLucesActivas=(arreglo)=>{
    var cont=0
    arreglo.forEach(aux => {
        aux.forEach(element => {
            if (element==1){
                cont++;
            }
        });
    });
    return cont;
}

test("Prueba tablero: incorporar luces (cant 1)",()=>{
    const tablero=new Tablero();
    tablero.agragarLuces(1,1);
    expect(tablero.lucesTotales()).toBe(1);
})
test("Prueba tablero: incorporar luces (cant 4)",()=>{
    const tablero=new Tablero();
    tablero.agragarLuces(2,2);
    expect(tablero.lucesTotales()).toBe(4);
})
test("Prueba tablero: incorporar luces (cant 16)",()=>{
    const tablero=new Tablero();
    tablero.agragarLuces(4,4);
    expect(tablero.lucesTotales()).toBe(16);
})
test("Prueba tablero: incorporar luces (cant 10000)",()=>{
    const tablero=new Tablero();
    tablero.agragarLuces(100,100);
    expect(tablero.lucesTotales()).toBe(10000);
})


test("Prueba tablero al encenderse",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(1,1);
    const tableroUtil=tableroArmado.prueba();
    const proto = Object.getPrototypeOf;
    expect(proto(tableroUtil).constructor === Tablero).toBe(true);
})
test("Prueba tablero al encenderse (no funciona el tablero)",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(1,1);
    const tableroUtil=tableroArmado.prueba();
    const proto = Object.getPrototypeOf;
    expect(proto(tableroUtil).constructor === Tablero).toBe(false);
})


test("Prueba encender tablero 1",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[0,0]);
    expect(tablero.luces[0][0]).toBe(1);
})
/
test("Prueba encender tablero 2",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[2,2]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(9);
})
test("Prueba encender tablero 3",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([1,2],[3,2]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(3);
})
test("Prueba encender tablero 4",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[99,99]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(100*100);
})



test("Prueba apagar tablero 1",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[99,99]);
    tablero.apagar([0,0],[0,0]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(10000-1);
})
test("Prueba apagar tablero 2",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[99,99]);
    tablero.apagar([0,0],[2,2]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(10000-9);
})
test("Prueba apagar tablero 3",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[99,99]);
    tablero.apagar([0,0],[99,99]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(0);
})


test("Prueba cambiar tablero 1",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[0,0]);
    tablero.cambiar([0,0],[0,1]);
    expect(tablero.luces[0][0]+tablero.luces[0][1]).toBe(1);
})
test("Prueba cambiar tablero 2",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[2,2]);
    tablero.cambiar([0,0],[2,3]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(3);
})
test("Prueba cambiar tablero 3",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[99,99]);
    tablero.cambiar([0,0],[99,99]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(0);
})



test("Prueba tablero (luces encendidas) 1",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    expect(tablero.lucesEncendidas()).toBe(0);
})
test("Prueba tablero (luces encendidas) 2",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[0,0]);
    expect(tablero.lucesEncendidas()).toBe(1);
})
test("Prueba tablero (luces encendidas) 3",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[2,2]);
    expect(tablero.lucesEncendidas()).toBe(9);
})
test("Prueba tablero (luces encendidas) 4",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    tablero.encender([0,0],[99,99]);
    tablero.apagar([6,6],[6,7]);
 //   expect(tablero.lucesEncendidas()).toBe(10000-2);
})



test("Prueba tablero (error en dimesiones)",()=>{
    const tableroArmado=new Tablero();
    try{
        tableroArmado.agragarLuces(-1,-1);
    } catch (e){
        expect(e).toBe("Error en las dimensiones establecidas");
    }
})
test("Prueba tablero luces (error en dimesiones)",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    try{
        tablero.cambiar([0,0],[-1,-1]);
        throw("")
    } catch (e){
        expect(e).toBe("Error en las dimensiones establecidas");
    }
})
test("Prueba tablero luces (error en el rango)",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.prueba();
    try{
        tablero.cambiar([3,3],[2,2]);
        throw("")
    } catch (e){
        expect(e).toBe("Error en el rango establecido");
    }
})
