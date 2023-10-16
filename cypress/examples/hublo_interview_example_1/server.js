const minimist = require('minimist')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const express = require('express')

const app = express()

// get port from passed in args from scripts/start.js
const port = minimist(process.argv.slice(2)).port

const matchesUsernameAndPassword = (body = {}) => {
  return body.username === 'jane.lane' && body.password === 'password123'
}

const ensureLoggedIn = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/unauthorized')
  }
}

// parse regular form submission bodies
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(morgan('dev'))

// store a session cookie called
// 'cypress-session-cookie'
app.use(session({
  name: 'cypress-session-cookie',
  secret: 'sekret',
  resave: false,
  saveUninitialized: false,
}))

// app.use((req, res, next) => {
//   console.log('session info is', req.session)
//   next()
// })

app.set('views', __dirname)
app.set('view engine', 'hbs')

app.get('/', (req, res) => res.redirect('/login'))

// this is the standard HTML login page
app.get('/login', (req, res) => {
  res.render('./login.hbs')
})

// specify that the urlencodedParser should only
// be used on this one route when its coming from
// the login form
app.post('/login', urlencodedParser, (req, res) => {
  // if this matches the secret username and password
  if (matchesUsernameAndPassword(req.body)) {
    req.session.user = 'jane.lane'

    res.redirect('/dashboard')
  } else {
    // render login with errors
    res.render('./login.hbs', {
      error: 'Username and/or password is incorrect',
    })
  }
})

app.get('/dashboard', ensureLoggedIn, (req, res) => {
  res.render('./dashboard.hbs', {
    user: req.session.user,
  })
})

app.get('/users', ensureLoggedIn, (req, res) => {
  res.render('./users.hbs')
})

app.get('/admin', ensureLoggedIn, (req, res) => {
  res.render('./admin.hbs')
})

app.get('/unauthorized', (req, res) => {
  res.render('./unauthorized.hbs')
})

app.get('/getUsers', (req, res) => {
  const u = [
    {
      'id': 1,
      'username': 'john_doe',
      'first_name': 'John',
      'last_name': 'Doe',
      'email': 'john.doe@example.com',
      'age': 30,
      'is_active': true,
      'address': {
        'street': '123 Main Street',
        'city': 'Anytown',
        'country': 'USA',
      },
      'roles': ['user', 'member'],
    },
    {
      'id': 2,
      'username': 'jane_smith',
      'first_name': 'Jane',
      'last_name': 'Smith',
      'email': 'jane.smith@example.com',
      'age': 25,
      'is_active': true,
      'address': {
        'street': '456 Oak Avenue',
        'city': 'Sometown',
        'country': 'Canada',
      },
      'roles': ['user', 'admin'],
    },
    {
      'id': 3,
      'username': 'bob_jones',
      'first_name': 'Bob',
      'last_name': 'Jones',
      'email': 'bob.jones@example.com',
      'age': 35,
      'is_active': false,
      'address': {
        'street': '789 Pine Street',
        'city': 'Othertown',
        'country': 'UK',
      },
      'roles': ['user'],
    },
    {
      'id': 4,
      'username': 'alice_miller',
      'first_name': 'Alice',
      'last_name': 'Miller',
      'email': 'alice.miller@example.com',
      'age': 28,
      'is_active': true,
      'address': {
        'street': '101 Elm Road',
        'city': 'Somewhere',
        'country': 'Australia',
      },
      'roles': ['user', 'editor'],
    },
    {
      'id': 5,
      'username': 'sam_wilson',
      'first_name': 'Sam',
      'last_name': 'Wilson',
      'email': 'sam.wilson@example.com',
      'age': 32,
      'is_active': true,
      'address': {
        'street': '222 Maple Lane',
        'city': 'Anytown',
        'country': 'USA',
      },
      'roles': ['user'],
    },
  ]

  res.json(u)
})

app.listen(port)
