//-----------------------Triangle js Start------------------------//
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

  setHeight(height) {
    this.height = height;
  }

  setBase(base) {
    this.base = base;
  }
    // Method to save result to local storage with timestamp
    saveResultToLocalStorage(result) {
      const timestamp = new Date().toISOString();
      const entry = {
        result,
        date: timestamp,
      };
      let history = JSON.parse(localStorage.getItem("triangleMasterHistory")) || [];
      history.push(entry);
      localStorage.setItem("triangleMasterHistory", JSON.stringify(history));
    } 
  // Async Validation for option 1
  validateTriangleByAnglesAsync() {
    return new Promise((resolve, reject) => {
      // ... (existing validation logic)
      // If passes both verifications, the triangle is valid
      const classification = this.classifyByAngulos();
      console.log(`¡Triángulo válido! Clasificación: ${classification}`);
      this.saveResultToLocalStorage(`Clasificación por ángulos: ${classification}`);
      resolve(true);
    });
  }
  // Async Validation for option 2
  validateTriangleBySidesAsync() {
    return new Promise((resolve, reject) => {
      // ... (existing validation logic)
      // If passes the condition, the triangle is valid
      const classification = this.classifyByLados();
      console.log(`¡Triángulo válido por lados! Clasificación: ${classification}`);
      this.saveResultToLocalStorage(`Clasificación por lados: ${classification}`);
      resolve(true);
    });
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
//-----------------------Triangle js End------------------------//
//-----------------------Variables for Controller and View.------------------------//
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

//-----------------------View js Start------------------------//
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
      // Scroll to the element with the class "inputContainer"
      if (inputContainer4) {
        inputContainer4.scrollIntoView({ behavior: "smooth" });
      }
      break;

    case "5":

      Swal.fire({
        title: '!Re dirigiendo!',
        icon: 'success',
        timer: 2000, // 5 seconds
        showConfirmButton: false, // Hide the "OK" button
        onClose: function () {
            // Redirect to the index page after the timer expires
            window.location.href = "../Pages/history.html";
        }
    });
      break;

    case "6":
      // Salir
      Toastify({
        text: "PRESIONE PARA SALIR",
        destination: "../index.html",
        autoClose:false,
        newWindow: false,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true,
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        }, // Prevents dismissing of toast on hover
        style: {
          width: "30%",height:"70px",background: "rgba(76,120,175,1)",padding:"30px",fontsize:"70px",
        },
        onClick: function(){
        } 
      }).showToast();
      break;

    default:
      Swal.fire({
        title: "Opción no válida.",
        text:"Por favor, elija una opción válida.",
        confirmButtonColor: '#4c78af',
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
  }
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

//Reset option for all values in form
document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  var triangleForm = document.getElementById('triangleForm');

  // Reset the form to its default values
  triangleForm.reset();

  // Reset specific elements by name
  resetElementByName('angle');
  resetElementByName('length');
  resetElementByName('lengthP');
  resetElementByName('base');
  resetElementByName('height');
});
function resetElementByName(elementName) {
  // Get all elements with the specified name
  var elements = document.getElementsByName(elementName);

  // Set their values to the default ones
  for (var i = 0; i < elements.length; i++) {
      elements[i].value = '';
  }
}
//-----------------------View js End------------------------//
//-----------------------Controller js Start------------------------//
async function triangleMaster() {
  const lados = [];

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
      try {
        //Mostrar Clasificación si cumple con los requerimientos.
        await triangulo.validateTriangleByAnglesAsync();
        // Scroll to the element with the class "inputContainer" o "OUTPUT"
        if (output1) {
          output1.scrollIntoView({ behavior: "smooth" });
        }
        document.getElementById(
          "resultado1"
        ).innerText = `Clasificación por ángulos: ${triangulo.classifyByAngulos()}`;
      } catch (error) {
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
            try {
              //Mostrar Clasificación si cumple con los requerimientos.
              await triangulo.validateTriangleBySidesAsync();
              // Scroll to the element with the class "inputContainer" o "OUTPUT"
              if (output2) {
                output2.scrollIntoView({ behavior: "smooth" });
              }
              document.getElementById(
                "resultado2"
              ).innerText = `Clasificación por lados: ${triangulo.classifyByLados()}`;
            } catch (error) {
              //Mostrar Clasificación
              document.getElementById(
                "resultado2"
              ).innerText = `Los lados no cumplen con las características necesarias para hacer un triángulo`;
              document.getElementById(
                "resultado2"
              ).innerHTML = '<p>Los lados no cumplen con las características necesarias para hacer un triángulo</><br><img style="width:300px;margin-top:15px" src="../Assets/Media/VT.png">'
            }
      break;

    case "3":
      const lengthP1 = parseFloat(document.getElementById("lengthP1").value);
      const lengthP2 = parseFloat(document.getElementById("lengthP2").value);
      const lengthP3 = parseFloat(document.getElementById("lengthP3").value);
      lados.push(lengthP1, lengthP2, lengthP3);
      // Pass the 'angulos' array to setAngulos
      triangulo.setLados(lados);
      try {
        //Mostrar Clasificación si cumple con los requerimientos.
        await triangulo.validateTriangleBySidesAsync();
        // Scroll to the element with the class "inputContainer" o "OUTPUT"
        if (output3) {
          output3.scrollIntoView({ behavior: "smooth" });
        }
        document.getElementById(
          "resultado3"
        ).innerText = `Perímetro del triángulo: ${triangulo.calculatePerimeter()}`;
      } catch (error) {
        //Mostrar Clasificación
        document.getElementById(
          "resultado3"
        ).innerText = `Los lados no cumplen con las características necesarias para hacer un triángulo`;
      }   
      break;

    case "4":
      // Calcular área
      const base = parseFloat(document.getElementById("base").value);
      const height = parseFloat(document.getElementById("height").value);
      triangulo.setBase(base);
      triangulo.setHeight(height);
      const areaResult = triangulo.calculateArea();
      // Scroll to the element with the class "OUTPUT"
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
//----------------------Controller js End------------------------//
