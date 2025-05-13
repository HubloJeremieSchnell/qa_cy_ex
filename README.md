# qa_cy_ex

## Welcome ! 

Welcome to our technical interview process. Please find below information on how to launch the test application. 

```
# git clone https://github.com/HubloJeremieSchnell/qa_cy_ex.git
cd qa_cy_ex

cd javascript
npm install
cd server
npm start

#Code and run your Cypress/Playwright/Python automation

```
### Cypress 

You can edit the javascript or typescript file located in `javascript/examples/cypress/e2e/behavior/` to add your tests.

Then you can run the tests with the commands below: 

```
# In another termincal
cd qa_cy_ex/javascript/examples/cypress/
npm run cypress:open
```

### Playwright 

You can edit the javascript or typescript file located in `javascript/examples/playwright/e2e/` to add your tests.

Then you can run the tests with the commands below: 

```
# In another termincal
cd qa_cy_ex/javascript/examples/playwright/
npm run playwright:open
```

### Python 
```
# You need to have python and pip on your computer 

cd python 
pip install -r requierements.txt

# To launch tests
# Warning, candidate should launch chromedriver to test before starting
python hublo_interview_example_1.py
```
