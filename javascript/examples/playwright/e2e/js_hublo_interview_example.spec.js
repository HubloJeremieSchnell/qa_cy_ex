/* eslint-disable no-unused-vars */

import { test, expect } from '@playwright/test'

// REMINDER
// Be sure to run `npm start` in javascript/server to start the server before running the tests

test.describe('interview example', () => {
  test('can login', async ({ page }) => {
    // const username = 'jane.lane'
    // const password = 'password123'
  })
})

function get_table () {
  return [3, 8, 6, 10, 7, 4, 2, 5, 9, 1, 6, 8, 5, 10, 2, 3, 9, 7, 4, 1, 6, 5, 7, 2, 1, 8, 9, 10, 4, 3, 7, 9, 2, 8, 3, 1, 5, 10, 6, 4, 6, 1, 9, 2, 3, 5, 4, 8, 10, 7]
}

/*
function get_users(filters) {
  let query = 'SELECT * FROM users'

  for (let filter in filters) {
    query = query + filter
  }
  exec(query)
}
*/
