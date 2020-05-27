a = parent.document.URL.substring(parent.document.URL.indexOf('index='), parent.document.URL.length);

if (a === 'index=wave-propagation') {
    document.getElementById("subject").textContent = "Wave Propagation";
} else if (a === 'index=radar-principles') {
    document.getElementById("subject").textContent = "Radar Principles";
} else if (a === 'index=rf-communications') {
    document.getElementById("subject").textContent = "RF Communications";
} else if (a === 'index=modulation-principles') {
    document.getElementById("subject").textContent = "Modulation Principles";
}
