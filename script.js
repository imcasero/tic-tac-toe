document.addEventListener("DOMContentLoaded", function () {
  let tabla = document.getElementById("tictac");
  let cont = 0;
  tabla.addEventListener("click", (e) => {
    if (cont % 2 == 0) {
      if (e.target.nodeName == "TD") {
        if (cont == 9) {
          alert("Enhorabuena EMPATARON");
        } else {
          if (e.target.textContent == "") {
            e.target.innerHTML = '<img src="./o.png"><p>o<p>';
            cont++;
          }
        }
      }
    } else {
      if (e.target.nodeName == "TD") {
        if (cont == 9) {
          alert("Enhorabuena EMPATARON");
        } else {
          if (e.target.textContent == "") {
            e.target.innerHTML = '<img src="./x.png"><p>x<p>';
            cont++;
          }
        }
      }
    }

    if (cont > 4) {
      let ganador = comprobar_ganador();
      if (ganador) {
        alert("El ganador es " + ganador);
      }
    }
  });
  let boton = document.getElementById("reset");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    let rows = tabla.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      let cells = rows[i].getElementsByTagName("td");
      for (let j = 0; j < cells.length; j++) {
        cells[j].classList.remove("ganador");
        cells[j].textContent = "";
      }
    }
    cont = 0;
  });
});

function comprobar_ganador() {
  let ganador = null;
  let tictac = document.getElementById("tictac");

  // Comprobar filas
  for (let i = 0; i < 3; i++) {
    if (
      tictac.rows[i].cells[0].textContent !== "" &&
      tictac.rows[i].cells[0].textContent ===
        tictac.rows[i].cells[1].textContent &&
      tictac.rows[i].cells[1].textContent ===
        tictac.rows[i].cells[2].textContent
    ) {
      tictac.rows[i].cells[0].classList.add("ganador");
      tictac.rows[i].cells[1].classList.add("ganador");
      tictac.rows[i].cells[2].classList.add("ganador");
      ganador = tictac.rows[i].cells[0].textContent;
    }
  }

  // Comprobar columnas
  for (let i = 0; i < 3; i++) {
    if (
      tictac.rows[0].cells[i].textContent !== "" &&
      tictac.rows[0].cells[i].textContent ===
        tictac.rows[1].cells[i].textContent &&
      tictac.rows[1].cells[i].textContent ===
        tictac.rows[2].cells[i].textContent
    ) {
      tictac.rows[0].cells[i].classList.add("ganador");
      tictac.rows[1].cells[i].classList.add("ganador");
      tictac.rows[2].cells[i].classList.add("ganador");
      ganador = tictac.rows[0].cells[i].textContent;
    }
  }

  // Comprobar diagonal principal
  if (
    tictac.rows[0].cells[0].textContent !== "" &&
    tictac.rows[0].cells[0].textContent ===
      tictac.rows[1].cells[1].textContent &&
    tictac.rows[1].cells[1].textContent === tictac.rows[2].cells[2].textContent
  ) {
    tictac.rows[0].cells[0].classList.add("ganador");
    tictac.rows[1].cells[1].classList.add("ganador");
    tictac.rows[2].cells[2].classList.add("ganador");
    ganador = tictac.rows[0].cells[0].textContent;
  }

  // Comprobar diagonal secundaria
  if (
    tictac.rows[0].cells[2].textContent !== "" &&
    tictac.rows[0].cells[2].textContent ===
      tictac.rows[1].cells[1].textContent &&
    tictac.rows[1].cells[1].textContent === tictac.rows[2].cells[0].textContent
  ) {
    tictac.rows[0].cells[2].classList.add("ganador");
    tictac.rows[1].cells[1].classList.add("ganador");
    tictac.rows[2].cells[0].classList.add("ganador");
    ganador = tictac.rows[0].cells[2].textContent;
  }
  return ganador;
}
