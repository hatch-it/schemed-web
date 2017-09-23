import uuid from 'uuid/v4'


export function getMonth() {
  // Generate some mock data
  const now = new Date()
  const currYear = now.getFullYear()
  const currMonth = now.getMonth()

  function makeTime(day, hour, minute) {
    return new Date(currYear, currMonth, day, hour, minute)
  }

  const mockData = {
    year: currYear,
    month: currMonth,
    availabilities: [
      { id: uuid(), name: 'Only if there is pizza', begin: makeTime(1, 8, 30), end: makeTime(1, 9, 30) },
    ]
  }

  // Generate some interesting ranges
  for (let i = 0; i < 3; i++) {
    const day = 2 + (i * 7)
    mockData.availabilities.push(
      { id: uuid(), begin: makeTime(day, i % 24, i), end: makeTime(day, (i % 24) + 12, 60 - i) },
    )
  }

  return mockData
}
