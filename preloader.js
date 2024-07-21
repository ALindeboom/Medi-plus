const rotate = document.getElementById('rotate');
    const preload = document.getElementById('preload');

    window.onload = () => {
        setTimeout(() => {
            rotate.style.display = 'none';
            preload.style.display = 'none';
        }, 1500);
    }