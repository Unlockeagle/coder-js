class CuentaBancaria {
  constructor(sTitular, sSaldo, sLimiteRetiro) {
    (this.titular = sTitular),
      (this.saldo = sSaldo),
      (this.limiteRetiro = sLimiteRetiro);
  }

  retirar(monto) {
    if (
      monto > 0 &&
      this.saldo > 0 &&
      monto <= this.saldo &&
      monto <= this.limiteRetiro
    ) {
      this.saldo -= monto;
    }
  }

  depositar(monto) {
    if (monto > 0) {
      this.saldo += monto;
    }
  }

  consultar() {
    return this.saldo;
  }
}

module.exports = { CuentaBancaria };
