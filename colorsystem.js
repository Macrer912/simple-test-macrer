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
      manequimcostacalcao.removeAttribute("filter"); // Back to white
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
  }
}
