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
  