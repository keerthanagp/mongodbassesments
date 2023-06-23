use products;
db.createCollection("productlist")

db.productlist.insertMany(
    [
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price":26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price":36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price":88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price":47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price":20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }
]
)



// 1. Find all the information about each products

db.productlist.find().toArray()
[
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d5"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d6"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d7"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d8"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d9"),
      id: '5',
      product_name: 'Sleek Cotton Chair',
      product_price: 33,
      product_material: 'Fresh',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6da"),
      id: '6',
      product_name: 'Awesome Wooden Towels',
      product_price: 474,
      product_material: 'Plastic',
      product_color: 'orange'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6db"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6dc"),
      id: '8',
      product_name: 'Incredible Steel Hat',
      product_price: 78,
      product_material: 'Rubber',
      product_color: 'violet'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6dd"),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6de"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6df"),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e0"),
      id: '12',
      product_name: 'Unbranded Plastic Salad',
      product_price: 89,
      product_material: 'Wooden',
      product_color: 'pink'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e1"),
      id: '13',
      product_name: 'Gorgeous Cotton Keyboard',
      product_price: 37,
      product_material: 'Concrete',
      product_color: 'sky blue'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e2"),
      id: '14',
      product_name: 'Incredible Steel Shirt',
      product_price: 54,
      product_material: 'Metal',
      product_color: 'white'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e3"),
      id: '15',
      product_name: 'Ergonomic Cotton Hat',
      product_price: 43,
      product_material: 'Rubber',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e4"),
      id: '16',
      product_name: 'Small Soft Chair',
      product_price: 47,
      product_material: 'Cotton',
      product_color: 'teal'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e5"),
      id: '17',
      product_name: 'Incredible Metal Car',
      product_price: 36,
      product_material: 'Fresh',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e6"),
      id: '18',
      product_name: 'Licensed Plastic Bacon',
      product_price: 88,
      product_material: 'Steel',
      product_color: 'yellow'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e7"),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e8"),
      id: '20',
      product_name: 'Handcrafted Wooden Bacon',
      product_price: 36,
      product_material: 'Concrete',
      product_color: 'lime'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e9"),
      id: '21',
      product_name: 'Unbranded Granite Chicken',
      product_price: 90,
      product_material: 'Metal',
      product_color: 'gold'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ea"),
      id: '22',
      product_name: 'Ergonomic Soft Hat',
      product_price: 99,
      product_material: 'Rubber',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6eb"),
      id: '23',
      product_name: 'Intelligent Steel Pizza',
      product_price: 95,
      product_material: 'Cotton',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ec"),
      id: '24',
      product_name: 'Tasty Rubber Cheese',
      product_price: 47,
      product_material: 'Frozen',
      product_color: 'orchid'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ed"),
      id: '25',
      product_name: 'Licensed Steel Car',
      product_price: 20,
      product_material: 'Cotton',
      product_color: 'indigo'
    }
  ]







// 2. Find the product price which are between 400 to 800

db.productlist.find({product_price:{$gte:400, $lte:800}})

[
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d5"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d6"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d7"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d8"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d9"),
      id: '5',
      product_name: 'Sleek Cotton Chair',
      product_price: 33,
      product_material: 'Fresh',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6da"),
      id: '6',
      product_name: 'Awesome Wooden Towels',
      product_price: 474,
      product_material: 'Plastic',
      product_color: 'orange'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6db"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6dc"),
      id: '8',
      product_name: 'Incredible Steel Hat',
      product_price: 78,
      product_material: 'Rubber',
      product_color: 'violet'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6dd"),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6de"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6df"),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e0"),
      id: '12',
      product_name: 'Unbranded Plastic Salad',
      product_price: 89,
      product_material: 'Wooden',
      product_color: 'pink'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e1"),
      id: '13',
      product_name: 'Gorgeous Cotton Keyboard',
      product_price: 37,
      product_material: 'Concrete',
      product_color: 'sky blue'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e2"),
      id: '14',
      product_name: 'Incredible Steel Shirt',
      product_price: 54,
      product_material: 'Metal',
      product_color: 'white'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e3"),
      id: '15',
      product_name: 'Ergonomic Cotton Hat',
      product_price: 43,
      product_material: 'Rubber',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e4"),
      id: '16',
      product_name: 'Small Soft Chair',
      product_price: 47,
      product_material: 'Cotton',
      product_color: 'teal'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e5"),
      id: '17',
      product_name: 'Incredible Metal Car',
      product_price: 36,
      product_material: 'Fresh',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e6"),
      id: '18',
      product_name: 'Licensed Plastic Bacon',
      product_price: 88,
      product_material: 'Steel',
      product_color: 'yellow'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e7"),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e8"),
      id: '20',
      product_name: 'Handcrafted Wooden Bacon',
      product_price: 36,
      product_material: 'Concrete',
      product_color: 'lime'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e9"),
      id: '21',
      product_name: 'Unbranded Granite Chicken',
      product_price: 90,
      product_material: 'Metal',
      product_color: 'gold'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ea"),
      id: '22',
      product_name: 'Ergonomic Soft Hat',
      product_price: 99,
      product_material: 'Rubber',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6eb"),
      id: '23',
      product_name: 'Intelligent Steel Pizza',
      product_price: 95,
      product_material: 'Cotton',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ec"),
      id: '24',
      product_name: 'Tasty Rubber Cheese',
      product_price: 47,
      product_material: 'Frozen',
      product_color: 'orchid'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ed"),
      id: '25',
      product_name: 'Licensed Steel Car',
      product_price: 20,
      product_material: 'Cotton',
      product_color: 'indigo'
    }
  ]
  products> db.productlist.find({product_price:{$gte:400, $lte:800}})
  [
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d5"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d7"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d8"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6da"),
      id: '6',
      product_name: 'Awesome Wooden Towels',
      product_price: 474,
      product_material: 'Plastic',
      product_color: 'orange'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6db"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    }
  ]





//   3.Find the product price which are not between 400 to 600


db.productlist.find({product_price:{$not:{$gte:400, $lte:800}}}).toArray()

[
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d6"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d9"),
      id: '5',
      product_name: 'Sleek Cotton Chair',
      product_price: 33,
      product_material: 'Fresh',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6dc"),
      id: '8',
      product_name: 'Incredible Steel Hat',
      product_price: 78,
      product_material: 'Rubber',
      product_color: 'violet'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6dd"),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6de"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6df"),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e0"),
      id: '12',
      product_name: 'Unbranded Plastic Salad',
      product_price: 89,
      product_material: 'Wooden',
      product_color: 'pink'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e1"),
      id: '13',
      product_name: 'Gorgeous Cotton Keyboard',
      product_price: 37,
      product_material: 'Concrete',
      product_color: 'sky blue'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e2"),
      id: '14',
      product_name: 'Incredible Steel Shirt',
      product_price: 54,
      product_material: 'Metal',
      product_color: 'white'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e3"),
      id: '15',
      product_name: 'Ergonomic Cotton Hat',
      product_price: 43,
      product_material: 'Rubber',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e4"),
      id: '16',
      product_name: 'Small Soft Chair',
      product_price: 47,
      product_material: 'Cotton',
      product_color: 'teal'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e5"),
      id: '17',
      product_name: 'Incredible Metal Car',
      product_price: 36,
      product_material: 'Fresh',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e6"),
      id: '18',
      product_name: 'Licensed Plastic Bacon',
      product_price: 88,
      product_material: 'Steel',
      product_color: 'yellow'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e7"),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e8"),
      id: '20',
      product_name: 'Handcrafted Wooden Bacon',
      product_price: 36,
      product_material: 'Concrete',
      product_color: 'lime'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e9"),
      id: '21',
      product_name: 'Unbranded Granite Chicken',
      product_price: 90,
      product_material: 'Metal',
      product_color: 'gold'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ea"),
      id: '22',
      product_name: 'Ergonomic Soft Hat',
      product_price: 99,
      product_material: 'Rubber',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6eb"),
      id: '23',
      product_name: 'Intelligent Steel Pizza',
      product_price: 95,
      product_material: 'Cotton',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ec"),
      id: '24',
      product_name: 'Tasty Rubber Cheese',
      product_price: 47,
      product_material: 'Frozen',
      product_color: 'orchid'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ed"),
      id: '25',
      product_name: 'Licensed Steel Car',
      product_price: 20,
      product_material: 'Cotton',
      product_color: 'indigo'
    }
  ]

//   4.List the four product which are grater than 500 in price 

db.productlist.find({product_price:{$gte:500}}).limit(4)

[
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d5"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d6"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d7"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6db"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    }
  ]




//   5.Find the product name and product material of each products


db.productlist.find().forEach(function(prod){print("product_name:" + prod.product_name , "product_material:" + prod.product_material)})


product_name:Intelligent Fresh Chips product_material:Concrete
product_name:Practical Fresh Sausages product_material:Cotton
product_name:Refined Steel Car product_material:Rubber
product_name:Gorgeous Plastic Pants product_material:Soft
product_name:Sleek Cotton Chair product_material:Fresh
product_name:Awesome Wooden Towels product_material:Plastic
product_name:Practical Soft Shoes product_material:Rubber
product_name:Incredible Steel Hat product_material:Rubber
product_name:Awesome Wooden Ball product_material:Soft
product_name:Generic Wooden Pizza product_material:Frozen
product_name:Unbranded Wooden Cheese product_material:Soft
product_name:Unbranded Plastic Salad product_material:Wooden
product_name:Gorgeous Cotton Keyboard product_material:Concrete
product_name:Incredible Steel Shirt product_material:Metal
product_name:Ergonomic Cotton Hat product_material:Rubber
product_name:Small Soft Chair product_material:Cotton
product_name:Incredible Metal Car product_material:Fresh
product_name:Licensed Plastic Bacon product_material:Steel
product_name:Intelligent Cotton Chips product_material:Soft
product_name:Handcrafted Wooden Bacon product_material:Concrete
product_name:Unbranded Granite Chicken product_material:Metal
product_name:Ergonomic Soft Hat product_material:Rubber
product_name:Intelligent Steel Pizza product_material:Cotton
product_name:Tasty Rubber Cheese product_material:Frozen
product_name:Licensed Steel Car product_material:Cotton




//  6. Find the product with a row id of 10

db.productlist.find({'id': '10'})

[
    {
      _id: ObjectId("648b0be15d8cfc9474dac6de"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    }
  ]



//   7.Find only the product name and product material

db.productlist.find().forEach(function(prod){print("product_name:" + prod.product_name , "product_material:" + prod.product_material)})


product_name:Intelligent Fresh Chips product_material:Concrete
product_name:Practical Fresh Sausages product_material:Cotton
product_name:Refined Steel Car product_material:Rubber
product_name:Gorgeous Plastic Pants product_material:Soft
product_name:Sleek Cotton Chair product_material:Fresh
product_name:Awesome Wooden Towels product_material:Plastic
product_name:Practical Soft Shoes product_material:Rubber
product_name:Incredible Steel Hat product_material:Rubber
product_name:Awesome Wooden Ball product_material:Soft
product_name:Generic Wooden Pizza product_material:Frozen
product_name:Unbranded Wooden Cheese product_material:Soft
product_name:Unbranded Plastic Salad product_material:Wooden
product_name:Gorgeous Cotton Keyboard product_material:Concrete
product_name:Incredible Steel Shirt product_material:Metal
product_name:Ergonomic Cotton Hat product_material:Rubber
product_name:Small Soft Chair product_material:Cotton
product_name:Incredible Metal Car product_material:Fresh
product_name:Licensed Plastic Bacon product_material:Steel
product_name:Intelligent Cotton Chips product_material:Soft
product_name:Handcrafted Wooden Bacon product_material:Concrete
product_name:Unbranded Granite Chicken product_material:Metal
product_name:Ergonomic Soft Hat product_material:Rubber
product_name:Intelligent Steel Pizza product_material:Cotton
product_name:Tasty Rubber Cheese product_material:Frozen
product_name:Licensed Steel Car product_material:Cotton



// 8.Find all products which contain the value of soft in product material 

db.productlist.find({'product_material' :'Soft'})

[
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d8"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6dd"),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6df"),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e7"),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    }
  ]




//   9.Find products which contain product color indigo  and product price 492.00

db.productlist.find({$or:[{'product_color':'indigo'},{'product_price': '492.00'}]})

[
    {
      _id: ObjectId("648b0be15d8cfc9474dac6d6"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6de"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6e5"),
      id: '17',
      product_name: 'Incredible Metal Car',
      product_price: 36,
      product_material: 'Fresh',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("648b0be15d8cfc9474dac6ed"),
      id: '25',
      product_name: 'Licensed Steel Car',
      product_price: 20,
      product_material: 'Cotton',
      product_color: 'indigo'
    }
  ]


//   10.Delete the products which product price value are same

db.productlist.aggregate([
    {$group :{
        _id:"$product_name",
        duplicate:{$addToSet: "$_id"},
        Totalcount : {$sum : 1}

    }},
    {
        $match : {
            Totalcount : {$gt:1}
        }
    }
]).forEach((doc)=>{
    print(doc.duplicate)
})

[
    {
      _id: 'Refined Steel Car',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6d7") ],
      count: 1
    },
    {
      _id: 'Incredible Steel Shirt',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e2") ],
      count: 1
    },
    {
      _id: 'Practical Fresh Sausages',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6d6") ],
      count: 1
    },
    {
      _id: 'Sleek Cotton Chair',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6d9") ],
      count: 1
    },
    {
      _id: 'Gorgeous Plastic Pants',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6d8") ],
      count: 1
    },
    {
      _id: 'Small Soft Chair',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e4") ],
      count: 1
    },
    {
      _id: 'Handcrafted Wooden Bacon',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e8") ],
      count: 1
    },
    {
      _id: 'Unbranded Wooden Cheese',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6df") ],
      count: 1
    },
    {
      _id: 'Practical Soft Shoes',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6db") ],
      count: 1
    },
    {
      _id: 'Incredible Steel Hat',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6dc") ],
      count: 1
    },
    {
      _id: 'Awesome Wooden Ball',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6dd") ],
      count: 1
    },
    {
      _id: 'Intelligent Cotton Chips',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e7") ],
      count: 1
    },
    {
      _id: 'Unbranded Granite Chicken',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e9") ],
      count: 1
    },
    {
      _id: 'Ergonomic Soft Hat',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6ea") ],
      count: 1
    },
    {
      _id: 'Intelligent Steel Pizza',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6eb") ],
      count: 1
    },
    {
      _id: 'Tasty Rubber Cheese',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6ec") ],
      count: 1
    },
    {
      _id: 'Licensed Steel Car',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6ed") ],
      count: 1
    },
    {
      _id: 'Gorgeous Cotton Keyboard',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e1") ],
      count: 1
    },
    {
      _id: 'Licensed Plastic Bacon',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e6") ],
      count: 1
    },
    {
      _id: 'Unbranded Plastic Salad',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e0") ],
      count: 1
    },
    {
      _id: 'Intelligent Fresh Chips',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6d5") ],
      count: 1
    },
    {
      _id: 'Generic Wooden Pizza',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6de") ],
      count: 1
    },
    {
      _id: 'Ergonomic Cotton Hat',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e3") ],
      count: 1
    },
    {
      _id: 'Awesome Wooden Towels',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6da") ],
      count: 1
    },
    {
      _id: 'Incredible Metal Car',
      duplicate: [ ObjectId("648b0be15d8cfc9474dac6e5") ],
      count: 1
    }
]


