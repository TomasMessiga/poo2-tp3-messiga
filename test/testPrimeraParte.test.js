const TableroInactivo=require("../objetos/tableroInactivo.js");
const Tablero=require("../objetos/tablero.js");

test("Prueba tablero: incorporar luces (cant 1)",()=>{
    const tablero=new TableroInactivo();
    tablero.agragarLuces(1,1);
    expect(tablero.lucesTotales()).toBe(1);
})
test("Prueba tablero: incorporar luces (cant 4)",()=>{
    const tablero=new TableroInactivo();
    tablero.agragarLuces(2,2);
    expect(tablero.lucesTotales()).toBe(4);
})
test("Prueba tablero: incorporar luces (cant 16)",()=>{
    const tablero=new TableroInactivo();
    tablero.agragarLuces(4,4);
    expect(tablero.lucesTotales()).toBe(16);
})
test("Prueba tablero: incorporar luces (cant 10000)",()=>{
    const tablero=new TableroInactivo();
    tablero.agragarLuces(100,100);
    expect(tablero.lucesTotales()).toBe(10000);
})

test("Prueba tablero: incorporar luces (cant 10000)",()=>{
    const tableroArmado=new TableroInactivo();
    tableroArmado.agragarLuces(100,100);
    const tablero=tableroArmado.encender();
    expect(tablero==='Tablero').toBe(true);
})



