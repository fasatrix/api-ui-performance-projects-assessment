# UI test automation framework built with TestCafe

## Instructions

* Clone the repo: `git clone git@git.toptal.com:screening/Fabio-Santoro.git`
* cd UI
* npm install
* Create a customer account from `http://automationpractice.multiformis.com/index.php?controller=authentication&back=my-account`
* Set the following environment variables to related values created in the previous step:
    * CUST_USERNAME (e.g., from Windows command prompt `set CUST_USERNAME=value` , from Windows powershell prompt ` $Env:CUST_USERNAME:value`, from Linux command prompt `export CUST_USERNAME=value`)
    * CUST_PASSWORD (e.g., from Windows command prompt `set CUST_PASSWORD=value` , from Windows powershell prompt ` $Env:CUST_PASSWORD:value`, from Linux command prompt `export CUST_PASSWORD=value`)
* npm run tests

## Documentation
* Test Flows Documentation located under ./test-flows
* Bug Report located under ./reports/bug-report
* Data used for the upload file tests under ./data
* HTML test report will be generated automatically in ./reports/test-report



