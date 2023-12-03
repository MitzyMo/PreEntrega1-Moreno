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
    console.log(this.angulos);
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

//----------DOM Variables-----------------

const triangulo = new Triangulo();
let option;
const inputContainer = document.querySelector(".inputContainer");
const output = document.querySelector(".output");
const promptCard1 = document.getElementById("promptCard1");
const inputContainer1 = document.getElementById("inputContainer1");
const output1 = document.getElementById("output1");
const promptCard2 = document.getElementById("promptCard2");
const inputContainer2 = document.getElementById("inputContainer2");
const output2 = document.getElementById("output2");
const promptCard3 = document.getElementById("promptCard3");
const inputContainer3 = document.getElementById("inputContainer3");
const output3 = document.getElementById("output3");
const promptCard4 = document.getElementById("promptCard4");
const inputContainer4 = document.getElementById("inputContainer4");
const output4 = document.getElementById("output4");
// Get the input elements
const length1 = parseFloat(document.getElementById("length1").value);
const length2 = parseFloat(document.getElementById("length2").value);
const length3 = parseFloat(document.getElementById("length3").value);

function playButton() {
  document
    .getElementById("triangleForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
      submitForm();
      console.log(option);
    });
}
function enviarButton1() {
  document
    .getElementById("submit1")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      triangleMaster();
    });
}
function enviarButton2() {
  document
    .getElementById("submit2")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      triangleMaster();
    });
}
function enviarButton3() {
  document
    .getElementById("submit3")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      triangleMaster();
    });
}
function enviarButton4() {
  document
    .getElementById("submit4")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      triangleMaster();
    });
}

function submitForm() {
  option = document.getElementById("option").value;
  //Game Options
  switch (option) {
    case "1":
      // Show the promptCard and hide the output
      promptCard1.style.display = "block";
      output1.style.display = "block";
      promptCard2.style.display = "none";
      output2.style.display = "none";
      promptCard3.style.display = "none";
      output3.style.display = "none";
      promptCard4.style.display = "none";
      output4.style.display = "none";
      // Scroll to the element with the class "inputContainer"
      if (inputContainer) {
        inputContainer.scrollIntoView({ behavior: "smooth" });
      }
      break;

    case "2":
      // Show the promptCard and hide the output
      promptCard1.style.display = "none";
      output1.style.display = "none";
      promptCard2.style.display = "block";
      output2.style.display = "block";
      promptCard3.style.display = "none";
      output3.style.display = "none";
      promptCard4.style.display = "none";
      output4.style.display = "none";
      // Scroll to the element with the class "inputContainer"
      if (inputContainer) {
        inputContainer.scrollIntoView({ behavior: "smooth" });
      }
      break;

    case "3":
      // Show the promptCard and hide the output
      promptCard1.style.display = "none";
      output1.style.display = "none";
      promptCard2.style.display = "none";
      output2.style.display = "none";
      promptCard3.style.display = "block";
      output3.style.display = "block";
      promptCard4.style.display = "none";
      output4.style.display = "none";
      // Scroll to the element with the class "inputContainer"
      if (inputContainer) {
        inputContainer.scrollIntoView({ behavior: "smooth" });
      }
      break;

    case "4":
      // Show the promptCard and hide the output
      promptCard1.style.display = "none";
      output1.style.display = "none";
      promptCard2.style.display = "none";
      output2.style.display = "none";
      promptCard3.style.display = "none";
      output3.style.display = "none";
      promptCard4.style.display = "block";
      output4.style.display = "block";
      // Scroll to the element with the class "inputContainer" o "OUTPUT"
      if (inputContainer) {
        inputContainer.scrollIntoView({ behavior: "smooth" });
      }
      break;

    case "5":
      // Show the promptCard and hide the output
      promptCard1.style.display = "none";
      promptCard2.style.display = "none";
      promptCard3.style.display = "none";
      promptCard4.style.display = "none";
      output1.style.display = "block";
      output2.style.display = "block";
      output3.style.display = "block";
      output4.style.display = "block";
      output.scrollIntoView({ behavior: "smooth" });
      historial();
      break;

    case "6":
      // Salir
      alert("Gracias por usar Triangle Master. ¡Hasta luego!");
      break;

    default:
      output1.style.display = "block";
      document.getElementById(
        "resultado1"
      ).innerText = `Opción no válida. Por favor, elija una opción válida.`;
  }

  console.log("Inside Submit", option);
}

function triangleMaster() {
  const lados = []; // Moved this line inside the loop

  switch (option) {
    case "1":
      // Establecer ángulos
      const angulos = [];
      // Get the input elements
      const angle1 = parseFloat(document.getElementById("angle1").value);
      const angle2 = parseFloat(document.getElementById("angle2").value);
      const angle3 = parseFloat(document.getElementById("angle3").value);
      // Push datos to Array
      angulos.push(angle1, angle2, angle3);
      // Pass the 'angulos' array to setAngulos
      triangulo.setAngulos(angulos);
      // Scroll to the element with the class "inputContainer" o "OUTPUT"
      output.scrollIntoView({ behavior: "smooth" });
   //Mostrar Clasificación si cumple con los requerimientos.
      if (triangulo.validateTriangle()) {
        document.getElementById(
          "resultado1"
        ).innerText = `Clasificación por ángulos: ${triangulo.classifyByAngulos()}`;
      } else {
        document.getElementById(
          "resultado1"
        ).innerText = `Los ángulos no cumplen con las características necesarias para hacer un triángulo`;
      }
      break;

    case "2":
      // Push datos to Array
      lados.push(length1, length2, length3);
      // Pass the 'angulos' array to setAngulos
      triangulo.setLados(lados);
      //Mostrar Clasificación
      document.getElementById(
        "resultado2"
      ).innerText = `Clasificación por lados: ${triangulo.classifyByLados()}`;
      break;

    case "3":
      lados.push(length1, length2, length3);
      // Pass the 'angulos' array to setAngulos
      triangulo.setLados(lados);
      //Mostrar perimetro
      document.getElementById(
        "resultado3"
      ).innerText = `Perímetro del triángulo: ${triangulo.calculatePerimeter()}`;
      break;

    case "4":
      // Calcular área
      const base = parseFloat(document.getElementById("base").value);
      const height = parseFloat(document.getElementById("height").value);
      document.getElementById(
        "resultado3"
      ).innerText = `Área del triángulo: ${triangulo.calculateArea(base, height)}`;
      break;

    default:
      output1.style.display = "block";
      document.getElementById(
        "resultado1"
      ).innerText = `Opción no válida. Por favor, elija una opción válida.`;
  }

  function historial() {
    
    return alert("Gracias por usar Triangle Master. ¡Hasta luego!");;
  }
}
