const Tablero=require("../objetos/tablero.js");

test("Prueba tablero",()=>{
    const tablero=new Tablero();
    expect(tablero.esTablero()).toBe(true);
})

test("Prueba tablero: incorporar luces (cant 1)",()=>{
    const tablero=new Tablero();
    tablero.agragarLuces(1,1);
    expect(tablero.lucesTotales()).toBe(1);
})
