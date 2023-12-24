document.addEventListener("DOMContentLoaded", function () {
    const redirigirStudy = document.getElementById("redirigir1");
    const redirigir2dLive = document.getElementById("redirigir2");
  
    function redirectToPage(pageURL) {
      Swal.fire({
        title: "!Redirigiendo!",
        icon: "success",
        timer: 2000, // 2 seconds
        showConfirmButton: false,
        onClose: function () {
          window.location.href = pageURL;
          console.log('Funciona')
        },
      });
    }
  
    if (redirigirStudy) {
      redirigirStudy.addEventListener("click", function (event) {
        event.preventDefault();
        redirectToPage("../Pages/tutorial.html");
      });
    }
  
    if (redirigir2dLive) {
      redirigir2dLive.addEventListener("click", function (event) {
        event.preventDefault();
        redirectToPage("../Pages/drawing.html");
      });
    }
  });

  // Fetch a random quote and set it as the text content of the <i> tag
fetch("https://type.fit/api/quotes")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  // Get a random quote from the data
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomQuote = data[randomIndex].text;

  // Set the quote as the text content of the <i> tag
  document.getElementById("quote").textContent = "- "+randomQuote+"";
});
