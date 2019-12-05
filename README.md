# homework-three

HomeWork 3 README.md Guide

# Random Password Generator

##Table of Contents 

*[Installation] (#installation)
*[Picture of Applicaton] (#picture)
*[Usage] (#usage)
*[Credits] (#credits)
*[License] (#license)

## Description:

My Password Generator creates a Random Password based on user-selected criteria.  Specifically, the user will be prompted to enter a number representing the length they want their generated password to be, and the browser will automatically generate a password of the desired length and write the password to the Web Page.  After the password is generated, clicking on the “Copy to Clipboard” button will automatically copy the password so that it can be pasted where the user chooses.  Moreover, after clicking the “Copy to Clipboard” button, a prompt informs the user, “Password Copied to ClipBoard,” confirming that the password can then be pasted anywhere the user chooses.  

This Application validates user input by sending a prompt to the user regarding the length of the chosen password, therein allowing the user to make sure that the desired length has been chosen.  For example, after the user enters any number to the prompt asking “How Many Characters Do You Want in Your Password?”, a subsequent alert displays stating the number the user entered.  At this prompt, if the number chosen does not meet requirements, the user can refresh the page and re-run the Password Generator.  Alternatively, if the user agrees with the number entered and clicks the “OK” button, the password will be generated, utilizing an array of characters.  

The length of the password can be between 8 and 128 characters if the user chooses, but it can also be more or less if the user desires.  In my opinion, leaving the choice of password length up to the user gives this Password Generator the flexibility to work efficiently under any parameters given, and that is the purpose of this Application: giving the flexibility to work with dynamically changing circumstances.  

## Picture of Application

[password generator demo] <img src="../Assets/Images/myPassword-Generator.png" alt="myPasswordGenerator">

## Installation
This Application is run on the browser; therefore, the user does not have to install or download anything; it is ready to be deployed inside the browser.  The user loads the WebPage, clicks on the “Generate Password” Button, answers a prompt regrading how long they want the length of their password to be, and, after confirming the length through a prompt re-stating the chosen length, a password is generated.  Then the password can be easily copied and pasted for use by clicking on the “Copy to Clipboard”button.  

## Usage

This application can be used for creating passwords for employees with access to sensitive data, being extremely effective at creating randomized passwords in a short period of time.  For employees required to change their work passwords frequently to protect confidential information, the password generator makes password creation a simplified process while, at the same time, ensures that a safe, secure password containing multiple character-types is selected.  

## Credits

I did not work with any collaborators on this project.  

## License 

MIT License

Copyright (c) [2019] [Sean Cumming]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
