function calculateResult() {
    let color = document.querySelector('input[name="color"]:checked');
    let item = document.querySelector('input[name="item"]:checked');
    let result = document.getElementById('result');

    if (!color || !item) {
        result.innerHTML = "Please answer all questions!";
        return;
    }

    if (color.value === 'neutrals' && item.value === 'blazer') {
        result.innerHTML = "Your style is Preppy Minimalist!";
    } else if (color.value === 'pastel' && item.value === 'hoodie') {
        result.innerHTML = "You love Cozy K-Fashion!";
    } else if (color.value === 'bold' && item.value === 'cargo') {
        result.innerHTML = "Streetwear Icon is your vibe!";
    } else {
        result.innerHTML = "You have a unique mix of styles!";
    }
}
