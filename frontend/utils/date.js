import moment from 'moment'


export function fuzzyDate(dateStr) {
  if (dateStr) {
    return moment(dateStr).fromNow()
  }
  return ''
}

export function longDate(dateStr) {
  if (dateStr) {
    return moment(dateStr).format('Do MMMM YYYY')
  }
  return ''
}
