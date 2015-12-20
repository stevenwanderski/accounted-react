import moment from 'moment'

export function month_day_year(date) {
  return moment(date).format('MM/DD/YYYY')
}