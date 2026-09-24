# Tutorial 2

## Gradescope instructions:

You will get two files:

dataTypes.js (Task 1)
shortCircuits.js (Task 2)

You should combine your answers into ONE file called:

submission.js

**Gradescope will ignore additional files, so be sure to follow this instruction.**

**Do not** change any function names or return values because this will cause the autograder to not recognize your answer. 

In your final submission, you **must** remove the comments given to you as instructions and replace with comments that explain the expected input. If there are no restrictions on input, a comment is not necessary.

## General Instructions

For each function, you are given instructions on the allowed inputs. Read these carefully! In a complete program, you might not need to handle all possible inputs because you know a value is coming from a source (e.g., user input, another piece of code) that will only produce certain values. For this assignment, inputs are restricted to make the tasks reasonable using just concepts we learned so far. :)

## Task 1: Datatypes and Comparisons

The goal of this task is to practice with basic datatypes in javascript. For this section you should **only** use variable assignments (e.g., `let age = 5`), and where needed comparisons  or arithmetic operators (e.g., `let updatedAge = age + 5`).

All tasks are possible to complete in a single line (other than the logging line that you should not change), but full marks will be given for any solution that is not extremely over-complicated and otherwise follows the instructions.

*Hint*: Review the difference between `==` and `===` from class if you forget.

## Task 2: Shortcircuits

The goal of this task is to understand lazy evaluation. Follow the instructions in the code comments.

 In Javascript, boolean expressions have lazy evaluation. This means that evalution can stop early if the first term is sufficient to know the result (i.e., false value for && or true value for ||). Non-boolean values in boolean expressions are converted to booleans for evaluation. For example "0" is converted to false and "1" to true. Strings like "five" are also true. (See class slides for more type conversions.)

 A common use of && is to "gate" a piece of code so it only occurs under certain conditions. For example, the code:

 `testValue && console.log(testValue)`

 Will log the value in `testValue` *only* if it not a falsy value (e.g., 0, "", null, undefined). (Note for completeness: The value of this expression is `undefined`, because that is what `console.log(testValue)` evaluates to. This value is not relevant for this assignment, but we will learn why it happens when we look at functions.)

 A common use of || is to change a falsy input to a default value. For example:

 `let newValue = oldValue || "default value"`

 Will result in `newValue` containing the original value stored in `oldValue` if `oldValue` was truthy, but "default value" if it was falsy (0, "", null, undefined, etc).

In some cases, it's not appropriate to replace *all* falsy values. The `??` operator serves a similar purpose, but returns the right-hand side value only when its left-hand side value is null or undefined. For example:

 `let newValue = oldValue ?? "default value"`

Will now result in `newValue` containing the default value if `oldValue` was null or undefined, but not if it was "" or 0.








## Grading

Autograder: 50 / 100 Points

You will get a set of about 20 visible tests so that you can check the autograder is recognizing your functions and you didn't make basic formatting mistakes (like mispelling strings). **Your actual grade will come from hidden tests, including the visible tests or close variants of them and extra tests.** Double-check that your code works appropriately on all allowed inputs. You can do this easily by adding in log statements to the bottom of the code, which you should remove before you submit. For example:

`console.log(unreadAlert(0))`

Manual Grading: 50 / 100 Points

Follow the instructions in the assignment. If you are asked to produce an outcome using a particular technique marks will be lost for using the a different technique that produces the same outcome, because the goal is to practice concepts.

There will also be points for appropriate comments for each function. These should *not* explain obvious aspects of the code, but should restate the expected inputs. If a function should work for all inputs, no comment is needed. Remove the original comments that explain the problem.










