'use strict'

function debounce(callback, timeout, aggressive = false) {
  let timer = null
  let latestParameter
  function later() {
    timer = null
    callback(latestParameter)
  }
  return function debounced(parameter) {
    latestParameter = parameter
    if (!aggressive || timer === null) {
      clearTimeout(timer)
      timer = setTimeout(later, timeout)
    }
  }
}

module.exports = debounce
