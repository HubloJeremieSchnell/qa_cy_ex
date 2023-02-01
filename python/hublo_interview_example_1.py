from selenium import webdriver

#Hi and welcome to Hublo cypress test
#We are going to validates a few things:

# 1. Testing error message, if we send incorrect values, "Username and/or password is incorrect" should be visible in red.
# 2. Testing unauthorized page, user should see "You are not logged in and cannot access this page" if he's not logged. please also log http code of /dashboard call
# 3. Testing login, ensure input are displayed and put correct credentials, when click on login, user should be redirected to /dashboard page
# 4. Whitout keeping previous context, connect using request API
# 5. Finally, create a function for login in and call it in a test to ensure page "Users" is accessible when connected
# 6.a Low level Algorithm: method get_table is returning a table with 50 values between 1 and 10, please calculate the sum of numbers between or equal to 4 and 7
# 6.b Middle level Algorithm: method get_table is returning a table with 50 values between 1 and 10, please determine if there is more 4 than 7
# 6.c High level Algorithm: method get_table is returning a table with 50 values between 1 and 10, please create a method to define which number are present a odd number of times

#
# REMINDER
# Be sure to run `npm start` to start the server
# before running the tests

def main():
    baseUrl = "http://localhost:7077/"
    #provided chrome driver is 108 version for mac m1
    driver = webdriver.Chrome('driver/chromedriver')
    driver.get(baseUrl)


def get_table():
    return [3, 8, 6, 10, 7, 4, 2, 5, 9, 1, 6, 8, 5, 10, 2, 3, 9, 7, 4, 1, 6, 5, 7, 2, 1, 8, 9, 10, 4, 3, 7, 9, 2, 8, 3, 1, 5, 10, 6, 4, 6, 1, 9, 2, 3, 5, 4, 8, 10, 7]


main()
