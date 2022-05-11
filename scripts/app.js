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

    const overlayMenu = {}

    const hamburgerMenuIcon = document.querySelector('.hamburgerIcon');


    hamburgerMenuIcon.addEventListener('click')

    