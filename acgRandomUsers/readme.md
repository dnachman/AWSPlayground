
Investigate the Lab Environment
In the lab interface, make note of the S3 bucket name that contains the data files necessary to complete the lab. The bucket name is prefixed with random-users-data .

Navigate to the Lambda web console and open the Users_primary function.


Collect Object Keys from S3
Add code to the Users_primary function to collect the keys of all objects within the random_users_data... bucket.

S3 list Objects V2


Collect and Combine Data from S3
Add code to the Users_primary function to collect and combine the appropriate data from the random_users_data... bucket.

S3 Get Object


Observe the Results on the Web Interface
Navigate to the web interface URL provided in the lab. If everything is working correctly, the counter should read 1500 and the users should be populated in the interface.