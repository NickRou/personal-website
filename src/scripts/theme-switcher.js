// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('.theme-controller');
    
    // Only set checkbox state, theme is already set by inline script
    const savedTheme = localStorage.getItem('theme');
    checkbox.checked = savedTheme === 'sunset';
    
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