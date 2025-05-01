document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("svgContainer");
  const svgPath = container.getAttribute("data-svg");

  fetch(svgPath)
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;
      // attach click event to all <path> elements within the SVG
      const paths = container.querySelectorAll("path");
      paths.forEach(path => {
        // Ensure the initial fill is set to black if not specified
        if (!path.getAttribute("fill")) {
          path.setAttribute("fill", "black");
        }
        path.addEventListener("click", function() {
          let current = this.getAttribute("fill") || "black";
          let nextColor;
          if (current === "black") {
            nextColor = "red";
          } else if (current === "red") {
            nextColor = "green";
          } else if (current === "green") {
            nextColor = "blue";
          } else if (current === "blue") {
            nextColor = "red";
          } else {
            nextColor = "red";
          }
          this.setAttribute("fill", nextColor);
        });
      });
    })
    .catch(error => console.error('Error loading SVG:', error));
});
