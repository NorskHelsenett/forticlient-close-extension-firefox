# forticlient-close-extension-firefox
Extension for automagically closing forticlient callback tab for firefox (and chrome?!, Opera and Edge using webextension-polyfill see: https://github.com/mozilla/webextension-polyfill for more info)

# Prerequisites
- Node LTS
- Firefox

# Build
- ```npm install```
- ```npm run build```
- (or with watch ```npm run build:watch```)

# Test and develop
- Open firefox
- go to extensions list og ```about:debugging#/runtime/this-firefox```
- Click on "Load unpacked"
    - Navigate to ```<repo root>/dist``` and select mainfest.json
    - "Select folder" / "Velg katalog"
- volia, you have installed the extension

# Forticlient webpage mock
- To open a mock version of the forticlient page
- new terminal
- ```npm run serve:forti```
- navigate to http://127.0.0.1:8020 in your favorite browser

