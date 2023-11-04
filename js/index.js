function angleType(angle) {
  if (angle < 0 || angle > 360) {
    return "ángulo no válido. Por favor, introduzca un ángulo entre 0 y 360 grados.";
  }

  switch (true) {
    case angle === 0:
      return "Núlo";
    case angle < 90:
      return "Ángulo agudo";
    case angle === 90:
      return "Ángulo recto";
    case angle < 180:
      return "Ángulo obtuso";
    case angle === 180:
      return "Ángulo llano";
    case angle === 360:
      return "Ángulo completo";
    default:
      return "Ángulo cóncavo";
  }
}

let respuesta; // Declare respuesta variable outside the loop

do {
  // Prompt the user for the angle input
  const inputAngle = parseFloat(
    prompt("Introduzca un ángulo en grados").toLowerCase()
  );

  if (isNaN(inputAngle)) {
    alert(
      "Entrada no válida. Por favor, introduzca un ángulo numérico válido."
    );
  } else {
    const angleTypeResult = angleType(inputAngle);
    if (typeof angleTypeResult === "string") {
      alert(`El ángulo de ${inputAngle} es un ${angleTypeResult}.`);
    } else {
      alert(
        `El ángulo de ${inputAngle} grados se llama un ${angleTypeResult}`
      );
    }
  }
  respuesta = prompt("¿Desea introducir otro ángulo? (si o no)").toLowerCase();
} while (respuesta === "sí" || respuesta === "si");
alert(`Usted ha finalizado el programa.`);
