# Rock, Paper, Scissors, Lizard & Spock - The Game

## Features

### Existing Features

- Rock, Paper, Scissors, Lizard & Spock - The Game heading
  - Heading is placed at the top of the page and quickly tells the user what the website is about. 
  ![headerP2](https://user-images.githubusercontent.com/43667190/153362323-a05b8f2f-f97e-4f03-8b91-cba433fb357f.PNG)

- The game info area
  - This area will show the user the game info and the buttons that is used for playing the game. 
  - The help text underneath the buttons will help the user getting started with the game or lead the player down the How To Play section for game rules.
  
  ![gameInfoP2](https://user-images.githubusercontent.com/43667190/153363216-9c780715-677a-47b8-8e98-6acf5d7413b3.PNG)

- Player Information area
  - This area will show the user the player information and will update after every move. At the top the user can see the names and at the bottom how many points each player has.
  - In the middle of the player info box there is shown a picture. This picture will update accordingly to player/computer choice and will show winner/loser picture. 

![playerInfoP2](https://user-images.githubusercontent.com/43667190/153364462-5169a7c0-395a-4409-958a-e4131dfdf2f7.PNG)

- Game / result Messages
  - When the user has started the game, the page will show a game and result message after every move. The message tells the user which of the options that was chosen and winner of the move.
  
  ![moveWinnerP2](https://user-images.githubusercontent.com/43667190/153365227-c1aa5b39-e9a9-4b5a-b52c-a89ec49cbb24.PNG)

- How To Play section
  - This section consists will show the user the rules of the game, in form of text and a picture. 
  - This section will not be visible when page is loaded, but the user is guided to press the How To Play button to make it show. The same button can also hide the How To Play section again on click. 
  
  ![htpP2](https://user-images.githubusercontent.com/43667190/153365951-e71a4d11-a3f0-4dcb-a397-3234a640d905.PNG) ![htpBtnP2](https://user-images.githubusercontent.com/43667190/153365970-00b0cc20-e90d-4e64-8bdb-a69db5aa8574.PNG)

### Features left to implement

- Multiplayer feature
  - One thing to implement is another user-input to play against your friends. Instead of using buttons, the users could use keyboard input to choose one of the options so they can't see each others choices.

## Testing

- I tested playing this game in different browsers: Chrome, Firefox, Opera
- I confirmed that the game results are always correct
- I confirmed that the header, game info, player info, results and how to play section are readable and easy to understand
- I confirmed that the colors and fonts that are chosen are easy to read and accessible by running it through lighthoise in devtools

![lighthouseP2](https://user-images.githubusercontent.com/43667190/153368190-c865a285-0186-47ab-a90d-bdabd96bb33c.PNG)

### Bugs

No bugs or unfixed bugs

### Validator Testing

- HTML
 - No erros were returned when passing through the official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsimonmortensen23.github.io%2FRPSLS-TheGame%2F)

- CSS
  - No erros were found when passing through the official [(Jigsaw) Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsimonmortensen23.github.io%2FRPSLS-TheGame%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- JavaScript
  - No errors were found when passing through the offical [JShint Validator](https://jshint.com/)
    - The following metrics were returned:
    - There are 11 functions in this file.
    - Function with the largest signature takes 2 arguments, while the median is 0.
    - Largest function has 18 statements, while the median is 3.
    - The most complex function has a cyclomatic complexity value of 4 while the median is 1.


## Deployment
- This site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the settings tab.
  - When in settings, choose the tab pages from the side menu.
  - From the source section drop-down menu, select main branch.
  - Once main branch has been selected, the page provided the link to the completed website.

The live link can be found here - [Rock, Paper, Scissors, Lizard & Spock - The Game](https://simonmortensen23.github.io/RPSLS-TheGame/)

## Credits

### Content
- The code to show new pictures after every move and add eventlisteners to buttons was taken from [Rock, Paper, Scissors - Portfolio Project Scope](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/)

### Media
- The images for the hands were taken from [Open Clip Art](openclipart.org)
- The images for the player were taken from [Tiny PNG](tinypng.com)
- The images for the computer were taken from [istock Photo](media.istockphoto.com)
