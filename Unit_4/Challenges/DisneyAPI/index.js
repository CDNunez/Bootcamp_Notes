/* 
    ! CHALLENGE
        
    - Create a boilerplate for index.html
        - Change the title to: "Disney API"
        - link the disneyFetch.js at the bottom of the body element.

    - Create two different variables
        - one will hold the URL provided
        - one will generate a random number from 0-50 (whole number)
    - Create an async function called INFO that will accept two different parameters
        - the url
        - the random number
    - Within the function, create a TRY/CATCH.
        - TRY to fetch the url
            - JSONify the data returned
            - console.log 3 different positions:
                - The overall promise returned 
                    * hint: use the random number to target an object within the array provided.
                - The name of a single character
                - The imageURL of the character that is provided.
        - CATCH any error that is returned.
    - Invoke your function and pass with both variables as arguments.
    
    All results will be displayed in the console of the browser.

    ------------------------------------------------------------------------------

    API: Disney URL to use
    https://api.disneyapi.dev/character
    
    
    Additional Documentation:
    https://disneyapi.dev/
    */

    //! Part 2
    /* 
! Challenge

    * index.html
        - create two div elements.
            - first one will hold a button. Name the button "Character".
            - second will be empty. It will govern the display of the data fetched.
        - Connect disneyDOM.js within the HTML doc. 
            *hint: be sure that it is sourced so that it can obtain data from disneyFetch.js
    
    * disneyDOM.js
        - Create two variables.
            - btn: which will connect to the button in index.html
            - display: which will target the empty div in index.html
            
        - create a function called "displayChar" that calls upon the info() function within disneyFetch.js. 
            - This will fire off when the user clicks the Character button.
            * be sure to comment out unecessary code such as console logs and the invocation of info() within that file.
            * you will need to modify that function to return information rather than just console log it.
            * remember that it returns a promise.
        - Within the function
            - Create a new variable to handle the random value from 0-50.
            - Create an h1 and img element
                - h1 element will hold the name of the character randomly selected.
                - img element will source to the character imageUrl.
                - for the alt property in the image element, display a string that states "Image of" and the characters name.
                - change the style attribute of the image element so that it has a height and width of 300px.
            - Append the elements to the empty div in the HTML.
                - The h1 element should be above the image.

        - Further Development
            - When a user clicks the button after the first fire, create a solution that removes the previous result and replaced with the new item.

*/