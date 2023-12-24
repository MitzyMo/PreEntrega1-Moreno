const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultado3 = document.getElementById("resultado3");
const resultado4 = document.getElementById("resultado4");

// Load history from local storage
let history = JSON.parse(localStorage.getItem("triangleMasterHistory")) || [];

// Display up to 5 entries in each resultado
function displayHistoryEntries(entries) {
  // Clear previous content in the resultados
  resultado1.innerHTML = "";
  resultado2.innerHTML = "";
  resultado3.innerHTML = "";
  resultado4.innerHTML = "";

  if (entries.length === 0) {
    resultado1.innerText = 'No hubo interacciones ese día';
    resultado2.innerText = 'No hubo interacciones ese día';
    resultado3.innerText = 'No hubo interacciones ese día';
    resultado4.innerText = 'No hubo interacciones ese día';

  } else {
    entries.slice(0, 5).forEach((entry, index) => {
      const result = entry.result;
      const date = entry.date;
      
      if (result.includes("Clasificación por ángulos")) {
        resultado1.innerText += `Entry ${index + 1}: ${result} - Date: ${date}`;
      } else if (result.includes("Clasificación por lados")) {
        resultado2.innerText += `Entry ${index + 1}: ${result} - Date: ${date}`;
      } else if (result.includes("Perímetro del triángulo")) {
        resultado3.innerText += `Entry ${index + 1}: ${result} - Date: ${date}`;
      } else if (result.includes("Área del triángulo")) {
        resultado4.innerText += `Entry ${index + 1}: ${result} - Date: ${date}`;
      }
    });
  }
}

// Display history entries for each resultado on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  displayHistoryEntries(history);
});

// Filter history entries based on the selected date
function filterHistory() {
  const selectedDate = document.getElementById("searchDate").value;
  const filteredEntries = history.filter((entry) => entry.date.startsWith(selectedDate));
  displayHistoryEntries(filteredEntries);
}

// Attach click event listener to the filter button
document.getElementById("filterButton").addEventListener("click", filterHistory);
