const Tablero=require("../objetos/tablero.js");

test("Prueba tablero",()=>{
    const tablero=new Tablero();
    expect(tablero.esTablero()).toBe(true)
})
