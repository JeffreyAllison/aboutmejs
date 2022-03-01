## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## About Me Assignment

Build an app that shows a user's bio and info on a button click

## Learning Objectives

-   Making a plan before writing code
-   Using classes to add css styling to app
-   Grabbing DOM element in your app.js via class/id from your index.html
-   Making an event listener for updating the DOM
-   Deploy a site using Netlify on your main branch
-   Committing frequently to have a good commit history
-   Submitting a pull request of the assignment on Canvas

### Suggested Order

1. Create a repo on Github using the [web template](https://github.com/alchemycodelab/dev-101-template)

2. Cd into your alchemy folder in your terminal
   `cd alchemy` validate by `ls ` to make sure your inside of the correct folder

3. Clone down the repo inside of your alchemy folder to make it accessible to your local machine.

    - `git clone github-url-here`
    - Your url will be different depending on the name of your repo and should be pulled from the green "Code" button on the main screen of your repo.

4. **Cd into your repo that you cloned down**

    - `cd onboarding-week-about-me-js`

5. Open vscode via terminal `code .`

6. Make a plan and type it on the README.MD of your repo via vscode

7. Check the deployed link once it finishes to make sure it's showing up correctly

8. Open up your terminal in your vscode and create a branch like so. `git checkout -b dev`. _This is important to ensure you aren't pushing changes to your main branch_

    - This will create a dev branch - we never want to work on our main branch

9. ACP!

    - `git add -A`
    - `git commit -m 'commit message (for example 'Added readme plan')'`
    - `git push origin dev`

10. Once we have validated our local host is functioning correctly. We need to deploy our application via [Netlify](https://app.netlify.com/) for this you will want to create a account and link it to your github. I just use the sign in github option. Here is a link on how to deploy. Deploy your Main branch.
    [via Netlify](https://github.com/alchemycodelab/config-build-deploy/tree/main/netlify).

11. Check the deployed url

12. Follow your readme.md plan and update your index.html file with all of the elements you need 
    don't forget to add id or classes to use later for styling or grabbing the DOM elements in the app.js file
     ```html
        <main>
            <section>
                <h1>My name is 'your name'!</h1>
                <p>
                    I use <span class="bold">pronouns here</span> pronouns. I live in
                    <span class="italics">Your location</span>
                </p>
                <button id="btn">What's My Favorite Animal?</button>
                <div id="animalDiv" class="hidden">A wombat!</div>
            </section>
        </main>
    ```

13. ACP!

14. After HTML file we need to grab the elements inside of our app.js
    file.
    ```js
    /// grab DOM elements we want to change by id.
        const showButton = document.getElementById('btn');
        const animal = document.getElementById('animalDiv');
    /// console.log(showButton, animal, 'validate to make sure we grabbed them')
    // set event listeners
        showButton.addEventListener('click', () => {
    // console.log(' show button clicked', 'validate button is connected')
     /// this will remove the hidden class and display you favorite animal.       
            animal.classList.remove('hidden');
        });

    ```
15. Check to make sure your app is rendering as expected on the page and `ACP`!!!


16. Style the animalDiv so that it is hidden until the button click!
    ```css
       .hidden {
           display: none;
       };
    ```
    Then add more styling if you wish

17. ACP! 


18. Make a pull request and check the PREVIEW deploy to validate that you application works and submit that url on Canvas.

---

## Example

[About Me demo js version on github](https://github.com/alchemycodelab/onboarding-about-me-js-demo)

[Deployed version](https://onboarding-about-me-js-demo.netlify.app/)

## Rubric

| App should include . . .                                                            |  10 |
| :---------------------------------------------------------------------------------- | --: |
| Bio data shows on page, including name, pronouns, and where you live                |   1 |
| Favorite animal is hidden on page load                                              |   2 |
| Button with event listener shows favorite animal data                               |   2 |
| README file with plan                                                               |   2 |
| Repo has a commit history with multiple commits and commit messages that make sense |   1 |
| Link in About section of repo to deployed site in Netlify                           |   1 |
| Work is done on a dev branch and a PR link is submitted to Canvas                   |   1 |