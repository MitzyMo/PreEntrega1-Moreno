class Triangulo {
  constructor() {
    // Inicializar propiedades del triángulo
    this.angulos = [0, 0, 0];
    this.lados = [0, 0, 0];
    this.height = 0;
    this.base = 0;
  }

  // Métodos para establecer los ángulos y lados del triángulo
  setAngulos(angulos) {
    this.angulos = angulos;
  }

  setLados(lados) {
    this.lados = lados;
  }

  setHeight(height){
    this.height = height;
  }

  setBase(base){
    this.base = base;
  }

  validateTriangle() {
    // Verificar que ninguno de los ángulos sea menor que 0 o mayor o igual a 180°
    for (let i = 0; i < this.angulos.length; i++) {
      if (this.angulos[i] < 0 || this.angulos[i] >= 180) {
        document.getElementById(
          "resultado1"
        ).innerText = `Error: Los ángulos deben estar en el rango [0, 180).`;
        return false; // El triángulo no es válido
      }
    }

    // Verificar que la suma de los ángulos sea igual a 180
    const sumaAngulos = this.angulos.reduce((acc, val) => acc + val, 0);
    if (sumaAngulos !== 180) {
      document.getElementById(
        "resultado1"
      ).innerText = `Error: La suma de los ángulos debe ser igual a 180 grados.`;
      return false; // El triángulo no es válido
    }

    // Si pasa ambas verificaciones, el triángulo es válido
    console.log("¡Triángulo válido!");
    return true;
  }

  // Métodos para clasificar el triángulo por ángulos y lados con operador ternario
  classifyByAngulos() {
    return this.angulos[0] === 90 ||
      this.angulos[1] === 90 ||
      this.angulos[2] === 90
      ? "Rectángulo"
      : this.angulos[0] < 90 && this.angulos[1] < 90 && this.angulos[2] < 90
      ? "Acutángulo"
      : "Obtusángulo";
  }

  classifyByLados() {
    return this.lados[0] === this.lados[1] && this.lados[1] === this.lados[2]
      ? "Equilátero"
      : this.lados[0] === this.lados[1] ||
        this.lados[0] === this.lados[2] ||
        this.lados[1] === this.lados[2]
      ? "Isósceles"
      : "Escaleno";
  }

  // Métodos para calcular el perímetro y el área del triángulo
  calculatePerimeter() {
    return this.lados[0] + this.lados[1] + this.lados[2];
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

//----------DOM Variables-----------------

const triangulo = new Triangulo();
let option;
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
//Permitir solo dígitos en el campo de imput
function allowOnlyDigits(event) {
  const keyCode = event.which || event.keyCode;
  const inputCharacter = String.fromCharCode(keyCode);
  const valEx = /\d/;

  // Allow backspace, delete, left arrow, right arrow, and tab
  if (
    valEx.test(inputCharacter) ||
    keyCode === 8 ||
    keyCode === 46 ||
    keyCode === 37 ||
    keyCode === 39 ||
    keyCode === 9
  ) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

// AllowOnlyDigits function to each input field
const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach((inputField) => {
  inputField.addEventListener("keypress", allowOnlyDigits);
});

//Botón de Jugar.
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
      if (inputContainer1) {
        inputContainer1.scrollIntoView({ behavior: "smooth" });
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
      if (inputContainer2) {
        inputContainer2.scrollIntoView({ behavior: "smooth" });
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
      if (inputContainer3) {
        inputContainer3.scrollIntoView({ behavior: "smooth" });
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
      if (inputContainer4) {
        inputContainer4.scrollIntoView({ behavior: "smooth" });
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
      if (output1) {
        output1.scrollIntoView({ behavior: "smooth" });
      }
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
      //Mostrar Clasificación si cumple con los requerimientos.
      if (triangulo.validateTriangle()) {
        // Scroll to the element with the class "inputContainer" o "OUTPUT"
        if (output1) {
          output1.scrollIntoView({ behavior: "smooth" });
        }
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
      // Get the input elements
      const length1 = parseFloat(document.getElementById("length1").value);
      const length2 = parseFloat(document.getElementById("length2").value);
      const length3 = parseFloat(document.getElementById("length3").value);
      // Push datos to Array
      lados.push(length1, length2, length3);
      // Pass the 'angulos' array to setAngulos
      triangulo.setLados(lados);
      // Scroll to the element with the class "inputContainer" o "OUTPUT"
      if (output2) {
        output2.scrollIntoView({ behavior: "smooth" });
      }
      //Mostrar Clasificación
      document.getElementById(
        "resultado2"
      ).innerText = `Clasificación por lados: ${triangulo.classifyByLados()}`;
      break;

    case "3":
      const lengthP1 = parseFloat(document.getElementById("lengthP1").value);
      const lengthP2 = parseFloat(document.getElementById("lengthP2").value);
      const lengthP3 = parseFloat(document.getElementById("lengthP3").value);
      lados.push(lengthP1, lengthP2, lengthP3);
      // Pass the 'angulos' array to setAngulos
      triangulo.setLados(lados);
      // Scroll to the element with the class "inputContainer" o "OUTPUT"
      if (output3) {
        output3.scrollIntoView({ behavior: "smooth" });
      }
      //Mostrar perimetro
      document.getElementById(
        "resultado3"
      ).innerText = `Perímetro del triángulo: ${triangulo.calculatePerimeter()}`;
      break;

    case "4":
      // Calcular área
      const base = parseFloat(document.getElementById("base").value);
      const height = parseFloat(document.getElementById("height").value);
      triangulo.setBase(base);
      triangulo.setHeight(height);
      const areaResult = triangulo.calculateArea();
      // Scroll to the element with the class "inputContainer" o "OUTPUT"
      if (output4) {
        output4.scrollIntoView({ behavior: "smooth" });
      }
      document.getElementById(
        "resultado4"
      ).innerText = `Área del triángulo: ${areaResult}`;
      break;

    default:
      output1.style.display = "block";
      document.getElementById(
        "resultado1"
      ).innerText = `Aquí se desplegará el resultado de sus cálculos`;
  }
}

// Function to save history to local storage
function saveToLocalStorage() {
  localStorage.setItem("triangleMasterHistory", JSON.stringify(history));
}

// Function to load history from local storage
function loadFromLocalStorage() {
  const storedHistory = localStorage.getItem("triangleMasterHistory");
  return storedHistory ? JSON.parse(storedHistory) : [];
}

// Array to store history
let history = loadFromLocalStorage();

function historial() {
  // Retrieve results from the corresponding elements
  const result1 = triangulo.classifyByAngulos();
  const result2 = triangulo.classifyByLados();
  const result3 = triangulo.calculatePerimeter();
  const result4 = triangulo.calculateArea();

  // Validate if the result is a valid number and not undefined
  const isValidResult1 = result1 !== undefined;
  const isValidResult2 = result2 !== undefined;
  const isValidResult3 = !isNaN(result3);
  const isValidResult4 = !isNaN(result4);

  // Create an object with the results
  const historyEntry = {
    result1: isValidResult1 ? result1 : "Esta opción no se ha usado",
    result2: isValidResult2 ? result2 : "Esta opción no se ha usado",
    result3: isValidResult3 ? result3 : "Esta opción no se ha usado",
    result4: isValidResult4 ? result4 : "Esta opción no se ha usado",
  };

  // Add the entry to the history array
  history.push(historyEntry);

  // Save the history to local storage
  saveToLocalStorage();

  // Update innerText of the corresponding elements
  document.getElementById("resultado1").innerText = historyEntry.result1;
  document.getElementById("resultado2").innerText = historyEntry.result2;
  document.getElementById("resultado3").innerText = historyEntry.result3;
  document.getElementById("resultado4").innerText = historyEntry.result4;
}
