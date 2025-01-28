// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('.theme-controller');
    const htmlElement = document.documentElement;
    
    // Check localStorage for the theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        checkbox.checked = savedTheme === 'sunset'; // Checked if sunset theme is active
    } else {
        // Default to light theme if no preference is saved
        htmlElement.removeAttribute('data-theme'); // Light theme
        checkbox.checked = false; // Unchecked for light theme
    }
    
    // Add change event listener
    checkbox.addEventListener('change', () => toggleTheme(checkbox));
});

function toggleTheme(checkbox) {
    const htmlElement = document.documentElement;
    if (checkbox.checked) {
        htmlElement.setAttribute('data-theme', 'sunset'); // Sunset theme
        localStorage.setItem('theme', 'sunset'); // Save preference
    } else {
        htmlElement.removeAttribute('data-theme'); // Light theme
        localStorage.removeItem('theme'); // Remove preference
    }
}