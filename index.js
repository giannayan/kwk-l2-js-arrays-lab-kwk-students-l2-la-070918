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
return drivers.slice(2)
}

function removeLastDriver(name) {
return drivers.splice(2)
}

function removeFirstDriver(name) {
return drivers.pop(name)
}