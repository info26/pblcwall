# Welcome!
Features
--------

* Timezone Support
*   Allows users to change their timezone. 
* Admin Support
*   Allows admins to change/delete posts. 
*   Allows fine-grained control over registration keys. 
* Registration keys
*   Can be set with restrictions such as being used within a certain timeframe
*   Can be limited ot a set number of uses

To Install
----------

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


If You Want Google Authentication
---------------------------------

1. Go to the Google Cloud console
2. Sign in to the console
3. Create a new project (if you have not already)
4. On the left hand sidebar - go to APIs & Services > Credentials
5. Click "Create Credentials" then "OAuth client ID"
6. Fill out details, choose "Web Application"
7. Add the domain you are hosting this app on to the authorized redirect URIs, plus "/oauth/complete/google-oauth2/"
   - Ex: "https://example.com/oauth/complete/google-oauth2/"
8. Once you are done, get the client key and secret and add it to settings.py. 
