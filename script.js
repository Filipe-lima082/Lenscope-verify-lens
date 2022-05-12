// Array com os valores dos options Esfericos

const valuesEsfericos = [
  {
    value: "0.00",
  },

  {
    value: "-0.25",
  },

  {
    value: "-0.50",
  },

  {
    value: "-0.75",
  },

  {
    value: "-1.00",
  },

  {
    value: "-1.25",
  },

  {
    value: "-1.50",
  },

  {
    value: "-1.75",
  },

  {
    value: "-2.00",
  },

  {
    value: "-2.25",
  },

  {
    value: "-2.50",
  },

  {
    value: "-2.75",
  },

  {
    value: "-3.00",
  },

  {
    value: "-3.25",
  },

  {
    value: "-3.50",
  },

  {
    value: "-3.50",
  },

  {
    value: "-3.75",
  },

  {
    value: "-4.00",
  },

  {
    value: "-4.25",
  },

  {
    value: "-4.50",
  },

  {
    value: "-4.75",
  },

  {
    value: "-5.00",
  },

  {
    value: "-5.25",
  },

  {
    value: "-5.50",
  },

  {
    value: "-5.75",
  },
  {
    value: "-6.00",
  },

  {
    value: "-6.25",
  },

  {
    value: "-6.50",
  },

  {
    value: "-6.75",
  },

  {
    value: "-7.00",
  },

  {
    value: "-7.25",
  },

  {
    value: "-7.50",
  },

  {
    value: "-7.75",
  },

  {
    value: "-8.00",
  },

  {
    value: "-8.25",
  },

  {
    value: "-8.50",
  },

  {
    value: "-8.75",
  },

  {
    value: "-9.00",
  },

  {
    value: "-9.25",
  },

  {
    value: "-9.50",
  },

  {
    value: "-9.75",
  },

  {
    value: "-10.00",
  },

  {
    value: "-10.25",
  },

  {
    value: "-10.50",
  },

  {
    value: "-10.75",
  },

  {
    value: "-11.00",
  },

  {
    value: "-11.25",
  },

  {
    value: "-11.50",
  },

  {
    value: "-11.75",
  },

  {
    value: "-12.00",
  },

  {
    value: "-12.25",
  },

  {
    value: "-12.50",
  },

  {
    value: "-12.75",
  },

  {
    value: "-13.00",
  },

  {
    value: "-13.25",
  },

  {
    value: "-13.50",
  },

  {
    value: "-13.75",
  },

  {
    value: "-14.00",
  },

  {
    value: "-14.25",
  },

  {
    value: "-14.50",
  },

  {
    value: "-14.75",
  },

  {
    value: "-15.00",
  },
];

// Array com os valores dos options Cilintricos

const valuesCilintricos = [
  {
    value: "0.00",
  },

  {
    value: "-0.25",
  },

  {
    value: "-0.50",
  },

  {
    value: "-0.75",
  },

  {
    value: "-1.00",
  },

  {
    value: "-1.25",
  },

  {
    value: "-1.50",
  },

  {
    value: "-1.75",
  },

  {
    value: "-2.00",
  },

  {
    value: "-2.25",
  },

  {
    value: "-2.50",
  },

  {
    value: "-2.75",
  },

  {
    value: "-3.00",
  },

  {
    value: "-3.25",
  },

  {
    value: "-3.50",
  },

  {
    value: "-3.50",
  },

  {
    value: "-3.75",
  },

  {
    value: "-4.00",
  },

  {
    value: "-4.25",
  },

  {
    value: "-4.50",
  },

  {
    value: "-4.75",
  },

  {
    value: "-5.00",
  },

  {
    value: "-5.25",
  },

  {
    value: "-5.50",
  },

  {
    value: "-5.75",
  },
  {
    value: "-6.00",
  },
];


// Seleção dos elementos // Manipulação do DOM

const esfeEsquerdo = document.getElementById("esferico-e");
const esfeDireito = document.getElementById("esferico-d");

const cilinEsquerdo = document.getElementById("cilintrico-e");
const cilinDireito = document.getElementById("cilintrico-d");

const lente = document.querySelector(".lente");
const button = document.querySelector(".button");

let valueEsfericoE;
let valueEsfericoD;
let valueCilintricoE;
let valueCilintricoD;

function handleForm(event) {
  event.preventDefault();

  valueEsfericoE = Number(esfeEsquerdo.value);
  valueEsfericoD = Number(esfeDireito.value);

  valueCilintricoE = Number(cilinEsquerdo.value);
  valueCilintricoD = Number(cilinDireito.value);

  if (
    (valueCilintricoD >= -2 &&
      valueCilintricoE >= -2 &&
      valueEsfericoE <= -3 &&
      valueEsfericoD <= -3) ||
    (valueEsfericoD <= -12 && valueEsfericoD <= -12)
  ) {
    lente.innerHTML = "LENTE PRIME";
  } else if (
    (valueCilintricoD >= -5 &&
      valueCilintricoE >= -5 &&
      valueEsfericoE <= -3 &&
      valueEsfericoD <= -3) ||
    (valueEsfericoD <= -15 && valueEsfericoD <= -15)
  ) {
    lente.innerHTML = "LENTE VISION";
  } else {
    lente.innerHTML =
      "OPS!! Não encontramos uma lente. Fale conosco por um de nossos contatos";
  }
}

button.addEventListener("click", handleForm);

//  Options Esfericos

valuesEsfericos.map(({ value }) => {
  const option = document.createElement("option");
  option.setAttribute("value", `${value}`);
  option.innerText = value;
  esfeEsquerdo.appendChild(option);
});

valuesEsfericos.map(({ value }) => {
  const option = document.createElement("option");
  option.setAttribute("value", `${value}`);
  option.innerText = value;
  esfeDireito.appendChild(option);
});


// Options Cilintricos

valuesCilintricos.map(({ value }) => {
  const option = document.createElement("option");
  option.setAttribute("value", `${value}`);
  option.innerText = value;
  cilinEsquerdo.appendChild(option);
});

valuesCilintricos.map(({ value }) => {
  const option = document.createElement("option");
  option.setAttribute("value", `${value}`);
  option.innerText = value;
  cilinDireito.appendChild(option);
});
