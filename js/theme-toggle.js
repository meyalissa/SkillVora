const themeIcon = document.getElementById("themeIcon");
const root = document.documentElement;

// Detect correct asset path
const isSubPage = window.location.pathname.includes("ExploreCareer") ||
                  window.location.pathname.includes("CheckResume");

const assetPath = isSubPage ? "../assets/" : "assets/";

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);
}

// Toggle theme
themeIcon.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  themeIcon.src =
    theme === "dark"
      ? `${assetPath}moon_fill.png`
      : `${assetPath}sun_line.png`;
}
