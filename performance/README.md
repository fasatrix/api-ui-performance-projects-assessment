# Performance test automation framework built with Jmeter, Firefox, and Selenium Webdriver

## Instructions

### Manual
*** * JMeter requires JRE 8 or higher as a prerequisite - please install *****
* Clone the repo: `git clone git@git.toptal.com:screening/Fabio-Santoro.git`
* Download Jmeter apache-jmeter-5.4.1(binaries)  https://jmeter.apache.org/download_jmeter.cgi 
* cd performance
* unzip JMeter in here
* Download `jmeter-plugins-manager-1.6.jar` (https://jmeter-plugins.org/wiki/PluginsManager/) in `./performance/apache-jmeter-5.4.1\lib\ext`
* Download `jmeter-plugins-webdriver-3.3.jar` (https://jar-download.com/artifact-search/jmeter-plugins-webdriver) `./performance/apache-jmeter-5.4.1\lib\ext`
* Download  `geckodriver-v0.29.1-win64.zip` (https://github.com/mozilla/geckodriver/releases) and unzip it in `./performance`
* Go to `performance/apache-jmeter-5.4.1/bin` locate and open `ApacheJMeter.jar`
* From the Menu/Options open `Plugins Manager`
* Under available search for `Selenium/WebDriver Support` and install it
* Run 
  * For Web Driver Test Plan `jmeter -Dwebdriver.gecko.driver=<absolute path to>/performance/geckodriver-v0.29.1-win64\geckodriver.exe -n -t <absolute path to>/performance\jmx\jmeter-webdriver.jmx -l <absolute path to>/performance\results\web-driver\results.jtl -e -o <absolute path to>/performance\results\jmeter-reports\web-driver` 
  * For API Test Plan `jmeter -Dwebdriver.gecko.driver=<absolute path to>/performance/geckodriver-v0.29.1-win64\geckodriver.exe -n -t <absolute path to>/performance\jmx\jmeter-api.jmx -l <absolute path to>/performance\results\api\results.jtl -e -o <absolute path to>/performance\results\reports\jmeter-reports\api`

### Via Docker (Depending on th machine this can be a long process as the image is big)
* Clone the repo: `git clone git@git.toptal.com:screening/Fabio-Santoro.git`
* cd performance  
* Remove all files and subdirectory under the following dir: 
  * performance/results/api
  * performance/results/web-driver
  * performance/results/jmeter-reports/api
  * performance/results/jmeter-reports/webdriver
* Run the following `docker build -t jmeter-webdriver:1 .` 
* Run `docker run -it -v <absolute path to>\
  performance\results:/opt/jmeter/results -v <absolute path to>\performance\jmx:/opt/jmeter/jmx jmeter-webdriver:1 bash`
* On prompt run `Xvfb :99 &`
* Run `cd /opt/jmeter`
* Run 
  * For Web Driver Test Plan: `jmeter -n -t jmx/jmeter-webdriver.jmx -l results/web-driver/result.jtl -e -o results/jmeter-reports/web-driver`
  * For API Test Plan: `jmeter -n -t jmx/jmeter-api.jmx -l results/api/result.jtl -e -o results/jmeter-reports/api`   


## Documentation

* HTML test report will be generated automatically in <absolute path to>/performance/results/jmeter-reports/index.html


