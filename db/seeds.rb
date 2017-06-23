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
  hours: "Wednesday: 6:00pm - 8:30pm, Friday: 6:00pm - 8:30pm",
  phone: "(415) 970-8061",
  website_url: "http://www.noevalleyreccenter.com/",
  lat: 37.742782,
  lng: -122.428548,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495154268/noevallyreccenter_taj19i.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495747028/UN-volleyball-sm_tfftxa.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495753394/noe-valley-gym_oz7j3f.jpg"]
  })

Gym.create({
  name: "Embarcadero YMCA",
  address: "169 Steuart St.",
  city: "San Francisco",
  state: "CA",
  zip: "94105",
  level: "Beginner-Intermediate",
  price: "Membership Required",
  hours: "Wednesday: 6:00pm - 9:00pm",
  phone: "(415) 957-9622",
  lat: 37.792512,
  lng: -122.392094,
  website_url: "https://www.ymcasf.org/locations/embarcadero-ymca",
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495154315/YMCA-Embarcadero_einwv7.jpg",
  "https://res.cloudinary.com/bbchui/image/upload/v1495754252/ymca-gym_frfaka.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495754254/ymca-gym1_z0cyup.jpg"]
  })

Gym.create({
  name: "Richmond Recreation Center",
  address: "251 18th Ave",
  city: "San Francisco",
  state: "CA",
  zip: "94121",
  level: "Beginner-Intermediate",
  price: "Free",
  hours: "Thursday: 6:00pm - 8:30pm",
  phone: "(415) 666-7020",
  lat: 37.783499,
  lng: -122.477945,
  website_url: "https://sfrecpark.org/destination/richmond-rec-center/",
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495154403/RichmondRC_exfdnb.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755065/richrec_rdkdhf.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755106/richrec1_hb5mkt.jpg"]
  })

Gym.create({
  name: "UC Davis ARC",
  address: "232 Shields Ave",
  city: "Davis",
  state: "CA",
  zip: "95616",
  level: "Intermediate",
  price: "$7 one-day pass, monthly membership available",
  hours: "Everyday 7:00pm - 11:00pm",
  phone: "(520) 752-1730",
  lat: 38.542989,
  lng: -121.759205,
  website_url: "https://cru.ucdavis.edu/content/1-activities-and-recreation-center-arc.htm",
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495154404/UC_Davis_Arc_inmzz9.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755220/arc_s9cmh4.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755218/arc1_xiz4it.jpg"]
  })


Gym.create({
  name: "Betty Ong Rec Center",
  address: "1199 Mason Street",
  city: "San Francisco",
  state: "CA",
  zip: "94108",
  level: "Beginner-Intermediate",
  price: "Free",
  hours: "Wednesday 6:30pm - 9:00pm",
  phone: "(415) 359-9103",
  lat: 37.794500,
  lng: -122.411657,
  website_url: "http://sfrecpark.org/destination/betty-ong-rec-center/",
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495154455/Betty_Ong_Gym_q3psqr.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755329/betong_bwqnih.jpg", "https://res.cloudinary.com/bbchui/image/upload/a_auto_left/v1495755341/betong1_zwgaxi.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755342/betong2_mhnexf.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755345/betong3_xjlwzw.jpg", "https://res.cloudinary.com/bbchui/image/upload/a_auto_right/v1495755348/betong4_oijaod.jpg"]
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
  lat: 37.453286,
  lng: -122.177768,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495154492/MenloPark_rntth6.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755961/menlo_wagf4f.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495755962/menlo1_rdxdgp.jpg"]
  })

Gym.create({
  name: "Sports House",
  address: "3151 Edison Way",
  city: "Redwood City",
  state: "CA",
  zip: "94063",
  level: "Intermediate-Expert",
  price: "$7 per visit",
  hours: "Friday 7:00pm - 10:30pm",
  phone: "(650) 362-4100",
  lat: 37.480728,
  lng: -122.202492,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495786531/sporthouse_uxzmam.png", "https://res.cloudinary.com/bbchui/image/upload/v1495786645/sporthouse1_c1pd6b.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495786646/sporthouse2_kyl79c.jpg"]
  })

Gym.create({
  name: "City Beach",
  address: "2911 Mead Ave",
  city: "Santa Clara",
  state: "CA",
  zip: "95051",
  level: "Intermediate",
  price: "$6 per visit",
  hours: "Friday 6:00pm - 9:00pm",
  phone: "(408) 654-9330",
  website_url: "citybeach.com",
  lat: 37.372460,
  lng: -121.978984,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495787332/citybeach_tzcjh9.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495787332/citybeach1_wvlhwi.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495787334/citybeach2_folaxd.jpg"]
  })

Gym.create({
  name: "UMD College Park",
  address: "4128 Valley Dr.",
  city: "College Park",
  state: "MD",
  zip: "20742",
  level: "Intermediate",
  price: "Membership Required",
  hours: "Thursday 8:00pm - 11:00pm",
  phone: "(301) 226-4400",
  website_url: "https://recwell.umd.edu/",
  lat: 38.993841,
  lng: -76.945174,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495819878/umd_gvzr0w.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495819852/umd1_yoawmg.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495819853/umd2_lmtfnj.jpg"]
})

Gym.create({
  name: "Calvary Church",
  address: "16330 Los Gatos Blvd",
  city: "Los Gatos",
  state: "CA",
  zip: "95032",
  level: "Intermediate",
  price: "Free, $2 Donations appreciated",
  hours: "Monday 7:00pm - 9:00pm, Saturday 6:00pm - 9:00pm",
  phone: "(408) 356-5126",
  website_url: "https://www.calvarylg.com/",
  lat: 37.231698,
  lng: -121.964325,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495820352/calvary_gaj2xj.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495820352/calvary1_gledvr.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495820353/calvary2_fbzpjo.jpg"]
})

Gym.create({
  name: "Seward Park High School",
  address: "350 Grand St.",
  city: "New York",
  state: "NY",
  zip: "10002",
  level: "Intermediate",
  price: "$10",
  hours: "Saturday 7:00pm - 11:00pm",
  phone: "(212) 673-2650",
  website_url: "https://www.sewardparkhs.com/",
  lat: 40.717468,
  lng: -73.989575,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495821179/sphs_orx7cl.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495821180/sphs1_jcci9c.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495821181/sphs2_lpx1kq.jpg"]
})

Gym.create({
  name: "P.S. 2 Meyer London School",
  address: "122 Henry St",
  city: "New York",
  state: "NY",
  zip: "10002",
  level: "Intermediate-Expert",
  price: "$10",
  hours: "Monday 6:00pm - 9:30pm",
  phone: "(212) 964-0350",
  website_url: "https://www.ps2m.info/",
  lat: 40.713308,
  lng: -73.992011,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495821820/PS2_yrh4p3.png", "https://res.cloudinary.com/bbchui/image/upload/v1495822329/ps22_r5jspc.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495822327/ps21_gw7l9a.jpg"]
})

Gym.create({
  name: "Cerritos High School",
  address: "12500 183rd St.",
  city: "Cerritos",
  state: "CA",
  zip: "90703",
  level: "Intermediate-Expert",
  price: "Free",
  hours: "Sunday 1:00pm - 6:00pm",
  phone: "(562) 926-5566",
  website_url: "https://www.edline.net/pages/Cerritos_High_School",
  lat: 33.865607,
  lng: -118.064896,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495824110/cerritos_ibfwpo.png", "https://res.cloudinary.com/bbchui/image/upload/v1495829907/cerritos2_hih6yd.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495829997/logo1_hv4eab.png"]
})

Gym.create({
  name: "Almansor Gym",
  address: "800 S Almansor St",
  city: "Alhambra",
  state: "CA",
  zip: "91801",
  level: "Beginner-Intermediate",
  price: "Free",
  hours: "Wednesday 6:00pm - 9:00pm, Saturday 3:30pm - 5:30pm, Sunday 5:00pm - 8:00pm",
  phone: "(626) 570-5052",
  website_url: "cityofalhambra.org",
  lat: 34.087266,
  lng: -118.115580,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495825213/almansor_qbqqxl.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495825214/almansor1_wkapbr.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495825214/almansor2_krg8pn.jpg"]
})

Gym.create({
  name: "Standley Recreaction Center",
  address: "3585 Governor Dr",
  city: "San Diego",
  state: "CA",
  zip: "92122",
  level: "Beginner-Intermediate",
  price: "Free",
  hours: "Thursday 6:30pm - 8:45pm",
  phone: "(858) 552-1652",
  website_url: "https://www.sandiego.gov/park-and-recreation/centers/recctr/standley",
  lat: 32.851411,
  lng: -117.210245,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495825794/standley_frmqfk.png", "https://res.cloudinary.com/bbchui/image/upload/v1495825795/standley1_kb8u6h.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495825797/standley2_y7kh1p.jpg"]
})

Gym.create({
  name: "Davis High School",
  address: "315 W 14th St.",
  city: "Davis",
  state: "CA",
  zip: "95616",
  level: "Beginner-Intermediate",
  price: "$7",
  hours: "Wednesday 8:00pm - 11:00pm, Sunday 4:00pm - 7:00pm",
  phone: "(530) 757-5400",
  website_url: "https://dshs.djusd.net/",
  lat: 38.556636,
  lng: -121.750537,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495826891/davis_zqvuae.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495826902/davis2_unbrsf.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495826895/imron_hdt3g0.jpg"]
})

Gym.create({
  name: "Wackford Community Gym",
  address: "9014 Bruceville Road",
  city: "Elk Grove",
  state: "CA",
  zip: "95758",
  level: "Intermediate",
  price: "$6 per visit or $54 (10 visits)",
  hours: "Monday 7:00pm - 10:00pm",
  phone: "(916) 405-5600",
  lat: 38.429672,
  lng: -121.418767,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495827551/wackford_quv8fr.png", "https://res.cloudinary.com/bbchui/image/upload/v1495828015/wackford1_twlagj.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495826895/imron_hdt3g0.jpg"]
})

Gym.create({
  name: "Sunset Recreation Center",
  address: "2201 Lawton St",
  city: "San Francisco",
  state: "CA",
  zip: "94122",
  level: "Beginner-Intermediate",
  price: "Free",
  hours: "Wednesday 6:00pm - 9:00pm",
  phone: "(415) 242-1070",
  lat: 37.757331,
  lng: -122.486655,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495828488/sunset_psyeva.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495828495/sunset2_crda8t.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495828492/sunset1_nohq6w.jpg"]
})

Gym.create({
  name: "Eureka Valley Rec Center",
  address: "100 Collingwood St",
  city: "San Francisco",
  state: "CA",
  zip: "94114",
  level: "Intermediate",
  price: "$5",
  hours: "Thursday 6:00pm - 9:00pm",
  phone: "(415) 831-6810",
  lat: 37.764283,
  lng: -122.436256,
  image_url: ["https://res.cloudinary.com/bbchui/image/upload/v1495828862/eureka_ayvwem.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495828863/eureka1_mhdbzh.jpg", "https://res.cloudinary.com/bbchui/image/upload/v1495828865/eureka2_ciu0es.jpg"]
})





User.create({username: "Brandon", password: "password", profile_pic_url: "https://res.cloudinary.com/bbchui/image/upload/v1495515243/IMG_2662_raa2dq.png"})
User.create({username: "Guest", password: "password"})
User.create({username: "Ranelle", password: "password", profile_pic_url: "https://res.cloudinary.com/bbchui/image/upload/v1495818301/ranelle_msxj09.jpg"})
User.create({username: "Chubs", password: "password", profile_pic_url: "https://res.cloudinary.com/bbchui/image/upload/v1495517450/IMG_2443_znrmig.jpg"})
User.create({username: "Janice", password: "password", profile_pic_url: "https://res.cloudinary.com/bbchui/image/upload/v1495818425/Janice_jscgwj.jpg"})
User.create({username: "Happy Hour?", password: "password", profile_pic_url: "https://res.cloudinary.com/bbchui/image/upload/v1495818842/happyhour_ix7cqy.jpg"})


Review.create({user_id: 1, gym_id: 1, body: "Two courts and 6 to 8 teams usually show. Some experience recommended, but lots of friendly people!", rating: 4})
Review.create({user_id: 1, gym_id: 2, body: "Great place!", rating: 4})
Review.create({user_id: 1, gym_id: 4, body: "This place is a lot of fun!", rating: 4})
Review.create({user_id: 5, gym_id: 2, body: "It gets a bit crowded because there's only 1 court", rating: 3})
Review.create({user_id: 3, gym_id: 1, body: "Good competition and there's two courts to play on!", rating: 5})
Review.create({user_id: 3, gym_id: 2, body: "Great community, good crowd", rating: 4})
Review.create({user_id: 2, gym_id: 2, body: "Friendly people but wait time is very long", rating: 3})
Review.create({user_id: 3, gym_id: 2, body: "Great place to go if you have membership!", rating: 4})
Review.create({user_id: 6, gym_id: 1, body: "What should we do after open gym???", rating: rand(5) + 1})


# Review.create({user_id: 4, gym_id: 3, body: "*boing boing* *nibble nibble*", rating: 5})
# Review.create({user_id: 4, gym_id: 4, body: "*boing boing* *nibble nibble*", rating: 5})
# Review.create({user_id: 4, gym_id: 5, body: "*boing boing* *nibble nibble*", rating: 5})
# Review.create({user_id: 4, gym_id: 6, body: "*boing boing* *nibble nibble*", rating: 5})

Gym.count.times do |x|
  Review.create({user_id: 4, gym_id: x + 1, body: "*boing boing* *nibble nibble*", rating: 5})
end


Gym.count.times do |x|
  Review.create({user_id: 2, gym_id: x + 1, body: "Volleyball is fun everywhere!", rating: rand(5) + 1})
end
