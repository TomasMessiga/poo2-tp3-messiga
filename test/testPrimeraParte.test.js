const Tablero=require("../objetos/Tablero.js");

test("Prueba tablero",()=>{
    const tablero=new Tablero();
    expect(tablero).toBe(Tablero())
})
