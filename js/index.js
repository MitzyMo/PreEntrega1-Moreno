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
    if (
      this.angulos[0] === 90 ||
      this.angulos[1] === 90 ||
      this.angulos[2] === 90
    ) {
      return "Rectángulo";
    } else if (
      this.angulos[0] < 90 &&
      this.angulos[1] < 90 &&
      this.angulos[2] < 90
    ) {
      return "Acutángulo";
    } else {
      return "Obtusángulo";
    }
  }

  classifyByLados() {
    if (this.lados[0] === this.lados[1] && this.lados[1] === this.lados[2]) {
      return "Equilátero";
    } else if (
      this.lados[0] === this.lados[1] ||
      this.lados[0] === this.lados[2] ||
      this.lados[1] === this.lados[2]
    ) {
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
const triangulo = new Triangulo();
const promptCard = document.getElementById("promptCard");
const inputContainer = document.getElementById("inputContainer");
const output = document.getElementById("output");
const lados = [];
let option = document.getElementById("option").value;

console.log(option);
console.log(inputContainer);
function submitForm() {
  // Reset promptCard content
  promptCard.innerHTML = "";
  inputContainer.innerHTML = "";
  //Game Options
  switch (option) {
    case "1":
      for (let i = 0; i < 3; i++) {
        // Create input box for each angle
        const inputLabel = document.createElement("label");
        inputLabel.textContent = `Ingrese el ángulo ${i + 1} del triángulo:`;
        inputContainer.appendChild(inputLabel);

        const input = document.createElement("input");
        input.id = `angle${i + 1}`;
        input.type = "number";
        input.placeholder = `Ángulo ${i + 1}`;
        inputContainer.appendChild(input);
      }

      // Create a submit button for angles
      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit Angles";
      submitButton.addEventListener("click", function () {
        const angles = [];
        for (let i = 0; i < 3; i++) {
          const input = document.getElementById(`angle${i + 1}`);
          const angleValue = parseFloat(input.value);
          angles.push(angleValue);
        }

        // Set the angles in the triangulo object
        triangulo.setAngulos(angles);

        // Reset promptCard content
        promptCard.innerHTML = "";

        // Inside the case 1 block, after validating the triangle:
        if (triangulo.validateTriangle()) {
          output.innerHTML = `<p>Clasificación por ángulos: ${triangulo.classifyByAngulos()}</p>`;
        } else {
          output.innerHTML =
            "<p>Los ángulos no cumplen con las características necesarias para formar un triángulo</p>";
        }

 
      });

      inputContainer.appendChild(submitButton);
      break;

    case "2":
      for (let i = 0; i < 3; i++) {
        const side = parseFloat(
          prompt(`Ingrese la longitud del lado ${i + 1} del triángulo:`)
        );
        promptCard.innerHTML += `<p>Longitud del lado ${i + 1}: ${side}</p>`;
        lados.push(side);
      }
      triangulo.setLados(lados);
      promptCard.innerHTML += `<p>Clasificación por lados: ${triangulo.classifyByLados()}</p>`;
      break;

    case "3":
      for (let i = 0; i < 3; i++) {
        const side = parseFloat(
          prompt(`Ingrese la longitud del lado ${i + 1} del triángulo:`)
        );
        promptCard.innerHTML += `<p>Longitud del lado ${i + 1}: ${side}</p>`;
        lados.push(side);
      }
      triangulo.setLados(lados);
      promptCard.innerHTML += `<p>Perímetro del triángulo: ${triangulo.calculatePerimeter()}</p>`;
      break;

    case "4":
      const base = parseFloat(
        prompt("Ingrese la longitud de la base del triángulo:")
      );
      const height = parseFloat(prompt("Ingrese la altura del triángulo:"));
      promptCard.innerHTML += `<p>Longitud de la base: ${base}</p>`;
      promptCard.innerHTML += `<p>Altura: ${height}</p>`;
      promptCard.innerHTML += `<p>Área del triángulo: ${triangulo.calculateArea(
        base,
        height
      )}</p>`;
      break;

    case "5":
      promptCard.innerHTML +=
        "<p>Gracias por usar Triangle Master. ¡Hasta luego!</p>";
      break;

    default:
      promptCard.innerHTML +=
        "<p>Opción no válida. Por favor, elija una opción válida.</p>";
  }

  // Show the promptCard and hide the output
  promptCard.style.display = "block";
  output.style.display = "none";
}
console.log(inputContainer);
function triangleMaster() {
  document
    .getElementById("triangleForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      submitForm();
    });
}
// Ejecutar el programa Triangle Master
triangleMaster();
