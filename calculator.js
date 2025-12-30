/* WCAG Color Contrast Logic
function norm(colorValue) {
    if (colorValue <= 0.04045) {
        colorValue /= 12.92;
    } else {
        colorValue = ((colorValue + 0.055) / 1.055) ** 2.4;
    }
    return colorValue;
}

function lum(R, G, B) {
    return (0.2126 * norm(R / 255)) + (0.7152 * norm(G / 255)) + (0.0722 * norm(B / 255));
}

function contrast(c1Red, c1Green, c1Blue, c2Red, c2Green, c2Blue) {
    const l1 = lum(c1Red, c1Green, c1Blue);
    const l2 = lum(c2Red, c2Green, c2Blue);
    const brightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);
    return (brightest + 0.05) / (darkest + 0.05);
}

/* DOM Manipulation and Application Logic */
function hexToRgb(hex) {
    // Ensures color is 7 chars long (#RRGGBB)
    hex = hex.startsWith('#') ? hex : '#' + hex;
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function checkCompliance(ratio) {
    return {
        aa_small: ratio >= 4.5, // AA Normal Text
        aa_large: ratio >= 3.0, // AA Large Text (18pt or 14pt bold)
        aaa_small: ratio >= 7.0, // AAA Normal Text
        aaa_large: ratio >= 4.5 // AAA Large Text
    };
}

function updateResults() {
    const bgInput = document.getElementById("backgroundcolor");
    const fgInput = document.getElementById("foregroundcolor");
    const bgHex = bgInput.value;
    const fgHex = fgInput.value;

    document.getElementById("bg-hex").textContent = bgHex;
    document.getElementById("fg-hex").textContent = fgHex;

    const bgRgb = hexToRgb(bgHex);
    const fgRgb = hexToRgb(fgHex);

    if (bgHex === fgHex) {
        document.getElementById("compliance-message").textContent = "Error: Colors are identical!";
        document.getElementById("ratio-display").textContent = "1.00:1";
        // Reset all compliance indicators to gray
        document.querySelectorAll('.compliance-status').forEach(el => el.style.backgroundColor = 'gray');
        return;
    }

    const ratio = contrast(
        bgRgb.r, bgRgb.g, bgRgb.b,
        fgRgb.r, fgRgb.g, fgRgb.b
    ).toFixed(2);
    
    // Update Example Box
    const exampleBox = document.getElementById("example-box");
    exampleBox.style.backgroundColor = bgHex;
    exampleBox.style.color = fgHex;

    // Update Results Panel
    document.getElementById("ratio-display").textContent = `${ratio}:1`;
    
    const compliance = checkCompliance(ratio);
    
    // Set compliance message based on highest compliance level achieved
    if (compliance.aaa_small) {
        document.getElementById("compliance-message").textContent = "Excellent! Meets AAA Standard.";
        document.getElementById("compliance-message").style.color = 'green';
    } else if (compliance.aa_small) {
        document.getElementById("compliance-message").textContent = "Passes AA Standard. Good!";
        document.getElementById("compliance-message").style.color = 'orange';
    } else {
        document.getElementById("compliance-message").textContent = "Fails WCAG AA. Poor Contrast.";
        document.getElementById("compliance-message").style.color = 'red';
    }

    // Update Compliance Grid Status
    document.getElementById("aa-small").style.backgroundColor = compliance.aa_small ? 'green' : 'red';
    document.getElementById("aa-large").style.backgroundColor = compliance.aa_large ? 'green' : 'red';
    document.getElementById("aaa-small").style.backgroundColor = compliance.aaa_small ? 'green' : 'red';
    document.getElementById("aaa-large").style.backgroundColor = compliance.aaa_large ? 'green' : 'red';
}

function swapColors() {
    const bgInput = document.getElementById("backgroundcolor");
    const fgInput = document.getElementById("foregroundcolor");
    const temp = bgInput.value;
    bgInput.value = fgInput.value;
    fgInput.value = temp;
    updateResults(); // Recalculate and update the display
}

// Event Listeners (Runs once the page is loaded)
window.onload = function() {
    // Run an initial calculation
    updateResults();

    document.getElementById("backgroundcolor").addEventListener('input', updateResults);
    document.getElementById("foregroundcolor").addEventListener('input', updateResults);
    document.getElementById("swap-colors").addEventListener('click', swapColors);

}
