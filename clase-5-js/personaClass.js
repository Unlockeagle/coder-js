class Persona {
  constructor(sNombre, sEdad, sCalle, sHablar) {
    this.nombre = sNombre;
    this.edad = sEdad;
    this.calle = sCalle;
    this.hablare = sHablar;
  }

  hablar() {
    this.hablare = "hola mundo " + this.nombre;
  }
}

module.exports = { Persona };
