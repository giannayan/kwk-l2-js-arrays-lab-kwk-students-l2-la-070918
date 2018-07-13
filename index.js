// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
return drivers.push(name)
}

function destructivelyPrependDriver(name) {
return drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
return drivers.pop(name)
}


function destructivelyRemoveFirstDriver(name) {
return drivers.shift(name)
}

function appendDriver(name) {
return drivers.concat(name)
}

function prependDriver(name) {
var clone = drivers.slice(0);
clone.unshift(name)
return clone
}

function removeLastDriver(name) {
var clone = drivers.slice(2);
clone.pop(name)
return clone

}

function removeFirstDriver(name) {
var clone = drivers.splice(0);
clone.unshift(name)
return clone
}