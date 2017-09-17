import moment from 'moment'

export function fuzzyDate(dateStr) {
  return moment(dateStr).fromNow()
}

export function longDate(dateStr) {
  return moment(dateStr).format('Do MMMM YYYY')
}
