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
    tableroArmado.agragarLuces(100,100);
    const tableroUtil=tableroArmado.prueba();
    expect(tableroUtil!=undefined).toBe(true);
})
test("Prueba tablero al encenderse (no funciona el tablero)",()=>{
    const tableroArmado=new Tablero();
    const tableroUtil=tableroArmado.prueba();
    expect(tableroUtil==undefined).toBe(true);
})


test("Prueba encender tablero 1",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado;
    tablero.encender([0,0],[0,0]);
    expect(tablero.luces[0][0]).toBe(1);
})
/
test("Prueba encender tablero 2",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado;
    tablero.encender([0,0],[2,2]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(9);
})
test("Prueba encender tablero 3",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado;
    tablero.encender([1,2],[3,2]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(3);
})
test("Prueba encender tablero 4",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado;
    tablero.encender([0,0],[100,100]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(100*100);
})



test("Prueba apagar tablero 1",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado;
    tablero.encender([0,0],[100,100]);
    tablero.apagar([0,0],[0,0]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(10000-1);
})
test("Prueba apagar tablero 2",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado;
    tablero.encender([0,0],[100,100]);
    tablero.apagar([0,0],[2,2]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(10000-9);
})
test("Prueba apagar tablero 3",()=>{
    const tableroArmado=new Tablero();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado;
    tablero.encender([0,0],[100,100]);
    tablero.apagar([0,0],[10000,10000]);
    expect(contadorDeLucesActivas(tablero.luces)).toBe(0);
})