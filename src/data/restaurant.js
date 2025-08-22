export const restaurantInfo = {
  name: "Levity Breakfast House",
  tagline: "Portland roots, Norman flavor",
  description: "Two brothers from Portland brought their Pacific Northwest breakfast dreams to a century-old Norman home, where every morning feels like a warm hug from family. Here, scratch-made meets Southern hospitality in a place where coffee conversations linger and every plate tells a story of love, tradition, and the magic that happens when Portland creativity meets Oklahoma heart.",
  
  contact: {
    phone: "(405) 256-2136",
    address: "309 S Peters Ave, Norman, OK 73069",
    email: "Contact@levitybreakfast.com"
  },
  
  hours: {
    monday: "7:00 AM - 2:00 PM",
    tuesday: "Closed",
    wednesday: "7:00 AM - 2:00 PM",
    thursday: "7:00 AM - 2:00 PM",
    friday: "7:00 AM - 2:00 PM",
    saturday: "7:00 AM - 2:00 PM",
    sunday: "7:00 AM - 2:00 PM"
  },
  
  social: {
    instagram: "https://instagram.com/levitybreakfasthouse",
    facebook: "https://facebook.com/levitybreakfasthouse"
  },
  
  story: {
    owners: "Brothers Jon and Mark Hunnell",
    origin: "Portland, Oregon",
    building: "104-year-old refurbished home",
    concept: "Fulfilling a childhood dream of opening a breakfast restaurant",
    atmosphere: "1920's charm meets modern comfort",
    journey: "From Saturday morning coffee dreams in Portland to serving Norman's community",
    philosophy: "Great food starts with great ingredients, but becomes magical with genuine care",
    community: "Where OU students, local families, and downtown workers all feel at home",
    heritage: "Honoring the past while creating new traditions, one breakfast at a time"
  }
}

export const menuCategories = {
  breakfast: {
    name: "Breakfast Specials",
    description: "The heart of our kitchen—where Portland creativity meets Norman hospitality, made fresh every morning",
    items: [
      {
        name: "Stay Classy Norman",
        description: "Our love letter to our new hometown: crispy bacon meets sharp Oklahoma cheddar and fluffy scrambled eggs, all nestled in our signature house-made English-ish muffin with a whisper of garlic aioli that'll make you say 'Boomer Sooner!'",
        price: "$12.00"
      },
      {
        name: "The Mr. Burns",
        description: "This powerhouse sandwich means business: a thick, juicy premium pork sausage patty crowned with creamy havarti, perfectly runny over-medium eggs, tangy pickled onions and jalapeños that pack just the right punch, all brought together with our house spicy aioli on golden Texas toast",
        price: "$11.75"
      },
      {
        name: "The Benson Belgian Waffle",
        description: "Light as air, crispy on the outside, fluffy within—our Belgian waffle is a golden canvas for pure maple syrup and fresh butter. Upgrade to our house-made blueberry compote and bright lemon syrup for a taste of Portland summer (+$2)",
        price: "$10.00"
      },
      {
        name: "Scones And Gravy",
        description: "Jon's grandmother's secret: tender, flaky scones studded with three cheeses and fresh chives, smothered in our rich maple-sausage gravy that's been simmering since dawn. Served with your eggs exactly how you like them—this is comfort food with a story",
        price: "$10.50"
      },
      {
        name: "The All American",
        description: "Sometimes simple is perfect: two farm-fresh eggs cooked your way, your choice of crispy bacon or savory sausage, our famous golden potato cake (the hash brown that dreams are made of), and thick-cut Texas toast with house-made apricot or strawberry jam",
        price: "$12.00"
      },
      {
        name: "Avocado Prost",
        description: "A Portland classic that found its home in Norman: creamy avocado layered with our signature roasted walnut-cashew-pecan pesto, tangy pickled onions, ripe tomatoes, and fresh mixed greens, all drizzled with aged balsamic on artisan sourdough from our friends at Saden's Bakery",
        price: "$11.25"
      },
      {
        name: "The Duplex",
        description: "Bacon, smoked turkey breast, havarti cheese, parmesan, tomato, red onion, Dijon, garlic aioli sandwich grilled on Texas toast w/ kettle chips",
        price: "$12.50"
      },
      {
        name: "Portland Porridge",
        description: "A bowl of Pacific Northwest nostalgia: creamy gluten-free oats simmered in rich coconut milk, topped with our house-made blueberry compote, sweet dried apricots, warm spiced pecans toasted to perfection, toasted coconut chips, and enough granola to make every spoonful an adventure",
        price: "$9.25"
      }
    ]
  },

  coffee: {
    name: "Espresso Drinks & Coffee",
    description: "Premium coffee and espresso beverages",
    items: [
      {
        name: "Drip Coffee",
        description: "Fresh brewed daily blend",
        price: "$3.50"
      },
      {
        name: "Iced Coffee",
        description: "Cold brewed perfection",
        price: "$3.50"
      },
      {
        name: "Espresso",
        description: "Rich, bold shot",
        price: "$3.00"
      },
      {
        name: "Americano",
        description: "Espresso with hot water",
        price: "$3.00"
      },
      {
        name: "Cortado",
        description: "Espresso with equal parts steamed milk",
        price: "$4.00"
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: "$5.00"
      },
      {
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk",
        price: "$5.00"
      },
      {
        name: "Chai Tea Latte",
        description: "Spiced chai with steamed milk",
        price: "$5.50"
      },
      {
        name: "Matcha Latte",
        description: "Premium matcha with steamed milk",
        price: "$5.50"
      }
    ]
  },
  
  lunch: {
    name: "Lunch & Salads",
    description: "Fresh lunch options and hearty salads",
    items: [
      {
        name: "Grown Up Grilled Cheese",
        description: "Gouda, sharp cheddar and havarti on Texas toast w/ kettle chips • add bacon +$2",
        price: "$8.50"
      },
      {
        name: "Pear Pecan Salad",
        description: "Mixed greens, pear, spiced house-made toasted pecans, red onion, feta, bacon, champagne vinaigrette dressing",
        price: "$10.00"
      },
      {
        name: "The Veggie One",
        description: "Mixed greens, red pepper hummus, feta, house-made roasted cashew pecan pesto, tomato, pickled red onion, cucumber, red pepper sandwich on Dave's whole grain bread w/ kettle chips",
        price: "$11.25"
      }
    ]
  },

  minitacos: {
    name: "Mini-Taco Options",
    description: "Flavorful mini tacos with unique toppings",
    items: [
      {
        name: "Blackened Swordfish & Sweet Chili Slaw",
        description: "Fresh swordfish with sweet chili slaw",
        price: "$4.00"
      },
      {
        name: "Ancho-Coffee Pork & Creamy Dill Slaw",
        description: "Spiced pork with creamy dill slaw",
        price: "$3.00"
      },
      {
        name: "Roasted Cauliflower-Mushroom & Hot Agave Slaw",
        description: "Vegetarian option with hot agave slaw",
        price: "$3.00"
      }
    ]
  },

  sides: {
    name: "Sides & Extras",
    description: "Perfect additions to any meal",
    items: [
      {
        name: "Toast & Jam",
        description: "Fresh toast with house-made jam",
        price: "$2.50"
      },
      {
        name: "1 Egg",
        description: "Cooked your way",
        price: "$2.50"
      },
      {
        name: "Potato Cake",
        description: "Crispy hash brown cake",
        price: "$3.50"
      },
      {
        name: "Scone",
        description: "Fresh baked daily",
        price: "$3.50"
      },
      {
        name: "Bacon",
        description: "Crispy strips",
        price: "$4.00"
      },
      {
        name: "Sausage",
        description: "Premium pork sausage",
        price: "$4.00"
      },
      {
        name: "Cilantro-Lime Rice",
        description: "Seasoned rice with cilantro and lime",
        price: "$4.00"
      },
      {
        name: "Sesame Cucumber Salad",
        description: "Fresh cucumber with sesame dressing",
        price: "$4.00"
      },
      {
        name: "Pineapple Ricotta Cookies With Lime Frosting",
        description: "Sweet treat with tropical flavors",
        price: "$5.00"
      },
      {
        name: "Side Of Salsa",
        description: "House-made salsa",
        price: "$1.00"
      }
    ]
  },

  beverages: {
    name: "Other Beverages",
    description: "Refreshing drinks and specialty beverages",
    items: [
      {
        name: "Hot Cocoa",
        description: "Rich chocolate drink",
        price: "$3.25"
      },
      {
        name: "Boylan Natural Sodas",
        description: "Premium natural sodas",
        price: "$3.00"
      },
      {
        name: "La Croix Cans",
        description: "Sparkling water",
        price: "$2.25"
      },
      {
        name: "San Pellegrino",
        description: "Italian sparkling water",
        price: "$2.25"
      }
    ]
  },

  kids: {
    name: "Lil Champs Menu",
    description: "Kid-friendly options",
    items: [
      {
        name: "Lil Champs Breakfast",
        description: "1 waffle piece, 1 slice of bacon, 1 egg scrambled",
        price: "$7.25"
      },
      {
        name: "Lil Champs Lunch",
        description: "Kids grilled cheese with sharp cheddar on Texas toast",
        price: "$6.25"
      }
    ]
  }
}
