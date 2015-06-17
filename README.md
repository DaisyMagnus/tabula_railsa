It is best to store environment variables in the .profile file in the root directory.
To do this you would:

* Open up the file and type export VAR=  # this would be set to whatever you wish the environment var to be.

It is best to store environment variables when you wish to protect information, if, for instance you were wanting to
post code where you had your authentication code used to github.

Test migrations are only run once.


The files that seem to be duplicates, or seem to be doing the same things as other files,
include the stylesheets/application.css and the javascripts/application.js files.  
Also, there is a module in helpers/application_helper.rb that is empty.  There is likely another
file associated with that one is doing the heavy lifting.  

I see that this is NOT the answer.  I cloned the most recent tabula_railsa from
your github, and there are only two files in views/home.  There is no partial.
Unless, I'm not looking in the right place.

SHOOT!  Should have read the directions.  Completely misunderstood the challenge.
