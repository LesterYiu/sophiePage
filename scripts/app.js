// PSEUDO CODE

    // Create a scroll to top of page once scrolled through a certain amount of pixels
    // Create a modal that pops up after a certain amount of time or a certain amount of pixels scrolled with keyboard navigation in mind.

    // Global object

    const app = {}

    // Storing variables
    app.hamburgerMenuIcon = document.querySelector('.hamburgerIcon');

    app.hamburgerOverlayMenu = document.querySelector('.hamburgerOverlayMenu');

    app.exitButton = document.querySelector('.exitIcon');

    app.overlayAbout = document.querySelector('.overlayAbout');

    app.allAnchorEl = document.querySelectorAll('a');

    app.allIconEl = document.querySelectorAll('i');

    app.allInputEl = document.querySelectorAll('input');

    app.anchorFilteredArray = [];

    app.enableIndexAnchors = [];

    // Stating methods
    app.addOverlayMenu = () => {
        app.hamburgerOverlayMenu.style.display = 'block';
    }

    app.removeOverlayMenu = () => {
        app.hamburgerOverlayMenu.setAttribute('style','display:none');
    }

    app.addClassRotateMenu = () => {
        app.hamburgerMenuIcon.classList.toggle('rotateHamburgerIcon');
    }

    app.removeClassRotateMenu = () => {
        app.hamburgerMenuIcon.classList.toggle('unrotateHamburgerIcon');
    }

    for(let i = 0; i < app.allAnchorEl.length; i++){
        if(app.allAnchorEl[i].tabIndex === 0) {
            app.anchorFilteredArray.push(app.allAnchorEl[i]);
        }
    };    

    for (let i = 0; i < app.anchorFilteredArray.length; i++){
        if (app.anchorFilteredArray[i].parentElement.parentElement.className !== "overlayMenuFlex") {
            app.enableIndexAnchors.push(app.anchorFilteredArray[i]);
        }
    };

    // Initializing
    app.init = () => {
        app.hamburgerMenuIcon.addEventListener('click', function(){
            app.addOverlayMenu();
            app.addClassRotateMenu();        

            if (app.hamburgerOverlayMenu.style.display === "block") {
                app.hamburgerMenuIcon.tabindex = -1;

                for(let i = 0; i < app.enableIndexAnchors.length; i++){
                    app.enableIndexAnchors[i].tabIndex = -1;
                };

                for(let i = 0; i < app.allIconEl.length; i++){
                    if (app.allIconEl[i].className === 'fa-solid fa-circle-xmark exitIcon') {
                        app.allIconEl[i].tabIndex = 1;
                    } else if (app.allIconEl[i].parentElement.parentElement.parentElement.className === "socialMediaBar") {
                        app.allIconEl[i].tabIndex = -1;                        
                    } else {
                        app.allIconEl[i].tabIndex = -1;
                    }
                }

                for (let i = 0; i < app.allInputEl.length; i++) {
                    app.allInputEl[i].tabIndex = -1;
                }

                if (document.querySelector('textarea') !== null) {
                    app.textAreaEl = document.querySelector('textarea');
                    app.textAreaEl.tabIndex = -1;
                };

                if (document.querySelector('button[type="submit"]') !== null) {
                    app.submitButtonEl = document.querySelector('button[type="submit"]');
                    app.submitButtonEl = -1;
                };
            }
        });

        app.hamburgerMenuIcon.addEventListener('keydown', function (e){
            if(e.key === 'Enter') {
                app.addOverlayMenu();
                app.addClassRotateMenu();   

                if (app.hamburgerOverlayMenu.style.display === "block") {
                    app.hamburgerMenuIcon.tabindex = -1;

                    for(let i = 0; i < app.enableIndexAnchors; i++){
                        app.enableIndexAnchors[i].tabIndex = -1;
                    };

                    for(let i = 0; i < app.allIconEl.length; i++){
                        if (app.allIconEl[i].className === 'fa-solid fa-circle-xmark exitIcon') {
                            app.allIconEl[i].tabIndex = 1;
                        } else if (app.allIconEl[i].parentElement.parentElement.parentElement.className === "socialMediaBar") {
                        app.allIconEl[i].tabIndex = -1;                        
                        } else {
                            app.allIconEl[i].tabIndex = -1;
                        }
                    }

                    for (let i = 0; i < app.allInputEl.length; i++) {
                        app.allInputEl[i].tabIndex = -1;
                    }

                    if (document.querySelector('textarea') !== null) {
                        app.textAreaEl = document.querySelector('textarea');
                        app.textAreaEl.tabIndex = -1;
                    };

                    if (document.querySelector('button[type="submit"]') !== null) {
                        app.submitButtonEl = document.querySelector('button[type="submit"]');
                        app.submitButtonEl = -1;
                    };
                }
            }
        });

        app.exitButton.addEventListener('click', function(){
            app.removeOverlayMenu();
            app.removeClassRotateMenu();

            if (app.hamburgerOverlayMenu.style.display === "none") {
                app.hamburgerMenuIcon.tabindex = 0;

                for(let i = 0; i < app.enableIndexAnchors.length; i++){
                    app.enableIndexAnchors[i].tabIndex = 0;
                };

                for(let i = 0; i < app.allIconEl.length; i++){
                    if (app.allIconEl[i].className === 'fa-solid fa-circle-xmark exitIcon') {
                        app.allIconEl[i].tabIndex = -1;
                    } else if (app.allIconEl[i].parentElement.parentElement.parentElement.className === "socialMediaBar") {
                        app.allIconEl[i].tabIndex = -1;                        
                    } else {
                        app.allIconEl[i].tabIndex = 0;
                    }
                }

                for (let i = 0; i < app.allInputEl.length; i++) {
                    app.allInputEl[i].tabIndex = 0;
                }

                if (document.querySelector('textarea') !== null) {
                    app.textAreaEl = document.querySelector('textarea');
                    app.textAreaEl.tabIndex = 0;
                };

                if (document.querySelector('button[type="submit"]') !== null) {
                    app.submitButtonEl = document.querySelector('button[type="submit"]');
                    app.submitButtonEl = 0;
                };
            }
        });

        app.exitButton.addEventListener('keydown', function(e){
            if (e.key === 'Enter') {
                app.removeOverlayMenu();
                app.removeClassRotateMenu();

                if (app.hamburgerOverlayMenu.style.display === "none") {
                    app.hamburgerMenuIcon.tabindex = 0;

                    for(let i = 0; i < app.enableIndexAnchors.length; i++){
                        app.enableIndexAnchors[i].tabIndex = 0;
                    };

                    for(let i = 0; i < app.allIconEl.length; i++){
                        if (app.allIconEl[i].className === 'fa-solid fa-circle-xmark exitIcon') {
                            app.allIconEl[i].tabIndex = -1;
                        } else if (app.allIconEl[i].parentElement.parentElement.parentElement.className === "socialMediaBar") {
                        app.allIconEl[i].tabIndex = -1;                        
                        } else {
                            app.allIconEl[i].tabIndex = 0;
                        }
                    }

                    for (let i = 0; i < app.allInputEl.length; i++) {
                        app.allInputEl[i].tabIndex = 0;
                    }

                    if (document.querySelector('textarea') !== null) {
                        app.textAreaEl = document.querySelector('textarea');
                        app.textAreaEl.tabIndex = 0;
                    };

                    if (document.querySelector('button[type="submit"]') !== null) {
                        app.submitButtonEl = document.querySelector('button[type="submit"]');
                        app.submitButtonEl = 0;
                    };
                }                
            }
        });
        
        app.overlayAbout.addEventListener('click', function(){
            app.removeOverlayMenu();    
        });

        app.overlayAbout.addEventListener('keydown', function(e){
            if(e.key === 'Enter') {
                app.removeOverlayMenu();    
            }
        });
    }

    app.init();

    