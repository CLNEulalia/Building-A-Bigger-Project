# Building a Bigger Project

## Learning Objectives
* Discuss the steps of planning an app
    - User stories
    - Wire frames
    - Pseudo Code
* Explain different strategies for organization
    - Function based
    - Class based
    - Model View separation
* Discuss coding best practices in a larger app
* Refactor and reorganize a working app

## Planning (10 minutes / 0:10)

The biggest challenge we face as our programs grow larger is complexity. The larger the project, the more difficult it is to break down the working parts. In order to combat this, we must plan out our projects. It is alway possible to extend planning, drawing up designs for more and more features.

To combat scope creep in planning we want to abide by the mantra "[do less](https://www.youtube.com/watch?v=PKIpCPS-oZc)".

We want to identify the "[minimum viable product (MVP)](https://www.youtube.com/watch?v=1FoCbbbcYT8)" and build the smallest thing that checks the most important boxes.


#### Exercise (15 minutes / 0:25)
Spend 10 minutes with the person next to you outlining a Tic Tac Toe application like you would an essay. Keep in mind user events and the application's response to those events. If you have extra time, brainstorm bonus features. When complete, in the issue on this repository, create a comment with your ideas.


## Wire frames (5 minutes / 0:30)
In addition, we can draw out what we want our interface to look like before we actually create it. We can also diagram in that image what various parts of the interface will do.

#### Exercise (5 minutes / 0:35)
Spend 5 minutes with the person next to you drawing what you want your application to look like up on the board.


## Pseudo Code (15 minutes /0:50)
The next step we can take is to format our outline more like code -- there are many ways to do this and it is totally up to you how you like to do it. 

Pseudocode is a way to describe the solution to a problem without writing code in full.
* Writing pseudocode forces you to think critically about the problem and break it down into smaller steps.
* It is usually written using a combination of English and logic. As a result, it is easy to read.
* It might display some features of the final product, such as indentation and code blocks.

Pseudocode should describe the entire logic of a problem so that programming becomes a task of translating pseudocode line by line into actual code.

Pseudocode isn't just about writing down the steps that you already know. It's a tool to help you work through the problem. Before we can write pseudocode to solve the problem, we need to know the problem.  

#### Identify the Problem

- What exactly are we trying to solve?
- What are we delivering?

#### Conceptualize

- Look at the big picture
- Avoid details
- Whiteboards and pen-and-paper can be useful tools here

#### Break It Down

- Break the conceptual models down into concrete steps / actionable items
- Identify risks (e.g., gaps in knowledge and technology)

#### Start Small, Stay Small

Write code using those concrete steps
- Verify that each step achieves what we want before continuing on
- If we do too much at once and things break, which they always do, we won't know what is causing the problem
- Humans thrive on easy wins and forward progress. Use this to your advantage.

#### [Here] (https://github.com/ga-wdi-lessons/pseudocode/edit/master/readme.md) is a full lesson on pseudocode if you are interested in learning more!

#### Exercise (10 minutes / 1:00)
With your same partner from before, spend ten minutes turning your outline into pseudo code. You may not get all of they way through it -- don't worry! Submit what you have as a comment on the issue in this repository.

#### Discussion (10 minutes / 1:10)
My pseudo code is in `outline.js`.

## Break (10 minutes / 1:20)

## Making code more readable (20 mins / 1:40)
When you are working on a larger project, you probably want your code to be as readable and as modular as possible. There are a couple rules of thumb that may be helpful for you.

1. Be consistent -- if you are using semi-colons use them consistently, same is true for quotation marks, es6, JQuery vs Vanilla JS etc.

2. Make your code as close to normal speech as possible. Use clear variable names, comments, and clear logic so that the next person helping you can read it.

3. Keep your code DRY -- don't repeat yourself! That's why we write code in the first place!

4. Sandi Metz's rules (totally optional but helpful)
    - Classes can be no longer than one hundred lines of code.
    - Methods/Functions can be no longer than five lines of code.
    - More [here](https://robots.thoughtbot.com/sandi-metz-rules-for-developers)

5. Refactor your code! Get something that works first and then make it better afterwards -- similar to MVP but for just code quality.

Bonus tip:
6. Debugging -- you may see in class that a lot of times we will ask you to console.log() your variables so that we can see what they are set as at a certain point. This is a great first step to identifying where your code is going wrong. See if your variable is actually set to what you expect it to be.


## Structuring your code (5 minutes / 1:45)
The beauty of code is that there are so many correct answers and strategies in order to get to those correct answers. The way one person structures their code may be totally different than another person, and that is totally okay!

# Tic Tac Toe Example
In this section of the class, I am going to go over four different versions of code that does exactly the same thing -- it creates a Tic Tac Toe application.


## Algorithm (10 minutes / 1:55)
Instead of brute forcing the check to see if the game is over, we can do it algorithmically. We can keep track of each player's current tally of pieces in each row, column, and diagonal and if that tally is equal to three, they have won. We can do this using nested arrays. If this is unclear, do not worry! Its outside of the scope of this class, I just thought it could be interesting for some people. I used data attributes on the HTML tags to get the coordinates of the clicked on grid item, and I use those coordinates in order to update the player's score at the at position. 

## Break (5 minutes / 2:00)

## Functional Approach (10 minutes / 2:10)
* If we look at the `functions/script.js` file you can see that I wrote this script as a set of functions. The code is pretty neat and organized. I broke each chunk of logic into a singular function so that the code is easy to debug -- I can know exactly where the problem lies.

## OOP Approach (10 minutes / 2:20)
* We can take the exact same code and restructure it so that the code falls into methods within a class. The code is almost exactly the same, it is just moved around. This is another perfectly valid way to structure your code.

## MV Approach (10 minutes / 2:30)
* We can also structure the code so that it falls under two different classes -- one that stores all of the responses to user interaction (i.e. the JQuery) called the View controller, and one that stores the data processing methodology called the Model. [Here](https://git.generalassemb.ly/ga-wdi-lessons/js-model-view-seperation) is a further breakdown on how this can look. 

## Vanilla JS Approach
There is also a version of the app written in pure vanilla JavaScript without JQuery if you are curious about how that can be achieved.


## Review
* What are two techniques we can use for early planning (before we start writing code)?
* Why is planning such an important step of development?
* What does "refactor" mean?
* What are some different application design strategies we can use?
* What are some good strategies for writing modular and clear code?
