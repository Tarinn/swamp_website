var frameProportion = 1.78, frames = 25, resize = false;

function showModal(modalPage) {
    document.getElementById(modalPage).classList.add('visible');
    document.getElementsByClassName("transition-layer")[0].classList.add('visible');
    document.getElementsByClassName("transition-layer")[0].classList.add('opening');
}

function closeModal() {
    document.querySelectorAll(".modal").forEach(element => {
        element.classList.remove('visible');
        document.getElementsByClassName("transition-layer")[0].classList.remove('opening');
        document.getElementsByClassName("transition-layer")[0].classList.add('closing');

        setTimeout(() => {
            document.getElementsByClassName("transition-layer")[0].classList.remove('closing');
            document.getElementsByClassName("transition-layer")[0].classList.remove('visible');
        }, 800);
    })
}

function setLayerDimensions() {
    var windowWidth = window.innerWidth, windowHeight = window.innerHeight, layerHeight, layerWidth;
    if( windowWidth/windowHeight > frameProportion ) {
        layerWidth = windowWidth;
        layerHeight = layerWidth/frameProportion;
    } else {
        layerHeight = windowHeight*1.2;
        layerWidth = layerHeight*frameProportion;
    }

    document.getElementsByClassName("bg-layer")[0].style.width = layerWidth*frames+'px';
    document.getElementsByClassName("bg-layer")[0].style.height = layerHeight+'px';

    resize = false;
}

document.addEventListener("DOMContentLoaded", () => {
    setLayerDimensions();

    document.getElementsByClassName("about")[0].addEventListener("click", () => {
        showModal("aboutModal");
    });
    document.getElementsByClassName("events")[0].addEventListener("click", () => {
        showModal("eventsModal");
    }); 
    document.getElementsByClassName("gallery")[0].addEventListener("click", () => {
        showModal("galleryModal");
    }); 
    document.getElementsByClassName("newsletter")[0].addEventListener("click", () => {
        showModal("newsletterModal");
    }); 

    window.addEventListener('resize', () => {
        if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
    });

    document.querySelectorAll('.modal-close-button').forEach(element => {
        element.addEventListener("click", () => {
            closeModal();
        });
    });
});