
/** fraction_to_decimals indexes **/
db.getCollection("fraction_to_decimals").ensureIndex({
  "_id": 1
},[
  
]);

/** ingredient_instructions indexes **/
db.getCollection("ingredient_instructions").ensureIndex({
  "_id": 1
},[
  
]);

/** ingredient_types indexes **/
db.getCollection("ingredient_types").ensureIndex({
  "_id": 1
},[
  
]);

/** ingredients indexes **/
db.getCollection("ingredients").ensureIndex({
  "_id": 1
},[
  
]);

/** menus indexes **/
db.getCollection("menus").ensureIndex({
  "_id": 1
},[
  
]);

/** recipes indexes **/
db.getCollection("recipes").ensureIndex({
  "_id": 1
},[
  
]);

/** tags indexes **/
db.getCollection("tags").ensureIndex({
  "_id": 1
},[
  
]);

/** units indexes **/
db.getCollection("units").ensureIndex({
  "_id": 1
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": 1
},[
  
]);

/** fraction_to_decimals records **/
db.getCollection("fraction_to_decimals").insert({
  "_id": ObjectId("4d5672713d3f95700f000002"),
  "decimal": 0.0625,
  "fraction": "1\/16"
});
db.getCollection("fraction_to_decimals").insert({
  "_id": ObjectId("4d5679613d3f95580f000000"),
  "fraction": "1\/8",
  "decimal": 0.125
});
db.getCollection("fraction_to_decimals").insert({
  "_id": ObjectId("4d56796f3d3f95580f000001"),
  "fraction": "1\/4",
  "decimal": 0.25
});
db.getCollection("fraction_to_decimals").insert({
  "_id": ObjectId("4d5679793d3f95580f000002"),
  "fraction": "1\/2",
  "decimal": 0.5
});
db.getCollection("fraction_to_decimals").insert({
  "_id": ObjectId("4d56798d3d3f95580f000003"),
  "fraction": "3\/4",
  "decimal": 0.75
});
db.getCollection("fraction_to_decimals").insert({
  "_id": ObjectId("4d5679973d3f95580f000004"),
  "fraction": "1\/3",
  "decimal": 0.3333
});
db.getCollection("fraction_to_decimals").insert({
  "_id": ObjectId("4d5679a23d3f95580f000005"),
  "fraction": "2\/3",
  "decimal": 0.6666
});

/** ingredient_instructions records **/
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5032103d3f954c0d000007"),
  "instruction": "chopped",
  "modified": "Mon, 07 Feb 2011 12:55:28 -0500",
  "created": "Mon, 07 Feb 2011 12:55:28 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d504c0b3d3f95900d000021"),
  "instruction": "julienned",
  "modified": "Mon, 07 Feb 2011 14:46:19 -0500",
  "created": "Mon, 07 Feb 2011 14:46:19 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d504c0b3d3f95900d000022"),
  "instruction": "chopped finely",
  "modified": "Mon, 07 Feb 2011 14:46:19 -0500",
  "created": "Mon, 07 Feb 2011 14:46:19 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5065573d3f95e801000014"),
  "instruction": "",
  "modified": "Mon, 07 Feb 2011 16:34:15 -0500",
  "created": "Mon, 07 Feb 2011 16:34:15 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5603a83d3f95180f000003"),
  "instruction": "cold",
  "modified": "Fri, 11 Feb 2011 22:51:04 -0500",
  "created": "Fri, 11 Feb 2011 22:51:04 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5603a83d3f95180f000004"),
  "instruction": "cooked according to directions",
  "modified": "Fri, 11 Feb 2011 22:51:04 -0500",
  "created": "Fri, 11 Feb 2011 22:51:04 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d56041a3d3f951c0f000003"),
  "instruction": "sliced",
  "modified": "Fri, 11 Feb 2011 22:52:58 -0500",
  "created": "Fri, 11 Feb 2011 22:52:58 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000c"),
  "instruction": "pulverized",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000d"),
  "instruction": "thawed",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000e"),
  "instruction": "toasted ",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5732a43d3f951c0a000012"),
  "instruction": "diced",
  "modified": "Sat, 12 Feb 2011 20:23:48 -0500",
  "created": "Sat, 12 Feb 2011 20:23:48 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5735283d3f95880a00001a"),
  "instruction": "sliced thinly",
  "modified": "Sat, 12 Feb 2011 20:34:32 -0500",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5735283d3f95880a00001b"),
  "instruction": "minced",
  "modified": "Sat, 12 Feb 2011 20:34:32 -0500",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5735283d3f95880a00001c"),
  "instruction": "rinsed and drained",
  "modified": "Sat, 12 Feb 2011 20:34:32 -0500",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d581ab33d3f95480a00000e"),
  "instruction": "peeled, seeded and finely choppe",
  "modified": "Sun, 13 Feb 2011 12:53:55 -0500",
  "created": "Sun, 13 Feb 2011 12:53:55 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4d5822763d3f951c0a00001e"),
  "instruction": "to taste",
  "modified": "Sun, 13 Feb 2011 13:27:02 -0500",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b000009"),
  "instruction": "smashed",
  "modified": "Wed, 07 Sep 2011 16:01:16 -0400",
  "created": "Wed, 07 Sep 2011 16:01:16 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b00000a"),
  "instruction": "grated",
  "modified": "Wed, 07 Sep 2011 16:01:16 -0400",
  "created": "Wed, 07 Sep 2011 16:01:16 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b000014"),
  "instruction": "torn apart",
  "modified": "Wed, 07 Sep 2011 16:29:26 -0400",
  "created": "Wed, 07 Sep 2011 16:29:26 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b000015"),
  "instruction": "seeded and finely chopped",
  "modified": "Wed, 07 Sep 2011 16:29:26 -0400",
  "created": "Wed, 07 Sep 2011 16:29:26 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b000016"),
  "instruction": "roughly chopped",
  "modified": "Wed, 07 Sep 2011 16:29:26 -0400",
  "created": "Wed, 07 Sep 2011 16:29:26 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000008"),
  "instruction": "juiced and rind saved",
  "modified": "Thu, 08 Sep 2011 20:45:23 -0400",
  "created": "Thu, 08 Sep 2011 20:45:23 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000008"),
  "instruction": "pitted and chopped",
  "modified": "Thu, 08 Sep 2011 21:00:59 -0400",
  "created": "Thu, 08 Sep 2011 21:00:59 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e69678abad4a2bc2100000e"),
  "instruction": "bashed in a mortar and pestle",
  "modified": "Thu, 08 Sep 2011 21:10:34 -0400",
  "created": "Thu, 08 Sep 2011 21:10:34 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000007"),
  "instruction": "trimmed and cut into 2 inch lengths",
  "modified": "Tue, 13 Sep 2011 17:59:03 -0400",
  "created": "Tue, 13 Sep 2011 17:59:03 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000008"),
  "instruction": "strings removed",
  "modified": "Tue, 13 Sep 2011 17:59:03 -0400",
  "created": "Tue, 13 Sep 2011 17:59:03 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000009"),
  "instruction": "pitted, peeled and mashed",
  "modified": "Tue, 13 Sep 2011 17:59:03 -0400",
  "created": "Tue, 13 Sep 2011 17:59:03 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a00000a"),
  "instruction": "(optional)",
  "modified": "Tue, 13 Sep 2011 17:59:03 -0400",
  "created": "Tue, 13 Sep 2011 17:59:03 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a00000b"),
  "instruction": "shredded",
  "modified": "Tue, 13 Sep 2011 17:59:03 -0400",
  "created": "Tue, 13 Sep 2011 17:59:03 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e71e013bad4a2401b000003"),
  "instruction": "pressed",
  "modified": "Thu, 15 Sep 2011 07:22:59 -0400",
  "created": "Thu, 15 Sep 2011 07:22:59 -0400"
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e8f41ea7f8b9a410b000008"),
  "instruction": "peeled and sliced",
  "modified": ISODate("2011-10-07T18:16:10.613Z"),
  "created": ISODate("2011-10-07T18:16:10.613Z")
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e8f41ea7f8b9a410b000009"),
  "instruction": "picked, torn and beat up",
  "modified": ISODate("2011-10-07T18:16:10.618Z"),
  "created": ISODate("2011-10-07T18:16:10.618Z")
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e8f460a7f8b9a470b000005"),
  "instruction": "sliced ",
  "modified": ISODate("2011-10-07T18:33:46.340Z"),
  "created": ISODate("2011-10-07T18:33:46.340Z")
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000006"),
  "instruction": "peeled",
  "modified": ISODate("2011-10-07T19:25:54.900Z"),
  "created": ISODate("2011-10-07T19:25:54.900Z")
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000007"),
  "instruction": "seeded and sliced",
  "modified": ISODate("2011-10-07T19:25:54.103Z"),
  "created": ISODate("2011-10-07T19:25:54.103Z")
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000008"),
  "instruction": "zested",
  "modified": ISODate("2011-10-07T19:25:54.110Z"),
  "created": ISODate("2011-10-07T19:25:54.110Z")
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4e8f53eb7f8b9a410b000010"),
  "instruction": "peeled, sliced",
  "modified": ISODate("2011-10-07T19:32:59.160Z"),
  "created": ISODate("2011-10-07T19:32:59.161Z")
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4ee00149527cb1020b000007"),
  "instruction": "finely sliced",
  "modified": ISODate("2011-12-08T00:14:01.314Z"),
  "created": ISODate("2011-12-08T00:14:01.315Z")
});
db.getCollection("ingredient_instructions").insert({
  "_id": ObjectId("4ee00149527cb1020b000008"),
  "instruction": "torn",
  "modified": ISODate("2011-12-08T00:14:01.320Z"),
  "created": ISODate("2011-12-08T00:14:01.320Z")
});

/** ingredient_types records **/
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d5068b83d3f95e801000017"),
  "ingredient_type": "produce"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d5068d53d3f95800e00002d"),
  "ingredient_type": "bakery"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d5069cb3d3f95600e000001"),
  "ingredient_type": "oils and vinegars"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d5069e93d3f957c0b000033"),
  "ingredient_type": "frozen"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d506a123d3f954c0d000008"),
  "ingredient_type": "canned fruits"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d506a243d3f95800e00002e"),
  "ingredient_type": "canned vegetables"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d506a573d3f954c0d000009"),
  "ingredient_type": "dried herbs and spices"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d506a723d3f954c0d00000a"),
  "ingredient_type": "dairy"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d56b7683d3f95880a000000"),
  "ingredient_type": "staples"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d56fa573d3f951c0a000003"),
  "ingredient_type": "frozen"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d56fd2c3d3f951c0a000004"),
  "ingredient_type": "seafood"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d57e7df3d3f95880a000021"),
  "ingredient_type": "beer and wine"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d5827193d3f95480a000012"),
  "ingredient_type": "baking supplies"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4d5827273d3f951c0a000020"),
  "ingredient_type": "asian"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4e67d5e7bad4a2881e000000"),
  "ingredient_type": "fresh herbs"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4e67d641bad4a2c415000000"),
  "ingredient_type": "condiments"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4e696973bad4a2a405000000"),
  "ingredient_type": "dried goods (Indian)"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4e6969b3bad4a2c41e000000"),
  "ingredient_type": "grains and pasta"
});
db.getCollection("ingredient_types").insert({
  "_id": ObjectId("4e6f4bc7bad4a29016000000"),
  "ingredient_type": "other"
});

/** ingredients records **/
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5016bf3d3f95900d000015"),
  "created": "Mon, 07 Feb 2011 10:58:54 -0500",
  "ingredient": "broccoli",
  "modified": "Mon, 07 Feb 2011 16:24:20 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5016d83d3f95e80100000e"),
  "created": "Mon, 07 Feb 2011 10:59:20 -0500",
  "ingredient": "olive oil",
  "modified": "Mon, 07 Feb 2011 16:55:13 -0500",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5027e23d3f95900d00001b"),
  "created": "Mon, 07 Feb 2011 12:12:02 -0500",
  "ingredient": "cheese",
  "modified": "Mon, 07 Feb 2011 16:56:11 -0500",
  "type": "dairy"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d504c0b3d3f95900d00001e"),
  "created": "Mon, 07 Feb 2011 14:46:19 -0500",
  "ingredient": "carrots",
  "modified": "Mon, 07 Feb 2011 16:33:10 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d50698f3d3f95600e000000"),
  "ingredient": "lettuce",
  "type": "produce",
  "modified": "Mon, 07 Feb 2011 16:52:28 -0500",
  "created": "Mon, 07 Feb 2011 16:52:15 -0500"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5018cc3d3f95900d000018"),
  "created": "Mon, 07 Feb 2011 11:07:40 -0500",
  "ingredient": "crushed red pepper",
  "modified": "Mon, 07 Feb 2011 16:55:44 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5603a83d3f95180f000001"),
  "created": "Fri, 11 Feb 2011 22:51:04 -0500",
  "ingredient": "pasta",
  "modified": "Sat, 12 Feb 2011 11:38:12 -0500",
  "type": "staples"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56041a3d3f951c0f000001"),
  "created": "Fri, 11 Feb 2011 22:52:58 -0500",
  "ingredient": "white rice",
  "modified": "Sat, 12 Feb 2011 11:38:19 -0500",
  "type": "staples"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56041a3d3f951c0f000002"),
  "created": "Fri, 11 Feb 2011 22:52:58 -0500",
  "ingredient": "onions",
  "modified": "Fri, 11 Feb 2011 22:53:17 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56b6723d3f957c00000000"),
  "created": "Sat, 12 Feb 2011 11:33:54 -0500",
  "ingredient": "red pepper",
  "modified": "Sat, 12 Feb 2011 11:38:27 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56b81f3d3f951c0a000001"),
  "created": "Sat, 12 Feb 2011 11:41:03 -0500",
  "ingredient": "white bread",
  "modified": "Tue, 13 Sep 2011 08:04:13 -0400",
  "type": "bakery"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000001"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "ground black pepper",
  "modified": "Sat, 12 Feb 2011 16:26:34 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000002"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "cayenne pepper",
  "modified": "Sat, 12 Feb 2011 16:27:12 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000003"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "chili powder",
  "modified": "Sat, 12 Feb 2011 16:27:29 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000004"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "onion",
  "modified": "Sat, 12 Feb 2011 16:27:44 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000005"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "quorn grounds",
  "modified": "Sat, 12 Feb 2011 16:27:55 -0500",
  "type": "frozen"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000006"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "sea salt",
  "modified": "Sat, 12 Feb 2011 16:28:06 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000007"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "eggs",
  "modified": "Sat, 12 Feb 2011 16:28:13 -0500",
  "type": "dairy"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000008"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "dijon mustard",
  "modified": "Sat, 12 Feb 2011 16:28:21 -0500",
  "type": "staples"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000009"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "bread",
  "modified": "Tue, 13 Sep 2011 08:03:45 -0400",
  "type": "bakery"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a000006"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "quorn chunks",
  "modified": "Sun, 13 Feb 2011 09:14:41 -0500",
  "type": "frozen"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a000007"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "kosher salt",
  "modified": "Sat, 12 Feb 2011 20:35:25 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a000008"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "mayonnaise",
  "modified": "Sat, 12 Feb 2011 20:35:49 -0500",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a000009"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "dry white wine",
  "modified": "Sun, 13 Feb 2011 09:17:15 -0500",
  "type": "beer and wine"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000a"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "chutney",
  "modified": "Wed, 07 Sep 2011 16:39:00 -0400",
  "type": "condiments"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000b"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "curry powder",
  "modified": "Sat, 12 Feb 2011 20:36:08 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000c"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "celery",
  "modified": "Sat, 12 Feb 2011 20:36:24 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000d"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "scallions",
  "modified": "Sat, 12 Feb 2011 20:36:42 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000e"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "raisins",
  "modified": "Sat, 10 Sep 2011 19:02:01 -0400",
  "type": "canned fruits"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000f"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "whole roasted cashews",
  "modified": "Sat, 10 Sep 2011 19:00:58 -0400",
  "type": "grains and pasta"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5732a43d3f951c0a000010"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "tortillas",
  "modified": "Tue, 13 Sep 2011 08:03:56 -0400",
  "type": "bakery"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5735283d3f95880a000012"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "green bell pepper",
  "modified": "Sat, 12 Feb 2011 20:37:09 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5735283d3f95880a000013"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "red bell pepper",
  "modified": "Sun, 13 Feb 2011 09:17:28 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5735283d3f95880a000014"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "black beans",
  "modified": "Sat, 12 Feb 2011 20:38:54 -0500",
  "type": "canned vegetables"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5735283d3f95880a000015"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "white vinegar",
  "modified": "Sat, 12 Feb 2011 20:38:31 -0500",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5735283d3f95880a000016"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "tabasco sauce",
  "modified": "Wed, 07 Sep 2011 16:44:37 -0400",
  "type": "condiments"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5735283d3f95880a000017"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "oregano",
  "modified": "Sat, 12 Feb 2011 20:38:11 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5735283d3f95880a000019"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "pepper",
  "modified": "Sat, 12 Feb 2011 20:37:28 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5735283d3f95880a000018"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "salt",
  "modified": "Sat, 12 Feb 2011 20:37:47 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000001"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "chickpeas",
  "modified": "Sun, 13 Feb 2011 12:54:45 -0500",
  "type": "canned vegetables"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000002"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "parsley",
  "modified": "Sun, 13 Feb 2011 12:55:46 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000003"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "egg",
  "modified": "Sun, 13 Feb 2011 12:57:45 -0500",
  "type": "dairy"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000004"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "ground cumin",
  "modified": "Sun, 13 Feb 2011 12:57:29 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b000003"),
  "created": "Wed, 07 Sep 2011 16:01:16 -0400",
  "ingredient": "zucchini",
  "modified": "Wed, 07 Sep 2011 16:44:01 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000005"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "ground coriander",
  "modified": "Sun, 13 Feb 2011 12:57:11 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000006"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "lemon juice",
  "modified": "Tue, 13 Sep 2011 08:27:26 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000007"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "baking powder",
  "modified": "Tue, 13 Sep 2011 07:56:21 -0400",
  "type": "baking supplies"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000008"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "bread crumbs",
  "modified": "Tue, 13 Sep 2011 08:04:29 -0400",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a000009"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "canola oil",
  "modified": "Sun, 13 Feb 2011 12:55:05 -0500",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a00000a"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "plain yogurt",
  "modified": "Sun, 13 Feb 2011 12:56:35 -0500",
  "type": "dairy"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a00000b"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "cucumber",
  "modified": "Sun, 13 Feb 2011 12:55:23 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d581ab23d3f95480a00000c"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "dill",
  "modified": "Sun, 13 Feb 2011 12:56:09 -0500",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5822753d3f951c0a000014"),
  "created": "Sun, 13 Feb 2011 13:27:01 -0500",
  "ingredient": "water",
  "modified": "Tue, 13 Sep 2011 08:26:17 -0400",
  "type": "other"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5822763d3f951c0a000015"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "smooth natural peanut butter",
  "modified": "Sat, 10 Sep 2011 19:02:24 -0400",
  "type": "condiments"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5822763d3f951c0a000016"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "rice vinegar",
  "modified": "Sun, 13 Feb 2011 13:29:09 -0500",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5822763d3f951c0a000017"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "reduced-sodium soy sauce",
  "modified": "Tue, 13 Sep 2011 08:04:48 -0400",
  "type": "asian"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5822763d3f951c0a000018"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "honey",
  "modified": "Sun, 11 Sep 2011 13:20:09 -0400",
  "type": "baking supplies"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5822763d3f951c0a000019"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "ginger",
  "modified": "Sun, 13 Feb 2011 13:29:49 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5822763d3f951c0a00001a"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "baby spinach",
  "modified": "Sun, 13 Feb 2011 13:28:41 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4d5822763d3f951c0a00001b"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "mushrooms",
  "modified": "Sun, 13 Feb 2011 13:29:29 -0500",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b000006"),
  "created": "Wed, 07 Sep 2011 16:01:16 -0400",
  "ingredient": "basil",
  "modified": "Wed, 07 Sep 2011 16:37:14 -0400",
  "type": "fresh herbs"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b000013"),
  "created": "Wed, 07 Sep 2011 16:29:26 -0400",
  "ingredient": "butter",
  "modified": "Wed, 07 Sep 2011 16:37:38 -0400",
  "type": "dairy"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b000012"),
  "created": "Wed, 07 Sep 2011 16:29:26 -0400",
  "ingredient": "fresh parsley",
  "modified": "Wed, 07 Sep 2011 16:39:21 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b000008"),
  "created": "Wed, 07 Sep 2011 16:01:16 -0400",
  "ingredient": "parmesan cheese",
  "modified": "Wed, 07 Sep 2011 16:40:19 -0400",
  "type": "dairy"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b000011"),
  "created": "Wed, 07 Sep 2011 16:29:26 -0400",
  "ingredient": "lemon",
  "modified": "Wed, 07 Sep 2011 16:40:38 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b000007"),
  "created": "Wed, 07 Sep 2011 16:01:16 -0400",
  "ingredient": "rosemary",
  "modified": "Wed, 07 Sep 2011 16:43:24 -0400",
  "type": "fresh herbs"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b000005"),
  "created": "Wed, 07 Sep 2011 16:01:16 -0400",
  "ingredient": "tomato",
  "modified": "Wed, 07 Sep 2011 16:43:38 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b00000f"),
  "created": "Wed, 07 Sep 2011 16:29:26 -0400",
  "ingredient": "wild mushrooms",
  "modified": "Wed, 07 Sep 2011 16:44:19 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b000004"),
  "created": "Wed, 07 Sep 2011 16:01:16 -0400",
  "ingredient": "squash",
  "modified": "Wed, 07 Sep 2011 16:44:56 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67df25bad4a2c415000002"),
  "created": "Wed, 07 Sep 2011 17:16:21 -0400",
  "ingredient": "cherry tomatoes",
  "modified": "Thu, 08 Sep 2011 20:30:24 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67df25bad4a2c415000003"),
  "created": "Wed, 07 Sep 2011 17:16:21 -0400",
  "ingredient": "black olives",
  "modified": "Tue, 13 Sep 2011 08:04:36 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67df25bad4a2c415000004"),
  "created": "Wed, 07 Sep 2011 17:16:21 -0400",
  "ingredient": "dried oregano",
  "modified": "Thu, 08 Sep 2011 20:30:56 -0400",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67df25bad4a2c415000005"),
  "created": "Wed, 07 Sep 2011 17:16:21 -0400",
  "ingredient": "dried chili",
  "modified": "Thu, 08 Sep 2011 21:21:47 -0400",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67df25bad4a2c415000006"),
  "created": "Wed, 07 Sep 2011 17:16:21 -0400",
  "ingredient": "fresh basil",
  "modified": "Thu, 08 Sep 2011 20:26:09 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000001"),
  "created": "Thu, 08 Sep 2011 20:45:23 -0400",
  "ingredient": "basmati rice",
  "modified": "Thu, 08 Sep 2011 21:20:02 -0400",
  "type": "grains and pasta"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000002"),
  "created": "Thu, 08 Sep 2011 20:45:23 -0400",
  "ingredient": "cooking oil",
  "modified": "Thu, 08 Sep 2011 21:20:41 -0400",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000003"),
  "created": "Thu, 08 Sep 2011 20:45:23 -0400",
  "ingredient": "mustard seeds",
  "modified": "Sun, 11 Sep 2011 13:31:48 -0400",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000004"),
  "created": "Thu, 08 Sep 2011 20:45:23 -0400",
  "ingredient": "urad dhal",
  "modified": "Thu, 08 Sep 2011 21:19:05 -0400",
  "type": "dried goods (Indian)"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000005"),
  "created": "Thu, 08 Sep 2011 20:45:23 -0400",
  "ingredient": "curry leaves",
  "modified": "Sun, 11 Sep 2011 13:19:09 -0400",
  "type": "fresh herbs"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000006"),
  "created": "Thu, 08 Sep 2011 20:45:23 -0400",
  "ingredient": "cilantro",
  "modified": "Thu, 08 Sep 2011 21:15:31 -0400",
  "type": "fresh herbs"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000002"),
  "created": "Thu, 08 Sep 2011 21:00:59 -0400",
  "ingredient": "pasta shells",
  "modified": "Thu, 08 Sep 2011 21:20:25 -0400",
  "type": "grains and pasta"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000003"),
  "created": "Thu, 08 Sep 2011 21:00:59 -0400",
  "ingredient": "yellow cherry tomatoes",
  "modified": "Thu, 08 Sep 2011 21:20:58 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000004"),
  "created": "Thu, 08 Sep 2011 21:00:59 -0400",
  "ingredient": "red cherry tomatoes",
  "modified": "Thu, 08 Sep 2011 21:16:09 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000005"),
  "created": "Thu, 08 Sep 2011 21:00:59 -0400",
  "ingredient": "fresh chives",
  "modified": "Thu, 08 Sep 2011 21:23:01 -0400",
  "type": "fresh herbs"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000006"),
  "created": "Thu, 08 Sep 2011 21:00:59 -0400",
  "ingredient": "white wine vinegar",
  "modified": "Thu, 08 Sep 2011 21:22:22 -0400",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000007"),
  "created": "Thu, 08 Sep 2011 21:00:59 -0400",
  "ingredient": "extra virgin olive oil",
  "modified": "Thu, 08 Sep 2011 21:16:33 -0400",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e69678abad4a2bc2100000b"),
  "created": "Thu, 08 Sep 2011 21:10:34 -0400",
  "ingredient": "yukon gold potatoes",
  "modified": "Thu, 08 Sep 2011 21:21:11 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e69678abad4a2bc2100000c"),
  "created": "Thu, 08 Sep 2011 21:10:34 -0400",
  "ingredient": "fresh rosemary",
  "modified": "Thu, 08 Sep 2011 21:15:53 -0400",
  "type": "fresh herbs"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b000010"),
  "created": "Wed, 07 Sep 2011 16:29:26 -0400",
  "ingredient": "chili",
  "modified": "Sun, 11 Sep 2011 13:17:21 -0400",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000001"),
  "created": "Tue, 13 Sep 2011 17:59:03 -0400",
  "ingredient": "asparagus",
  "modified": "Wed, 14 Sep 2011 19:49:22 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000002"),
  "created": "Tue, 13 Sep 2011 17:59:03 -0400",
  "ingredient": "sugar snap peas",
  "modified": "Wed, 14 Sep 2011 19:48:35 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000003"),
  "created": "Tue, 13 Sep 2011 17:59:03 -0400",
  "ingredient": "avocado",
  "modified": "Wed, 14 Sep 2011 19:49:11 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000004"),
  "created": "Tue, 13 Sep 2011 17:59:03 -0400",
  "ingredient": "mint",
  "modified": "Wed, 14 Sep 2011 19:48:59 -0400",
  "type": "fresh herbs"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000005"),
  "created": "Tue, 13 Sep 2011 17:59:03 -0400",
  "ingredient": "pine nuts",
  "modified": "Wed, 14 Sep 2011 19:48:43 -0400",
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e71e013bad4a2401b000001"),
  "created": "Thu, 15 Sep 2011 07:22:59 -0400",
  "ingredient": "coconut oil",
  "modified": "Fri, 16 Sep 2011 16:49:57 -0400",
  "type": "oils and vinegars"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e71e013bad4a2401b000002"),
  "created": "Thu, 15 Sep 2011 07:22:59 -0400",
  "ingredient": "lime juice",
  "modified": "Fri, 16 Sep 2011 16:50:03 -0400",
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f4f597f8b9a450b000001"),
  "created": ISODate("2011-10-07T19:13:29.790Z"),
  "ingredient": "all american boca burger",
  "modified": ISODate("2011-12-10T16:07:48.836Z"),
  "type": "frozen"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f53eb7f8b9a410b00000e"),
  "created": ISODate("2011-10-07T19:32:59.129Z"),
  "ingredient": "chicory",
  "modified": ISODate("2011-12-10T16:08:13.230Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f460a7f8b9a470b000004"),
  "created": ISODate("2011-10-07T18:33:46.333Z"),
  "ingredient": "yellow mustard",
  "modified": ISODate("2011-12-08T00:21:48.250Z"),
  "type": "condiments"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4ee00149527cb1020b000004"),
  "created": ISODate("2011-12-08T00:14:01.295Z"),
  "ingredient": "whole plum tomatoes",
  "modified": ISODate("2011-12-08T00:22:26.537Z"),
  "type": "canned vegetables"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4ee00149527cb1020b000002"),
  "created": ISODate("2011-12-08T00:14:01.285Z"),
  "ingredient": "garlic",
  "modified": ISODate("2011-12-10T16:04:27.418Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f53eb7f8b9a410b00000d"),
  "created": ISODate("2011-10-07T19:32:59.124Z"),
  "ingredient": "swiss chard",
  "modified": ISODate("2011-12-10T16:08:54.840Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f460a7f8b9a470b000001"),
  "created": ISODate("2011-10-07T18:33:46.308Z"),
  "ingredient": "tofurkey italian sausage",
  "modified": ISODate("2011-12-10T16:09:47.673Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f53eb7f8b9a410b00000f"),
  "created": ISODate("2011-10-07T19:32:59.145Z"),
  "ingredient": "arugala",
  "modified": ISODate("2011-12-10T16:05:37.190Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000002"),
  "created": ISODate("2011-10-07T19:25:54.590Z"),
  "ingredient": "buffalo mozzarella",
  "modified": ISODate("2011-12-10T16:05:42.457Z"),
  "type": "dairy"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f41ea7f8b9a410b000007"),
  "created": ISODate("2011-10-07T18:16:10.598Z"),
  "ingredient": "crushed tomatoes",
  "modified": ISODate("2011-12-10T16:05:48.950Z"),
  "type": "canned vegetables"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000001"),
  "created": ISODate("2011-10-07T19:25:54.490Z"),
  "ingredient": "ciabatta bread",
  "modified": ISODate("2011-12-10T16:05:58.138Z"),
  "type": "bakery"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f41ea7f8b9a410b000006"),
  "created": ISODate("2011-10-07T18:16:10.593Z"),
  "ingredient": "fresh basil leaves",
  "modified": ISODate("2011-12-10T16:06:06.805Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000003"),
  "created": ISODate("2011-10-07T19:25:54.660Z"),
  "ingredient": "fresh ground black pepper",
  "modified": ISODate("2011-12-10T16:06:13.683Z"),
  "type": "dried herbs and spices"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f460a7f8b9a470b000002"),
  "created": ISODate("2011-10-07T18:33:46.316Z"),
  "ingredient": "green pepper",
  "modified": ISODate("2011-12-10T16:06:18.414Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f4f597f8b9a450b000002"),
  "created": ISODate("2011-10-07T19:13:29.795Z"),
  "ingredient": "hamburger bun",
  "modified": ISODate("2011-12-10T16:06:22.955Z"),
  "type": "bakery"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f4f597f8b9a450b000006"),
  "created": ISODate("2011-10-07T19:13:29.823Z"),
  "ingredient": "ketchup",
  "modified": ISODate("2011-12-10T16:06:29.755Z"),
  "type": "condiments"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f4f597f8b9a450b000003"),
  "created": ISODate("2011-10-07T19:13:29.800Z"),
  "ingredient": "lettuce leaves",
  "modified": ISODate("2011-12-10T16:06:34.750Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f39e27f8b9a410b000001"),
  "created": ISODate("2011-10-07T17:41:54.741Z"),
  "ingredient": "milk",
  "modified": ISODate("2011-12-10T16:06:42.273Z"),
  "type": "dairy"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f4f597f8b9a450b000005"),
  "created": ISODate("2011-10-07T19:13:29.818Z"),
  "ingredient": "mustard",
  "modified": ISODate("2011-12-10T16:06:57.104Z"),
  "type": "condiments"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f4f597f8b9a450b000004"),
  "created": ISODate("2011-10-07T19:13:29.810Z"),
  "ingredient": "pickles",
  "modified": ISODate("2011-12-10T16:07:03.938Z"),
  "type": "condiments"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000004"),
  "created": ISODate("2011-10-07T19:25:54.710Z"),
  "ingredient": "red chili",
  "modified": ISODate("2011-12-10T16:07:14.449Z"),
  "type": "produce"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4e8f460a7f8b9a470b000003"),
  "created": ISODate("2011-10-07T18:33:46.328Z"),
  "ingredient": "sub rolls",
  "modified": ISODate("2011-12-10T16:07:20.408Z"),
  "type": "bakery"
});
db.getCollection("ingredients").insert({
  "_id": ObjectId("4ee49e14527cb1943c000008"),
  "ingredient": "black pepper",
  "type": "",
  "modified": ISODate("2011-12-11T12:12:04.290Z"),
  "created": ISODate("2011-12-11T12:12:04.293Z")
});

/** menus records **/

/** recipes records **/
db.getCollection("recipes").insert({
  "_id": ObjectId("4e69678abad4a2bc2100000a"),
  "created": "Thu, 08 Sep 2011 21:10:34 -0400",
  "description": "",
  "ingredients": [
    {
      "whole": "2",
      "fraction": "",
      "unit": "lbs.",
      "ingredient": "yukon gold potatoes",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "sea salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "fresh rosemary",
      "instruction": "bashed in a mortar and pestle"
    }
  ],
  "instructions": "1. Pre heat the oven to 425F\r\n2. Wash the potatoes and parboil\r\n3. When done drain them\r\n4. Give the potatoes an even amount of olive oil\r\n5. Roll the potatoes in sea salt, black pepper, and rosemary\r\n6. Bake for 20 minutes or until golden ",
  "modified": "Thu, 08 Sep 2011 21:10:34 -0400",
  "name": "baked new potatoes with sea salt and rosemary",
  "prep_time": "45",
  "servings": "4",
  "tags": "Starch"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4d56b81f3d3f951c0a000000"),
  "access": "private",
  "cook_time": "5",
  "created": "Sat, 12 Feb 2011 11:41:03 -0500",
  "description": "cheesey crispy goodness",
  "ingredients": [
    {
      "whole": "4",
      "fraction": "",
      "unit": "slices",
      "ingredient": "white bread",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "slices",
      "ingredient": "cheese",
      "instruction": ""
    }
  ],
  "instructions": "take bread toast with cheese",
  "modified": ISODate("2011-09-24T16:52:22.439Z"),
  "name": "grilled cheese",
  "prep_time": "5",
  "servings": "2",
  "tags": "Basic"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e8f43167f8b9a410b00000a"),
  "name": "basic pasta",
  "access": "public",
  "servings": "2",
  "prep_time": "5",
  "cook_time": "15",
  "tags": "Italian, Carbohydrates",
  "description": "",
  "instructions": "1. Bring a large pot of salted water to a rolling boil\r\n2. Add pasta and cook until al dente. The time to do this depends in the thickness of the pasta. Read the directions",
  "ingredients": [
    {
      "whole": "8",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "pasta",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": "to taste"
    }
  ],
  "modified": ISODate("2011-10-07T18:21:10.957Z"),
  "created": ISODate("2011-10-07T18:21:10.958Z")
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e67cb60bad4a2bc1b000000"),
  "created": "Wed, 07 Sep 2011 15:52:00 -0400",
  "description": "Simple pasta dinner with olive oil and fresh veggies",
  "ingredients": [
    {
      "whole": "2",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "small",
      "ingredient": "onion",
      "instruction": "sliced"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "cup ",
      "ingredient": "carrots",
      "instruction": "sliced"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "small",
      "ingredient": "red bell pepper",
      "instruction": "chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "medium",
      "ingredient": "zucchini",
      "instruction": "sliced"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "medium",
      "ingredient": "squash",
      "instruction": "sliced"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "small",
      "ingredient": "tomato",
      "instruction": "chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "basil",
      "instruction": "chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "oregano",
      "instruction": "chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "rosemary",
      "instruction": "smashed"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "parsley",
      "instruction": "smashed"
    },
    {
      "whole": "16",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "pasta",
      "instruction": "cooked according to directions"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "sea salt",
      "instruction": "to taste"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": "to taste"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "parmesan cheese",
      "instruction": "grated"
    }
  ],
  "instructions": "1. Cook pasta according to directions.\r\n2. Heat olive oil in a non-stick skillet over medium heat.\r\n3. Add garlic\r\n4. Add onions cook until clear\r\n5. Add remaining vegetables  and saute until tender\r\n6. Add herbs and cook a little more\r\n7. Toss with cooked pasta\r\n8. Sprinkle with cheese and pepper ",
  "modified": "Wed, 07 Sep 2011 16:01:16 -0400",
  "name": "fresh vegetable pasta",
  "prep_time": "30",
  "servings": "4",
  "tags": "Veggie, Pasta"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e67d0a9bad4a2bc1b00000d"),
  "created": "Wed, 07 Sep 2011 16:14:33 -0400",
  "description": "",
  "ingredients": [
    {
      "whole": "11",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "wild mushrooms",
      "instruction": "torn apart"
    },
    {
      "whole": "4",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "chopped finely"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "small",
      "ingredient": "chili",
      "instruction": "seeded and finely chopped"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": "to taste"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "pepper",
      "instruction": "to taste"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "lemon",
      "instruction": ""
    },
    {
      "whole": "16",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "pasta",
      "instruction": "cooked according to directions"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "parmesan cheese",
      "instruction": "grated"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "handful",
      "ingredient": "fresh parsley",
      "instruction": "roughly chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "butter",
      "instruction": ""
    }
  ],
  "instructions": "1. Cook pasta\r\n2. Heat olive oil very hot but not smoking\r\n3. Add mushrooms, salt and pepper. Fry quickly.\r\n4. Add garlic and chili and cook for a couple of minutes\r\n5. Turn off the heat\r\n6. Add butter, parsley, and some lemon juice\r\n7. Toss and add parmesan\r\n8. Add in the pasta and a little bit of pasta water to keep the sauce moist.\r\n9. Plate and sprinkle with parsley and cheese.\r\n10. Garnish with lemon.",
  "modified": "Wed, 07 Sep 2011 16:29:26 -0400",
  "name": "spaghetti with wild mushrooms",
  "prep_time": "25",
  "servings": "4",
  "tags": "Italian, Dinner\r\n"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e67df25bad4a2c415000001"),
  "created": "Wed, 07 Sep 2011 17:16:21 -0400",
  "description": "",
  "ingredients": [
    {
      "whole": "2",
      "fraction": "",
      "unit": "handfuls",
      "ingredient": "cherry tomatoes",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "handful",
      "ingredient": "black olives",
      "instruction": ""
    },
    {
      "whole": "5",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "dried oregano",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "dried chili",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "handful",
      "ingredient": "fresh basil",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "sea salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "parmesan cheese",
      "instruction": ""
    }
  ],
  "instructions": "1. Cook the pasta\r\n2. Squash the tomatoes into a bowl, tear them into pieces\r\n3. Pit the olives and tear them up into the bowl\r\n4. Add some oil, oregano, vinegar, crumbled chili, and basil\r\n5. Season with salt and pepper\r\n6. Toss with the pasta",
  "modified": "Wed, 07 Sep 2011 17:16:21 -0400",
  "name": "squashed cherry tomato and smashed olive pasta",
  "prep_time": "10",
  "servings": "6",
  "tags": "Fresh, Italian"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000000"),
  "created": "Thu, 08 Sep 2011 20:45:23 -0400",
  "description": "Lemony rice for a side dish",
  "ingredients": [
    {
      "whole": "1",
      "fraction": "",
      "unit": "lbs.",
      "ingredient": "basmati rice",
      "instruction": "cooked according to directions"
    },
    {
      "whole": "5",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "cooking oil",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "mustard seeds",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "urad dhal",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "handful",
      "ingredient": "curry leaves",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "",
      "ingredient": "lemon",
      "instruction": "juiced and rind saved"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "bunch",
      "ingredient": "cilantro",
      "instruction": "chopped"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "sea salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": ""
    }
  ],
  "instructions": "1. Cook the rice according to directions\r\n2. Heat the oil in a pan\r\n3. Add the mustard seeds and heat until the pop\r\n4. Add the split peas (urad dhal) and strips of lemon peel\r\n5. Cook until you see a little color\r\n6. Put the cooked rice and the spices together in a bowl\r\n7. Add lemon juice and cilantro\r\n8. Season to taste",
  "modified": "Thu, 08 Sep 2011 20:45:23 -0400",
  "name": "lemon rice",
  "prep_time": "15",
  "servings": "4",
  "tags": "Indian"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000001"),
  "created": "Thu, 08 Sep 2011 21:00:59 -0400",
  "description": "",
  "ingredients": [
    {
      "whole": "11",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "pasta shells",
      "instruction": ""
    },
    {
      "whole": "3",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "pint",
      "ingredient": "yellow cherry tomatoes",
      "instruction": "chopped"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "pint",
      "ingredient": "red cherry tomatoes",
      "instruction": "chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "handful",
      "ingredient": "black olives",
      "instruction": "pitted and chopped"
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "fresh chives",
      "instruction": "roughly chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "handful",
      "ingredient": "fresh basil",
      "instruction": "roughly chopped"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "cucumber",
      "instruction": "chopped"
    },
    {
      "whole": "4",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "white wine vinegar",
      "instruction": ""
    },
    {
      "whole": "7",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "extra virgin olive oil",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "sea salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": ""
    }
  ],
  "instructions": "1. Cook the pasta and garlic cloves together until the pasta is al dente\r\n2. Drain under cold water to cool\r\n3. Remove the garlic and save\r\n4. Add the pasta, tomatoes, olives, chives, basil, and cucumber to a bowl.\r\n5. Squeeze garlic from it's skin in a mortor\r\n6. Add olive oil, vinegar and seasoning and bash\r\n7. Mix with the salad",
  "modified": "Thu, 08 Sep 2011 21:00:59 -0400",
  "name": "pasta salad",
  "prep_time": "30",
  "servings": "4",
  "tags": "Italian"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000000"),
  "access": "private",
  "cook_time": "15",
  "created": "Tue, 13 Sep 2011 17:59:03 -0400",
  "description": "",
  "ingredients": [
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "sea salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "lbs.",
      "ingredient": "asparagus",
      "instruction": "trimmed and cut into 2 inch lengths"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "lbs.",
      "ingredient": "sugar snap peas",
      "instruction": "strings removed"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "lbs.",
      "ingredient": "pasta",
      "instruction": ""
    },
    {
      "whole": "4",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "butter",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "minced"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "avocado",
      "instruction": "pitted, peeled and mashed"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "cup ",
      "ingredient": "mint",
      "instruction": "(optional)"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "cup",
      "ingredient": "fresh parsley",
      "instruction": "(optional)"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "cup",
      "ingredient": "basil",
      "instruction": "(optional)"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "cup",
      "ingredient": "parmesan cheese",
      "instruction": "shredded"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "pine nuts",
      "instruction": "toasted "
    }
  ],
  "instructions": "1. Blanche asparagus\r\n2. Blanche snap peas\r\n3. Cook the pasta in the blanching water.\r\n4. While the pasta is cooking melt the butter in a large pot.\r\n5. Add the asparagus, snap peas, garlic, and season with salt and pepper.\r\n6. Cook until the veggies are a nice shiny green. about 2 minutes\r\n7. Add the last of the butter, cooked pasta, avocado, herbs, cheese, and reserved pasta water. Toss to combine. Season.\r\n8. Toast pine nuts if you have them\r\nReserve a cup of the pasta water\r\n",
  "modified": ISODate("2011-09-24T16:45:42.361Z"),
  "name": "avocado pasta",
  "prep_time": "15",
  "servings": "4",
  "tags": "Avocado, Pasta"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000000"),
  "access": "private",
  "cook_time": "120",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "description": "",
  "ingredients": [
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "tsp.",
      "ingredient": "ground black pepper",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "tsp.",
      "ingredient": "cayenne pepper",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "chili powder",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "onion",
      "instruction": "chopped finely"
    },
    {
      "whole": "6",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "pulverized"
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "bags",
      "ingredient": "quorn grounds",
      "instruction": "thawed"
    },
    {
      "whole": "1",
      "fraction": "1\/2",
      "unit": "tsp.",
      "ingredient": "sea salt",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "",
      "ingredient": "eggs",
      "instruction": ""
    },
    {
      "whole": "3",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "dijon mustard",
      "instruction": ""
    },
    {
      "whole": "4",
      "fraction": "",
      "unit": "slices",
      "ingredient": "bread",
      "instruction": "toasted "
    }
  ],
  "instructions": "1. Pre-heat oven to 325\r\n2. Thaw out the Quorn grounds\r\n3. Toast the bread twice\r\n4. Mix the spices together in a large bowl\r\n5. Break up the bread into crumbs and mix in the bowl\r\n6. Mix in the Quorn grounds\r\n7. Mix in everything else and make sure its mixed well\r\n8. Spoon it into a loaf pan and pack it in tightly. The more densely you pack it the better your meatloaf will hold together.\r\n9. Coat the top liberally with ketchup\r\n10. Bake for 2 hours or until internal temp is 155",
  "modified": ISODate("2011-09-24T16:46:40.361Z"),
  "name": "bombdiggity meatloaf",
  "prep_time": "30",
  "servings": "4",
  "tags": "Hearty, Protein"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4d5822753d3f951c0a000013"),
  "access": "private",
  "cook_time": "15",
  "created": "Sun, 13 Feb 2011 13:27:01 -0500",
  "description": "",
  "ingredients": [
    {
      "whole": "5",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "water",
      "instruction": ""
    },
    {
      "whole": "4",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "smooth natural peanut butter",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "rice vinegar",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "reduced-sodium soy sauce",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "honey",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "garlic",
      "instruction": "minced"
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "ginger",
      "instruction": "minced"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "crushed red pepper",
      "instruction": "to taste"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "bag",
      "ingredient": "quorn chunks",
      "instruction": "thawed"
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "4",
      "fraction": "",
      "unit": "C",
      "ingredient": "baby spinach",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "mushrooms",
      "instruction": "sliced"
    },
    {
      "whole": "4",
      "fraction": "",
      "unit": "",
      "ingredient": "scallions",
      "instruction": "sliced"
    }
  ],
  "instructions": "1. To prepare sauce: Whisk water, peanut butter, rice vinegar, soy sauce, honey, ginger and garlic in a small bowl.\r\n2. Fry the mushrooms until tender and put aside\r\n3. To prepare Chik'n: fry in oil until browned\r\n4. Add the spinach in small bunches and cook until wilted\r\n5. Add the peanut sauce, scallions and mushrooms. Heat through and mix well. ",
  "modified": ISODate("2011-09-24T16:47:28.163Z"),
  "name": "chik'n with peanut-ginger sauce",
  "prep_time": "15",
  "servings": "4",
  "tags": "Asian, Protein, Quorn, Chik'n"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4d5732a43d3f951c0a000005"),
  "access": "private",
  "cook_time": "60",
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "description": "",
  "ingredients": [
    {
      "whole": "2",
      "fraction": "",
      "unit": "bags",
      "ingredient": "quorn chunks",
      "instruction": "thawed"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "kosher salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "mayonnaise",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "1\/3",
      "unit": "C",
      "ingredient": "dry white wine",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "1\/4",
      "unit": "C",
      "ingredient": "chutney",
      "instruction": ""
    },
    {
      "whole": "3",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "curry powder",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "C",
      "ingredient": "celery",
      "instruction": "diced"
    },
    {
      "whole": "",
      "fraction": "1\/4",
      "unit": "C",
      "ingredient": "scallions",
      "instruction": "chopped"
    },
    {
      "whole": "",
      "fraction": "1\/4",
      "unit": "C",
      "ingredient": "raisins",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "C",
      "ingredient": "whole roasted cashews",
      "instruction": "chopped"
    },
    {
      "whole": "6",
      "fraction": "",
      "unit": "",
      "ingredient": "tortillas",
      "instruction": ""
    }
  ],
  "instructions": "1. Preheat the oven to 350\r\n2. Coat the thawed Quorn chunks in olive oil, salt, and pepper.\r\n3. Combine the mayonnaise, wine, chutney, curry powder, and 1 1\/2 teaspoons of salt in a food processor \r\n4. Combine the chicken with enough dressing to make it moist. Add the celery, scallions, and raisins. Refrigerate for a few hours.\r\n5. Mix in the cashews.\r\n6. Cook the tortillas\r\n7. Make the wraps",
  "modified": ISODate("2011-09-24T16:49:12.698Z"),
  "name": "curried chicken wraps",
  "prep_time": "15",
  "servings": "4",
  "tags": "Protein"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4d5735283d3f95880a000011"),
  "access": "private",
  "cook_time": "15",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "description": "",
  "ingredients": [
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "white rice",
      "instruction": "cooked according to directions"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "tbsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "small",
      "ingredient": "onion",
      "instruction": "chopped"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "green bell pepper",
      "instruction": "sliced thinly"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "red bell pepper",
      "instruction": "sliced thinly"
    },
    {
      "whole": "3",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "minced"
    },
    {
      "whole": "16",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "black beans",
      "instruction": "rinsed and drained"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "white vinegar",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "tabasco sauce",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "oregano",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "pepper",
      "instruction": ""
    }
  ],
  "instructions": "1. Cook the rice according to instructions\r\n2. Heat oil in a large skillet on medium high.\r\n3. Saute onions and bell peppers for 3-4 minutes\r\n4. Add garlic and cook for another minute\r\n5. Add the black beans, vinegar, and Tabasco or cayenne.\r\n6. Bring to a boil, reduce heat, cover and simmer for 5 minutes.\r\n7. Stir in rice and oregano. Add salt and pepper to taste",
  "modified": ISODate("2011-09-24T16:50:30.654Z"),
  "name": "easy black beans and rice",
  "prep_time": "15",
  "servings": "4",
  "tags": "Protein"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4d581ab23d3f95480a000000"),
  "access": "private",
  "cook_time": "15",
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "description": "",
  "ingredients": [
    {
      "whole": "15",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "chickpeas",
      "instruction": "rinsed and drained"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "onion",
      "instruction": "chopped"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "parsley",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "chopped"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "egg",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "ground cumin",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "ground coriander",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "salt",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "dash",
      "ingredient": "pepper",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "pinch",
      "ingredient": "cayenne pepper",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "lemon juice",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "baking powder",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "C",
      "ingredient": "bread crumbs",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "canola oil",
      "instruction": ""
    },
    {
      "whole": "6",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "plain yogurt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "cucumber",
      "instruction": "peeled, seeded and finely choppe"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "dill",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "mayonnaise",
      "instruction": ""
    }
  ],
  "instructions": "1. In a small bowl combine yogurt, cucumber, dill, salt, pepper and mayonnaise. Chill for at least 30 minutes.\r\n2. In a large bowl mash chickpeas until thin and pasty; dont use a blender.\r\n3. In a blender process onion, parsley, and garlic until smooth. Stir into mashed chickpeas.\r\n4. In a small bowl combine egg, cumin, coriander, salt, pepper, cayenne, lemon juice and baking powder. \r\n5. Stir into chickpeas along with olive oil.\r\n6. Slowly stir in breadcrumbs until mixture will hold together but is not sticky.\r\n7. Form 8 balls and flatten into patties.\r\n8. Heat an inch of oil in a pan and fry patties until golden brown on both sides.\r\n\r\n",
  "modified": ISODate("2011-09-24T16:51:14.467Z"),
  "name": "falafel and cucumber sauce",
  "prep_time": "15",
  "servings": "4",
  "tags": ""
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4d5603a83d3f95180f000000"),
  "access": "private",
  "cook_time": "15",
  "created": "Fri, 11 Feb 2011 22:51:04 -0500",
  "description": "Healthy and fast",
  "ingredients": [
    {
      "whole": "1",
      "fraction": "1\/8",
      "unit": "C",
      "ingredient": "broccoli",
      "instruction": "julienned"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "garlic",
      "instruction": "chopped finely"
    },
    {
      "whole": "",
      "fraction": "1\/4",
      "unit": "C",
      "ingredient": "olive oil",
      "instruction": "cold"
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "C",
      "ingredient": "pasta",
      "instruction": "cooked according to directions"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "pinch",
      "ingredient": "crushed red pepper",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "parmesan cheese",
      "instruction": ""
    }
  ],
  "instructions": "1. Place the oil, crushed red pepper, and garlic into a cold pan and turn the burner on low\r\n2. Cook the pasta\r\n3. About a minute before the pasta is done drop the broccoli into the water\r\n4. Drain both and put into a bowl\r\n5. Pour the oil mixture over the pasta and broccoli and mix well\r\n6. Plate, garnish with green olives, black pepper, and parmesan cheese",
  "modified": ISODate("2011-09-24T17:00:56.573Z"),
  "name": "pasta olio",
  "prep_time": "15",
  "servings": "4",
  "tags": "Italian"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e71e013bad4a2401b000000"),
  "access": "private",
  "cook_time": "",
  "created": "Thu, 15 Sep 2011 07:22:59 -0400",
  "description": "",
  "ingredients": [
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "tomato",
      "instruction": "sliced"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "cucumber",
      "instruction": "diced"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "avocado",
      "instruction": "diced"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "cilantro",
      "instruction": "chopped"
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "pressed"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "coconut oil",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "lime juice",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "sea salt",
      "instruction": ""
    }
  ],
  "instructions": "1. Put the chopped ingredients in a large bowl and toss them together.\r\n2. In a small bowl (or use the large bowl before putting the veggies in it), whisk together the oil, vinegar or lime juice and salt until it thickens.\r\n3. Toss the salad with the dressing to coat.\r\nServe on a bed of lettuce, wrapped in a piece of lettuce or a whole grain wrap or pita, on a veggie burger or just on its own.",
  "modified": ISODate("2011-09-24T17:02:45.146Z"),
  "name": "tomato cucumber avocado salad",
  "prep_time": "15",
  "servings": "2",
  "tags": "Fresh"
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e8f39e27f8b9a410b000000"),
  "name": "basic scrambled eggs",
  "access": "public",
  "servings": "2",
  "prep_time": "5",
  "cook_time": "5",
  "tags": "Breakfast, Protein",
  "description": "",
  "instructions": "1. Heat butter in a pan\r\n2. Crack 3 eggs into a bowl\r\n3. Add milk, salt and pepper\r\n4. Beat until frothy\r\n5. Pour egg mixtures into the pan\r\n6. Wait until the bottom of it solidifies a little and then push it around with a spatula\r\n7. Repeat until cooked through",
  "ingredients": [
    {
      "whole": "3",
      "fraction": "",
      "unit": "whole",
      "ingredient": "eggs",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "splash",
      "ingredient": "milk",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "pepper",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "butter",
      "instruction": ""
    }
  ],
  "modified": ISODate("2011-10-07T17:41:54.731Z"),
  "created": ISODate("2011-10-07T17:41:54.732Z")
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e8f41ea7f8b9a410b000005"),
  "name": "basic red sauce",
  "access": "public",
  "servings": "4",
  "prep_time": "15",
  "cook_time": "10",
  "tags": "Italian",
  "description": "A really nice basic red sauce that be used on pasta",
  "instructions": "1. Heat olive oil in a large pot\r\n2. Add garlic, cook until the color changes\r\n3. Add the basil and tomatoes\r\n4. Season with salt and pepper\r\n5. Smash the tomatoes while they cook, really mush the whole mixture\r\n6. When the mixture boils remove it from the heat and strain it through a sieve. Make sure to really push everything through. Also scrape all the good stuff off the underside of the sieve.\r\n7. Simmer the sauce in a pot for 5 minutes and season to taste",
  "ingredients": [
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "4",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "peeled and sliced"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "handful",
      "ingredient": "fresh basil leaves",
      "instruction": "picked, torn and beat up"
    },
    {
      "whole": "28",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "crushed tomatoes",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": ""
    }
  ],
  "modified": ISODate("2011-10-07T18:16:10.583Z"),
  "created": ISODate("2011-10-07T18:16:10.583Z")
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e8f460a7f8b9a470b000000"),
  "name": "veggie sausage sandwiches",
  "access": "public",
  "servings": "2",
  "prep_time": "5",
  "cook_time": "10",
  "tags": "",
  "description": "",
  "instructions": "1. Heat the oil in a heavy pan\r\n2. Fry the peppers and onions until you see a color change\r\n3. Add the sausage\r\n4. Season with salt and pepper\r\n5. Slice the top of sub rolls length ways but dont cut down the ends. Tear out some of the interior of the roll and discard it. You're looking for a boat shape.\r\n6. Put a generous amount of mustard inside\r\n7. Put in the sausage, onions and peppers\r\n",
  "ingredients": [
    {
      "whole": "2",
      "fraction": "",
      "unit": "",
      "ingredient": "tofurkey italian sausage",
      "instruction": "sliced "
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "cup",
      "ingredient": "onion",
      "instruction": "sliced"
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "cup",
      "ingredient": "green pepper",
      "instruction": "sliced"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "pepper",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "",
      "ingredient": "sub rolls",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "yellow mustard",
      "instruction": ""
    }
  ],
  "modified": ISODate("2011-10-07T18:33:46.300Z"),
  "created": ISODate("2011-10-07T18:33:46.301Z")
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e8f4f597f8b9a450b000000"),
  "name": "veggie burger",
  "access": "public",
  "servings": "1",
  "prep_time": "10",
  "cook_time": "16",
  "tags": "",
  "description": "",
  "instructions": "1. Heat oven to 425\r\n2. Bake patties for 8 minutes each side\r\n3. Mix the mayonnaise, mustard, and ketchup together\r\n4. Spread the mixture on the bottom bun\r\n5. Put the pattie, lettuce, tomato, and pickles on the bun\r\n6. Cap it and squash it down",
  "ingredients": [
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "all american boca burger",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "hamburger bun",
      "instruction": "sliced"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "lettuce leaves",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "tomato",
      "instruction": "sliced"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "onion",
      "instruction": "sliced"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "pickles",
      "instruction": "sliced"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "mayonnaise",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "mustard",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ketchup",
      "instruction": ""
    }
  ],
  "modified": ISODate("2011-10-07T19:13:29.784Z"),
  "created": ISODate("2011-10-07T19:13:29.784Z")
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000000"),
  "name": "antipasti of mozzarella, chilli, and lemon crostini",
  "access": "public",
  "servings": "4",
  "prep_time": "15",
  "cook_time": "",
  "tags": "Italian, Appetizer",
  "description": "",
  "instructions": "Heat a griddle pan until it’s really smoking hot, then griddle each slice of ciabatta for a couple of minutes on each side until they are nicely charred. \r\n\r\nCut the garlic clove in half, rub each ciabatta slice with garlic and drizzle with a little olive oil. Tear the mozzarella evenly over the 8 crostini. Season well with salt and pepper, sprinkle over the sliced chilli and basil leaves and grate over the lemon zest. Finish with another drizzle of olive oil.",
  "ingredients": [
    {
      "whole": "8",
      "fraction": "",
      "unit": "slices",
      "ingredient": "ciabatta bread",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "clove",
      "ingredient": "garlic",
      "instruction": "peeled"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "extra virgin olive oil",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "balls",
      "ingredient": "buffalo mozzarella",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "fresh ground black pepper",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "red chili",
      "instruction": "seeded and sliced"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "handful",
      "ingredient": "fresh basil leaves",
      "instruction": ""
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "lemon",
      "instruction": "zested"
    }
  ],
  "modified": ISODate("2011-10-07T19:25:54.420Z"),
  "created": ISODate("2011-10-07T19:25:54.430Z")
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4e8f53eb7f8b9a410b00000c"),
  "name": "braised greens",
  "access": "public",
  "servings": "4",
  "prep_time": "10",
  "cook_time": "10",
  "tags": "",
  "description": "",
  "instructions": "Half fill a large pot with salted water, bring to the boil and add your Swiss chard and chicory. Cook for 2 or 3 minutes until the greens are tender, or al dente, then drain in a colander. To your empty pan add 4 large glugs of olive oil and the garlic. Fry the garlic until lightly colored, then throw in your cooked chicory and chard. Season and stir around to coat in all the lovely flavored oil. After 1 minute, remove from the heat, add the arugula and squeeze in the lemon juice. Stir once more, check the seasoning again, and serve immediately. Great with grilled meats or scallops, or even served cold on an antipasti plate.",
  "ingredients": [
    {
      "whole": "2",
      "fraction": "",
      "unit": "handfills",
      "ingredient": "swiss chard",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "handfills",
      "ingredient": "chicory",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "olive oil",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "peeled, sliced"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "fresh ground black pepper",
      "instruction": ""
    },
    {
      "whole": "2",
      "fraction": "",
      "unit": "handfulls",
      "ingredient": "arugala",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "lemon",
      "instruction": ""
    }
  ],
  "modified": ISODate("2011-10-07T19:32:59.118Z"),
  "created": ISODate("2011-10-07T19:32:59.118Z")
});
db.getCollection("recipes").insert({
  "_id": ObjectId("4ee00149527cb1020b000000"),
  "access": "public",
  "cook_time": "15",
  "created": ISODate("2011-12-08T00:14:01.274Z"),
  "description": "",
  "ingredients": [
    {
      "whole": "4",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "finely sliced"
    },
    {
      "whole": "1",
      "fraction": "",
      "unit": "bunch",
      "ingredient": "fresh basil",
      "instruction": "torn"
    },
    {
      "whole": "32",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "whole plum tomatoes",
      "instruction": ""
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "sea salt",
      "instruction": "to taste"
    },
    {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "black pepper",
      "instruction": "to taste"
    }
  ],
  "instructions": "I learnt this recipe from my mate and mentor Gennaro Contaldo. It’s a brilliant, basic tomato sauce for using on pizza and it’s also great with pasta or to serve alongside meat or fish – quick, fresh, fragrant and sweet.\r\n\r\nPlace a large non-stick frying pan on the heat and pour in 4 generous glugs of olive oil. Add the garlic, shake the pan around a bit and, once the garlic begins to colour lightly, add the basil and the tomatoes. Using the back of a wooden spoon, mush and squash the tomatoes as much as you can. \r\n\r\nSeason the sauce with salt and pepper. As soon as it comes to the boil, remove the pan from the heat. Strain the sauce through a coarse sieve into a bowl, using your wooden spoon to push any larger bits of tomato through. Discard the basil and garlic that will be left in the sieve, but make sure you scrape any of the tomatoey goodness off the back of the sieve into the bowl. \r\n\r\nPour the sauce back into the pan, bring to the boil, then turn the heat down and simmer for 5 minutes to concentrate the flavours. It will be ready when it’s the perfect consistency for spreading on your pizza. \r\n\r\nStore the sauce in a clean jar in the fridge – it’ll keep for a week or so. Also great to freeze in batches or even in an ice cube tray, so you can defrost exactly the amount you need. But to be honest, it’s so quick to make, you might as well make it on the day you need it. \r\n",
  "modified": ISODate("2011-12-08T00:15:34.217Z"),
  "name": "simple red sauce",
  "prep_time": "15",
  "servings": "2",
  "tags": "Italian"
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.fraction_to_decimals",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.ingredient_instructions",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.ingredient_types",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.ingredients",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.menus",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.recipes",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.tags",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.units",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "recipe_manager.users",
  "name": "_id_"
});

/** tags records **/
db.getCollection("tags").insert({
  "_id": ObjectId("4d50187b3d3f95800e000026"),
  "tag": "Italian",
  "modified": "Mon, 07 Feb 2011 11:06:19 -0500",
  "created": "Mon, 07 Feb 2011 11:06:19 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4d5018973d3f95e80100000f"),
  "tag": "Lunch",
  "modified": "Mon, 07 Feb 2011 11:06:47 -0500",
  "created": "Mon, 07 Feb 2011 11:06:47 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4d504c0b3d3f95900d00001f"),
  "tag": "Asian",
  "modified": "Mon, 07 Feb 2011 14:46:19 -0500",
  "created": "Mon, 07 Feb 2011 14:46:19 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4d504c0b3d3f95900d000020"),
  "tag": "Dinner",
  "modified": "Mon, 07 Feb 2011 14:46:19 -0500",
  "created": "Mon, 07 Feb 2011 14:46:19 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4d56b81f3d3f951c0a000002"),
  "tag": "Basic",
  "modified": "Sat, 12 Feb 2011 11:41:03 -0500",
  "created": "Sat, 12 Feb 2011 11:41:03 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000a"),
  "tag": "Hearty",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000b"),
  "tag": "Protein",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4d5822763d3f951c0a00001c"),
  "tag": "Quorn",
  "modified": "Sun, 13 Feb 2011 13:27:02 -0500",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4d5822763d3f951c0a00001d"),
  "tag": "Chik'n",
  "modified": "Sun, 13 Feb 2011 13:27:02 -0500",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e67cb61bad4a2bc1b000001"),
  "tag": "Veggie",
  "modified": "Wed, 07 Sep 2011 15:52:01 -0400",
  "created": "Wed, 07 Sep 2011 15:52:01 -0400"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e67cb61bad4a2bc1b000002"),
  "tag": "Pasta",
  "modified": "Wed, 07 Sep 2011 15:52:01 -0400",
  "created": "Wed, 07 Sep 2011 15:52:01 -0400"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e67d0a9bad4a2bc1b00000e"),
  "tag": "Dinner\r\n",
  "modified": "Wed, 07 Sep 2011 16:14:33 -0400",
  "created": "Wed, 07 Sep 2011 16:14:33 -0400"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e67df25bad4a2c415000007"),
  "tag": "Fresh",
  "modified": "Wed, 07 Sep 2011 17:16:21 -0400",
  "created": "Wed, 07 Sep 2011 17:16:21 -0400"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000007"),
  "tag": "Indian",
  "modified": "Thu, 08 Sep 2011 20:45:23 -0400",
  "created": "Thu, 08 Sep 2011 20:45:23 -0400"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e69678abad4a2bc2100000d"),
  "tag": "Starch",
  "modified": "Thu, 08 Sep 2011 21:10:34 -0400",
  "created": "Thu, 08 Sep 2011 21:10:34 -0400"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e6fd227bad4a2e81a000006"),
  "tag": "",
  "modified": "Tue, 13 Sep 2011 17:59:03 -0400",
  "created": "Tue, 13 Sep 2011 17:59:03 -0400"
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e7e09367f8b9a480b000000"),
  "tag": "Avocado",
  "modified": ISODate("2011-09-24T16:45:42.396Z"),
  "created": ISODate("2011-09-24T16:45:42.396Z")
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e8f39e27f8b9a410b000002"),
  "tag": "Breakfast",
  "modified": ISODate("2011-10-07T17:41:54.752Z"),
  "created": ISODate("2011-10-07T17:41:54.752Z")
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e8f43167f8b9a410b00000b"),
  "tag": "Carbohydrates",
  "modified": ISODate("2011-10-07T18:21:10.968Z"),
  "created": ISODate("2011-10-07T18:21:10.969Z")
});
db.getCollection("tags").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000005"),
  "tag": "Appetizer",
  "modified": ISODate("2011-10-07T19:25:54.830Z"),
  "created": ISODate("2011-10-07T19:25:54.830Z")
});

/** units records **/
db.getCollection("units").insert({
  "_id": ObjectId("4d4eb4563d3f95800e00000a"),
  "l_name": "drop",
  "s_name": "drp",
  "metric_val": ".05"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d4eb5933d3f957c0b000005"),
  "l_name": "teaspoon",
  "s_name": "tsp.",
  "metric_val": "4.93"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d4eb5ac3d3f95800e00000b"),
  "l_name": "tablespoon",
  "s_name": "tbsp.",
  "metric_val": "14.79"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d4eb5b83d3f957c0b000006"),
  "l_name": "fluid ounce",
  "s_name": "fl. oz.",
  "metric_val": "29.57"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d4eb5c13d3f95800e00000c"),
  "l_name": "cup",
  "s_name": "C",
  "metric_val": "236.59"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d56e1613d3f95880a000003"),
  "l_name": "slices",
  "s_name": "slices",
  "created": "Sat, 12 Feb 2011 14:37:05 -0500"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d56f4f63d3f95880a00000f"),
  "l_name": "cloves",
  "s_name": "cloves",
  "created": "Sat, 12 Feb 2011 16:00:38 -0500"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d56f4f63d3f95880a000010"),
  "l_name": "bags",
  "s_name": "bags",
  "created": "Sat, 12 Feb 2011 16:00:38 -0500"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d5735283d3f95880a00001d"),
  "l_name": "small",
  "s_name": "small",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d5735283d3f95880a00001e"),
  "l_name": "ounces",
  "s_name": "ounces",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d581ab33d3f95480a00000f"),
  "l_name": "dash",
  "s_name": "dash",
  "created": "Sun, 13 Feb 2011 12:53:55 -0500"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d581ab33d3f95480a000010"),
  "l_name": "pinch",
  "s_name": "pinch",
  "created": "Sun, 13 Feb 2011 12:53:55 -0500"
});
db.getCollection("units").insert({
  "_id": ObjectId("4d5822763d3f951c0a00001f"),
  "l_name": "bag",
  "s_name": "bag",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db.getCollection("units").insert({
  "_id": ObjectId("4e67cd8cbad4a2bc1b00000c"),
  "l_name": "medium",
  "s_name": "medium",
  "created": "Wed, 07 Sep 2011 16:01:16 -0400"
});
db.getCollection("units").insert({
  "_id": ObjectId("4e67d426bad4a2bc1b000017"),
  "l_name": "handful",
  "s_name": "handful",
  "created": "Wed, 07 Sep 2011 16:29:26 -0400"
});
db.getCollection("units").insert({
  "_id": ObjectId("4e67df25bad4a2c415000008"),
  "l_name": "handfuls",
  "s_name": "handfuls",
  "created": "Wed, 07 Sep 2011 17:16:21 -0400"
});
db.getCollection("units").insert({
  "_id": ObjectId("4e6960a8bad4a2bc21000000"),
  "l_name": "pound",
  "s_name": "lbs.",
  "created": "Thu, 08 Sep 2011 20:41:12 -0400"
});
db.getCollection("units").insert({
  "_id": ObjectId("4e6961a3bad4a2841a000009"),
  "l_name": "bunch",
  "s_name": "bunch",
  "created": "Thu, 08 Sep 2011 20:45:23 -0400"
});
db.getCollection("units").insert({
  "_id": ObjectId("4e69654bbad4a2bc21000009"),
  "l_name": "pint",
  "s_name": "pint",
  "created": "Thu, 08 Sep 2011 21:00:59 -0400"
});
db.getCollection("units").insert({
  "_id": ObjectId("4e7e09367f8b9a480b000001"),
  "l_name": "cup ",
  "s_name": "cup ",
  "created": ISODate("2011-09-24T16:45:42.442Z")
});
db.getCollection("units").insert({
  "_id": ObjectId("4e8f39e27f8b9a410b000003"),
  "l_name": "whole",
  "s_name": "whole",
  "created": ISODate("2011-10-07T17:41:54.769Z")
});
db.getCollection("units").insert({
  "_id": ObjectId("4e8f39e27f8b9a410b000004"),
  "l_name": "splash",
  "s_name": "splash",
  "created": ISODate("2011-10-07T17:41:54.774Z")
});
db.getCollection("units").insert({
  "_id": ObjectId("4e8f52427f8b9a460b000009"),
  "l_name": "clove",
  "s_name": "clove",
  "created": ISODate("2011-10-07T19:25:54.118Z")
});
db.getCollection("units").insert({
  "_id": ObjectId("4e8f52427f8b9a460b00000a"),
  "l_name": "balls",
  "s_name": "balls",
  "created": ISODate("2011-10-07T19:25:54.122Z")
});
db.getCollection("units").insert({
  "_id": ObjectId("4e8f53eb7f8b9a410b000011"),
  "l_name": "handfills",
  "s_name": "handfills",
  "created": ISODate("2011-10-07T19:32:59.173Z")
});
db.getCollection("units").insert({
  "_id": ObjectId("4e8f53eb7f8b9a410b000012"),
  "l_name": "handfulls",
  "s_name": "handfulls",
  "created": ISODate("2011-10-07T19:32:59.183Z")
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("4d59258f3d3f957c0000000f"),
  "password": "47ee7ad059e34499bec88f5bf03c548b",
  "username": "swright"
});
