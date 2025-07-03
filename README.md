# Inclusive LEGO Character Creator - Style Guide

This README describes the CSS elements and styling approach for the **Inclusive LEGO Character Creator** application.

## Global Styles

### Universal Reset
- `*`: Resets margins, padding, and sets `box-sizing` to `border-box` for consistent layout across all elements.

### Body
- `body`: Sets the font family, background gradient (LEGO red and yellow), minimum height, and text color for the entire page.

## Layout Components

### Container
- `.container`: Defines the maximum width, centers content, and adds padding for spacing.

### Header
- `.header`: Centers the header text, adds spacing below, and sets the text color to white.
- `.header h1`: Styles the main title with a large font size, margin, and text shadow for emphasis.
- `.header p`: Adds a smaller font size and slight opacity for the subtitle.

### Sections
- `.section`: Creates a card-like container with a white background, rounded corners, padding, and a shadow effect. Adds hover animation for interactivity.
- `.section-title`: Centers section titles, sets font size, and adds spacing below.

## Interactive Elements

### Carousel
- `.carousel`: Creates a horizontal scrolling container for hair options with smooth scrolling behavior.
- `.carousel::-webkit-scrollbar`: Styles the scrollbar for better aesthetics.

### Option Cards
- `.option-card`: Styles individual cards for selectable options with rounded corners, padding, and hover effects.
- `.option-card.selected`: Highlights selected cards with a green border and background.
- `.option-card.unavailable`: Styles unavailable cards with reduced opacity and a lock icon.

### Option Images
- `.option-image`: Creates a placeholder for images with dashed borders and rounded corners.
- `.option-image img`: Ensures images fit within the container while maintaining aspect ratio.

### Option Details
- `.option-name`: Styles the name of the option with bold text and centered alignment.
- `.option-description`: Adds smaller text for descriptions with line spacing.
- `.part-number`: Displays the LEGO part number in italicized text.

## Status Indicators

### Availability Status
- `.availability-status`: Adds a badge-like indicator for availability.
- `.status-available`: Styles available status with a green gradient and bold text.
- `.status-unavailable`: Styles unavailable status with a red gradient and bold text.

### Tooltip
- `.tooltip`: Creates a floating box for additional information, hidden by default, and shown on hover.

## Character Preview

### Preview Section
- `.character-preview`: Styles the preview section with a light red gradient background and rounded corners.
- `.lego-figure`: Aligns LEGO figure components vertically.
- `.lego-head`, `.lego-hair`: Styles the head and hair placeholders with circular shapes and borders.
- `.accessories`: Ensures accessories are layered above the head.

### Accessory Styles
- `.accessory-item`: Styles individual accessory options with padding, rounded corners, and hover effects.
- `.accessory-checkbox`: Adds a checkbox for accessory selection.

## Grid and Navigation

### Selection Grid
- `.selection-grid`: Creates a responsive grid layout for selectable items.

### Buttons
- `.btn`: Styles buttons with padding, rounded corners, and hover effects.
- `.btn-primary`, `.btn-secondary`, `.btn-suggest`: Adds specific colors for different button types.

### Progress Bar
- `.progress-bar`: Creates a visual indicator for progress through the steps.
- `.progress-fill`: Fills the progress bar dynamically based on the current step.

## Final Actions

### Call to Action
- `.final-actions`: Styles the final section with a white background, rounded corners, and shadow effects.
- `.call-to-action`: Highlights advocacy text with a gradient background.

## User Feedback

### Error Messages
- `.error-message`: Styles error messages with a red background, rounded corners, and centered text.

### Modal
- `.modal-overlay`: Creates a semi-transparent overlay for modals.
- `.modal-content`: Styles the modal box with padding, rounded corners, and shadows.

## Responsive Design

### Mobile Optimization
- `@media (max-width: 768px)`: Adjusts styles for smaller screens, including reduced padding and font sizes.

## Design Philosophy

This style guide ensures a visually appealing, interactive, and accessible design for the LEGO Character Creator. The styling approach emphasizes:

- **Consistency**: Unified spacing, colors, and typography throughout the application
- **Accessibility**: Clear visual hierarchy and interactive feedback
- **Responsiveness**: Adaptive design that works across different screen sizes
- **Interactivity**: Hover effects and visual feedback for user actions
- **Brand Alignment**: LEGO-inspired color scheme and playful design elements

## Usage Notes

All classes are designed to work together cohesively. The modular approach allows for easy maintenance and extension of the design system as new features are added to the application.
