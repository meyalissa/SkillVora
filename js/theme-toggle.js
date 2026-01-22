const themeIcon = document.getElementById("themeIcon");
const siteLogo = document.getElementById("siteLogo");
const root = document.documentElement;

// Detect correct asset path
const isSubPage =
  window.location.pathname.includes("ExploreCareer") ||
  window.location.pathname.includes("CheckResume") ||
  window.location.pathname.includes("user-type");

const assetPath = isSubPage ? "../assets/" : "assets/";

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  updateUI(savedTheme);
}

// Toggle theme (only if icon exists)
if (themeIcon) {
  themeIcon.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateUI(newTheme);
  });
}

function updateUI(theme) {
  // Change toggle icon
  if (themeIcon) {
    themeIcon.src =
      theme === "dark"
        ? `${assetPath}moon_fill.png`
        : `${assetPath}sun_line.png`;
  }

  // Change logo
  if (siteLogo) {
    siteLogo.src =
      theme === "dark"
        ? `${assetPath}dark_logo.png`
        : `${assetPath}logo.png`;
  }
}
