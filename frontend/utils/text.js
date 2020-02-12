export function prettyDuration(ms) {
  if (ms < 1000 * 60 * 60) {
    return Math.floor(ms / (1000 * 60)) + 'm'
  }
  else {
    const hours = Math.floor(ms / (1000 * 60 * 60))
    const minutes = Math.floor(ms / (1000 * 60)) - (hours * 60)
    return hours + 'h ' + minutes + 'm'
  }
}