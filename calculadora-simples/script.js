
    function appendValue(value) {
      const display = document.getElementById('display');
      display.value += value;
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function calculateResult() {
      const display = document.getElementById('display');
      try {
        // Usa Function para avaliar a expressão de forma mais segura
        display.value = new Function('return ' + display.value)();
      } catch (error) {
        alert('Entrada Inválida');
        clearDisplay();
      }
    }