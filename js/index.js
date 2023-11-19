class Triangulo {
  constructor() {
    // Inicializar propiedades del triángulo
    this.angulos = [0, 0, 0];
    this.lados = [0, 0, 0];
  }

  // Métodos para establecer los ángulos y lados del triángulo
  setAngulos(angulos) {
    this.angulos = angulos;
  }

  setLados(lados) {
    this.lados = lados;
  }

  validateTriangle() {
    // Verificar que ninguno de los ángulos sea menor que 0 o mayor o igual a 180°
    for (let i = 0; i < this.angulos.length; i++) {
      if (this.angulos[i] < 0 || this.angulos[i] >= 180) {
        console.log("Error: Los ángulos deben estar en el rango [0, 180).");
        return false; // El triángulo no es válido
      }
    }

    // Verificar que la suma de los ángulos sea igual a 180
    const sumaAngulos = this.angulos.reduce((acc, val) => acc + val, 0);
    if (sumaAngulos !== 180) {
      console.log("Error: La suma de los ángulos debe ser igual a 180 grados.");
      return false; // El triángulo no es válido
    }

    // Si pasa ambas verificaciones, el triángulo es válido
    console.log("¡Triángulo válido!");
    return true;
  }

  // Métodos para clasificar el triángulo por ángulos y lados
  classifyByAngulos() {
    if (this.angulos[0] === 90 || this.angulos[1] === 90 || this.angulos[2] === 90) {
      return "Rectángulo";
    } else if (this.angulos[0] < 90 && this.angulos[1] < 90 && this.angulos[2] < 90) {
      return "Acutángulo";
    } else {
      return "Obtusángulo";
    }
  }

  classifyByLados() {
    if (this.lados[0] === this.lados[1] && this.lados[1] === this.lados[2]) {
      return "Equilátero";
    } else if (this.lados[0] === this.lados[1] || this.lados[0] === this.lados[2] || this.lados[1] === this.lados[2]) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }

  // Métodos para calcular el perímetro y el área del triángulo
  calculatePerimeter() {
    return this.lados[0] + this.lados[1] + this.lados[2];
  }

  calculateArea(base, height) {
    return (base * height) / 2;
  }
}

function triangleMaster() {
  const triangulo = new Triangulo();
  let opcion;

  alert("¡Bienvenido a Triangle Master!\n\nTriangleMaster es un juego interactivo que te permite explorar el fascinante mundo de los triángulos. Conviértete en un maestro de la geometría mientras clasificas triángulos por sus ángulos y lados. ¿Serás capaz de identificar un triángulo equilátero, rectángulo o isósceles? ¡Sumérgete en TriangleMaster y mejora tus habilidades matemáticas de manera divertida y educativa!\n\n");

  do {
    opcion = prompt(`
      Menú de opciones:
      1. Clasificación por ángulos
      2. Clasificación por lados
      3. Calcular perímetro
      4. Calcular área
      5. Salir
    `);

    const lados = []; // Moved this line inside the loop

    switch (opcion) {
      case '1':
        // Establecer ángulos
        const angulos = [];
        for (let i = 0; i < 3; i++) {
          angulos.push(parseFloat(prompt(`Ingrese el ángulo ${i + 1} del triángulo: `)));
        }
        triangulo.setAngulos(angulos);

        if (triangulo.validateTriangle()) {
          alert(`Clasificación por ángulos: ${triangulo.classifyByAngulos()}`);
        } else {
          alert(`Los ángulos no cumplen con las características necesarias para hacer un triángulo`);
        }
        break;

      case '2':
        // Establecer lados
        for (let i = 0; i < 3; i++) {
          lados.push(parseFloat(prompt(`Ingrese la longitud del lado ${i + 1} del triángulo: `)));
        }
        triangulo.setLados(lados);
        alert(`Clasificación por lados: ${triangulo.classifyByLados()}`);
        break;

      case '3':
        // Establecer lados
        for (let i = 0; i < 3; i++) {
          lados.push(parseFloat(prompt(`Ingrese la longitud del lado ${i + 1} del triángulo: `)));
        }
        triangulo.setLados(lados);
        // Calcular perímetro
        alert(`Perímetro del triángulo: ${triangulo.calculatePerimeter()}`);
        break;

      case '4':
        // Calcular área
        const base = parseFloat(prompt("Ingrese la longitud de la base del triángulo:"));
        const height = parseFloat(prompt("Ingrese la altura del triángulo:"));
        alert(`Área del triángulo: ${triangulo.calculateArea(base, height)}`);
        break;

      case '5':
        // Salir
        alert("Gracias por usar Triangle Master. ¡Hasta luego!");
        break;

      default:
        alert("Opción no válida. Por favor, elija una opción válida.");
    }
  } while (opcion !== '5');
}

// Ejecutar el programa Triangle Master
triangleMaster();
