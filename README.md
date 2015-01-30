The Task:

Create an interface that lets me choose a car model from a select box to be added to a "wish list". 

- The list only needs to exist in memory and any saving functionality (localstorage, cookies, etc) is out of scope. 
- It also only need to work in Chrome – no IE testing necessary. 

We're interested only in seeing these key behaviors:
- Cars in the select box should be displayed alphabetically (grouped by make)
- After being added to the wish list, a car should no longer be available for selection.
- After a car has been added to the wish list, the select box should default to the first alphabetically available car from the same make (unless all cars from that make have been selected - in which case the first available car in the list should be suggested)
- There should be some mechanism to remove a car from the wish list (thus making it selectable once more)
- It need only work in the latest Chrome (non-dev channel)
- There is also a cars.js file with the data to use (this data should be used as-is by your script -- that is, don't group/alphabetize it by hand).


I've implemented this project using jQuery as the sole dependency and attempted to make the code as readable as possible. It works in Chrome.