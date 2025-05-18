document.addEventListener('DOMContentLoaded', function () {
    extensionsData();
    renderExtensions(extensions);

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            renderExtensions(extensions, filter);
        });
    });
});

let extensions = [];

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.querySelector(".icon img");
    if (document.body.classList.contains("dark-mode")) {
        icon.src = "./assets/images/icon-sun.svg";
        icon.alt = "Light Mode";
    } else {
        icon.src = "./assets/images/icon-moon.svg";
        icon.alt = "Dark Mode";
    }
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("light-mode").style.display = "block";
        document.getElementById("dark-mode").style.display = "none";
    } else {
        document.getElementById("light-mode").style.display = "none";
        document.getElementById("dark-mode").style.display = "block";
    }
}

function extensionsData() {
    extensions = [
        {
            "logo": "./assets/images/logo-devlens.svg",
            "name": "DevLens",
            "description": "Quickly inspect page layouts and visualize element boundaries.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-style-spy.svg",
            "name": "StyleSpy",
            "description": "Instantly analyze and copy CSS from any webpage element.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-speed-boost.svg",
            "name": "SpeedBoost",
            "description": "Optimizes browser resource usage to accelerate page loading.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-json-wizard.svg",
            "name": "JSONWizard",
            "description": "Formats, validates, and prettifies JSON responses in-browser.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-tab-master-pro.svg",
            "name": "TabMaster Pro",
            "description": "Organizes browser tabs into groups and sessions.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-viewport-buddy.svg",
            "name": "ViewportBuddy",
            "description": "Simulates various screen resolutions directly within the browser.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-markup-notes.svg",
            "name": "Markup Notes",
            "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-grid-guides.svg",
            "name": "GridGuides",
            "description": "Overlay customizable grids and alignment guides on any webpage.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-palette-picker.svg",
            "name": "Palette Picker",
            "description": "Instantly extracts color palettes from any webpage.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-link-checker.svg",
            "name": "LinkChecker",
            "description": "Scans and highlights broken links on any page.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-dom-snapshot.svg",
            "name": "DOM Snapshot",
            "description": "Capture and export DOM structures quickly.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-console-plus.svg",
            "name": "ConsolePlus",
            "description": "Enhanced developer console with advanced filtering and logging.",
            "isActive": true
        }
    ];
}

// Render extensions using the hardcoded data
function renderExtensions(extensionsData, filter = 'all') {
    const container = document.getElementById('lists-body');


    const filteredExtensions = extensionsData.filter(ext => {
        if (filter === 'all') return true;
        if (filter === 'active') return ext.isActive;
        if (filter === 'inactive') return !ext.isActive;
        return true;
    });


    const extensionsHTML = filteredExtensions.map(extension => `
        <div class="extension-card ${extension.isActive ? '' : 'inactive'}">
            <div class="extension-header">
                <div class="extension-image">
                    <img src="${extension.logo}" alt="${extension.name} logo" class="extension-logo">
                </div>
                <div class="extension-texts">
                    <h3 class="extension-name">${extension.name}</h3>
                    <div class="extension-description">
                        <p class="extension-description">${extension.description}</p>
                     </div>
                </div>
            </div>
            <div class="extension-footer">
                <button class="btn-remove">Remove</button>
                <label class="toggle-switch">
                    <input type="checkbox" class="toggle-checkbox" ${extension.isActive ? 'checked' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>
    `).join('');

    container.innerHTML = extensionsHTML || '<p class="no-results">No extensions found.</p>';

    document.querySelectorAll('.toggle-checkbox').forEach((checkbox, index) => {
        checkbox.addEventListener('change', function () {
            filteredExtensions[index].isActive = this.checked;
            renderExtensions(filteredExtensions);
        });
    });


    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.extension-card');
            const extensionName = card.querySelector('.extension-name').textContent;
            if (confirm(`Are you sure you want to remove ${extensionName}?`)) {
                card.style.opacity = '0';
                card.remove();
            }
        });
    });
}
