class Auto {
  constructor(sColor, sMarca, sModelo, sTanque) {
    this.color = sColor;
    this.marca = sMarca;
    this.modelo = sModelo;
    this.tanque = sTanque;
    this.velocidad = 0;
  }

  acelerar() {
    this.velocidad += 20;
  }

  frenar() {
    this.velocidad = 0;
  }
}

module.exports = { Auto };
