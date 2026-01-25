export default function loadHeader() {


    // Ensure Bootstrap Icons are loaded
    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
        document.head.appendChild(link);
    }

    // Ensure css are loaded
    if (!document.querySelector('link[href*="header"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/header/header.css';
        document.head.appendChild(link);
    }

    // Create header element
    const header = document.createElement("header");

    header.classList.add('header');

    const logo = document.createElement('img');
    logo.src = '/components/header/logo.png';
    logo.alt = 'Stock Waves Logo';
    logo.style.cursor = 'pointer';
    logo.style.width = '100px';
    logo.style.height = '100px';
    logo.style.marginRight = '20px';



    logo.addEventListener('click', () => {
        window.location.href = '/pages/home.html';
      
    });
    
    const companies_Btn = document.createElement('button');
    companies_Btn.innerText = 'Companies';
    companies_Btn.classList.add('header-link-btn');

    companies_Btn.addEventListener('click', () => {
        window.location.href = '/pages/companies.html';
    });


    const sector_Btn = document.createElement('button');
    sector_Btn.innerText = 'Sector';
    sector_Btn.classList.add('header-link-btn');
    sector_Btn.addEventListener('click', () => {
        window.location.href = '/pages/sector.html';
    });

    const orders_Btn = document.createElement('button');
    orders_Btn.innerText = 'Orders';
    orders_Btn.classList.add('header-link-btn');

    const help_btn = document.createElement('button');
    help_btn.innerText = 'help';
    help_btn.classList.add('header-link-btn');


    const sign_Btn = document.createElement('button');
    sign_Btn.innerText = 'Sign Up';
    sign_Btn.classList.add('sign_up_Btn');







    // Get current theme from localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', currentTheme);


    // Dark mode toggle functionality
    const darkModeToggle = header.querySelector('#darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', (e) => {
            const newTheme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Update navbar style based on theme
            header.style.backgroundColor = newTheme === 'dark' ? '#5a5f4d' : '#7e846b';

            // Update dark mode icon
            const icon = darkModeToggle.nextElementSibling.querySelector('i');
            icon.className = `bi ${newTheme === 'dark' ? 'bi-moon-stars' : 'bi-sun'} me-1`;
            darkModeToggle.nextElementSibling.lastChild.textContent = newTheme === 'dark' ? 'Dark' : 'Light';
        });
    }



    header.appendChild(logo);
    header.appendChild(companies_Btn);
    header.appendChild(sector_Btn);
    header.appendChild(orders_Btn);
    header.appendChild(help_btn);
    header.appendChild(sign_Btn);

    document.body.appendChild(header);
};