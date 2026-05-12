 async function embedImage(svgId, imageId) {
      const svg = document.getElementById(svgId);
      const image = svg.querySelector(`#${imageId}`);
      const href = image.getAttribute("xlink:href");

      const response = await fetch(href, { cache: "no-cache" });
      const blob = await response.blob();
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onloadend = () => {
          image.setAttribute("xlink:href", reader.result);
          resolve();
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }

    async function exportSvgWithEmbeddedImage() {
      const svg = document.getElementById("mySvg");
      const canvas = document.getElementById("outputCanvas");
      const ctx = canvas.getContext("2d");

      // Step 1: Embed the PNG image into the <image> tag
      await embedImage("mySvg", "manequimcalcao");

      // Step 2: Serialize the entire SVG
      const svgData = new XMLSerializer().serializeToString(svg);
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      // Step 3: Load it into an <img> and render to canvas
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const link = document.createElement("a");
        link.download = "exported.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

        URL.revokeObjectURL(url);
      };

      img.onerror = () => {
        alert("Failed to render SVG.");
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }