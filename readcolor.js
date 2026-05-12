

function copyColorToTarget(clickedButton) {
    const targetButton = document.getElementById('corcamisap1');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }


  function copyColorToEfeitoCamisa1(clickedButton) {
    const targetButton = document.getElementById('corcamisaefeito1');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }

  function copyColorToEfeitoCamisa2(clickedButton) {
    const targetButton = document.getElementById('corcamisaefeito2');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }

  function copyColorToEfeitoCamisa3(clickedButton) {
    const targetButton = document.getElementById('corcamisaefeito3');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }

  
  function copyColorToManga(clickedButton) {
      const targetButton = document.getElementById('cormangap1');
      if (!clickedButton || !targetButton) return;
      
      const color = window.getComputedStyle(clickedButton).backgroundColor;
      targetButton.style.backgroundColor = color;
    } 

    function copyColorToEfeitoManga1(clickedButton) {
        const targetButton = document.getElementById('cormangaefeito1');
        if (!clickedButton || !targetButton) return;
        
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        targetButton.style.backgroundColor = color;
    }
    
function copyColorToEfeitoManga2(clickedButton) {
        const targetButton = document.getElementById('cormangaefeito2');
        if (!clickedButton || !targetButton) return;
        
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        targetButton.style.backgroundColor = color;
    }
    
    function copyColorToEfeitoManga3(clickedButton) {
        const targetButton = document.getElementById('cormangaefeito3');
        if (!clickedButton || !targetButton) return;
        
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        targetButton.style.backgroundColor = color;
    }

 function copyColorToNumero(clickedButton) {
        const targetButton = document.getElementById('cornumerop1');
        if (!clickedButton || !targetButton) return;
        
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        targetButton.style.backgroundColor = color;
    }

    function copyColorToCalcao(clickedButton) {
      const targetButton = document.getElementById('corcalcaop1');
      if (!clickedButton || !targetButton) return;
  
      const color = window.getComputedStyle(clickedButton).backgroundColor;
      targetButton.style.backgroundColor = color;
    }

    function copyColorToEfeitoCalcao1(clickedButton) {
        const targetButton = document.getElementById('corcalcaoefeito1');
        if (!clickedButton || !targetButton) return;
        
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        targetButton.style.backgroundColor = color;
    }

    function copyColorToEfeitoCalcao2(clickedButton) {
        const targetButton = document.getElementById('corcalcaoefeito2');
        if (!clickedButton || !targetButton) return;
        
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        targetButton.style.backgroundColor = color;
    }
    
    function copyColorToEfeitoCalcao3(clickedButton) {
        const targetButton = document.getElementById('corcalcaoefeito3');
        if (!clickedButton || !targetButton) return;
        
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        targetButton.style.backgroundColor = color;
    }

    function copyColorToMeiao(clickedButton) {
        const targetButton = document.getElementById('cormeiaop1');
        if (!clickedButton || !targetButton) return;
        
        const color = window.getComputedStyle(clickedButton).backgroundColor;
        targetButton.style.backgroundColor = color;
    }


function copyColorToNome(clickedButton) {
    const targetButton = document.getElementById('cornomep1');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }

  function copyColorToContornoNome(clickedButton) {
    const targetButton = document.getElementById('cornomecontornop1');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }

  function copyColorToNumero(clickedButton) {
    const targetButton = document.getElementById('cornumerop1');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }

  function copyColorToContornoNumero(clickedButton) {
    const targetButton = document.getElementById('corcontornonumerop1');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }  

  function copyColorToGola(clickedButton) {
    const targetButton = document.getElementById('corgolap1');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }
  
  function copyColorToPunho(clickedButton) {
    const targetButton = document.getElementById('corpunhop1');
    if (!clickedButton || !targetButton) return;

    const color = window.getComputedStyle(clickedButton).backgroundColor;
    targetButton.style.backgroundColor = color;
  }


  function copyImageToConjunto(imgElement) {
  const targetImage = document.getElementById("thumbcamisa");
  if (!targetImage) {
    console.error('Element with id "thumbcamisa" not found.');
    return;
  }
  targetImage.src = imgElement.src;
}

// ═══════════════════════════════════════════════════════════
// SYNC BUTTON COLORS WITH ACTUAL FILTER COLORS
// This function reads the actual filter values from SVG elements
// and updates button background colors to match
// ═══════════════════════════════════════════════════════════
function syncAllButtonColors() {
  // Map filter IDs to hex colors (case-insensitive matching)
  const filterToColor = {
    'red-tint': '#ff0000',
    'blue-tint': '#0000ff',
    'green-tint': '#00ff00',
    'filter-ffffff': '#ffffff',
    'filter-FFFFFF': '#ffffff',  // Uppercase variant
    'filter-000000': '#000000',
    'filter-00FFEC': '#00FFEC',
    'filter-8CDDFF': '#8CDDFF',
    'filter-3BAFED': '#3BAFED',
    'filter-0062D9': '#0062D9',
    'filter-0030A8': '#0030A8',
    'filter-74DE70': '#74DE70',
    'filter-62DA5E': '#62DA5E',
    'filter-0DFF00': '#0DFF00',
    'filter-1A6642': '#1A6642',
    'filter-F16321': '#F16321',
    'filter-FF3203': '#FF3203',
    'filter-F0000': '#FF0000',
    'filter-B51723': '#B51723',
    'filter-7c0000': '#7c0000',
    'filter-511A20': '#511A20',
    'filter-FF0074': '#FF0074',
    'filter-DF97AE': '#DF97AE',
    'filter-FF00FF': '#FF00FF',
    'filter-4D1387': '#4D1387',
    'filter-330066': '#330066',
    'filter-909090': '#909090',
    'filter-424242': '#424242'
  };

  // Helper function to extract filter ID from filter attribute
  function getFilterId(element) {
    if (!element) return null;
    
    // For SVG elements, try getAttribute first (most common for image elements)
    // This is the primary method for SVG <image> elements
    let filterAttr = element.getAttribute('filter');
    
    // Debug: Log if element exists but no filter found
    if (!filterAttr && element.tagName) {
      // Only log in development - can be removed later
      // console.log('Element found but no filter attribute:', element.tagName, element.id);
    }
    
    // If not found, try getAttributeNS for SVG namespaces
    if (!filterAttr) {
      filterAttr = element.getAttributeNS(null, 'filter');
    }
    
    // For SVG image elements, also check if filter is set via style attribute
    if (!filterAttr || filterAttr === 'none') {
      const styleFilter = element.getAttribute('style');
      if (styleFilter && styleFilter.includes('filter:')) {
        const styleMatch = styleFilter.match(/filter:\s*url\(#([^)]+)\)/);
        if (styleMatch) {
          filterAttr = `url(#${styleMatch[1]})`;
        }
      }
    }
    
    // If still not found, try computed style (for HTML elements)
    if (!filterAttr || filterAttr === 'none') {
      try {
        const computedFilter = window.getComputedStyle(element).getPropertyValue('filter');
        if (computedFilter && computedFilter !== 'none' && computedFilter !== '') {
          filterAttr = computedFilter;
        }
      } catch (e) {
        // SVG elements might not support computed style filter
      }
    }
    
    if (!filterAttr || filterAttr === 'none' || filterAttr === '') return null;
    
    // Extract filter ID from "url(#filter-id)" format
    // Handle both "url(#filter-id)" and "url(# filter-id)" (with space)
    const match = filterAttr.match(/url\(#\s*([^)]+)\)/);
    if (match) {
      return match[1].trim(); // Trim any whitespace
    }
    
    return null;
  }

  // Helper function to get color from filter ID (case-insensitive)
  function getColorFromFilter(filterId) {
    if (!filterId) return null;
    
    // Try exact match first
    if (filterToColor[filterId]) {
      return filterToColor[filterId];
    }
    
    // Try case-insensitive match
    const lowerFilterId = filterId.toLowerCase();
    for (const [key, value] of Object.entries(filterToColor)) {
      if (key.toLowerCase() === lowerFilterId) {
        return value;
      }
    }
    
    // If filter ID starts with "filter-" and contains hex, try to extract color
    if (filterId.startsWith('filter-')) {
      const hexPart = filterId.replace('filter-', '').replace(/^#/, '');
      if (/^[0-9A-Fa-f]{6}$/.test(hexPart)) {
        return '#' + hexPart.toUpperCase();
      }
    }
    
    return null;
  }

  // Sync base camisa color (filcamisa)
  const filcamisaElements = document.querySelectorAll('.filcamisa');
  if (filcamisaElements.length > 0) {
    const filterId = getFilterId(filcamisaElements[0]);
    const color = getColorFromFilter(filterId);
    const camisaButton = document.getElementById('corcamisap1');
    if (camisaButton && color) {
      camisaButton.style.backgroundColor = color;
    }
  }

  // Sync manequim art colors (manequim, manequim2, manequim3)
  // These are SVG image elements that display B1.png, B2.png, B3.png, etc.
  const manequim = document.getElementById('manequim');
  if (manequim) {
    // Try multiple methods to get the filter
    let filterId = getFilterId(manequim);
    
    // If getFilterId didn't work, try reading directly
    if (!filterId) {
      const directFilter = manequim.getAttribute('filter');
      if (directFilter) {
        const match = directFilter.match(/url\(#\s*([^)]+)\)/);
        if (match) filterId = match[1].trim();
      }
    }
    
    const color = getColorFromFilter(filterId);
    const arte1Button = document.getElementById('corcamisa1');
    if (arte1Button) {
      if (color) {
        arte1Button.style.backgroundColor = color;
      } else if (filterId) {
        // If filter ID exists but no color mapping, try to extract from filter ID
        console.log('Manequim filter ID found but no color mapping:', filterId, 'Element:', manequim);
      }
    }
  }

  const manequim2 = document.getElementById('manequim2');
  if (manequim2) {
    let filterId = getFilterId(manequim2);
    
    if (!filterId) {
      const directFilter = manequim2.getAttribute('filter');
      if (directFilter) {
        const match = directFilter.match(/url\(#\s*([^)]+)\)/);
        if (match) filterId = match[1].trim();
      }
    }
    
    const color = getColorFromFilter(filterId);
    const arte2Button = document.getElementById('corcamisa2');
    if (arte2Button) {
      if (color) {
        arte2Button.style.backgroundColor = color;
      } else if (filterId) {
        console.log('Manequim2 filter ID found but no color mapping:', filterId, 'Element:', manequim2);
      }
    }
  }

  const manequim3 = document.getElementById('manequim3');
  if (manequim3) {
    let filterId = getFilterId(manequim3);
    
    if (!filterId) {
      const directFilter = manequim3.getAttribute('filter');
      if (directFilter) {
        const match = directFilter.match(/url\(#\s*([^)]+)\)/);
        if (match) filterId = match[1].trim();
      }
    }
    
    const color = getColorFromFilter(filterId);
    const arte3Button = document.getElementById('corcamisa3') || document.querySelector('.corCamisa');
    if (arte3Button) {
      if (color) {
        arte3Button.style.backgroundColor = color;
      } else if (filterId) {
        console.log('Manequim3 filter ID found but no color mapping:', filterId, 'Element:', manequim3);
      }
    }
  }

  // Sync Manga Art colors (manequimanga, manequimanga2, manequimanga3)
  const mangaMappings = [
    { source: 'manequimanga', target: 'cormangaefeito1' },
    { source: 'manequimanga2', target: 'cormangaefeito2' },
    { source: 'manequimanga3', target: 'cormangaefeito3' }
  ];

  mangaMappings.forEach(mapping => {
    const sourceEl = document.getElementById(mapping.source);
    if (sourceEl) {
      const filterId = getFilterId(sourceEl);
      const color = getColorFromFilter(filterId);
      const targetBtn = document.getElementById(mapping.target);
      if (targetBtn && color) {
        targetBtn.style.backgroundColor = color;
      }
    }
  });

  // Sync Calcao Art colors (manequimcalcao, manequimcalcao2, manequimcalcao3)
  const calcaoMappings = [
    { source: 'manequimcalcao', target: 'corcalcaoefeito1' },
    { source: 'manequimcalcao2', target: 'corcalcaoefeito2' },
    { source: 'manequimcalcao3', target: 'corcalcaoefeito3' }
  ];

  calcaoMappings.forEach(mapping => {
    const sourceEl = document.getElementById(mapping.source) || document.getElementById('manequimcostacalcao' + (mapping.source.replace('manequimcalcao', '') || ''));
    if (sourceEl) {
      const filterId = getFilterId(sourceEl);
      const color = getColorFromFilter(filterId);
      const targetBtn = document.getElementById(mapping.target);
      if (targetBtn && color) {
        targetBtn.style.backgroundColor = color;
      }
    }
  });

  // Sync manga color (filmanga)
  const filmangaElements = document.querySelectorAll('.filmanga');
  if (filmangaElements.length > 0) {
    const filterId = getFilterId(filmangaElements[0]);
    const color = getColorFromFilter(filterId);
    const mangaButton = document.getElementById('cormangap1');
    if (mangaButton && color) {
      mangaButton.style.backgroundColor = color;
    }
  }

  // Sync calcao color (filcalcao)
  const filcalcaoElements = document.querySelectorAll('.filcalcao');
  if (filcalcaoElements.length > 0) {
    const filterId = getFilterId(filcalcaoElements[0]);
    const color = getColorFromFilter(filterId);
    const calcaoButton = document.getElementById('corcalcaop1');
    if (calcaoButton && color) {
      calcaoButton.style.backgroundColor = color;
    }
  }

  // Sync meiao color (filmeiao)
  const filmeiaoElements = document.querySelectorAll('.filmeiao');
  if (filmeiaoElements.length > 0) {
    const filterId = getFilterId(filmeiaoElements[0]);
    const color = getColorFromFilter(filterId);
    const meiaoButton = document.getElementById('cormeiaop1');
    if (meiaoButton && color) {
      meiaoButton.style.backgroundColor = color;
    }
  }

  // Sync gola color (filgola)
  const filgolaElements = document.querySelectorAll('.filgola');
  if (filgolaElements.length > 0) {
    const filterId = getFilterId(filgolaElements[0]);
    const color = getColorFromFilter(filterId);
    const golaButton = document.getElementById('corgolap1');
    if (golaButton && color) {
      golaButton.style.backgroundColor = color;
    }
  }

  // Sync punho color (filpunho)
  const filpunhoElements = document.querySelectorAll('.filpunho');
  if (filpunhoElements.length > 0) {
    const filterId = getFilterId(filpunhoElements[0]);
    const color = getColorFromFilter(filterId);
    const punhoButton = document.getElementById('corpunhop1');
    if (punhoButton && color) {
      punhoButton.style.backgroundColor = color;
    }
  }
}


  