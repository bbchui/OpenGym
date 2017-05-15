## Component Hierarchy

**AuthFormContainer**
* AuthForm

**HomeContainer**
* Home
* Search
* Navigation Links
* Featured Gyms

**GymIndexContainer**
* Gym Index
  - Gym Index Item
  - Map
* Gym Form

**GymContainer**
* Gym Name
* Location
* Rating
* Description
* Map
* ReviewsIndexContainer
* Review Form

**ReviewIndexContainer**
* Review Index

**GymForm**
* Add/Edit Gym

## Routes

Path | Component
---- | ---------
"/sign-up" | "AuthFormContainer"
"/sign-in" | "AuthFormContainer"
"/home" | "HomeContainer"
"/gyms" | "GymIndexContainer"
"/gyms/new" | "GymForm"
"/gyms/:gymid" | "GymContainer"
"/gyms/:gymid/reviews" | "ReviewIndexContainer"
