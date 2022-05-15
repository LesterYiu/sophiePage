// PSEUDO CODE

    // Create a full overlay menu with hamburger icon
        //Ensure that keyboard navigation is dealt with using conditional statement

            /* 
                Store variable with element node found by querying 

                Register an event listener/handler to listen for hamburger icon click

                Create/use a callback function that will change the css to display: block on the overlay menu

                Store variable for the exit button 

                Create/use a callback function that will change the css to display: none on the overlay menu

                Write conditional statements that will set tab index behind the overlay to non existant until the overlay menu is gone

                    Afterwards, think about ways to make this more accessible to screen readers (like using ARIA attributes and sr-only classes)
            */
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

    app.allButtonEl = document.querySelectorAll('button');

    app.allIconEl = document.querySelectorAll('i');

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
                    } else {
                        app.allIconEl[i].tabIndex = -1;
                    }
                }
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
                        } else {
                            app.allIconEl[i].tabIndex = -1;
                        }
                    }
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
                    } else {
                        app.allIconEl[i].tabIndex = 0;
                    }
                }
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
                        } else {
                            app.allIconEl[i].tabIndex = 0;
                        }
                    }
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

    