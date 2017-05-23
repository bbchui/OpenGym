# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Gym.create({
  name: "Upper Noe Recreation Center",
  address: "295 Day St.",
  city: "San Francisco",
  state: "CA",
  zip: "94131",
  level: "Beginner-Intermediate",
  price: "Free",
  hours: "Wednesday: 6pm - 8:30pm, Friday: 6pm - 8:30pm",
  phone: "(415) 970-8061",
  website_url: "www.noevalleyreccenter.com",
  image_url: "http://res.cloudinary.com/bbchui/image/upload/v1495154268/noevallyreccenter_taj19i.jpg"
  })

Gym.create({
  name: "Embarcadero YMCA",
  address: "169 Steuart St.",
  city: "San Francisco",
  state: "CA",
  zip: "94105",
  level: "Beginner-Intermediate",
  price: "Membership Required",
  hours: "Wednesday: 6pm - 9pm",
  phone: "(415) 957-9622",
  website_url: "https://www.ymcasf.org/locations/embarcadero-ymca",
  image_url: "http://res.cloudinary.com/bbchui/image/upload/v1495154315/YMCA-Embarcadero_einwv7.jpg"
  })

Gym.create({
  name: "Richmond Recreation Center",
  address: "251 18th Ave",
  city: "San Francisco",
  state: "CA",
  zip: "94121",
  level: "Beginner-Intermediate",
  price: "Free",
  hours: "Thursday: 6pm - 8:30pm",
  phone: "(415) 666-7020",
  website_url: "http://sfrecpark.org/destination/richmond-rec-center/",
  image_url: "http://res.cloudinary.com/bbchui/image/upload/v1495154403/RichmondRC_exfdnb.jpg"
  })

Gym.create({
  name: "UC Davis ARC",
  address: "232 Shields Ave",
  city: "Davis",
  state: "CA",
  zip: "95616",
  level: "Intermediate",
  price: "$7 one-day pass, monthly membership available",
  hours: "Everyday 7pm - 11pm",
  phone: "(520) 752-1730",
  website_url: "https://cru.ucdavis.edu/content/1-activities-and-recreation-center-arc.htm",
  image_url: "http://res.cloudinary.com/bbchui/image/upload/v1495154404/UC_Davis_Arc_inmzz9.jpg"
  })


  Gym.create({
    name: "Betty Ong Rec Center",
    address: "1199 Mason Street",
    city: "San Francisco",
    state: "CA",
    zip: "94108",
    level: "Beginner-Intermediate",
    price: "Free",
    hours: "Wednesday 6:30 - 9pm",
    phone: "(415) 359-9103",
    website_url: "https://cru.ucdavis.edu/content/1-activities-and-recreation-center-arc.htm",
    image_url: "http://res.cloudinary.com/bbchui/image/upload/v1495154455/Betty_Ong_Gym_q3psqr.jpg"
    })

  Gym.create({
    name: "Arrillaga Family Recreation Center",
    address: "610 Laurel St",
    city: "Menlo Park",
    state: "CA",
    zip: "94025",
    level: "Intermediate-Expert",
    price: "$3 per visit",
    hours: "Sunday 6:30 - 9:30pm",
    phone: "(650) 330-2200",
    website_url: "",
    image_url: "http://res.cloudinary.com/bbchui/image/upload/v1495154492/MenloPark_rntth6.jpg"
    })


User.create({username: "brandon", password: "password", profile_pic_url: "http://res.cloudinary.com/bbchui/image/upload/v1495515243/IMG_2662_raa2dq.png"})
User.create({username: "Guest", password: "password"})
User.create({username: "Brandon", password: "password"})
User.create({username: "Chubs", password: "password", profile_pic_url: "http://res.cloudinary.com/bbchui/image/upload/v1495517450/IMG_2443_znrmig.jpg"})


Review.create({user_id: 1, gym_id: 1, body: "Two courts and 6 to 8 teams usually show. Some experience recommended, but lots of friendly people!", rating: 4})


Review.create({user_id: 1, gym_id: 4, body: "This place is a lot of fun!", rating: 4})

Review.create({user_id: 2, gym_id: 1, body: "Good competition and there's two courts to play on!", rating: 5})

Review.create({user_id: 3, gym_id: 1, body: "Great community, good crowd", rating: 4})

Review.create({user_id: 1, gym_id: 2, body: "It gets a bit crowded because there's only 1 court", rating: 3})

Review.create({user_id: 2, gym_id: 2, body: "Friendly people but wait time is very long", rating: 3})

Review.create({user_id: 3, gym_id: 2, body: "Great place to go if you have membership!", rating: 4})

Review.create({user_id: 1, gym_id: 2, body: "Great place!", rating: 4})

Review.create({user_id: 4, gym_id: 3, body: "*boing boing* *nibble nibble*", rating: 5})
Review.create({user_id: 4, gym_id: 4, body: "*boing boing* *nibble nibble*", rating: 5})
Review.create({user_id: 4, gym_id: 5, body: "*boing boing* *nibble nibble*", rating: 5})
Review.create({user_id: 4, gym_id: 6, body: "*boing boing* *nibble nibble*", rating: 5})
