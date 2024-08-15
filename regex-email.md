# Regex: for common email validation

This is a tutorial on Regex. I'm going to take this learning opportunity to not only improve my knowledge but also bring you along on the journey, walking you through step by step of how Regex works. Let’s take a look at how we can use Regex to validate an email with JavaScript!

## Summary

This snippet of Regex `/^([a-zA-Z0-9._%+-]+)@([a-zA-Z\d.-]+)\.([a-zA-Z]{2,})$/` is going to give us a pretty solid base for eamil validation.

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

Breaking down `/^([a-zA-Z0-9._%+-]+)@([a-zA-Z\d.-]+)\.([a-zA-Z]{2,})$/`  
The begining and ending `/` are Delimiters or Boundries for the Regex code.  
The `@` is a litteral @ represented in an email@example.com

### Anchors
`^` : Anchors the regex to the start of the string. Is placed inside of starting Delimiter `/^`  
It ensures that the email address must start matching from the beginning of the string.  

`$` : Anchors the regex to the end of the string. Is placed inside of ending Delimiter `$/`  
It ensures that the email address must match all the way to the end of the string.

### Quantifiers
`+` : Quantifier ensures that the preceding character classes `([a-zA-Z0-9._%+-]+)`  `([a-zA-Z\d.-]+)` appear one or more times.  

`{2,}` : This quantifier specifies that the TLD (Top-Level Domain) must be at least two characters long. This is how it looks in the email Regex `([a-zA-Z]{2,})`. 

Valid Examples: `.co`, `.com`, `.museum`, and `.online`  
\- These are all valid, because they contain 2 or more alphanumeric characters.  

Invalid Examples: `.c`, `.co2`, `.com_me`  
\- These are all invalid, one contains a single character, the other two contain non alphanumeric characters.

You could limit the length of the TLD by how ever many you would like by adding another number `{2,6}`. This example would accept a range from 2-6 which would encompass most TLDs.

### Grouping Constructs
`([a-zA-Z]{2,})` : Grouping constructs are defined by anything that is inside of the `()`. In our case of the email Regex there are two other groupings `([a-zA-Z0-9._%+-]+)` `([a-zA-Z\d.-]+)`.

### Bracket Expressions
`[a-zA-Z0-9._%+-]` : Are character classes combined together to make an expression. Again, we have two other bracket expressions in the email Regex `[a-zA-Z\d.-]` `[a-zA-Z]`.  

Valid Examples of `[a-zA-Z0-9._%+-]` :  `firstName.lastName`, `100%BEEF`, `100%beef`.   
\- These are all valid because every character used is accounted for in the expression.  

Invalid Examples of `[a-zA-Z0-9._%+-]` :  `firstName*lastName`, `$100%BEEF`, `100@beef`.  
\- These are all invalid because `*`, `$`, `@` are not accounted for in the expression.  
  
You will see the exact breakdown in the character classes section.

### Character Classes
Character classes are what reside in bracket expressions. 
`[a-zA-Z0-9._%+-]` `[a-zA-Z\d.-]` `[a-zA-Z]`  
Here is a breakdown of the separate character classes.  
`a-z` : Allows any lowercase letter.  
`A-Z` : Allows any uppercase letter.  
`0-9` : Allows any digit 0-9 must match the characters "0" through "9"  
`\d` : Allows any digit like 0-9 but it also matches other digit characters in Unicode-aware environments.  
You can use either one because `\d` is shorthand for `0-9`  
`.` : Allows dots.  
`_` : Allows underscores.  
`%` : Allows percent signs.  
`+` : Allows plus signs. "Try not to confuse `[+]` with the this `[]+`as a quantifier that is applied to the outside of a bracket expression.  
`-` : Allows hyphens.

### The OR Operator
`|` : The OR operator is to match alternatives `[a-z|0-9]` lower case letter or digit 0-9. In my email Regex there are no OR operators used.

### Flags
(like `i` or `g`) : Are used to modify the behavior of the Regex. They are placed outside of the ending Delimiter `/ig`.  
I'm not using any in my Regex email code but here are some examples of what they do. 

`i` (Case Insensitive): Makes the regex match letters regardless of case.
Example: /abc/i would match "abc", "ABC", "AbC", etc.  

`g` (Global): Finds all matches in the string rather than stopping after the first match. 
Example: /a/g would match every occurrence of "a" in "banana" (3 matches).

### Character Escapes
`\.` : The backslash is an escape character so the \\. matches a literal ( . )  
Without the backslash, a dot in Regex represents any character.

## Author
My name is Ryan Osguthorpe, I'm enjoying my education in software engineering.  
You can explore my other projects on GitHub **[rhinosstuff](https://github.com/rhinosstuff)**.