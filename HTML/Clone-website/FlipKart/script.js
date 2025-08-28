const menuIcon = document.getElementById('menuIcon');
const dropdown = document.getElementById('menuDropdown');

menuIcon.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Optional: Close dropdown if clicked outside
document.addEventListener('click', function (event) {
  if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});
