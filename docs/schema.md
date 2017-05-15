#Schema Information

##users

column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
username | string | not null, indexed, unique
email | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique


##gyms

column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
name | string | not null
address | string | not null
city | string | not null
state | string | not null
zipcode | string |
phone_number | string |
website_url | string |
image_url | string |
level | string | not null
price | string | not null
hours | string | not null

##reviews

column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
user_id | integer | not null
gym_id | integer | not null
rating | string | not null
review | string | not null

##photos

column name | data type | details
----------- | --------- | -------
id | integer | not null, primary key
image_url | string | not null
gym_id | integer | not null
user_id | integer | not null
