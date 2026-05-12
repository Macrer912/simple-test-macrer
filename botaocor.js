// COPIAR PARA INDEX2.JS

// Para abrir o menu "Cores"
function toggleCores() {
    const cores = document.getElementById('menucores');
    if (menucores.style.display === 'none' || menucores.style.display === '') {
        menucores.style.display = 'block';
    } else {
        menucores.style.display = 'none';
    }
}
function toggleCoresCamisa() {
    const cores = document.getElementById('menucorescamisa');
    if (menucorescamisa.style.display === 'none' || menucorescamisa.style.display === '') {
        menucorescamisa.style.display = 'block';
    } else {
        menucorescamisa.style.display = 'none';
    }
}
function toggleCoresCalcao() {
    const cores = document.getElementById('menucorescalcao');
    if (menucorescalcao.style.display === 'none' || menucorescalcao.style.display === '') {
        menucorescalcao.style.display = 'block';
    } else {
        menucorescalcao.style.display = 'none';
    }
}
function toggleCoresGola() {
    const cores = document.getElementById('menucoresgola');
    if (cores.style.display === 'none' || cores.style.display === '') {
        cores.style.display = 'block';
    } else {
        cores.style.display = 'none';
    }
}
function toggleCoresNumero() {
    const cores = document.getElementById('menucoresnumero');
    if (menucoresnumero.style.display === 'none' || menucoresnumero.style.display === '') {
        menucoresnumero.style.display = 'block';
    } else {
        menucoresnumero.style.display = 'none';
    }
}




// Aplicar cores



function aplicarCorBaseCamisa(color) {
  // Use querySelectorAll to get all elements with class 'filcamisa'
  const filcamisaElements = document.querySelectorAll('.filcamisa');
  
  // Apply the filter to all elements with class 'filcamisa'
  filcamisaElements.forEach(element => {
    switch (color) {
       case "vermelha":
        element.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
element.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
element.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
element.removeAttribute("filter");
break;
case "cyan":
element.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
element.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
element.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
element.setAttribute("filter", "url(# filter-0062D9)");
break;
case "navy":
element.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
element.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
element.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
element.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
element.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
element.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
element.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
element.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
element.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
element.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
element.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
element.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
element.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
element.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
element.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
element.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
element.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
element.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
element.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
element.setAttribute("filter", "url(#filter-000000)");
break;
    }
    
  });
}

function aplicarCorBaseCalcao(color) {
  // Use querySelectorAll to get all elements with class 'filcamisa'
  const filcalcaoElements = document.querySelectorAll('.filcalcao');
  
  // Apply the filter to all elements with class 'filcamisa'
  filcalcaoElements.forEach(element => {
    switch (color) {
     case "vermelha":
        element.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
element.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
element.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
element.removeAttribute("filter");
break;
case "cyan":
element.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
element.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
element.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
element.setAttribute("filter", "url(#filter-0062D9)");
break;
case "navy":
element.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
element.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
element.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
element.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
element.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
element.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
element.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
element.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
element.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
element.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
element.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
element.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
element.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
element.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
element.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
element.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
element.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
element.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
element.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
element.setAttribute("filter", "url(#filter-000000)");
break;
    }
  });
}

function aplicarCorBaseMeiao(color) {
  // Use querySelectorAll to get all elements with class 'filcamisa'
  const filmeiaoElements = document.querySelectorAll('.filmeiao');
  
  // Apply the filter to all elements with class 'filcamisa'
  filmeiaoElements.forEach(element => {
    switch (color) {
      case "vermelha":
        element.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
element.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
element.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
element.removeAttribute("filter");
break;
case "cyan":
element.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
element.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
element.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
element.setAttribute("filter", "url(# filter-0062D9)");
break;
case "navy":
element.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
element.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
element.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
element.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
element.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
element.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
element.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
element.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
element.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
element.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
element.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
element.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
element.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
element.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
element.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
element.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
element.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
element.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
element.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
element.setAttribute("filter", "url(#filter-000000)");
break;

    }
  });
}

function aplicarCorBaseManga(color) {
  // Use querySelectorAll to get all elements with class 'filcamisa'
  const filmangaElements = document.querySelectorAll('.filmanga');
  
  // Apply the filter to all elements with class 'filcamisa'
  filmangaElements.forEach(element => {
    switch (color) {
      case "vermelha":
        element.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
element.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
element.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
element.removeAttribute("filter");
break;
case "cyan":
element.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
element.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
element.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
element.setAttribute("filter", "url(# filter-0062D9)");
break;
case "navy":
element.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
element.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
element.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
element.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
element.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
element.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
element.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
element.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
element.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
element.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
element.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
element.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
element.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
element.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
element.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
element.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
element.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
element.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
element.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
element.setAttribute("filter", "url(#filter-000000)");
break;
    }
  });
}

function aplicarCorBaseGola(color) {
  // Use querySelectorAll to get all elements with class 'filcamisa'
  const filgolaElements = document.querySelectorAll('.filgola');
  
  // Apply the filter to all elements with class 'filcamisa'
  filgolaElements.forEach(element => {
    switch (color) {
      case "vermelha":
        element.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
element.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
element.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
element.removeAttribute("filter");
break;
case "cyan":
element.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
element.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
element.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
element.setAttribute("filter", "url(# filter-0062D9)");
break;
case "navy":
element.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
element.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
element.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
element.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
element.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
element.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
element.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
element.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
element.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
element.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
element.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
element.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
element.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
element.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
element.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
element.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
element.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
element.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
element.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
element.setAttribute("filter", "url(#filter-000000)");
break;
    }
  });
}

//arte camisa
function aplicarCor(color) {
  const manequim = document.getElementById("manequim");
  const manequimcosta = document.getElementById("manequimcosta");

  switch (color) {
   case "vermelha":
            manequim.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
manequim.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
manequim.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
manequim.removeAttribute("filter");
break;
case "cyan":
manequim.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
manequim.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
manequim.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
manequim.setAttribute("filter", "url(# filter-0062D9)");
break;
case "navy":
manequim.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
manequim.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
manequim.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
manequim.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
manequim.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
manequim.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
manequim.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
manequim.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
manequim.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
manequim.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
manequim.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
manequim.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
manequim.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
manequim.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
manequim.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
manequim.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
manequim.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
manequim.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
manequim.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
manequim.setAttribute("filter", "url(#filter-000000)");
break;
}

  switch (color) {
  case "vermelha":
    manequimcosta.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimcosta.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimcosta.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimcosta.removeAttribute("filter");
    break;
  case "cyan":
    manequimcosta.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimcosta.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimcosta.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimcosta.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimcosta.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimcosta.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimcosta.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimcosta.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimcosta.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimcosta.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimcosta.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimcosta.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimcosta.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimcosta.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimcosta.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimcosta.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimcosta.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimcosta.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimcosta.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimcosta.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimcosta.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimcosta.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimcosta.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimcosta.setAttribute("filter", "url(#filter-000000)");
    break;
}
}


function aplicarCor2(color) {
  const manequim = document.getElementById("manequim2");
  const manequimcosta = document.getElementById("manequimcosta2");

  switch (color) {
   case "vermelha":
            manequim.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
manequim.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
manequim.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
manequim.removeAttribute("filter");
break;
case "cyan":
manequim.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
manequim.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
manequim.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
manequim.setAttribute("filter", "url(# filter-0062D9)");
break;
case "navy":
manequim.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
manequim.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
manequim.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
manequim.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
manequim.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
manequim.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
manequim.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
manequim.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
manequim.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
manequim.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
manequim.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
manequim.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
manequim.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
manequim.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
manequim.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
manequim.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
manequim.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
manequim.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
manequim.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
manequim.setAttribute("filter", "url(#filter-000000)");
break;
  }

  switch (color) {
  case "vermelha":
    manequimcosta.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimcosta.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimcosta.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimcosta.removeAttribute("filter");
    break;
  case "cyan":
    manequimcosta.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimcosta.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimcosta.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimcosta.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimcosta.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimcosta.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimcosta.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimcosta.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimcosta.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimcosta.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimcosta.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimcosta.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimcosta.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimcosta.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimcosta.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimcosta.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimcosta.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimcosta.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimcosta.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimcosta.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimcosta.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimcosta.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimcosta.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimcosta.setAttribute("filter", "url(#filter-000000)");
    break;
}

}


function aplicarCor3(color) {
  const manequim = document.getElementById("manequim3");
  const manequimcosta = document.getElementById("manequimcosta3");
  switch (color) {
   case "vermelha":
            manequim.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
manequim.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
manequim.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
manequim.removeAttribute("filter");
break;
case "cyan":
manequim.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
manequim.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
manequim.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
manequim.setAttribute("filter", "url(# filter-0062D9)");
break;
case "navy":
manequim.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
manequim.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
manequim.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
manequim.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
manequim.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
manequim.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
manequim.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
manequim.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
manequim.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
manequim.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
manequim.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
manequim.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
manequim.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
manequim.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
manequim.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
manequim.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
manequim.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
manequim.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
manequim.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
manequim.setAttribute("filter", "url(#filter-000000)");
break;
  }
  switch (color) {
    case "vermelha":
      manequimcosta3.setAttribute("filter", "url(#red-tint)");
      break;
    case "azul":
      manequimcosta3.setAttribute("filter", "url(#blue-tint)");
      break;
    case "verde":
      manequimcosta3.setAttribute("filter", "url(#green-tint)");
      break;
    case "reset":
      manequimcosta3.removeAttribute("filter"); // Back to white
      break;
  }

  switch (color) {
  case "vermelha":
    manequimcosta.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimcosta.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimcosta.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimcosta.removeAttribute("filter");
    break;
  case "cyan":
    manequimcosta.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimcosta.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimcosta.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimcosta.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimcosta.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimcosta.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimcosta.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimcosta.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimcosta.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimcosta.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimcosta.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimcosta.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimcosta.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimcosta.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimcosta.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimcosta.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimcosta.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimcosta.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimcosta.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimcosta.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimcosta.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimcosta.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimcosta.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimcosta.setAttribute("filter", "url(#filter-000000)");
    break;
}


}


// ARTE CALÇÃO
function aplicarCorCalcao(color) {
  const manequimcalcao = document.getElementById("manequimcalcao");
  const manequimcostacalcao = document.getElementById("manequimcostacalcao");

  switch (color) {
    case "vermelha":
      manequimcalcao.setAttribute("filter", "url(#red-tint)");
      break;
    case "azul":
      manequimcalcao.setAttribute("filter", "url(#blue-tint)");
      break;
    case "verde":
      manequimcalcao.setAttribute("filter", "url(#green-tint)");
      break;
    case "reset":
      manequimcalcao.removeAttribute("filter"); // Back to white
      break;
      case "cyan":
      manequimcalcao.setAttribute("filter", "url(#filter-00FFEC)");
      break;

      case "lightblue":
      manequimcalcao.setAttribute("filter", "url(#filter-8CDDFF)");
      break;
      
      case "mediumblue":
      manequimcalcao.setAttribute("filter", "url(#filter-3BAFED)");
      break;

      case "darkblue":
      manequimcalcao.setAttribute("filter", "url(# filter-0062D9)");
      break;

       case "navy":
      manequimcalcao.setAttribute("filter", "url(#filter-0030A8)");
      break;
      
       case "limegreen":
      manequimcalcao.setAttribute("filter", "url(#filter-74DE70)");
      break;

       case "mediumgreen":
      manequimcalcao.setAttribute("filter", "url(#filter-62DA5E)");
      break;
      
       case "neongreen":
      manequimcalcao.setAttribute("filter", "url(#filter-0DFF00)");
      break;

       case "forestgreen":
      manequimcalcao.setAttribute("filter", "url(#filter-1A6642)");
      break;

       case "orange":
      manequimcalcao.setAttribute("filter", "url(#filter-F16321)");
      break;

       case "brightredorange":
      manequimcalcao.setAttribute("filter", "url(#filter-FF3203)");
      break;

       case "purered":
      manequimcalcao.setAttribute("filter", "url(#filter-F0000)");
      break;

       case "darkred":
      manequimcalcao.setAttribute("filter", "url(#filter-B51723)");
      break;
      
       case "deepred":
      manequimcalcao.setAttribute("filter", "url(#filter-7c0000)");
      break;

       case "maroon":
      manequimcalcao.setAttribute("filter", "url(#filter-511A20)");
      break;

       case "hotpink":
      manequimcalcao.setAttribute("filter", "url(#filter-FF0074)");
      break;

       case "palepink":
      manequimcalcao.setAttribute("filter", "url(#filter-DF97AE)");
      break;

       case "magenta":
      manequimcalcao.setAttribute("filter", "url(#filter-FF00FF)");
      break;

       case "purple":
      manequimcalcao.setAttribute("filter", "url(#filter-4D1387)");
      break;

       case "darkpurple":
      manequimcalcao.setAttribute("filter", "url(#filter-330066)");
      break;



       case "branco":
      manequimcalcao.setAttribute("filter", "url(#filter-FFFFFF)");
      break;

        case "cinzamedio":
      manequimcalcao.setAttribute("filter", "url(#filter-909090)");
      break;

        case "cinzaescuro":
      manequimcalcao.setAttribute("filter", "url(#filter-424242)");
      break;


        case "preto":
      manequimcalcao.setAttribute("filter", "url(#filter-000000)");
      break;
  }
  switch (color) {
  case "vermelha":
    manequimcostacalcao.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimcostacalcao.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimcostacalcao.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimcostacalcao.removeAttribute("filter");
    break;
  case "cyan":
    manequimcostacalcao.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimcostacalcao.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimcostacalcao.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimcostacalcao.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimcostacalcao.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimcostacalcao.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimcostacalcao.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimcostacalcao.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimcostacalcao.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimcostacalcao.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimcostacalcao.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimcostacalcao.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimcostacalcao.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimcostacalcao.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimcostacalcao.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimcostacalcao.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimcostacalcao.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimcostacalcao.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimcostacalcao.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimcostacalcao.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimcostacalcao.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimcostacalcao.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimcostacalcao.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimcostacalcao.setAttribute("filter", "url(#filter-000000)");
    break;
}

}   

function aplicarCorCalcao2(color) {
  const manequimcalcao2 = document.getElementById("manequimcalcao2");
  const manequimcostacalcao2 = document.getElementById("manequimcostacalcao2");

  switch (color) {
    case "vermelha":
      manequimcalcao2.setAttribute("filter", "url(#red-tint)");
      break;
    case "azul":
      manequimcalcao2.setAttribute("filter", "url(#blue-tint)");
      break;
    case "verde":
      manequimcalcao2.setAttribute("filter", "url(#green-tint)");
      break;
    case "reset":
      manequimcalcao2.removeAttribute("filter");
      break;
    case "cyan":
      manequimcalcao2.setAttribute("filter", "url(#filter-00FFEC)");
      break;
    case "lightblue":
      manequimcalcao2.setAttribute("filter", "url(#filter-8CDDFF)");
      break;
    case "mediumblue":
      manequimcalcao2.setAttribute("filter", "url(#filter-3BAFED)");
      break;
    case "darkblue":
      manequimcalcao2.setAttribute("filter", "url(# filter-0062D9)");
      break;
    case "navy":
      manequimcalcao2.setAttribute("filter", "url(#filter-0030A8)");
      break;
    case "limegreen":
      manequimcalcao2.setAttribute("filter", "url(#filter-74DE70)");
      break;
    case "mediumgreen":
      manequimcalcao2.setAttribute("filter", "url(#filter-62DA5E)");
      break;
    case "neongreen":
      manequimcalcao2.setAttribute("filter", "url(#filter-0DFF00)");
      break;
    case "forestgreen":
      manequimcalcao2.setAttribute("filter", "url(#filter-1A6642)");
      break;
    case "orange":
      manequimcalcao2.setAttribute("filter", "url(#filter-F16321)");
      break;
    case "brightredorange":
      manequimcalcao2.setAttribute("filter", "url(#filter-FF3203)");
      break;
    case "purered":
      manequimcalcao2.setAttribute("filter", "url(#filter-F0000)");
      break;
    case "darkred":
      manequimcalcao2.setAttribute("filter", "url(#filter-B51723)");
      break;
    case "deepred":
      manequimcalcao2.setAttribute("filter", "url(#filter-7c0000)");
      break;
    case "maroon":
      manequimcalcao2.setAttribute("filter", "url(#filter-511A20)");
      break;
    case "hotpink":
      manequimcalcao2.setAttribute("filter", "url(#filter-FF0074)");
      break;
    case "palepink":
      manequimcalcao2.setAttribute("filter", "url(#filter-DF97AE)");
      break;
    case "magenta":
      manequimcalcao2.setAttribute("filter", "url(#filter-FF00FF)");
      break;
    case "purple":
      manequimcalcao2.setAttribute("filter", "url(#filter-4D1387)");
      break;
    case "darkpurple":
      manequimcalcao2.setAttribute("filter", "url(#filter-330066)");
      break;
    case "branco":
      manequimcalcao2.setAttribute("filter", "url(#filter-FFFFFF)");
      break;
    case "cinzamedio":
      manequimcalcao2.setAttribute("filter", "url(#filter-909090)");
      break;
    case "cinzaescuro":
      manequimcalcao2.setAttribute("filter", "url(#filter-424242)");
      break;
    case "preto":
      manequimcalcao2.setAttribute("filter", "url(#filter-000000)");
      break;
  }

  switch (color) {
  case "vermelha":
    manequimcostacalcao2.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimcostacalcao2.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimcostacalcao2.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimcostacalcao2.removeAttribute("filter");
    break;
  case "cyan":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimcostacalcao2.setAttribute("filter", "url(#filter-000000)");
    break;
}

}

function aplicarCorCalcao3(color) {
  const manequimcalcao3 = document.getElementById("manequimcalcao3");
  const manequimcostacalcao3 = document.getElementById("manequimcostacalcao3");

  switch (color) {
    case "vermelha":
      manequimcalcao3.setAttribute("filter", "url(#red-tint)");
      break;
    case "azul":
      manequimcalcao3.setAttribute("filter", "url(#blue-tint)");
      break;
    case "verde":
      manequimcalcao3.setAttribute("filter", "url(#green-tint)");
      break;
    case "reset":
      manequimcalcao3.removeAttribute("filter");
      break;
    case "cyan":
      manequimcalcao3.setAttribute("filter", "url(#filter-00FFEC)");
      break;
    case "lightblue":
      manequimcalcao3.setAttribute("filter", "url(#filter-8CDDFF)");
      break;
    case "mediumblue":
      manequimcalcao3.setAttribute("filter", "url(#filter-3BAFED)");
      break;
    case "darkblue":
      manequimcalcao3.setAttribute("filter", "url(# filter-0062D9)");
      break;
    case "navy":
      manequimcalcao3.setAttribute("filter", "url(#filter-0030A8)");
      break;
    case "limegreen":
      manequimcalcao3.setAttribute("filter", "url(#filter-74DE70)");
      break;
    case "mediumgreen":
      manequimcalcao3.setAttribute("filter", "url(#filter-62DA5E)");
      break;
    case "neongreen":
      manequimcalcao3.setAttribute("filter", "url(#filter-0DFF00)");
      break;
    case "forestgreen":
      manequimcalcao3.setAttribute("filter", "url(#filter-1A6642)");
      break;
    case "orange":
      manequimcalcao3.setAttribute("filter", "url(#filter-F16321)");
      break;
    case "brightredorange":
      manequimcalcao3.setAttribute("filter", "url(#filter-FF3203)");
      break;
    case "purered":
      manequimcalcao3.setAttribute("filter", "url(#filter-F0000)");
      break;
    case "darkred":
      manequimcalcao3.setAttribute("filter", "url(#filter-B51723)");
      break;
    case "deepred":
      manequimcalcao3.setAttribute("filter", "url(#filter-7c0000)");
      break;
    case "maroon":
      manequimcalcao3.setAttribute("filter", "url(#filter-511A20)");
      break;
    case "hotpink":
      manequimcalcao3.setAttribute("filter", "url(#filter-FF0074)");
      break;
    case "palepink":
      manequimcalcao3.setAttribute("filter", "url(#filter-DF97AE)");
      break;
    case "magenta":
      manequimcalcao3.setAttribute("filter", "url(#filter-FF00FF)");
      break;
    case "purple":
      manequimcalcao3.setAttribute("filter", "url(#filter-4D1387)");
      break;
    case "darkpurple":
      manequimcalcao3.setAttribute("filter", "url(#filter-330066)");
      break;
    case "branco":
      manequimcalcao3.setAttribute("filter", "url(#filter-FFFFFF)");
      break;
    case "cinzamedio":
      manequimcalcao3.setAttribute("filter", "url(#filter-909090)");
      break;
    case "cinzaescuro":
      manequimcalcao3.setAttribute("filter", "url(#filter-424242)");
      break;
    case "preto":
      manequimcalcao3.setAttribute("filter", "url(#filter-000000)");
      break;
  }

  switch (color) {
    case "vermelha":
      case "vermelha":
  manequimcostacalcao3.setAttribute("filter", "url(#red-tint)");
  break;
case "azul":
  manequimcostacalcao3.setAttribute("filter", "url(#blue-tint)");
  break;
case "verde":
  manequimcostacalcao3.setAttribute("filter", "url(#green-tint)");
  break;
case "reset":
  manequimcostacalcao3.removeAttribute("filter");
  break;
case "cyan":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-00FFEC)");
  break;
case "lightblue":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-8CDDFF)");
  break;
case "mediumblue":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-3BAFED)");
  break;
case "darkblue":
  manequimcostacalcao3.setAttribute("filter", "url(# filter-0062D9)");
  break;
case "navy":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-0030A8)");
  break;
case "limegreen":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-74DE70)");
  break;
case "mediumgreen":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-62DA5E)");
  break;
case "neongreen":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-0DFF00)");
  break;
case "forestgreen":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-1A6642)");
  break;
case "orange":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-F16321)");
  break;
case "brightredorange":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-FF3203)");
  break;
case "purered":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-F0000)");
  break;
case "darkred":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-B51723)");
  break;
case "deepred":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-7c0000)");
  break;
case "maroon":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-511A20)");
  break;
case "hotpink":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-FF0074)");
  break;
case "palepink":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-DF97AE)");
  break;
case "magenta":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-FF00FF)");
  break;
case "purple":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-4D1387)");
  break;
case "darkpurple":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-330066)");
  break;
case "branco":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-FFFFFF)");
  break;
case "cinzamedio":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-909090)");
  break;
case "cinzaescuro":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-424242)");
  break;
case "preto":
  manequimcostacalcao3.setAttribute("filter", "url(#filter-000000)");
  break;

  }
}

//arte manga direita e esquerda
function aplicarCorManga(color) {
  const manequimanga = document.getElementById("manequimanga");
  const manequimangad = document.getElementById("manequimangaD");
 const manequimangadt = document.getElementById("manequimangaDT");
  const manequimangat = document.getElementById("manequimangaT");


   switch (color) {
  case "vermelha":
    manequimanga.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimanga.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimanga.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimanga.removeAttribute("filter");
    break;
  case "cyan":
    manequimanga.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimanga.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimanga.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimanga.setAttribute("filter", "url(# filter-0062D9)");
    break;
  case "navy":
    manequimanga.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimanga.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimanga.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimanga.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimanga.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimanga.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimanga.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimanga.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimanga.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimanga.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimanga.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimanga.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimanga.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimanga.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimanga.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimanga.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimanga.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimanga.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimanga.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimanga.setAttribute("filter", "url(#filter-000000)");
    break;
}
  
  switch (color) {
  case "vermelha":
    manequimangad.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangad.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangad.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangad.removeAttribute("filter");
    break;
  case "cyan":
    manequimangad.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangad.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangad.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangad.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangad.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangad.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangad.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangad.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangad.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangad.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangad.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangad.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangad.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangad.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangad.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangad.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangad.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangad.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangad.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangad.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangad.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangad.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangad.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangad.setAttribute("filter", "url(#filter-000000)");
    break;
}


 switch (color) {
  case "vermelha":
    manequimangadt.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangadt.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangadt.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangadt.removeAttribute("filter");
    break;
  case "cyan":
    manequimangadt.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangadt.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangadt.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangadt.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangadt.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangadt.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangadt.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangadt.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangadt.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangadt.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangadt.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangadt.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangadt.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangadt.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangadt.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangadt.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangadt.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangadt.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangadt.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangadt.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangadt.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangadt.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangadt.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangadt.setAttribute("filter", "url(#filter-000000)");
    break;
}


  switch (color) {
  case "vermelha":
    manequimangat.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangat.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangat.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangat.removeAttribute("filter");
    break;
  case "cyan":
    manequimangat.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangat.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangat.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangat.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangat.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangat.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangat.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangat.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangat.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangat.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangat.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangat.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangat.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangat.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangat.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangat.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangat.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangat.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangat.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangat.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangat.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangat.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangat.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangat.setAttribute("filter", "url(#filter-000000)");
    break;
}


}
function aplicarCorManga2(color) {
  const manequimanga = document.getElementById("manequimanga2");
  const manequimangad2 = document.getElementById("manequimangaD2");
  const manequimangadt2 = document.getElementById("manequimangaD2T");
  const manequimangat2 = document.getElementById("manequimanga2T");

  switch (color) {
  case "vermelha":
    manequimanga.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimanga.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimanga.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimanga.removeAttribute("filter");
    break;
  case "cyan":
    manequimanga.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimanga.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimanga.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimanga.setAttribute("filter", "url(# filter-0062D9)");
    break;
  case "navy":
    manequimanga.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimanga.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimanga.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimanga.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimanga.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimanga.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimanga.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimanga.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimanga.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimanga.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimanga.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimanga.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimanga.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimanga.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimanga.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimanga.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimanga.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimanga.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimanga.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimanga.setAttribute("filter", "url(#filter-000000)");
    break;
}



switch (color) {
  case "vermelha":
    manequimangad2.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangad2.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangad2.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangad2.removeAttribute("filter");
    break;
  case "cyan":
    manequimangad2.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangad2.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangad2.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangad2.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangad2.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangad2.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangad2.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangad2.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangad2.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangad2.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangad2.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangad2.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangad2.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangad2.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangad2.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangad2.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangad2.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangad2.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangad2.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangad2.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangad2.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangad2.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangad2.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangad2.setAttribute("filter", "url(#filter-000000)");
    break;
}

  switch (color) {
  case "vermelha":
    manequimangat2.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangat2.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangat2.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangat2.removeAttribute("filter");
    break;
  case "cyan":
    manequimangat2.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangat2.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangat2.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangat2.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangat2.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangat2.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangat2.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangat2.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangat2.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangat2.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangat2.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangat2.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangat2.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangat2.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangat2.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangat2.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangat2.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangat2.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangat2.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangat2.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangat2.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangat2.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangat2.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangat2.setAttribute("filter", "url(#filter-000000)");
    break;
}



  switch (color) {
  case "vermelha":
    manequimangadt2.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangadt2.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangadt2.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangadt2.removeAttribute("filter");
    break;
  case "cyan":
    manequimangadt2.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangadt2.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangadt2.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangadt2.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangadt2.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangadt2.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangadt2.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangadt2.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangadt2.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangadt2.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangadt2.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangadt2.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangadt2.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangadt2.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangadt2.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangadt2.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangadt2.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangadt2.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangadt2.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangadt2.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangadt2.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangadt2.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangadt2.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangadt2.setAttribute("filter", "url(#filter-000000)");
    break;
}

}

function aplicarCorManga3(color) {
  const manequimanga = document.getElementById("manequimanga3");
  const manequimangad3 = document.getElementById("manequimangaD3");
 const manequimangadt3 = document.getElementById("manequimangaD3T");
  const manequimangat3 = document.getElementById("manequimanga3T");

  switch (color) {
    case "vermelha":
    manequimanga.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimanga.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimanga.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimanga.removeAttribute("filter");
    break;
  case "cyan":
    manequimanga.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimanga.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimanga.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimanga.setAttribute("filter", "url(# filter-0062D9)");
    break;
  case "navy":
    manequimanga.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimanga.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimanga.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimanga.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimanga.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimanga.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimanga.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimanga.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimanga.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimanga.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimanga.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimanga.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimanga.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimanga.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimanga.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimanga.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimanga.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimanga.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimanga.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimanga.setAttribute("filter", "url(#filter-000000)");
    break;
  }
  
  switch (color) {
  case "vermelha":
    manequimangad3.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangad3.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangad3.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangad3.removeAttribute("filter");
    break;
  case "cyan":
    manequimangad3.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangad3.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangad3.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangad3.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangad3.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangad3.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangad3.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangad3.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangad3.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangad3.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangad3.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangad3.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangad3.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangad3.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangad3.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangad3.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangad3.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangad3.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangad3.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangad3.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangad3.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangad3.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangad3.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangad3.setAttribute("filter", "url(#filter-000000)");
    break;
}


  switch (color) {
  case "vermelha":
    manequimangadt3.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangadt3.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangadt3.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangadt3.removeAttribute("filter");
    break;
  case "cyan":
    manequimangadt3.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangadt3.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangadt3.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangadt3.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangadt3.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangadt3.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangadt3.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangadt3.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangadt3.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangadt3.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangadt3.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangadt3.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangadt3.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangadt3.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangadt3.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangadt3.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangadt3.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangadt3.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangadt3.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangadt3.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangadt3.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangadt3.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangadt3.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangadt3.setAttribute("filter", "url(#filter-000000)");
    break;
}

   switch (color) {
  case "vermelha":
    manequimangat3.setAttribute("filter", "url(#red-tint)");
    break;
  case "azul":
    manequimangat3.setAttribute("filter", "url(#blue-tint)");
    break;
  case "verde":
    manequimangat3.setAttribute("filter", "url(#green-tint)");
    break;
  case "reset":
    manequimangat3.removeAttribute("filter");
    break;
  case "cyan":
    manequimangat3.setAttribute("filter", "url(#filter-00FFEC)");
    break;
  case "lightblue":
    manequimangat3.setAttribute("filter", "url(#filter-8CDDFF)");
    break;
  case "mediumblue":
    manequimangat3.setAttribute("filter", "url(#filter-3BAFED)");
    break;
  case "darkblue":
    manequimangat3.setAttribute("filter", "url(#filter-0062D9)");
    break;
  case "navy":
    manequimangat3.setAttribute("filter", "url(#filter-0030A8)");
    break;
  case "limegreen":
    manequimangat3.setAttribute("filter", "url(#filter-74DE70)");
    break;
  case "mediumgreen":
    manequimangat3.setAttribute("filter", "url(#filter-62DA5E)");
    break;
  case "neongreen":
    manequimangat3.setAttribute("filter", "url(#filter-0DFF00)");
    break;
  case "forestgreen":
    manequimangat3.setAttribute("filter", "url(#filter-1A6642)");
    break;
  case "orange":
    manequimangat3.setAttribute("filter", "url(#filter-F16321)");
    break;
  case "brightredorange":
    manequimangat3.setAttribute("filter", "url(#filter-FF3203)");
    break;
  case "purered":
    manequimangat3.setAttribute("filter", "url(#filter-F0000)");
    break;
  case "darkred":
    manequimangat3.setAttribute("filter", "url(#filter-B51723)");
    break;
  case "deepred":
    manequimangat3.setAttribute("filter", "url(#filter-7c0000)");
    break;
  case "maroon":
    manequimangat3.setAttribute("filter", "url(#filter-511A20)");
    break;
  case "hotpink":
    manequimangat3.setAttribute("filter", "url(#filter-FF0074)");
    break;
  case "palepink":
    manequimangat3.setAttribute("filter", "url(#filter-DF97AE)");
    break;
  case "magenta":
    manequimangat3.setAttribute("filter", "url(#filter-FF00FF)");
    break;
  case "purple":
    manequimangat3.setAttribute("filter", "url(#filter-4D1387)");
    break;
  case "darkpurple":
    manequimangat3.setAttribute("filter", "url(#filter-330066)");
    break;
  case "branco":
    manequimangat3.setAttribute("filter", "url(#filter-FFFFFF)");
    break;
  case "cinzamedio":
    manequimangat3.setAttribute("filter", "url(#filter-909090)");
    break;
  case "cinzaescuro":
    manequimangat3.setAttribute("filter", "url(#filter-424242)");
    break;
  case "preto":
    manequimangat3.setAttribute("filter", "url(#filter-000000)");
    break;
}


}

//cor punho
function aplicarCorBasePunho(color) {
  // Use querySelectorAll to get all elements with class 'filcamisa'
  const filpunhoElements = document.querySelectorAll('.filpunho');
  
  // Apply the filter to all elements with class 'filcamisa'
  filpunhoElements.forEach(element => {
    switch (color) {
      case "vermelha":
        element.setAttribute("filter", "url(#red-tint)");
break;
case "azul":
element.setAttribute("filter", "url(#blue-tint)");
break;
case "verde":
element.setAttribute("filter", "url(#green-tint)");
break;
case "reset":
element.removeAttribute("filter");
break;
case "cyan":
element.setAttribute("filter", "url(#filter-00FFEC)");
break;
case "lightblue":
element.setAttribute("filter", "url(#filter-8CDDFF)");
break;
case "mediumblue":
element.setAttribute("filter", "url(#filter-3BAFED)");
break;
case "darkblue":
element.setAttribute("filter", "url(# filter-0062D9)");
break;
case "navy":
element.setAttribute("filter", "url(#filter-0030A8)");
break;
case "limegreen":
element.setAttribute("filter", "url(#filter-74DE70)");
break;
case "mediumgreen":
element.setAttribute("filter", "url(#filter-62DA5E)");
break;
case "neongreen":
element.setAttribute("filter", "url(#filter-0DFF00)");
break;
case "forestgreen":
element.setAttribute("filter", "url(#filter-1A6642)");
break;
case "orange":
element.setAttribute("filter", "url(#filter-F16321)");
break;
case "brightredorange":
element.setAttribute("filter", "url(#filter-FF3203)");
break;
case "purered":
element.setAttribute("filter", "url(#filter-F0000)");
break;
case "darkred":
element.setAttribute("filter", "url(#filter-B51723)");
break;
case "deepred":
element.setAttribute("filter", "url(#filter-7c0000)");
break;
case "maroon":
element.setAttribute("filter", "url(#filter-511A20)");
break;
case "hotpink":
element.setAttribute("filter", "url(#filter-FF0074)");
break;
case "palepink":
element.setAttribute("filter", "url(#filter-DF97AE)");
break;
case "magenta":
element.setAttribute("filter", "url(#filter-FF00FF)");
break;
case "purple":
element.setAttribute("filter", "url(#filter-4D1387)");
break;
case "darkpurple":
element.setAttribute("filter", "url(#filter-330066)");
break;
case "branco":
element.setAttribute("filter", "url(#filter-FFFFFF)");
break;
case "cinzamedio":
element.setAttribute("filter", "url(#filter-909090)");
break;
case "cinzaescuro":
element.setAttribute("filter", "url(#filter-424242)");
break;
case "preto":
element.setAttribute("filter", "url(#filter-000000)");
break;
    }
  });
}


function togglePaletaCores() {
    const paletaDecores = document.getElementById('corescamfundo');
    const toggleButton = document.getElementById('corcamisap1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}


function togglePaletaCoresCalcao() {
    const paletaDecores = document.getElementById('corescalcfundo');
    const toggleButton = document.getElementById('corcalcaop1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresNumero() {
   const paletaDecores = document.getElementById('coresnumero');
    const toggleButton = document.getElementById('cornumerop1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}



function togglePaletaCoresNomeContornoObserve () {
  const paleta = document.getElementById('coresnomecontorno');
  const button = document.getElementById('cornomecontornop1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}


function togglePaletaCoresNumeroContorno() {
   const paletaDecores = document.getElementById('coresnumerocontorno');
    const toggleButton = document.getElementById('corcontornonumerop1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}







function togglePaletaCoresNome() {
    const paletaDecores = document.getElementById('coresnome');
    const toggleButton = document.getElementById('cornomep1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresNomeContorno() {
    const paletaDecores = document.getElementById('coresnomecontorno');
    const toggleButton = document.getElementById('cornomecontornop1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}


function togglePaletaCoresPunho() {
    const paletaDecores = document.getElementById('corespunho');
    const toggleButton = document.getElementById('corpunhop1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}


function togglePaletaCoresGola() {
    const paletaDecores = document.getElementById('coresgola');
    const toggleButton = document.getElementById('corgolap1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresManga() {
    const paletaDecores = document.getElementById('coresmanga');
    const toggleButton = document.getElementById('cormangap1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresMangarte1() {
    const paletaDecores = document.getElementById('coresmangarte1');
    const toggleButton = document.getElementById('cormangaefeito1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }

}

function togglePaletaCoresMangarte2() {
      const paletaDecores = document.getElementById('coresmangarte2');
    const toggleButton = document.getElementById('cormangaefeito2');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresMangarte3() {
     const paletaDecores = document.getElementById('coresmangarte3');
    const toggleButton = document.getElementById('cormangaefeito3');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresMeiao() {
    const paletaDecores = document.getElementById('coresmeiao');
    const toggleButton = document.getElementById('cormeiaop1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}








document.addEventListener('DOMContentLoaded', function() {
    // Get the first color button from menucores
    const colorButton = document.querySelector('.corescamisa button');
    const paletaDecores = document.getElementById('paletadecores');

    // Add click event to toggle palette
    colorButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        paletaDecores.classList.toggle('active');
        
        // Position palette below the clicked button
        const buttonRect = this.getBoundingClientRect();
        paletaDecores.style.top = buttonRect.bottom + 'px';
        paletaDecores.style.left = buttonRect.left + 'px';
    });

    // Close palette when clicking outside
    document.addEventListener('click', function(e) {
        if (!paletaDecores.contains(e.target) && !colorButton.contains(e.target)) {
            paletaDecores.classList.remove('active');
        }
    });
});





// --------------------

function togglePaletaCoresCamArte1() {
    const paletaDecores = document.getElementById('corescamarte1');
    const toggleButton = document.getElementById('corcamisaefeito1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
  }

function togglePaletaCoresCamArte2() {
    const paletaDecores = document.getElementById('corescamarte2');
    const toggleButton = document.getElementById('corcamisaefeito2');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresCamArte3() {
    const paletaDecores = document.getElementById('corescamarte3');
    const toggleButton = document.getElementById('corcamisaefeito3');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}



function togglePaletaCoresCalcArte1() {
     const paletaDecores = document.getElementById('corescalcefeito1');
    const toggleButton = document.getElementById('corcalcaoefeito1');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresCalcArte2() {
    const paletaDecores = document.getElementById('corescalcefeito2');
    const toggleButton = document.getElementById('corcalcaoefeito2');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}

function togglePaletaCoresCalcArte3() {
    const paletaDecores = document.getElementById('corescalcefeito3');
    const toggleButton = document.getElementById('corcalcaoefeito3');

    const isHidden = paletaDecores.style.display === 'none' || paletaDecores.style.display === '';

    if (isHidden) {
        paletaDecores.style.display = 'block';
        toggleButton.classList.add('active');
    } else {
        paletaDecores.style.display = 'none';
        toggleButton.classList.remove('active');
    }
}


function closewindow(){
  // Empty function placeholder
}

    const colorOutput = document.getElementById('colorOutput');



     function updateOutput() {
      const count = parseInt(repeatCount.value) || 1;
      colorOutput.innerHTML = ''; // limpar conteúdo anterior
      if (selectedColor) {
        for (let i = 0; i < count; i++) {
          const span = document.createElement('span');
          span.textContent = 'Cor!';
          span.style.color = selectedColor;
          colorOutput.appendChild(span);
        }
      }
    }

// This is for the back

const areaequipamentomenu = document.querySelector('.areaequipamentomenu');

//SAIR DO MENU
function exitEquipamento() {
  if (areaequipamentomenu.style.display === 'none') {
            areaequipamentomenu.style.display = 'block';
            divcamisas.style.display = 'block';
            divcalcoes.style.display = 'none';
        } else {
            areaequipamentomenu.style.display = 'none';
        }
}


function exitPaletaCores() {
    const exitpaletaDecores = document.getElementById('corescamfundo');
    if (exitpaletaDecores.style.display === 'block') {
        exitpaletaDecores.style.display = 'none';
    }
}


function exitPaletaCoresNomeContorno() {
    const exitpaletaDecores = document.getElementById('coresnomecontorno');
    if (exitpaletaDecores.style.display === 'block') {
        exitpaletaDecores.style.display = 'none';
    }
}

function exitPaletaCoresArte1() {
    const exitpaletaDecoresarte1 = document.getElementById('corescamarte1');
    if (exitpaletaDecoresarte1.style.display === 'block') {
        exitpaletaDecoresarte1.style.display = 'none';
    }
}
function exitPaletaCoresArte2() {
    const exitpaletaDecoresarte2 = document.getElementById('corescamarte2');
    if (exitpaletaDecoresarte2.style.display === 'block') {
        exitpaletaDecoresarte2.style.display = 'none';
    }
}
function exitPaletaCoresArte3() {
    const exitpaletaDecoresarte3 = document.getElementById('corescamarte3');
    if (exitpaletaDecoresarte3.style.display === 'block') {
        exitpaletaDecoresarte3.style.display = 'none';
    }
}


function exitPaletaCoresManga() {
    const exitpaletaDecoresManga = document.getElementById('coresmanga');
    if (exitpaletaDecoresManga.style.display === 'block') {
        exitpaletaDecoresManga.style.display = 'none';
    }
}


function exitPaletaCoresNumero() {
    const exitpaletaDecoresManga = document.getElementById('coresnumero');
    if (exitpaletaDecoresManga.style.display === 'block') {
        exitpaletaDecoresManga.style.display = 'none';
    }
}

function exitPaletaCoresNumeroContorno() {
    const exitpaletaDecoresManga = document.getElementById('coresnumerocontorno');
    if (exitpaletaDecoresManga.style.display === 'block') {
        exitpaletaDecoresManga.style.display = 'none';
    }
}


function exitPaletaCoresNome() {
    const exitpaletaDecoresManga = document.getElementById('coresnome');
    if (exitpaletaDecoresManga.style.display === 'block') {
        exitpaletaDecoresManga.style.display = 'none';
    }
}


function exitPaletaCoresCalcao() {
    const exitpaletaDecorescalcao = document.getElementById('corescalcfundo');
    if (exitpaletaDecorescalcao.style.display === 'block') {
        exitpaletaDecorescalcao.style.display = 'none';
    }
}

function exitPaletaCoresMeiao() {
    const exitpaletaDecorescalcao = document.getElementById('coresmeiao');
    if (exitpaletaDecorescalcao.style.display === 'block') {
        exitpaletaDecorescalcao.style.display = 'none';
    }
}

function exitMenuCoresGola() {
    const exitcoresgola = document.getElementById('menucoresgola');
    if (exitcoresgola.style.display === 'block') {
        exitcoresgola.style.display = 'none';
    }
}

function exitMenuCoresNumero() {
    const exitcoresgola = document.getElementById('menucoresnumero');
    if (exitcoresgola.style.display === 'block') {
        exitcoresgola.style.display = 'none';
    }
}

function exitMenuCoresCamisa() {
    const exitcorescamisa = document.getElementById('menucorescamisa');
    if (exitcorescamisa.style.display === 'block') {
        exitcorescamisa.style.display = 'none';
    }
}


   

function exitMenuCoresCalc() {
    const exitcorescalcao = document.getElementById('menucorescalcao');
    if (exitcorescalcao.style.display === 'block') {
        exitcorescalcao.style.display = 'none';
    }
}




function exitPaletaCoresCalcArte1() {
    const exitpaletaDecorescalcarte1 = document.getElementById('corescalcefeito1');
    if (exitpaletaDecorescalcarte1.style.display === 'block') {
        exitpaletaDecorescalcarte1.style.display = 'none';
    }
}
function exitPaletaCoresCalcArte2() {
    const exitpaletaDecorescalcarte2 = document.getElementById('corescalcefeito2');
    if (exitpaletaDecorescalcarte2.style.display === 'block') {
        exitpaletaDecorescalcarte2.style.display = 'none';
    }
}
function exitPaletaCoresCalcArte3() {
    const exitpaletaDecorescalcarte3 = document.getElementById('corescalcefeito3');
    if (exitpaletaDecorescalcarte3.style.display === 'block') {
        exitpaletaDecorescalcarte3.style.display = 'none';
    }
}



function exitPaletaCoresMangArte1() {
    const exitpaletaDecoresmangarte1 = document.getElementById('coresmangarte1');
    if (exitpaletaDecoresmangarte1.style.display === 'block') {
        exitpaletaDecoresmangarte1.style.display = 'none';
    }
}
function exitPaletaCoresMangArte2() {
    const exitpaletaDecoresmangarte2 = document.getElementById('coresmangarte2');
    if (exitpaletaDecoresmangarte2.style.display === 'block') {
        exitpaletaDecoresmangarte2.style.display = 'none';
    }
}
function exitPaletaCoresMangArte3() {
    const exitpaletaDecoresmangarte3 = document.getElementById('coresmangarte3');
    if (exitpaletaDecoresmangarte3.style.display === 'block') {
        exitpaletaDecoresmangarte3.style.display = 'none';
    }
}




function exitPaletaCoresGola() {
    const exitpaletaDecoresgola = document.getElementById('coresgola');
    if (exitpaletaDecoresgola.style.display === 'block') {
        exitpaletaDecoresgola.style.display = 'none';
    }
}

function exitPaletaCoresPunho() {
    const exitpaletaDecorespunho = document.getElementById('corespunho');
    if (exitpaletaDecorespunho.style.display === 'block') {
        exitpaletaDecorespunho.style.display = 'none';
    }
}

// Para aplicar cores aos números e nomes, fundo da roupa e as suas camadas de arte

function aplicarCorNumero(elementclass, color) {
      const elements = document.getElementsByClassName(elementclass);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
}
}

function aplicarCorNumeroCosta(elementclass2, color) {
      const elements = document.getElementsByClassName(elementclass2);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
}

}


function aplicarCorNome(elementclass, color) {
      const elements = document.getElementsByClassName(elementclass);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
}
}

function aplicarCorNomeCosta(elementclass2, color) {
      const elements = document.getElementsByClassName(elementclass2);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
}

}




// Para os botoes ficarem redondos


function togglePaletaCoresObserve () {
  const paleta = document.getElementById('corescamfundo');
  const button = document.getElementById('corcamisap1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresCamArte1bserve () {
  const paleta = document.getElementById('corescamarte1');
  const button = document.getElementById('corcamisaefeito1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresCamArte2bserve () {
  const paleta = document.getElementById('corescamarte2');
  const button = document.getElementById('corcamisaefeito2');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresCamArte3bserve () {
  const paleta = document.getElementById('corescamarte3');
  const button = document.getElementById('corcamisaefeito3');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}



function togglePaletaCoresMangaObserve () {
  const paleta = document.getElementById('coresmanga');
  const button = document.getElementById('cormangap1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}
function togglePaletaCoresMangArte1Observe () {
  const paleta = document.getElementById('coresmangarte1');
  const button = document.getElementById('cormangaefeito1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresMangArte2Observe () {
  const paleta = document.getElementById('coresmangarte2');
  const button = document.getElementById('cormangaefeito2');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresMangArte3Observe () {
  const paleta = document.getElementById('coresmangarte3');
  const button = document.getElementById('cormangaefeito3');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}


function togglePaletaCoresMangArte3Observe () {
  const paleta = document.getElementById('coresmangarte3');
  const button = document.getElementById('cormangaefeito3');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}


function togglePaletaCoresNumeroObserve () {
  const paleta = document.getElementById('coresnumero');
  const button = document.getElementById('cornumerop1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresNumeroContornoObserve () {
  const paleta = document.getElementById('coresnumerocontorno');
  const button = document.getElementById('corcontornonumerop1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}


function togglePaletaCoresNomeObserve () {
  const paleta = document.getElementById('coresnome');
  const button = document.getElementById('cornomep1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}




function togglePaletaCoresPunhoObserve () {
  const paleta = document.getElementById('corespunho');
  const button = document.getElementById('corpunhop1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresGolaObserve () {
  const paleta = document.getElementById('coresgola');
  const button = document.getElementById('corgolap1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresCalcaoObserve () {
  const paleta = document.getElementById('corescalcfundo');
  const button = document.getElementById('corcalcaop1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresCalcefeito1Observe () {
  const paleta = document.getElementById('corescalcefeito1');
  const button = document.getElementById('corcalcaoefeito1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresCalcefeito2Observe () {
  const paleta = document.getElementById('corescalcefeito2');
  const button = document.getElementById('corcalcaoefeito2');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresCalcefeito3Observe () {
  const paleta = document.getElementById('corescalcefeito3');
  const button = document.getElementById('corcalcaoefeito3');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}

function togglePaletaCoresMeiaoObserve () {
  const paleta = document.getElementById('coresmeiao');
  const button = document.getElementById('cormeiaop1');

  const observer = new MutationObserver(() => {
    const isVisible = window.getComputedStyle(paleta).display === 'block';
    button.classList.toggle('active', isVisible);
  });

  observer.observe(paleta, { attributes: true, attributeFilter: ['style'] });
}















function toggleTarget() {
      const box = document.getElementById('corescamfundo');
      const button = document.getElementById('corcamisap1');

      const isVisible = box.style.display === 'block';

    }


    //Carregar arte

    function arte2() {
      // ═══════════════════════════════════════════════════════════
      // COLOR FILTER CONFIGURATION - Change this to modify the filter
      // Available filters: "red-tint", "blue-tint", "green-tint", 
      // "filter-00FFEC", "filter-8CDDFF", "filter-3BAFED", etc.
      // ═══════════════════════════════════════════════════════════
      const B1_COLOR_FILTER = "filter-000000";
      const B2_COLOR_FILTER = "filter-FFFFFF";
      const B3_COLOR_FILTER = "filter-000000";
      
      // Base color filters (using B1_COLOR_FILTER pattern)
      const B1_FILTER_CAMISA = "filter-FFFFFF";
      const B1_FILTER_MANGA = "filter-000000";
      const B1_FILTER_GOLA = "filter-000000";
      const B1_FILTER_PUNHO = "filter-000000";
      const B1_FILTER_CALCAO = "filter-FFFFFF";
      const B1_FILTER_MEIAO = "filter-000000";
      
      const manequim = document.getElementById("manequim");
      const manequim2 = document.getElementById("manequim2");
      const manequim3 = document.getElementById("manequim3");
      
      const manequimcosta = document.getElementById("manequimcosta");
      const manequimcosta2 = document.getElementById("manequimcosta2");
      const manequimcosta3 = document.getElementById("manequimcosta3");

  
      const manequimmangad = document.getElementById("manequimangaD");
      const manequimmangad2 = document.getElementById("manequimangaD2");
      const manequimmangad3 = document.getElementById("manequimangaD3");
      
      const manequimmanga = document.getElementById("manequimanga");
      const manequimmanga2 = document.getElementById("manequimanga2");
      const manequimmanga3 = document.getElementById("manequimanga3");
      

      manequim.setAttribute("xlink:href", "img/artes/artes/B1.png");
      manequim.setAttribute("filter", `url(#${B1_COLOR_FILTER})`);
      
      manequim2.setAttribute("xlink:href", "img/artes/artes/B2.png");
      manequim2.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      
      manequim3.setAttribute("xlink:href", "img/artes/artes/B3.png");
      manequim3.setAttribute("filter", `url(#${B3_COLOR_FILTER})`);
      

      manequimcosta.setAttribute("xlink:href", "img/artes/artes/B1T.png");
      manequimcosta.setAttribute("filter", `url(#${B1_COLOR_FILTER})`);
     
      manequimcosta2.setAttribute("xlink:href", "img/artes/artes/B2T.png");
      manequimcosta2.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      
      manequimcosta3.setAttribute("xlink:href", "img/artes/artes/B3T.png");
      manequimcosta3.setAttribute("filter", `url(#${B3_COLOR_FILTER})`);
      
      
      manequimmangad.setAttribute("xlink:href", "img/artes/artes/B1.png");
      manequimmangad.setAttribute("filter", `url(#${B1_COLOR_FILTER})`);
   
      manequimmangad2.setAttribute("xlink:href", "img/artes/artes/B2.png");
      manequimmangad2.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      
      manequimmangad3.setAttribute("xlink:href", "img/artes/artes/B2CALCAO.png");
      manequimmangad3.setAttribute("filter", `url(#${B3_COLOR_FILTER})`);

      
      
      
      const manequimanga = document.getElementById("manequimanga");
      const manequimanga2 = document.getElementById("manequimanga2");
      const manequimanga3 = document.getElementById("manequimanga3");
      const manequimangaT = document.getElementById("manequimangaT");
      const manequimanga2T = document.getElementById("manequimanga2T");
      const manequimanga3T = document.getElementById("manequimanga3T");
      const manequimangaDT = document.getElementById("manequimangaDT");
      const manequimangaD2T = document.getElementById("manequimangaD2T");
      const manequimangaD3T = document.getElementById("manequimangaD3T");
      const manequimcalcao = document.getElementById("manequimcalcao");
      const manequimcalcao2 = document.getElementById("manequimcalcao2");
      const manequimcalcao3 = document.getElementById("manequimcalcao3");
      const manequimcostacalcao = document.getElementById("manequimcostacalcao");
      const manequimcostacalcao2 = document.getElementById("manequimcostacalcao2");
      const manequimcostacalcao3 = document.getElementById("manequimcostacalcao3");
      
      manequimanga.setAttribute("xlink:href", "img/artes/artes/BMANGA.png");
      manequimanga.setAttribute("filter", `url(#${B1_COLOR_FILTER})`);
      manequimanga2.setAttribute("xlink:href", "img/artes/artes/B2.png");
      manequimanga2.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      manequimanga3.setAttribute("xlink:href", "img/artes/artes/B2CALCAO.png");
      manequimanga3.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      manequimangaT.setAttribute("xlink:href", "img/artes/artes/BMANGA.png");
      manequimangaT.setAttribute("filter", `url(#${B1_COLOR_FILTER})`);
      manequimanga2T.setAttribute("xlink:href", "img/artes/artes/B2.png");
      manequimanga2T.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      manequimanga3T.setAttribute("xlink:href", "img/artes/artes/B2CALCAO.png");
      manequimanga3T.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      manequimangaDT.setAttribute("xlink:href", "img/artes/artes/BMANGA.png");
      manequimangaDT.setAttribute("filter", `url(#${B1_COLOR_FILTER})`);
      manequimangaD2T.setAttribute("xlink:href", "img/artes/artes/B2.png");
      manequimangaD2T.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      manequimangaD3T.setAttribute("xlink:href", "img/artes/artes/B2CALCAO.png");
      manequimangaD3T.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      manequimcalcao.setAttribute("xlink:href", "img/artes/artes/B1CALCAO.png");
      manequimcalcao.setAttribute("filter", `url(#${B1_COLOR_FILTER})`);
      manequimcalcao2.setAttribute("xlink:href", "img/artes/artes/B2CALCAO.png");
      manequimcalcao2.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      manequimcalcao3.setAttribute("xlink:href", "img/artes/artes/B3CALCAO.png");
      manequimcalcao3.setAttribute("filter", `url(#${B3_COLOR_FILTER})`);
      manequimcostacalcao.setAttribute("xlink:href", "img/artes/artes/B1CALCAOTRAS.png");
      manequimcostacalcao.setAttribute("filter", `url(#${B1_COLOR_FILTER})`);
      manequimcostacalcao2.setAttribute("xlink:href", "img/artes/artes/B2CALCAOTRAS.png");
      manequimcostacalcao2.setAttribute("filter", `url(#${B2_COLOR_FILTER})`);
      manequimcostacalcao3.setAttribute("xlink:href", "img/artes/artes/B3CALCAOTRAS.png");
      manequimcostacalcao3.setAttribute("filter", `url(#${B3_COLOR_FILTER})`);
      
      // Apply base color filters
      const filcamisaElements = document.querySelectorAll('.filcamisa');
      filcamisaElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_CAMISA})`));
      
      const filmangaElements = document.querySelectorAll('.filmanga');
      filmangaElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_MANGA})`));
      
      const filgolaElements = document.querySelectorAll('.filgola');
      filgolaElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_GOLA})`));
      
      const filpunhoElements = document.querySelectorAll('.filpunho');
      filpunhoElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_PUNHO})`));
      
      const filcalcaoElements = document.querySelectorAll('.filcalcao');
      filcalcaoElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_CALCAO})`));
      
      const filmeiaoElements = document.querySelectorAll('.filmeiao');
      filmeiaoElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_MEIAO})`));
      
      updateFilmangaFilter("filter-ffffff");
      
      // Sync button colors with actual filter colors
      if (typeof syncAllButtonColors === 'function') {
        // Use requestAnimationFrame to ensure DOM is fully updated
        requestAnimationFrame(() => {
          setTimeout(() => syncAllButtonColors(), 100); // Delay to ensure all filter attributes are set
        });
      }
    }
      // Apply art color filters
      const manequimElements = document.querySelectorAll('.filcamisa');
      filcamisaElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_CAMISA})`));
      
      const manequim2Elements = document.querySelectorAll('.filmanga');
      filmangaElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_MANGA})`));
      
      const manequim3Elements = document.querySelectorAll('.filgola');
      filgolaElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_GOLA})`));
      
      const manequimcostaElements = document.querySelectorAll('.filpunho');
      filpunhoElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_PUNHO})`));
      
      const manequimcosta2Elements = document.querySelectorAll('.filcalcao');
      filcalcaoElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_CALCAO})`));
      
      const manequimcosta3Elements = document.querySelectorAll('.filmeiao');
      filmeiaoElements.forEach(el => el.setAttribute("filter", `url(#${B1_FILTER_MEIAO})`));
      
      updateFilmangaFilter("filter-ffffff");
      
      // Sync button colors with actual filter colors
      if (typeof syncAllButtonColors === 'function') {
        setTimeout(() => syncAllButtonColors(), 50); // Small delay to ensure DOM updates
      }
    


    function updateFilmangaFilter(filterId) {
    const elements = document.querySelectorAll('.filmanga');
    elements.forEach(el => {
        el.setAttribute("filter", `url(#${filterId})`);
    });
}

    function arte2calcao() {
      document.getElementById("manequimcalcao").setAttribute("xlink:href", "img/artes/artes/B1CALCAO.png");
      document.getElementById("manequimcalcao2").setAttribute("xlink:href", "img/artes/artes/B2CALCAO.png");
      document.getElementById("manequimcalcao3").setAttribute("xlink:href", "img/artes/artes/B3CALCAO.png");
      document.getElementById("manequimcostacalcao").setAttribute("xlink:href", "img/artes/artes/B1CALCAOTRAS.png");
      document.getElementById("manequimcostacalcao2").setAttribute("xlink:href", "img/artes/artes/B2CALCAOTRAS.png");
      document.getElementById("manequimcostacalcao3").setAttribute("xlink:href", "img/artes/artes/B3CALCAOTRAS.png");
    }



    function arte1() {
      // ═══════════════════════════════════════════════════════════
      // COLOR FILTER CONFIGURATION - Initial page load filters
      // A1 images (blue), A2 images (red), A3 images (green)
      // Change these to modify the filters for each art set
      // ═══════════════════════════════════════════════════════════
      const ARTE1_FILTER_A1 = "blue-tint";      // For A1 images
      const ARTE1_FILTER_A2 = "red-tint";       // For A2 images
      const ARTE1_FILTER_A3 = "filter-0DFF00";  // For A3 images (green)
      
      // Base color filters (from initial page load)
      const ARTE1_FILTER_CAMISA = "filter-ffffff";  // White
      const ARTE1_FILTER_MANGA = "red-tint";       // Red
      const ARTE1_FILTER_GOLA = "blue-tint";       // Blue
      const ARTE1_FILTER_PUNHO = "blue-tint";      // Blue
      const ARTE1_FILTER_CALCAO = "blue-tint";     // Blue
      const ARTE1_FILTER_MEIAO = "blue-tint";      // Blue
      
      const manequim = document.getElementById("manequim");
      const manequim2 = document.getElementById("manequim2");
      const manequim3 = document.getElementById("manequim3");
      const manequimcosta = document.getElementById("manequimcosta");
      const manequimcosta2 = document.getElementById("manequimcosta2");
      const manequimcosta3 = document.getElementById("manequimcosta3");
      const manequimangaD = document.getElementById("manequimangaD");
      const manequimangaD2 = document.getElementById("manequimangaD2");
      const manequimangaD3 = document.getElementById("manequimangaD3");
      const manequimanga = document.getElementById("manequimanga");
      const manequimanga2 = document.getElementById("manequimanga2");
      const manequimanga3 = document.getElementById("manequimanga3");
      const manequimangaT = document.getElementById("manequimangaT");
      const manequimanga2T = document.getElementById("manequimanga2T");
      const manequimanga3T = document.getElementById("manequimanga3T");
      const manequimangaDT = document.getElementById("manequimangaDT");
      const manequimangaD2T = document.getElementById("manequimangaD2T");
      const manequimangaD3T = document.getElementById("manequimangaD3T");
      const manequimcalcao = document.getElementById("manequimcalcao");
      const manequimcalcao2 = document.getElementById("manequimcalcao2");
      const manequimcalcao3 = document.getElementById("manequimcalcao3");
      const manequimcostacalcao = document.getElementById("manequimcostacalcao");
      const manequimcostacalcao2 = document.getElementById("manequimcostacalcao2");
      const manequimcostacalcao3 = document.getElementById("manequimcostacalcao3");
      
      // A1 images (blue filter)
      manequim.setAttribute("xlink:href", "img/artes/artes/A1.png");
      manequim.setAttribute("filter", `url(#${ARTE1_FILTER_A1})`);
      manequimcosta.setAttribute("xlink:href", "img/artes/artes/A1T.png");
      manequimcosta.setAttribute("filter", `url(#${ARTE1_FILTER_A1})`);
      manequimcalcao.setAttribute("xlink:href", "img/artes/artes/A1.png");
      manequimcalcao.setAttribute("filter", `url(#${ARTE1_FILTER_A1})`);
      manequimcostacalcao.setAttribute("xlink:href", "img/artes/artes/A1T.png");
      manequimcostacalcao.setAttribute("filter", `url(#${ARTE1_FILTER_A1})`);
      manequimangaD.setAttribute("xlink:href", "img/artes/artes/AMANGAD1.png");
      manequimangaD.setAttribute("filter", `url(#${ARTE1_FILTER_A1})`);
      manequimanga.setAttribute("xlink:href", "img/artes/artes/AMANGA1.png");
      manequimanga.setAttribute("filter", `url(#${ARTE1_FILTER_A1})`);
      manequimangaT.setAttribute("xlink:href", "img/artes/artes/AMANGA1.png");
      manequimangaT.setAttribute("filter", `url(#${ARTE1_FILTER_A1})`);
      manequimangaDT.setAttribute("xlink:href", "img/artes/artes/AMANGAD1.png");
      manequimangaDT.setAttribute("filter", `url(#${ARTE1_FILTER_A1})`);
      
      // A2 images (red filter)
      manequim2.setAttribute("xlink:href", "img/artes/artes/A2.png");
      manequim2.setAttribute("filter", `url(#${ARTE1_FILTER_A2})`);
      manequimcosta2.setAttribute("xlink:href", "img/artes/artes/A2T.png");
      manequimcosta2.setAttribute("filter", `url(#${ARTE1_FILTER_A2})`);
      manequimcalcao2.setAttribute("xlink:href", "img/artes/artes/A2.png");
      manequimcalcao2.setAttribute("filter", `url(#${ARTE1_FILTER_A2})`);
      manequimcostacalcao2.setAttribute("xlink:href", "img/artes/artes/A2T.png");
      manequimcostacalcao2.setAttribute("filter", `url(#${ARTE1_FILTER_A2})`);
      manequimangaD2.setAttribute("xlink:href", "img/artes/artes/AMANGAD2.png");
      manequimangaD2.setAttribute("filter", `url(#${ARTE1_FILTER_A2})`);
      manequimanga2.setAttribute("xlink:href", "img/artes/artes/AMANGA2.png");
      manequimanga2.setAttribute("filter", `url(#${ARTE1_FILTER_A2})`);
      manequimanga2T.setAttribute("xlink:href", "img/artes/artes/AMANGA2.png");
      manequimanga2T.setAttribute("filter", `url(#${ARTE1_FILTER_A2})`);
      manequimangaD2T.setAttribute("xlink:href", "img/artes/artes/AMANGAD2.png");
      manequimangaD2T.setAttribute("filter", `url(#${ARTE1_FILTER_A2})`);
      
      // A3 images (green filter)
      manequim3.setAttribute("xlink:href", "img/artes/artes/A3.png");
      manequim3.setAttribute("filter", `url(#${ARTE1_FILTER_A3})`);
      manequimcosta3.setAttribute("xlink:href", "img/artes/artes/A3T.png");
      manequimcosta3.setAttribute("filter", `url(#${ARTE1_FILTER_A3})`);
      manequimcalcao3.setAttribute("xlink:href", "img/artes/artes/A3.png");
      manequimcalcao3.setAttribute("filter", `url(#${ARTE1_FILTER_A3})`);
      manequimcostacalcao3.setAttribute("xlink:href", "img/artes/artes/A3T.png");
      manequimcostacalcao3.setAttribute("filter", `url(#${ARTE1_FILTER_A3})`);
      manequimangaD3.setAttribute("xlink:href", "img/artes/artes/AMANGAD3.png");
      manequimangaD3.setAttribute("filter", `url(#${ARTE1_FILTER_A3})`);
      manequimanga3.setAttribute("xlink:href", "img/artes/artes/AMANGA3.png");
      manequimanga3.setAttribute("filter", `url(#${ARTE1_FILTER_A3})`);
      manequimanga3T.setAttribute("xlink:href", "img/artes/artes/AMANGA3.png");
      manequimanga3T.setAttribute("filter", `url(#${ARTE1_FILTER_A3})`);
      manequimangaD3T.setAttribute("xlink:href", "img/artes/artes/AMANGAD3.png");
      manequimangaD3T.setAttribute("filter", `url(#${ARTE1_FILTER_A3})`);
      
      // Apply base color filters
      const filcamisaElements = document.querySelectorAll('.filcamisa');
      filcamisaElements.forEach(el => el.setAttribute("filter", `url(#${ARTE1_FILTER_CAMISA})`));
      
      const filmangaElements = document.querySelectorAll('.filmanga');
      filmangaElements.forEach(el => el.setAttribute("filter", `url(#${ARTE1_FILTER_MANGA})`));
      
      const filgolaElements = document.querySelectorAll('.filgola');
      filgolaElements.forEach(el => el.setAttribute("filter", `url(#${ARTE1_FILTER_GOLA})`));
      
      const filpunhoElements = document.querySelectorAll('.filpunho');
      filpunhoElements.forEach(el => el.setAttribute("filter", `url(#${ARTE1_FILTER_PUNHO})`));
      
      const filcalcaoElements = document.querySelectorAll('.filcalcao');
      filcalcaoElements.forEach(el => el.setAttribute("filter", `url(#${ARTE1_FILTER_CALCAO})`));
      
      const filmeiaoElements = document.querySelectorAll('.filmeiao');
      filmeiaoElements.forEach(el => el.setAttribute("filter", `url(#${ARTE1_FILTER_MEIAO})`));
      
      // Sync button colors with actual filter colors
      if (typeof syncAllButtonColors === 'function') {
        // Use requestAnimationFrame to ensure DOM is fully updated
        requestAnimationFrame(() => {
          setTimeout(() => syncAllButtonColors(), 100); // Delay to ensure all filter attributes are set
        });
      }

    }
    
    function arte1calcao() {
      document.getElementById("manequimcalcao").setAttribute("xlink:href", "img/artes/artes/A1.png");
      document.getElementById("manequimcalcao2").setAttribute("xlink:href", "img/artes/artes/A2.png");
      document.getElementById("manequimcalcao3").setAttribute("xlink:href", "img/artes/artes/A3.png");
      document.getElementById("manequimcostacalcao").setAttribute("xlink:href", "img/artes/artes/A1T.png");
      document.getElementById("manequimcostacalcao2").setAttribute("xlink:href", "img/artes/artes/A2T.png");
      document.getElementById ("manequimcostacalcao3").setAttribute("xlink:href", "img/artes/artes/A3T.png");
    }

    function changeStrokeColor(color) {
  const textElements = document.getElementsByClassName('numerocosta');
  if (textElements.length > 0) {
    textElements[0].style.webkitTextStroke = `2px ${color}`;
  }
}

function changeStrokeColorNome(color) {
  const textElements = document.getElementsByClassName('nomecosta');
  if (textElements.length > 0) {
    textElements[0].style.webkitTextStroke = `2.1px ${color}`;
  }
}



function exitAreaEquipamentoMenu() {
    const exitAreaEquipamentoMenu = document.querySelector('.areaequipamentomenu');
    if (exitAreaEquipamentoMenu.style.display === 'block') {
        exitAreaEquipamentoMenu.style.display = 'none';
    }
}