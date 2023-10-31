from selenium import webdriver

# Hi and welcome to Hublo cypress test
# We are going to validates a few things:

# REMINDER
# Be sure to to start the server
# before running the tests
# 2. Test login using /loginapi with incorrect password, this should return 401 with error message
# 3. Test login using /loginapi with correct password, this should return 200 with token`
# 4. With the token, call /getUsers to get the list of users
# 5. Transform the list of users to a list of emails with the format "firstname.lastname.id@domain"
# 6. Send an array of emails to /sendEmails with this format {"emails": ["email1", "email2"]}
# 7.a Low level Algorithm: method get_table is returning a table with 50 values between 1 and 10, please calculate the sum of numbers between or equal to 4 and 7
# 7.b Middle level Algorithm: method get_table is returning a table with 50 values between 1 and 10, please determine if there is more 4 than 7
# 7.c High level Algorithm: method get_table is returning a table with 50 values between 1 and 10, please create a method to define which number are present a odd number of times

def main():
    baseUrl = "http://localhost:7077/"
    #provided chrome driver is 108 version for mac m1
    driver = webdriver.Chrome('driver/chromedriver')
    driver.get(baseUrl)


def get_table():
    return [3, 8, 6, 10, 7, 4, 2, 5, 9, 1, 6, 8, 5, 10, 2, 3, 9, 7, 4, 1, 6, 5, 7, 2, 1, 8, 9, 10, 4, 3, 7, 9, 2, 8, 3, 1, 5, 10, 6, 4, 6, 1, 9, 2, 3, 5, 4, 8, 10, 7]


main()
