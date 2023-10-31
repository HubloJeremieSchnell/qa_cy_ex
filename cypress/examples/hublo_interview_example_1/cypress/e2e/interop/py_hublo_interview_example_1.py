from selenium import webdriver

# Hi and welcome to Hublo cypress test
# We are going to validates a few things:

# REMINDER
# Be sure to to start the server
# before running the tests

def main():
    baseUrl = "http://localhost:7077/"
    #provided chrome driver is 108 version for mac m1
    driver = webdriver.Chrome('driver/chromedriver')
    driver.get(baseUrl)


def get_table():
    return [3, 8, 6, 10, 7, 4, 2, 5, 9, 1, 6, 8, 5, 10, 2, 3, 9, 7, 4, 1, 6, 5, 7, 2, 1, 8, 9, 10, 4, 3, 7, 9, 2, 8, 3, 1, 5, 10, 6, 4, 6, 1, 9, 2, 3, 5, 4, 8, 10, 7]


main()
