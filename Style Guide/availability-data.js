const availabilityData = {
    expressions: {
        'Happy': {
            'Light Nougat': { available: true, partNumber: '3626pb3418', url: 'https://www.bricklink.com/v2/catalog/catalogitem.page?P=3626pb3418#T=C&C=90' },
            'Medium Nougat': { available: false },
            'Nougat': { available: false },
            'Medium Dark Flesh': { available: false },
            'Dark Nougat': { available: false },
            'Dark Brown': { available: false },
            'Reddish Brown': { available: false },
            'Vitiligo Pattern': { available: true, partNumber: '3626pb3169', url: 'https://bricklink.com/v2/catalog/catalogitem.page?P=3626pb3169' }
        },
        'Confident': {
            'Light Nougat': { available: true, partNumber: '3626pb3061', url: 'https://bricklink.com/v2/catalog/catalogitem.page?P=3626pb3061' },
            'Medium Nougat': { available: false },
            'Nougat': { available: false },
            'Medium Dark Flesh': { available: true, partNumber: '3626pb3168', url: 'https://bricklink.com/v2/catalog/catalogitem.page?P=3626pb3168' },
            'Dark Nougat': { available: false },
            'Dark Brown': { available: false },
            'Reddish Brown': { available: true, partNumber: '3626pb3164', url: 'https://bricklink.com/v2/catalog/catalogitem.page?P=3626pb3164' },
            'Vitiligo Pattern': { available: false }
        }
        // Add more expressions and flesh tones as needed
    }
};

function getAvailabilityStats(fleshToneName) {
    const stats = { available: 0, unavailable: 0, total: 0 };

    Object.keys(availabilityData.expressions).forEach(expressionName => {
        const expressionData = availabilityData.expressions[expressionName][fleshToneName];
        stats.total++; // Count every expression type
        if (expressionData?.available) {
            stats.available++; // Count only available ones
        } else {
            stats.unavailable++;
        }
    });

    return stats; // Returns something like {available: 3, unavailable: 3, total: 6}
}

function generateFleshToneOptions() {
    const grid = document.getElementById('fleshToneGrid');
    grid.innerHTML = '';

    fleshTones.forEach(tone => {
        const stats = getAvailabilityStats(tone.name); // Get the counts
        const badgeColor = stats.available > 0 ? 'status-available' : 'status-missing';
        const statusText = stats.available > 0
            ? `${stats.available}/${stats.total} Available` // Shows "3/6 Available"
            : 'None Available'; // Or this if zero

        const item = document.createElement('div');
        item.className = 'selection-item';

        const imageSrc = tone.name === "Vitiligo Pattern"
            ? "images/vitiligo-pattern.jpg"
            : `images/${tone.name.toLowerCase().replace(/ /g, '-')}.jpg`;

        item.innerHTML = `
            <img src="${imageSrc}" alt="${tone.name}" style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 10px; border: 3px solid #333;">
            <div><strong>${tone.name}</strong></div>
            <div style="font-size: 0.8rem; color: #666;">${tone.description}</div>
            <div class="availability-status ${badgeColor}">
                ${statusText}
            </div>
        `;

        item.addEventListener('mouseenter', (e) => {
            const tooltipText = `${stats.available} expressions available out of ${stats.total} total`;
            showTooltip(e, tooltipText);
        });

        item.addEventListener('mouseleave', hideTooltip);

        if (stats.available > 0) {
            item.addEventListener('click', () => selectFleshTone(tone, item));
        } else {
            item.classList.add('unavailable');
            item.addEventListener('click', () => displayErrorMessage(tone.name));
        }

        grid.appendChild(item);
    });
}

function displayErrorMessage(fleshToneName) {
    const stats = getAvailabilityStats(fleshToneName);

    const errorSection = document.createElement('div');
    errorSection.className = 'error-message';
    errorSection.innerHTML = `
        <h3>🚨 Missing Expressions for ${fleshToneName}</h3>
        <p>Unfortunately, headprints from 2022-2024 do not include expressions for the <strong>${fleshToneName}</strong> flesh tone.</p>
        <p>Help us advocate for more inclusive LEGO parts by clicking below:</p>
        <button class="btn btn-suggest" onclick="redirectToLEGOContact('${fleshToneName}')">
            ✉️ Suggest to LEGO
        </button>
        <div style="margin-top: 20px;">
            <img src="images/graph.jpg" alt="Representation Graph" style="width: 100%; max-width: 400px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
        </div>
        <p>Available: ${stats.available} / Total: ${stats.total}</p>
    `;

    const fleshToneSection = document.getElementById('fleshToneSection');
    fleshToneSection.innerHTML = '';
    fleshToneSection.appendChild(errorSection);
}

function generateExpressionOptions() {
    const grid = document.getElementById('expressionGrid');
    grid.innerHTML = '';

    Object.keys(availabilityData.expressions).forEach(expressionName => {
        const expressionData = availabilityData.expressions[expressionName][selection.fleshTone.name];
        const isAvailable = expressionData?.available;

        const item = document.createElement('div');
        item.className = `selection-item ${isAvailable ? '' : 'unavailable'}`;

        item.innerHTML = `
            <img src="${isAvailable ? `images/${selection.fleshTone.name.toLowerCase().replace(/ /g, '-')}-${expressionName.toLowerCase().replace(/ /g, '-')}.jpg` : 'images/placeholder.jpg'}" alt="${expressionName}" style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 10px; border: 3px solid #333;">
            <div><strong>${expressionName}</strong></div>
            <div style="font-size: 0.8rem; color: #666;">${isAvailable ? 'Available' : 'Not Available'}</div>
            ${isAvailable && expressionData.url ? `<a href="${expressionData.url}" target="_blank" class="btn btn-primary">🔗 View on BrickLink</a>` : ''}
        `;

        if (isAvailable) {
            item.addEventListener('click', () => selectExpression(expressionName, item));
        } else {
            item.addEventListener('click', () => displayUnavailabilityModal(expressionName, selection.fleshTone.name));
        }

        grid.appendChild(item);
    });
}

// CSS classes moved to styles.css file