const menu_toggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".primary-navigation");

menu_toggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  const expanded = menu_toggle.getAttribute("aria-expanded");

  expanded === "true"
    ? menu_toggle.setAttribute("aria-expanded", false)
    : menu_toggle.setAttribute("aria-expanded", true);

  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
  } else {
    navigation.setAttribute("data-visible", false);
  }
  console.log(expanded);
});
