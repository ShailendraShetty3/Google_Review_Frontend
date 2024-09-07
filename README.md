
### Installation process and running of the application

Use `git clone https://github.com/ShailendraShetty3/Google_Review_Frontend.git` command to install it in the local system.

After installation move to the project directory

Use `npm install` command to install all the dependancies.
if it doesn't work use `npm install --force`.

Change the `REACT_APP_BOOKS_KEY` in the .env file with your API Key from google cloud console.

Change the `REACT_APP_GOOGLE_CLIENT_ID` in the .env file with your Client Id from google cloud console.

Currently i have kept my Client Id and API Key you have to change it to your respective keys.

To run the application use `npm start`

Note You have to run the application in the same port which you have mentioned in the cloud console while getting the API Key.

Note You have to login with the same account mentioned in the google cloud console as a valid user.


make sure you have started your backend django server which is currently set to port 8000. if you want to change it to other port just change the `BaseURL` port of urls.js file of urls directory.