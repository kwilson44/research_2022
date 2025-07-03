const fleshTones = [
    {
        name: "Light Nougat",
        color: "#F5C189",
        description: "Light peachy flesh tone",
        cultural: "Introduced in 2003, representing lighter flesh tones in licensed sets.",
        available: true
    },
    {
        name: "Medium Nougat",
        color: "#E09864",
        description: "Medium peachy flesh tone",
        cultural: "A medium tone introduced for more diverse representation.",
        available: true
    },
    {
        name: "Nougat",
        color: "#D4A574",
        description: "Standard nougat flesh tone",
        cultural: "One of the original flesh tones, representing medium skin.",
        available: true
    },
    {
        name: "Medium Dark Flesh",
        color: "#B5856B",
        description: "Medium brown flesh tone",
        cultural: "Representing medium-dark flesh tones for diverse minifigures.",
        available: true
    },
    {
        name: "Dark Nougat",
        color: "#A0633D",
        description: "Dark brown flesh tone",
        cultural: "Introduced for better representation of darker flesh tones.",
        available: true
    },
    {
        name: "Dark Brown",
        color: "#532115",
        description: "Deep brown flesh tone",
        cultural: "The darkest official LEGO flesh tone for maximum diversity.",
        available: true
    },
    {
        name: "Reddish Brown",
        color: "#884A2E",
        description: "Warm reddish-brown flesh tone",
        cultural: "A warm-toned option for diverse representation.",
        available: true
    },
    {
        name: "Vitiligo Pattern",
        color: "#D4A574",
        patchColor: "#F5C189",
        description: "Representing vitiligo skin condition",
        cultural: "Vitiligo is a condition where patches of skin lose their pigment. Representation matters for everyone.",
        available: false,
        isVitiligo: true
    }
];

// Data for expressions
const expressions = [
    {
        name: "Happy",
        description: "Cheerful, joyful smile",
        images: {
            "light-nougat": "images/light-nougat-happy.jpg",
            "medium-nougat": "images/medium-nougat-happy.jpg",
            "nougat": "images/nougat-happy.jpg",
            "medium-dark-flesh": "images/medium-dark-flesh-happy.jpg",
            "dark-nougat": "images/dark-nougat-happy.jpg",
            "dark-brown": "images/dark-brown-happy.jpg",
            "reddish-brown": "images/reddish-brown-happy.jpg",
            "vitiligo-pattern": "images/vitiligo-pattern-happy.jpg",
        },
        availability: {
            "light-nougat": true,
            "medium-nougat": false,
            "nougat": false,
            "medium-dark-flesh": false,
            "dark-nougat": false,
            "dark-brown": false,
            "reddish-brown": false,
            "vitiligo-pattern": true,
        },
        brickLinkUrls: {
            "light-nougat": "https://www.bricklink.com/v2/catalog/catalogitem.page?P=3626pb3418#T=C&C=90",
            "vitiligo-pattern": "https://bricklink.com/v2/catalog/catalogitem.page?P=3626pb3169",
        },
        partNumber: "3626pb3418",
    },
    {
        name: "Confident",
        description: "Self-assured, determined look",
        images: {
            "light-nougat": "images/light-nougat-confident.jpg",
            "medium-nougat": "images/medium-nougat-confident.jpg",
            "nougat": "images/nougat-confident.jpg",
            "medium-dark-flesh": "images/medium-dark-flesh-confident.jpg",
            "dark-nougat": "images/dark-nougat-confident.jpg",
            "dark-brown": "images/dark-brown-confident.jpg",
            "reddish-brown": "images/reddish-brown-confident.jpg",
            "vitiligo-pattern": "images/vitiligo-pattern-confident.jpg",
        },
        availability: {
            "light-nougat": true,
            "medium-nougat": false,
            "nougat": false,
            "medium-dark-flesh": true,
            "dark-nougat": false,
            "dark-brown": false,
            "reddish-brown": true,
            "vitiligo-pattern": false,
        },
        brickLinkUrls: {
            "light-nougat": "https://bricklink.com/v2/catalog/catalogitem.page?P=3626pb3061",
            "medium-dark-flesh": "https://bricklink.com/v2/catalog/catalogitem.page?P=3626pb3168",
            "reddish-brown": "https://bricklink.com/v2/catalog/catalogitem.page?P=3626pb3164",
        },
        partNumber: "3626cpb2743",
    },
    {
        name: "Thoughtful",
        description: "Contemplative, wise expression",
        images: {
            "light-nougat": "images/light-nougat-thoughtful.jpg",
            "medium-nougat": "images/medium-nougat-thoughtful.jpg",
            "nougat": "images/nougat-thoughtful.jpg",
            "medium-dark-flesh": "images/medium-dark-flesh-thoughtful.jpg",
            "dark-nougat": "images/dark-nougat-thoughtful.jpg",
            "dark-brown": "images/dark-brown-thoughtful.jpg",
            "reddish-brown": "images/reddish-brown-thoughtful.jpg",
            "vitiligo-pattern": "images/vitiligo-pattern-thoughtful.jpg",
        },
        availability: {
            "light-nougat": true,
            "medium-nougat": true,
            "nougat": true,
            "medium-dark-flesh": true,
            "dark-nougat": true,
            "dark-brown": true,
            "reddish-brown": true,
            "vitiligo-pattern": false,
        },
        partNumber: "LEGO-3626bpb0540",
    },
    {
        name: "Neutral",
        description: "Calm, peaceful expression",
        images: {
            "light-nougat": "images/light-nougat-neutral.jpg",
            "medium-nougat": "images/medium-nougat-neutral.jpg",
            "nougat": "images/nougat-neutral.jpg",
            "medium-dark-flesh": "images/medium-dark-flesh-neutral.jpg",
            "dark-nougat": "images/dark-nougat-neutral.jpg",
            "dark-brown": "images/dark-brown-neutral.jpg",
            "reddish-brown": "images/reddish-brown-neutral.jpg",
            "vitiligo-pattern": "images/vitiligo-pattern-neutral.jpg",
        },
        availability: {
            "light-nougat": true,
            "medium-nougat": true,
            "nougat": true,
            "medium-dark-flesh": true,
            "dark-nougat": true,
            "dark-brown": true,
            "reddish-brown": true,
            "vitiligo-pattern": false,
        },
        partNumber: "LEGO-3626bpb0001",
    },
    {
        name: "Excited",
        description: "Enthusiastic, energetic look",
        images: {
            "light-nougat": "images/light-nougat-excited.jpg",
            "medium-nougat": "images/medium-nougat-excited.jpg",
            "nougat": "images/nougat-excited.jpg",
            "medium-dark-flesh": "images/medium-dark-flesh-excited.jpg",
            "dark-nougat": "images/dark-nougat-excited.jpg",
            "dark-brown": "images/dark-brown-excited.jpg",
            "reddish-brown": "images/reddish-brown-excited.jpg",
            "vitiligo-pattern": "images/vitiligo-pattern-excited.jpg",
        },
        availability: {
            "light-nougat": true,
            "medium-nougat": true,
            "nougat": true,
            "medium-dark-flesh": true,
            "dark-nougat": true,
            "dark-brown": true,
            "reddish-brown": true,
            "vitiligo-pattern": false,
        },
        partNumber: "LEGO-3626bpb0999",
    },
    {
        name: "Focused",
        description: "Concentrated, attentive expression",
        images: {
            "light-nougat": "images/light-nougat-focused.jpg",
            "medium-nougat": "images/medium-nougat-focused.jpg",
            "nougat": "images/nougat-focused.jpg",
            "medium-dark-flesh": "images/medium-dark-flesh-focused.jpg",
            "dark-nougat": "images/dark-nougat-focused.jpg",
            "dark-brown": "images/dark-brown-focused.jpg",
            "reddish-brown": "images/reddish-brown-focused.jpg",
            "vitiligo-pattern": "images/vitiligo-pattern-focused.jpg",
        },
        availability: {
            "light-nougat": true,
            "medium-nougat": true,
            "nougat": true,
            "medium-dark-flesh": true,
            "dark-nougat": true,
            "dark-brown": true,
            "reddish-brown": true,
            "vitiligo-pattern": false,
        },
        partNumber: "LEGO-3626cpb2743",
    }
];

// Data for accessories
const accessories = [
    {
        name: "Glasses",
        description: "Classic eyeglasses",
        icon: "👓",
        available: true,
        partNumber: "LEGO-2423"
    },
    {
        name: "Hearing Aid",
        description: "Behind-the-ear hearing aid",
        icon: "🦻",
        available: false
    },
    {
        name: "Cochlear Implant",
        description: "External cochlear implant processor",
        icon: "📡",
        available: false
    }
];

// Data for hair styles
const hairStyles = [
    {
        name: "Afro + TWA + Puffs",
        images: ["images/afro-twa-puffs.jpg", "images/afro-twa-puffs_2.jpg"],
        colors: ["#8B4513", "#654321", "#2F1B14", "#D2691E"],
        description: "Natural afro, teeny weeny afro (TWA), and afro puffs",
        cultural: "The afro became a symbol of Black pride and natural beauty in the 1960s-70s. TWAs and puffs are practical, protective styles that celebrate natural hair texture.",
        brickLinkUrl: "https://www.bricklink.com/v2/catalog/catalogitem.page?P=12890",
        partNumber: "12890",
        available: true
    },
    {
        name: "Braids + Cornrows",
        images: ["images/braids-cornrows.jpg"],
        colors: ["#654321", "#8B4513", "#2F1B14", "#D2691E"],
        description: "Box braids, cornrows, and traditional braided styles",
        cultural: "Braiding has deep roots in African culture, with cornrows dating back over 3,000 years. These styles are both protective and carry cultural significance.",
        brickLinkUrl: "https://www.bricklink.com/v2/catalog/catalogitem.page?P=12891",
        partNumber: "12891",
        available: true
    },
    {
        name: "Curly + Coarse + Kinky Hair",
        images: ["images/curly.jpg", "images/curly_2.jpg"],
        colors: ["#8B4513", "#654321", "#2F1B14"],
        description: "Curly, coarse, and kinky hair textures",
        cultural: "These hair textures are celebrated for their versatility and beauty, representing natural Black hair in its many forms.",
        brickLinkUrl: "https://www.bricklink.com/v2/catalog/catalogitem.page?P=12893",
        partNumber: "12893",
        available: true
    }
];

// Availability data for expressions and accessories
const availabilityData = {
    expressions: {
        Happy: {
            "Light Nougat": { available: true },
            "Medium Nougat": { available: false },
            "Nougat": { available: false },
            "Medium Dark Flesh": { available: false },
            "Dark Nougat": { available: false },
            "Dark Brown": { available: false },
            "Reddish Brown": { available: false },
            "Vitiligo Pattern": { available: true },
        },
        Confident: {
            "Light Nougat": { available: true },
            "Medium Nougat": { available: false },
            "Nougat": { available: false },
            "Medium Dark Flesh": { available: true },
            "Dark Nougat": { available: false },
            "Dark Brown": { available: false },
            "Reddish Brown": { available: true },
            "Vitiligo Pattern": { available: false },
        },
        Neutral: {
            "Light Nougat": { available: true },
            "Medium Nougat": { available: true },
            "Nougat": { available: false },
            "Medium Dark Flesh": { available: false },
            "Dark Nougat": { available: false },
            "Dark Brown": { available: false },
            "Reddish Brown": { available: true },
            "Vitiligo Pattern": { available: false },
        },
        Focused: {
            "Light Nougat": { available: true },
            "Medium Nougat": { available: false },
            "Nougat": { available: false },
            "Medium Dark Flesh": { available: true },
            "Dark Nougat": { available: false },
            "Dark Brown": { available: false },
            "Reddish Brown": { available: false },
            "Vitiligo Pattern": { available: false },
        },
        Glasses: {
            "Light Nougat": { available: true },
            "Medium Nougat": { available: true },
            "Nougat": { available: true },
            "Medium Dark Flesh": { available: false },
            "Dark Nougat": { available: false },
            "Dark Brown": { available: false },
            "Reddish Brown": { available: false },
            "Vitiligo Pattern": { available: false },
        },
        HearingAid: {
            "Light Nougat": { available: false },
            "Medium Nougat": { available: false },
            "Nougat": { available: false },
            "Medium Dark Flesh": { available: true },
            "Dark Nougat": { available: false },
            "Dark Brown": { available: false },
            "Reddish Brown": { available: false },
            "Vitiligo Pattern": { available: false },
        },
    },
};

// State management
let currentStep = 0;
let selection = {
    fleshTone: null,
    expression: null,
    accessories: [],
    hair: null,
    hairColor: null
};

// Initialize the app
function init() {
    generateFleshToneOptions();
    updateProgress();
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

        if (stats.available > 0)
        {
            item.addEventListener('click', () => selectFleshTone(tone, item));
        } else
        {
            item.classList.add('unavailable');
            item.addEventListener('click', () => displayErrorMessage(tone.name));
        }

        item.addEventListener('mouseenter', (e) => showFleshToneTooltip(e, tone));
        item.addEventListener('mouseleave', hideTooltip);

        grid.appendChild(item);
    });
}

function selectFleshTone(tone, itemElement) {
    document.querySelectorAll('#fleshToneGrid .selection-item').forEach(item => {
        item.classList.remove('selected');
    });

    itemElement.classList.add('selected');
    selection.fleshTone = tone;

    setTimeout(() => {
        currentStep = 1;
        showExpressionSection();
        updateProgress();
        updatePreview();
    }, 500);
}

function showExpressionSection() {
    document.getElementById('expressionSection').style.display = 'block';
    generateExpressionOptions();

    document.getElementById('expressionSection').scrollIntoView({
        behavior: 'smooth'
    });
}

function generateExpressionOptions() {
    const grid = document.getElementById('expressionGrid');
    grid.innerHTML = '';

    Object.keys(availabilityData.expressions).forEach(expressionName => {
        const selectedFleshTone = selection.fleshTone?.name;
        const expressionData = availabilityData.expressions[expressionName][selectedFleshTone];
        const isAvailable = expressionData?.available;
        const brickLinkUrl = expressionData?.url || null;
        const partNumber = expressionData?.partNumber || null;

        const item = document.createElement('div');
        item.className = `selection-item ${isAvailable ? '' : 'unavailable'}`;

        item.innerHTML = `
                    <img src="${isAvailable ? `images/${selectedFleshTone.toLowerCase().replace(/ /g, '-')}-${expressionName.toLowerCase().replace(/ /g, '-')}.jpg` : 'images/placeholder.jpg'}" alt="${expressionName}" style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 10px; border: 3px solid #333;">
                    <div><strong>${expressionName}</strong></div>
                    <div style="font-size: 0.8rem; color: #666;">${isAvailable ? 'Available' : 'Not Available'}</div>
                    ${isAvailable && brickLinkUrl ? `<a href="${brickLinkUrl}" target="_blank" class="btn btn-primary">🔗 View on BrickLink</a>` : ''}
                    ${isAvailable && partNumber ? `<p style="font-size: 0.8rem; color: #666;">Part ID: ${partNumber}</p>` : ''}
                `;

        if (isAvailable)
        {
            item.addEventListener('click', () => selectExpression(expressionName, item));
        } else
        {
            item.addEventListener('click', () => displayUnavailabilityModal(expressionName, selectedFleshTone));
        }

        grid.appendChild(item);
    });

    // Add "Continue to Hair Selection" button
    if (!document.getElementById('continue-hair-btn'))
    {
        const continueBtn = document.createElement('button');
        continueBtn.id = 'continue-hair-btn';
        continueBtn.className = 'btn btn-primary';
        continueBtn.textContent = 'Continue to Hair Selection';
        continueBtn.style.marginTop = '20px';
        continueBtn.addEventListener('click', () => {
            currentStep = 3;
            showHairSection();
            updateProgress();
        });

        grid.parentElement.appendChild(continueBtn);
    }
}

function selectExpression(expression, itemElement) {
    document.querySelectorAll('#expressionGrid .selection-item').forEach(item => {
        item.classList.remove('selected');
    });

    itemElement.classList.add('selected');
    selection.expression = expression;

    const selectedFleshTone = selection.fleshTone?.name.toLowerCase().replace(/ /g, '-');
    const isAvailable = expression.images[selectedFleshTone];

    if (!isAvailable)
    {
        displayUnavailabilityModal(expression.name, selection.fleshTone.name);
        return;
    }

    setTimeout(() => {
        currentStep = 2;
        showAccessoriesSection();
        updateProgress();
        updatePreview();
    }, 500);
}

function showAccessoriesSection() {
    document.getElementById('accessoriesSection').style.display = 'block';
    generateAccessoryOptions();

    document.getElementById('accessoriesSection').scrollIntoView({
        behavior: 'smooth'
    });
}

function generateAccessoryOptions() {
    const toggle = document.getElementById('accessoryToggle');
    toggle.innerHTML = '';

    accessories.forEach(accessory => {
        const item = document.createElement('div');
        item.className = 'accessory-item';

        if (!accessory.available)
        {
            item.style.opacity = '0.6';
        }

        item.innerHTML = `
                    <div class="accessory-checkbox">${selection.accessories.includes(accessory) ? '✓' : ''}</div>
                    <span style="font-size: 1.5rem;">${accessory.icon}</span>
                    <div>
                        <strong>${accessory.name}</strong>
                        <div style="font-size: 0.8rem; color: #666;">${accessory.description}</div>
                        <div class="availability-status ${accessory.available ? 'status-available' : 'status-missing'}">
                            ${accessory.available ? '✅ Available' : '❌ Missing'}
                        </div>
                        ${accessory.partNumber ? `<div class="part-number">${accessory.partNumber}</div>` : ''}
                    </div>
                `;

        if (accessory.available)
        {
            item.addEventListener('click', () => toggleAccessory(accessory, item));
        } else
        {
            item.addEventListener('click', () => suggestSpecificPart(accessory.name));
        }

        toggle.appendChild(item);
    });

    // Add "Continue to Hair Selection" button
    if (!document.getElementById('continue-hair-btn'))
    {
        const continueBtn = document.createElement('button');
        continueBtn.id = 'continue-hair-btn';
        continueBtn.className = 'btn btn-primary';
        continueBtn.textContent = 'Continue to Hair Selection';
        continueBtn.style.marginTop = '20px';
        continueBtn.addEventListener('click', () => {
            currentStep = 3;
            showHairSection();
            updateProgress();
        });

        toggle.parentElement.appendChild(continueBtn);
    }
}

function toggleAccessory(accessory, itemElement) {
    const index = selection.accessories.findIndex(acc => acc.name === accessory.name);

    if (index > -1)
    {
        // Remove accessory from selection
        selection.accessories.splice(index, 1);
        itemElement.classList.remove('selected');
        itemElement.querySelector('.accessory-checkbox').textContent = ''; // Clear checkbox text
    } else
    {
        // Add accessory to selection
        selection.accessories.push(accessory);
        itemElement.classList.add('selected');
        itemElement.querySelector('.accessory-checkbox').textContent = '✓'; // Mark checkbox as selected
    }

    // Update preview or any other UI elements if necessary
    updatePreview();
}

function showHairSection() {
    document.getElementById('hairSection').style.display = 'block';
    generateHairOptions();

    document.getElementById('hairSection').scrollIntoView({
        behavior: 'smooth'
    });
}

function generateHairOptions() {
    const carousel = document.getElementById('hairCarousel');
    carousel.innerHTML = '';

    hairStyles.forEach(style => {
        const card = document.createElement('div');
        card.className = 'option-card';

        const colorsHtml = style.colors.map(color => `
                    <div class="color-swatch" style="background: ${color};" onclick="previewHairColor('${color}', '${style.name}')"></div>
                `).join('');

        card.innerHTML = `
                    <div class="option-image" style="position: relative;">
                        ${style.images.map(image => `<img src="${image}" alt="${style.name}" style="width: 100%; height: auto; border-radius: 10px;">`).join('')}
                        <div class="color-palette" style="position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%); display: flex; gap: 5px;">
                            ${colorsHtml}
                        </div>
                    </div>
                    <div class="option-name">${style.name}</div>
                    <div class="option-description">${style.description}</div>
                    <div class="part-number">${style.partNumber}</div>
                    ${style.brickLinkUrl ? `<a href="${style.brickLinkUrl}" target="_blank" class="btn btn-primary">🔗 View on BrickLink</a>` : ''}
                `;

        card.addEventListener('click', () => selectHairStyle(style, card));
        carousel.appendChild(card);
    });

    // Add warning button
    if (!document.getElementById('warning-btn'))
    {
        const warningBtn = document.createElement('button');
        warningBtn.id = 'warning-btn';
        warningBtn.className = 'btn btn-suggest';
        warningBtn.textContent = '⚠️ Advocate for More Options';
        warningBtn.style.marginTop = '20px';
        warningBtn.addEventListener('click', displayHairWarning);

        carousel.parentElement.appendChild(warningBtn);
    }
}

function previewHairColor(color, styleName) {
    const previewHair = document.getElementById('previewHair');
    previewHair.style.backgroundColor = color;
    previewHair.innerHTML = styleName;
}

function selectHairStyle(style, cardElement) {
    document.querySelectorAll('#hairCarousel .option-card').forEach(card => {
        card.classList.remove('selected');
    });

    cardElement.classList.add('selected');
    selection.hair = style;

    setTimeout(() => {
        currentStep = 4;
        showCharacterPreview();
        updateProgress();
        updatePreview();
    }, 500);
}

function showCharacterPreview() {
    document.getElementById('characterPreview').style.display = 'block';
    document.getElementById('finalActions').style.display = 'block';

    document.getElementById('characterPreview').scrollIntoView({
        behavior: 'smooth'
    });
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const totalSteps = 4;
    const stepPercentage = (currentStep / totalSteps) * 100;

    progressFill.style.width = `${stepPercentage}%`;
    document.getElementById('progressText').innerText = `Step ${currentStep + 1} of ${totalSteps}`;
}

function updatePreview() {
    const previewHair = document.getElementById('previewHair');
    const previewHead = document.getElementById('previewHead');
    const previewAccessories = document.getElementById('previewAccessories');
    const characterInfo = document.getElementById('characterInfo');

    // Update hair preview
    if (selection.hair)
    {
        const hairImage = selection.hair.images[0]; // Use the first image for the hairstyle
        const hairBrickLinkUrl = selection.hair.brickLinkUrl;
        const hairPartNumber = selection.hair.partNumber;

        previewHair.innerHTML = `
                    <img src="${hairImage}" alt="${selection.hair.name}" style="width: 150px; height: auto; border-radius: 10px;">
                    ${hairBrickLinkUrl ? `<a href="${hairBrickLinkUrl}" target="_blank" class="btn btn-primary" style="margin-top: 10px;">🔗 View Hair on BrickLink</a>` : ''}
                    ${hairPartNumber ? `<p style="font-size: 0.8rem; color: #666;">Part ID: ${hairPartNumber}</p>` : ''}
                `;
    } else
    {
        previewHair.innerHTML = '[Hair]';
    }

    // Update face preview
    if (selection.expression)
    {
        const selectedFleshTone = selection.fleshTone?.name.toLowerCase().replace(/ /g, '-');
        const headImage = selection.expression.images[selectedFleshTone || 'placeholder.jpg'];
        const expressionBrickLinkUrl = selection.expression.brickLinkUrls?.[selectedFleshTone];
        const expressionPartNumber = selection.expression.partNumber;

        previewHead.innerHTML = `
                    <img src="${headImage}" alt="${selection.expression.name}" style="width: 150px; height: auto; border-radius: 10px;">
                    ${expressionBrickLinkUrl ? `<a href="${expressionBrickLinkUrl}" target="_blank" class="btn btn-primary" style="margin-top: 10px;">🔗 View Headprint on BrickLink</a>` : ''}
                    ${expressionPartNumber ? `<p style="font-size: 0.8rem; color: #666;">Part ID: ${expressionPartNumber}</p>` : ''}
                `;
    } else
    {
        previewHead.innerHTML = '[Face]';
    }

    // Update accessories preview
    previewAccessories.innerHTML = '';
    selection.accessories.forEach(accessory => {
        const accessoryImg = document.createElement('img');
        accessoryImg.src = `images/${selection.fleshTone.name.toLowerCase().replace(/ /g, '-')}-${accessory.name.toLowerCase().replace(/ /g, '-')}.jpg`;
        accessoryImg.alt = accessory.name;
        accessoryImg.style.width = '50px';
        accessoryImg.style.height = '50px';
        accessoryImg.style.margin = '5px';
        previewAccessories.appendChild(accessoryImg);
    });

    // Update character info
    characterInfo.innerHTML = `
                <div><strong>Flesh Tone:</strong> ${selection.fleshTone ? selection.fleshTone.name : 'None'}</div>
                <div><strong>Expression:</strong> ${selection.expression ? selection.expression.name : 'None'}</div>
                <div><strong>Accessories:</strong> ${selection.accessories.length > 0 ? selection.accessories.map(acc => acc.name).join(', ') : 'None'}</div>
                <div><strong>Hair Style:</strong> ${selection.hair ? selection.hair.name : 'None'}</div>
            `;
}

function saveCharacter() {
    // Implement save character logic (e.g., save to database or local storage)
    alert('Character saved!');
}

function shareCharacter() {
    // Implement share character logic (e.g., generate shareable link or image)
    alert('Share feature coming soon!');
}

function suggestPart() {
    // Implement suggest part logic (e.g., open suggestion form or link to LEGO feedback)
    alert('Suggest a part feature coming soon!');
}

function startOver() {
    currentStep = 0;
    selection = {
        fleshTone: null,
        expression: null,
        accessories: [],
        hair: null,
        hairColor: null
    };

    document.getElementById('fleshToneSection').style.display = 'block';
    document.getElementById('expressionSection').style.display = 'none';
    document.getElementById('accessoriesSection').style.display = 'none';
    document.getElementById('hairSection').style.display = 'none';
    document.getElementById('characterPreview').style.display = 'none';
    document.getElementById('finalActions').style.display = 'none';

    generateFleshToneOptions();
    updateProgress();
}

function showFleshToneTooltip(e, tone) {
    const stats = getAvailabilityStats(tone.name);
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = `
                <strong>${tone.name}</strong>
                <div style="margin-top: 5px;">${tone.description}</div>
                <div style="margin-top: 10px; font-size: 0.8rem; color: #ccc;">
                    ${tone.cultural}
                </div>
                <div style="margin-top: 10px; font-size: 0.8rem; color: #48bb78;">
                    ${stats.available} expressions available out of ${stats.total} total
                </div>
            `;
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.classList.add('show');
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('show');
}

function redirectToLEGOContact(partName) {
    const message = `Hello LEGO Team,\n\nI noticed that the part "${partName}" is currently unavailable in your inventory. As a fan of LEGO, I believe this part would be a valuable addition to promote diversity and representation.\n\nThank you for considering this request!\n\nBest regards,\nKatie W.`;

    alert(`Copy the following message:\n\n${message}\n\nThen paste it into the LEGO contact form at:\nhttps://www.lego.com/en-us/service/contact-us/topics`);

    // Redirect the user to the LEGO contact page
    window.open("https://www.lego.com/en-us/service/contact-us/topics", "_blank");
}

function displayErrorMessage(fleshToneName) {
    const stats = getAvailabilityStats(fleshToneName);
    const title = `🚨 Missing Expressions for ${fleshToneName}`;
    const message = `Unfortunately, headprints from 2022-2024 do not include expressions for the <strong>${fleshToneName}</strong> flesh tone.`;
    const graphImage = 'images/graph.jpg';
    const buttonText = '✉️ Suggest to LEGO';
    const buttonAction = `redirectToLEGOContact('${fleshToneName}')`;

    displayUnavailabilityMessage(title, message, graphImage, buttonText, buttonAction);
}

function displayUnavailabilityModal(expressionName, fleshToneName) {
    const title = `🚨 Missing Representation`;
    const message = `Unfortunately, the <strong>${expressionName}</strong> expression is not available for the <strong>${fleshToneName}</strong> flesh tone.`;
    const graphImage = 'images/graph.jpg';
    const buttonText = '✉️ Suggest to LEGO';
    const buttonAction = `redirectToLEGOContact('${expressionName}')`;

    displayUnavailabilityMessage(title, message, graphImage, buttonText, buttonAction);
}

function getAvailabilityStats(fleshToneName) {
    const stats = { available: 0, unavailable: 0, total: 0 };

    Object.keys(availabilityData.expressions).forEach(expressionName => {
        const expressionData = availabilityData.expressions[expressionName][fleshToneName];
        stats.total++; // Count every expression type
        if (expressionData?.available)
        {
            stats.available++; // Count only available ones
        } else
        {
            stats.unavailable++;
        }
    });

    return stats; // Returns something like {available: 3, unavailable: 3, total: 6}
}

function displayUnavailabilityMessage(title, message, graphImage, buttonText, buttonAction) {
    const errorSection = document.createElement('div');
    errorSection.className = 'error-message';
    errorSection.innerHTML = `
                <h3>${title}</h3>
                <p>${message}</p>
                <p>Help us advocate for more inclusive LEGO parts by clicking below:</p>
                <button class="btn btn-suggest" onclick="${buttonAction}">
                    ${buttonText}
                </button>
                <div style="margin-top: 20px;">
                    <img src="${graphImage}" alt="Representation Graph" style="width: 100%; max-width: 400px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
                </div>
                <div style="margin-top: 20px; text-align: left; font-size: 0.9rem; color: #333;">
                    <h4>Instructions:</h4>
                    <ol style="padding-left: 20px;">
                        <li>Click on the blue button above to open the LEGO contact page.</li>
                        <li>Select <strong>"I need help with something else"</strong>.</li>
                        <li>Then choose <strong>"My topic isn't listed"</strong>.</li>
                        <li>Copy the following message and paste it into the contact form:</li>
                    </ol>
                    <pre style="background: #f8f9fa; padding: 10px; border-radius: 5px; border: 1px solid #ccc; font-family: monospace; white-space: pre-wrap;">
Hello LEGO Team,

I noticed that the part "${title}" is currently unavailable in your inventory. As a fan of LEGO, I believe this part would be a valuable addition to promote diversity and representation.

Thank you for considering this request!

                    </pre>
                </div>
            `;

    const section = document.getElementById('fleshToneSection') || document.getElementById('expressionSection');
    section.innerHTML = '';
    section.appendChild(errorSection);
}

function displayHairWarning() {
    const title = `🚨 Limited Options for Natural Hairstyles`;
    const message = `Unfortunately, there is a lack of options for Black women to have natural hairstyles and a limited variety of hair colors in LEGO's inventory.`;
    const graphImage = 'images/graph.jpg';
    const buttonText = '✉️ Suggest to LEGO';
    const buttonAction = `redirectToLEGOContact('Natural Hairstyles and Hair Colors')`;

    displayUnavailabilityMessage(title, message, graphImage, buttonText, buttonAction);
}

// Initialize the app on page load
window.onload = init;