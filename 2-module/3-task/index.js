let calculator = {
  // ваш код
  read(a, b) {
    calculator.aCalc = a;
    calculator.bCalc = b;
  },
  sum() {
    return this.aCalc + this.bCalc;
  },
  mul() {
    return this.aCalc * this.bCalc;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
