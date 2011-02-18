
/** fraction_to_decimals indexes **/
db["fraction_to_decimals"].ensureIndex({
  "_id": 1
},[
  
]);

/** ingredient_instructions indexes **/
db["ingredient_instructions"].ensureIndex({
  "_id": 1
},[
  
]);

/** ingredient_types indexes **/
db["ingredient_types"].ensureIndex({
  "_id": 1
},[
  
]);

/** ingredients indexes **/
db["ingredients"].ensureIndex({
  "_id": 1
},[
  
]);

/** menus indexes **/
db["menus"].ensureIndex({
  "_id": 1
},[
  
]);

/** recipes indexes **/
db["recipes"].ensureIndex({
  "_id": 1
},[
  
]);

/** tags indexes **/
db["tags"].ensureIndex({
  "_id": 1
},[
  
]);

/** units indexes **/
db["units"].ensureIndex({
  "_id": 1
},[
  
]);

/** users indexes **/
db["users"].ensureIndex({
  "_id": 1
},[
  
]);

/** fraction_to_decimals records **/
db["fraction_to_decimals"].insert({
  "_id": ObjectId("4d5672713d3f95700f000002"),
  "decimal": 0.0625,
  "fraction": "1\/16"
});
db["fraction_to_decimals"].insert({
  "_id": ObjectId("4d5679613d3f95580f000000"),
  "fraction": "1\/8",
  "decimal": 0.125
});
db["fraction_to_decimals"].insert({
  "_id": ObjectId("4d56796f3d3f95580f000001"),
  "fraction": "1\/4",
  "decimal": 0.25
});
db["fraction_to_decimals"].insert({
  "_id": ObjectId("4d5679793d3f95580f000002"),
  "fraction": "1\/2",
  "decimal": 0.5
});
db["fraction_to_decimals"].insert({
  "_id": ObjectId("4d56798d3d3f95580f000003"),
  "fraction": "3\/4",
  "decimal": 0.75
});
db["fraction_to_decimals"].insert({
  "_id": ObjectId("4d5679973d3f95580f000004"),
  "fraction": "1\/3",
  "decimal": 0.3333
});
db["fraction_to_decimals"].insert({
  "_id": ObjectId("4d5679a23d3f95580f000005"),
  "fraction": "2\/3",
  "decimal": 0.6666
});

/** ingredient_instructions records **/
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5032103d3f954c0d000007"),
  "instruction": "chopped",
  "modified": "Mon, 07 Feb 2011 12:55:28 -0500",
  "created": "Mon, 07 Feb 2011 12:55:28 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d504c0b3d3f95900d000021"),
  "instruction": "julienned",
  "modified": "Mon, 07 Feb 2011 14:46:19 -0500",
  "created": "Mon, 07 Feb 2011 14:46:19 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d504c0b3d3f95900d000022"),
  "instruction": "chopped finely",
  "modified": "Mon, 07 Feb 2011 14:46:19 -0500",
  "created": "Mon, 07 Feb 2011 14:46:19 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5065573d3f95e801000014"),
  "instruction": "",
  "modified": "Mon, 07 Feb 2011 16:34:15 -0500",
  "created": "Mon, 07 Feb 2011 16:34:15 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5603a83d3f95180f000003"),
  "instruction": "cold",
  "modified": "Fri, 11 Feb 2011 22:51:04 -0500",
  "created": "Fri, 11 Feb 2011 22:51:04 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5603a83d3f95180f000004"),
  "instruction": "cooked according to directions",
  "modified": "Fri, 11 Feb 2011 22:51:04 -0500",
  "created": "Fri, 11 Feb 2011 22:51:04 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d56041a3d3f951c0f000003"),
  "instruction": "sliced",
  "modified": "Fri, 11 Feb 2011 22:52:58 -0500",
  "created": "Fri, 11 Feb 2011 22:52:58 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000c"),
  "instruction": "pulverized",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000d"),
  "instruction": "thawed",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000e"),
  "instruction": "toasted ",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a000012"),
  "instruction": "diced",
  "modified": "Sat, 12 Feb 2011 20:23:48 -0500",
  "created": "Sat, 12 Feb 2011 20:23:48 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5735283d3f95880a00001a"),
  "instruction": "sliced thinly",
  "modified": "Sat, 12 Feb 2011 20:34:32 -0500",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5735283d3f95880a00001b"),
  "instruction": "minced",
  "modified": "Sat, 12 Feb 2011 20:34:32 -0500",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5735283d3f95880a00001c"),
  "instruction": "rinsed and drained",
  "modified": "Sat, 12 Feb 2011 20:34:32 -0500",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d581ab33d3f95480a00000e"),
  "instruction": "peeled, seeded and finely choppe",
  "modified": "Sun, 13 Feb 2011 12:53:55 -0500",
  "created": "Sun, 13 Feb 2011 12:53:55 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5822763d3f951c0a00001e"),
  "instruction": "to taste",
  "modified": "Sun, 13 Feb 2011 13:27:02 -0500",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db["ingredient_instructions"].insert({
  "_id": ObjectId("4d5ed3433d3f95c00f000002"),
  "instruction": "drained and dried",
  "modified": "Fri, 18 Feb 2011 15:14:59 -0500",
  "created": "Fri, 18 Feb 2011 15:14:59 -0500"
});

/** ingredient_types records **/
db["ingredient_types"].insert({
  "_id": ObjectId("4d5068b83d3f95e801000017"),
  "ingredient_type": "produce"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d5068d53d3f95800e00002d"),
  "ingredient_type": "bakery"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d5069cb3d3f95600e000001"),
  "ingredient_type": "oils and vinegars"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d5069e93d3f957c0b000033"),
  "ingredient_type": "frozen"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d506a123d3f954c0d000008"),
  "ingredient_type": "canned fruits"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d506a243d3f95800e00002e"),
  "ingredient_type": "canned vegetables"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d506a573d3f954c0d000009"),
  "ingredient_type": "dried herbs and spices"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d506a723d3f954c0d00000a"),
  "ingredient_type": "dairy"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d56b7683d3f95880a000000"),
  "ingredient_type": "staples"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d56fa573d3f951c0a000003"),
  "ingredient_type": "frozen"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d56fd2c3d3f951c0a000004"),
  "ingredient_type": "seafood"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d57e7df3d3f95880a000021"),
  "ingredient_type": "beer and wine"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d5827193d3f95480a000012"),
  "ingredient_type": "baking supplies"
});
db["ingredient_types"].insert({
  "_id": ObjectId("4d5827273d3f951c0a000020"),
  "ingredient_type": "asian"
});

/** ingredients records **/
db["ingredients"].insert({
  "_id": ObjectId("4d5016bf3d3f95900d000015"),
  "created": "Mon, 07 Feb 2011 10:58:54 -0500",
  "ingredient": "broccoli",
  "modified": "Mon, 07 Feb 2011 16:24:20 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5016bf3d3f95900d000016"),
  "created": "Mon, 07 Feb 2011 10:58:55 -0500",
  "ingredient": "garlic",
  "modified": "Mon, 07 Feb 2011 16:32:47 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5016d83d3f95e80100000e"),
  "created": "Mon, 07 Feb 2011 10:59:20 -0500",
  "ingredient": "olive oil",
  "modified": "Mon, 07 Feb 2011 16:55:13 -0500",
  "type": "oils and vinegars"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5027e23d3f95900d00001b"),
  "created": "Mon, 07 Feb 2011 12:12:02 -0500",
  "ingredient": "cheese",
  "modified": "Mon, 07 Feb 2011 16:56:11 -0500",
  "type": "dairy"
});
db["ingredients"].insert({
  "_id": ObjectId("4d504c0b3d3f95900d00001e"),
  "created": "Mon, 07 Feb 2011 14:46:19 -0500",
  "ingredient": "carrots",
  "modified": "Mon, 07 Feb 2011 16:33:10 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d50698f3d3f95600e000000"),
  "ingredient": "lettuce",
  "type": "produce",
  "modified": "Mon, 07 Feb 2011 16:52:28 -0500",
  "created": "Mon, 07 Feb 2011 16:52:15 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5018cc3d3f95900d000018"),
  "created": "Mon, 07 Feb 2011 11:07:40 -0500",
  "ingredient": "crushed red pepper",
  "modified": "Mon, 07 Feb 2011 16:55:44 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5603a83d3f95180f000001"),
  "created": "Fri, 11 Feb 2011 22:51:04 -0500",
  "ingredient": "pasta",
  "modified": "Sat, 12 Feb 2011 11:38:12 -0500",
  "type": "staples"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56041a3d3f951c0f000001"),
  "created": "Fri, 11 Feb 2011 22:52:58 -0500",
  "ingredient": "white rice",
  "modified": "Sat, 12 Feb 2011 11:38:19 -0500",
  "type": "staples"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56041a3d3f951c0f000002"),
  "created": "Fri, 11 Feb 2011 22:52:58 -0500",
  "ingredient": "onions",
  "modified": "Fri, 11 Feb 2011 22:53:17 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56b6723d3f957c00000000"),
  "created": "Sat, 12 Feb 2011 11:33:54 -0500",
  "ingredient": "red pepper",
  "modified": "Sat, 12 Feb 2011 11:38:27 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56b81f3d3f951c0a000001"),
  "created": "Sat, 12 Feb 2011 11:41:03 -0500",
  "ingredient": "white bread",
  "modified": "Sat, 12 Feb 2011 16:24:16 -0500",
  "type": "bakery"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000001"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "ground black pepper",
  "modified": "Sat, 12 Feb 2011 16:26:34 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000002"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "cayenne pepper",
  "modified": "Sat, 12 Feb 2011 16:27:12 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000003"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "chili powder",
  "modified": "Sat, 12 Feb 2011 16:27:29 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000004"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "onion",
  "modified": "Sat, 12 Feb 2011 16:27:44 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000005"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "quorn grounds",
  "modified": "Sat, 12 Feb 2011 16:27:55 -0500",
  "type": "frozen"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000006"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "sea salt",
  "modified": "Sat, 12 Feb 2011 16:28:06 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000007"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "eggs",
  "modified": "Sat, 12 Feb 2011 16:28:13 -0500",
  "type": "dairy"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000008"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "dijon mustard",
  "modified": "Sat, 12 Feb 2011 16:28:21 -0500",
  "type": "staples"
});
db["ingredients"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000009"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "ingredient": "bread",
  "modified": "Sat, 12 Feb 2011 16:28:28 -0500",
  "type": "bakery"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a000006"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "quorn chunks",
  "modified": "Sun, 13 Feb 2011 09:14:41 -0500",
  "type": "frozen"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a000007"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "kosher salt",
  "modified": "Sat, 12 Feb 2011 20:35:25 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a000008"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "mayonnaise",
  "modified": "Sat, 12 Feb 2011 20:35:49 -0500",
  "type": "oils and vinegars"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a000009"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "dry white wine",
  "modified": "Sun, 13 Feb 2011 09:17:15 -0500",
  "type": "beer and wine"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000a"),
  "ingredient": "chutney",
  "type": "",
  "modified": "Sat, 12 Feb 2011 20:23:48 -0500",
  "created": "Sat, 12 Feb 2011 20:23:48 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000b"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "curry powder",
  "modified": "Sat, 12 Feb 2011 20:36:08 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000c"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "celery",
  "modified": "Sat, 12 Feb 2011 20:36:24 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000d"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "ingredient": "scallions",
  "modified": "Sat, 12 Feb 2011 20:36:42 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000e"),
  "ingredient": "raisins",
  "type": "",
  "modified": "Sat, 12 Feb 2011 20:23:48 -0500",
  "created": "Sat, 12 Feb 2011 20:23:48 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a00000f"),
  "ingredient": "whole roasted cashews",
  "type": "",
  "modified": "Sat, 12 Feb 2011 20:23:48 -0500",
  "created": "Sat, 12 Feb 2011 20:23:48 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a000010"),
  "ingredient": "tortillas",
  "type": "",
  "modified": "Sat, 12 Feb 2011 20:23:48 -0500",
  "created": "Sat, 12 Feb 2011 20:23:48 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5735283d3f95880a000012"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "green bell pepper",
  "modified": "Sat, 12 Feb 2011 20:37:09 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5735283d3f95880a000013"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "red bell pepper",
  "modified": "Sun, 13 Feb 2011 09:17:28 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5735283d3f95880a000014"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "black beans",
  "modified": "Sat, 12 Feb 2011 20:38:54 -0500",
  "type": "canned vegetables"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5735283d3f95880a000015"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "white vinegar",
  "modified": "Sat, 12 Feb 2011 20:38:31 -0500",
  "type": "oils and vinegars"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5735283d3f95880a000016"),
  "ingredient": "tabasco sauce",
  "type": "",
  "modified": "Sat, 12 Feb 2011 20:34:32 -0500",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5735283d3f95880a000017"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "oregano",
  "modified": "Sat, 12 Feb 2011 20:38:11 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5735283d3f95880a000019"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "pepper",
  "modified": "Sat, 12 Feb 2011 20:37:28 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5735283d3f95880a000018"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "ingredient": "salt",
  "modified": "Sat, 12 Feb 2011 20:37:47 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000001"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "chickpeas",
  "modified": "Sun, 13 Feb 2011 12:54:45 -0500",
  "type": "canned vegetables"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000002"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "parsley",
  "modified": "Sun, 13 Feb 2011 12:55:46 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000003"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "egg",
  "modified": "Sun, 13 Feb 2011 12:57:45 -0500",
  "type": "dairy"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000004"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "ground cumin",
  "modified": "Sun, 13 Feb 2011 12:57:29 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000005"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "ground coriander",
  "modified": "Sun, 13 Feb 2011 12:57:11 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000006"),
  "ingredient": "lemon juice",
  "type": "",
  "modified": "Sun, 13 Feb 2011 12:53:54 -0500",
  "created": "Sun, 13 Feb 2011 12:53:54 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000007"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "baking powder",
  "modified": "Sun, 13 Feb 2011 13:47:27 -0500",
  "type": "baking supplies"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000008"),
  "ingredient": "bread crumbs",
  "type": "",
  "modified": "Sun, 13 Feb 2011 12:53:54 -0500",
  "created": "Sun, 13 Feb 2011 12:53:54 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000009"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "canola oil",
  "modified": "Sun, 13 Feb 2011 12:55:05 -0500",
  "type": "oils and vinegars"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a00000a"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "plain yogurt",
  "modified": "Sun, 13 Feb 2011 12:56:35 -0500",
  "type": "dairy"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a00000b"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "cucumber",
  "modified": "Sun, 13 Feb 2011 12:55:23 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d581ab23d3f95480a00000c"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "ingredient": "dill",
  "modified": "Sun, 13 Feb 2011 12:56:09 -0500",
  "type": "dried herbs and spices"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5822753d3f951c0a000014"),
  "ingredient": "water",
  "type": "",
  "modified": "Sun, 13 Feb 2011 13:27:01 -0500",
  "created": "Sun, 13 Feb 2011 13:27:01 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5822763d3f951c0a000015"),
  "ingredient": "smooth natural peanut butter",
  "type": "",
  "modified": "Sun, 13 Feb 2011 13:27:02 -0500",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5822763d3f951c0a000016"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "rice vinegar",
  "modified": "Sun, 13 Feb 2011 13:29:09 -0500",
  "type": "oils and vinegars"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5822763d3f951c0a000017"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "reduced-sodium soy sauce",
  "modified": "Sun, 13 Feb 2011 13:47:15 -0500",
  "type": "asian"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5822763d3f951c0a000018"),
  "ingredient": "honey",
  "type": "",
  "modified": "Sun, 13 Feb 2011 13:27:02 -0500",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5822763d3f951c0a000019"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "ginger",
  "modified": "Sun, 13 Feb 2011 13:29:49 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5822763d3f951c0a00001a"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "baby spinach",
  "modified": "Sun, 13 Feb 2011 13:28:41 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5822763d3f951c0a00001b"),
  "created": "Sun, 13 Feb 2011 13:27:02 -0500",
  "ingredient": "mushrooms",
  "modified": "Sun, 13 Feb 2011 13:29:29 -0500",
  "type": "produce"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5ed3433d3f95c00f000000"),
  "ingredient": "green olives",
  "type": "",
  "modified": "Fri, 18 Feb 2011 15:14:59 -0500",
  "created": "Fri, 18 Feb 2011 15:14:59 -0500"
});
db["ingredients"].insert({
  "_id": ObjectId("4d5ed3433d3f95c00f000001"),
  "ingredient": "parmesan cheese",
  "type": "",
  "modified": "Fri, 18 Feb 2011 15:14:59 -0500",
  "created": "Fri, 18 Feb 2011 15:14:59 -0500"
});

/** menus records **/
db["menus"].insert({
  "_id": ObjectId("4d5823bc3d3f957c0000000e"),
  "created": "Sun, 13 Feb 2011 13:32:28 -0500",
  "description": "",
  "modified": "Fri, 18 Feb 2011 16:31:18 -0500",
  "name": "Weekly",
  "recipes": {
    "1": {
      "name": "4d5603a83d3f95180f000000",
      "servings": "3",
      "description": "Monday"
    },
    "2": {
      "name": "4d56c37d3d3f95a40c000000",
      "servings": "2",
      "description": "Tuesday"
    },
    "3": {
      "name": "4d5732a43d3f951c0a000005",
      "servings": "2",
      "description": "Wednesday"
    },
    "4": {
      "name": "4d581ab23d3f95480a000000",
      "servings": "2",
      "description": "Thursday"
    },
    "5": {
      "name": "4d5822753d3f951c0a000013",
      "servings": "2",
      "description": "Friday"
    }
  }
});
db["menus"].insert({
  "_id": ObjectId("4d5eed803d3f959008000000"),
  "name": "test",
  "description": "",
  "recipes": {
    "1": {
      "name": "4d56c37d3d3f95a40c000000",
      "servings": "6",
      "description": ""
    }
  },
  "modified": "Fri, 18 Feb 2011 17:08:33 -0500",
  "created": "Fri, 18 Feb 2011 17:06:56 -0500"
});

/** recipes records **/
db["recipes"].insert({
  "_id": ObjectId("4d56b81f3d3f951c0a000000"),
  "created": "Sat, 12 Feb 2011 11:41:03 -0500",
  "description": "cheesey crispy goodness",
  "ingredients": {
    "1": {
      "whole": "4",
      "fraction": "",
      "unit": "slices",
      "ingredient": "white bread",
      "instruction": ""
    },
    "2": {
      "whole": "2",
      "fraction": "",
      "unit": "slices",
      "ingredient": "cheese",
      "instruction": ""
    }
  },
  "instructions": {
    "1": "take bread toast with cheese"
  },
  "modified": "Fri, 18 Feb 2011 15:16:14 -0500",
  "name": "Grilled Cheese",
  "prep_time": "10",
  "servings": "",
  "tags": "Basic"
});
db["recipes"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c000000"),
  "created": "Sat, 12 Feb 2011 12:29:33 -0500",
  "description": "",
  "ingredients": {
    "1": {
      "whole": "",
      "fraction": "1\/2",
      "unit": "tsp.",
      "ingredient": "ground black pepper",
      "instruction": ""
    },
    "2": {
      "whole": "",
      "fraction": "1\/2",
      "unit": "tsp.",
      "ingredient": "cayenne pepper",
      "instruction": ""
    },
    "3": {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "chili powder",
      "instruction": ""
    },
    "4": {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "onion",
      "instruction": "chopped finely"
    },
    "5": {
      "whole": "6",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "pulverized"
    },
    "6": {
      "whole": "2",
      "fraction": "",
      "unit": "bags",
      "ingredient": "quorn grounds",
      "instruction": "thawed"
    },
    "7": {
      "whole": "1",
      "fraction": "1\/2",
      "unit": "tsp.",
      "ingredient": "sea salt",
      "instruction": ""
    },
    "8": {
      "whole": "2",
      "fraction": "",
      "unit": "",
      "ingredient": "eggs",
      "instruction": ""
    },
    "9": {
      "whole": "3",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "dijon mustard",
      "instruction": ""
    },
    "10": {
      "whole": "4",
      "fraction": "",
      "unit": "slices",
      "ingredient": "bread",
      "instruction": "toasted "
    }
  },
  "instructions": {
    "1": "Pre-heat oven to 325",
    "2": "Thaw out the Quorn grounds",
    "3": "Toast the bread twice",
    "4": "Mix the spices together in a large bowl",
    "5": "Break up the bread into crumbs and mix in the bowl",
    "6": "Mix in the Quorn grounds",
    "7": "Mix in everything else and make sure its mixed well",
    "8": "Spoon it into a loaf pan and pack it in tightly. The more densel",
    "9": "Coat the top liberally with ketchup",
    "10": "Bake for 2 hours or until internal temp is 155"
  },
  "modified": "Fri, 18 Feb 2011 10:13:33 -0500",
  "name": "Bombdiggity Meatloaf",
  "prep_time": "150",
  "servings": "4",
  "tags": "Hearty, Protein"
});
db["recipes"].insert({
  "_id": ObjectId("4d5732a43d3f951c0a000005"),
  "created": "Sat, 12 Feb 2011 20:23:48 -0500",
  "description": "",
  "ingredients": {
    "1": {
      "whole": "2",
      "fraction": "",
      "unit": "bags",
      "ingredient": "quorn chunks",
      "instruction": "thawed"
    },
    "2": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "olive oil",
      "instruction": ""
    },
    "3": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "kosher salt",
      "instruction": ""
    },
    "4": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": ""
    },
    "5": {
      "whole": "1",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "mayonnaise",
      "instruction": ""
    },
    "6": {
      "whole": "",
      "fraction": "1\/3",
      "unit": "C",
      "ingredient": "dry white wine",
      "instruction": ""
    },
    "7": {
      "whole": "",
      "fraction": "1\/4",
      "unit": "C",
      "ingredient": "chutney",
      "instruction": ""
    },
    "8": {
      "whole": "3",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "curry powder",
      "instruction": ""
    },
    "9": {
      "whole": "1",
      "fraction": "",
      "unit": "C",
      "ingredient": "celery",
      "instruction": "diced"
    },
    "10": {
      "whole": "",
      "fraction": "1\/4",
      "unit": "C",
      "ingredient": "scallions",
      "instruction": "chopped"
    },
    "11": {
      "whole": "",
      "fraction": "1\/4",
      "unit": "C",
      "ingredient": "raisins",
      "instruction": ""
    },
    "12": {
      "whole": "1",
      "fraction": "",
      "unit": "C",
      "ingredient": "whole roasted cashews",
      "instruction": "chopped"
    },
    "13": {
      "whole": "6",
      "fraction": "",
      "unit": "",
      "ingredient": "tortillas",
      "instruction": ""
    }
  },
  "instructions": {
    "1": "Preheat the oven to 350",
    "2": "Coat the thawed Quorn chunks in olive oil, salt, and pepper.",
    "3": "Combine the mayonnaise, wine, chutney, curry powder, and 1 1\/2 teaspoons of salt in a food processor",
    "4": "Combine the chicken with enough dressing to make it moist. Add the celery, scallions, and raisins. Refrigerate for a few hours.",
    "5": "Mix in the cashews.",
    "6": "Cook the tortillas and make the wraps"
  },
  "modified": "Fri, 18 Feb 2011 15:07:58 -0500",
  "name": "Curried Chicken Wraps",
  "prep_time": "",
  "servings": "",
  "tags": "Protein, "
});
db["recipes"].insert({
  "_id": ObjectId("4d5735283d3f95880a000011"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "description": "",
  "ingredients": {
    "1": {
      "whole": "",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "white rice",
      "instruction": "cooked according to directions"
    },
    "2": {
      "whole": "",
      "fraction": "1\/2",
      "unit": "tbsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    "3": {
      "whole": "1",
      "fraction": "",
      "unit": "small",
      "ingredient": "onion",
      "instruction": "chopped"
    },
    "4": {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "green bell pepper",
      "instruction": "sliced thinly"
    },
    "5": {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "red bell pepper",
      "instruction": "sliced thinly"
    },
    "6": {
      "whole": "3",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "minced"
    },
    "7": {
      "whole": "16",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "black beans",
      "instruction": "rinsed and drained"
    },
    "8": {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "white vinegar",
      "instruction": ""
    },
    "9": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "tabasco sauce",
      "instruction": ""
    },
    "10": {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "oregano",
      "instruction": ""
    },
    "11": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "salt",
      "instruction": ""
    },
    "12": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "pepper",
      "instruction": ""
    }
  },
  "instructions": {
    "1": "Cook the rice according to instructions",
    "2": "Heat oil in a large skillet on medium high.",
    "3": "Saute onions and bell peppers for 3-4 minutes",
    "4": "Add garlic and cook for another minute",
    "5": "Add the black beans, vinegar, and Tabasco or cayenne.",
    "6": "Bring to a boil, reduce heat, cover and simmer for 5 minutes.",
    "7": "Stir in rice and oregano. Add salt and pepper to taste"
  },
  "modified": "Fri, 18 Feb 2011 15:06:16 -0500",
  "name": "Easy Black Beans and Rice",
  "prep_time": "",
  "servings": "",
  "tags": "Protein"
});
db["recipes"].insert({
  "_id": ObjectId("4d581ab23d3f95480a000000"),
  "created": "Sun, 13 Feb 2011 12:53:54 -0500",
  "description": "",
  "ingredients": {
    "1": {
      "whole": "15",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "chickpeas",
      "instruction": "rinsed and drained"
    },
    "2": {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "onion",
      "instruction": "chopped"
    },
    "3": {
      "whole": "",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "parsley",
      "instruction": ""
    },
    "4": {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "chopped"
    },
    "5": {
      "whole": "1",
      "fraction": "",
      "unit": "",
      "ingredient": "egg",
      "instruction": ""
    },
    "6": {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "ground cumin",
      "instruction": ""
    },
    "7": {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "ground coriander",
      "instruction": ""
    },
    "8": {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "salt",
      "instruction": ""
    },
    "9": {
      "whole": "1",
      "fraction": "",
      "unit": "dash",
      "ingredient": "pepper",
      "instruction": ""
    },
    "10": {
      "whole": "1",
      "fraction": "",
      "unit": "pinch",
      "ingredient": "cayenne pepper",
      "instruction": ""
    },
    "11": {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "lemon juice",
      "instruction": ""
    },
    "12": {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "baking powder",
      "instruction": ""
    },
    "13": {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    "14": {
      "whole": "1",
      "fraction": "",
      "unit": "C",
      "ingredient": "bread crumbs",
      "instruction": ""
    },
    "15": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "canola oil",
      "instruction": ""
    },
    "16": {
      "whole": "6",
      "fraction": "",
      "unit": "ounces",
      "ingredient": "plain yogurt",
      "instruction": ""
    },
    "17": {
      "whole": "",
      "fraction": "1\/2",
      "unit": "",
      "ingredient": "cucumber",
      "instruction": "peeled, seeded and finely choppe"
    },
    "18": {
      "whole": "1",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "dill",
      "instruction": ""
    },
    "19": {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "mayonnaise",
      "instruction": ""
    }
  },
  "instructions": {
    "1": "In a small bowl combine yogurt, cucumber, dill, salt, pepper and mayonnaise. Chill for at least 30 minutes.",
    "2": "In a large bowl mash chickpeas until thin and pasty; dont use a blender.",
    "3": "In a blender process onion, parsley, and garlic until smooth. Stir into mashed chickpeas.",
    "4": "In a small bowl combine egg, cumin, coriander, salt, pepper, cayenne, lemon juice and baking powder. ",
    "5": "Stir into chickpeas along with olive oil.",
    "6": "Slowly stir in breadcrumbs until mixture will hold together but is not sticky.",
    "7": "Form 8 balls and flatten into patties.",
    "8": "Heat an inch of oil in a pan and fry patties until golden brown on both sides."
  },
  "modified": "Fri, 18 Feb 2011 15:04:37 -0500",
  "name": "Falafel and Cucumber Sauce",
  "prep_time": "",
  "servings": "",
  "tags": ""
});
db["recipes"].insert({
  "_id": ObjectId("4d5822753d3f951c0a000013"),
  "created": "Sun, 13 Feb 2011 13:27:01 -0500",
  "description": "",
  "ingredients": {
    "1": {
      "whole": "5",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "water",
      "instruction": ""
    },
    "2": {
      "whole": "4",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "smooth natural peanut butter",
      "instruction": ""
    },
    "3": {
      "whole": "1",
      "fraction": "",
      "unit": "tbsp.",
      "ingredient": "rice vinegar",
      "instruction": ""
    },
    "4": {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "reduced-sodium soy sauce",
      "instruction": ""
    },
    "5": {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "honey",
      "instruction": ""
    },
    "6": {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "garlic",
      "instruction": "minced"
    },
    "7": {
      "whole": "2",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "ginger",
      "instruction": "minced"
    },
    "8": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "crushed red pepper",
      "instruction": "to taste"
    },
    "9": {
      "whole": "1",
      "fraction": "",
      "unit": "bag",
      "ingredient": "quorn chunks",
      "instruction": "thawed"
    },
    "10": {
      "whole": "2",
      "fraction": "",
      "unit": "tsp.",
      "ingredient": "olive oil",
      "instruction": ""
    },
    "11": {
      "whole": "4",
      "fraction": "",
      "unit": "C",
      "ingredient": "baby spinach",
      "instruction": ""
    },
    "12": {
      "whole": "1",
      "fraction": "1\/2",
      "unit": "C",
      "ingredient": "mushrooms",
      "instruction": "sliced"
    },
    "13": {
      "whole": "4",
      "fraction": "",
      "unit": "",
      "ingredient": "scallions",
      "instruction": "sliced"
    }
  },
  "instructions": {
    "1": "To prepare sauce: Whisk water, peanut butter, rice vinegar, soy ",
    "2": "Fry the mushrooms until tender and put aside",
    "3": "To prepare Chik'n: fry in oil until browned",
    "4": "Add the spinach in small bunches and cook until wilted",
    "5": "Add the peanut sauce, scallions and mushrooms. Heat through and"
  },
  "modified": "Fri, 18 Feb 2011 15:16:03 -0500",
  "name": "Chik'n with Peanut-Ginger Sauce",
  "prep_time": "45",
  "servings": "4",
  "tags": "Asian, Protein, Quorn, Chik'n"
});
db["recipes"].insert({
  "_id": ObjectId("4d5603a83d3f95180f000000"),
  "created": "Fri, 11 Feb 2011 22:51:04 -0500",
  "description": "Healthy and fast",
  "ingredients": {
    "1": {
      "whole": "1",
      "fraction": "",
      "unit": "C",
      "ingredient": "broccoli",
      "instruction": "julienned"
    },
    "2": {
      "whole": "4",
      "fraction": "",
      "unit": "cloves",
      "ingredient": "garlic",
      "instruction": "chopped finely"
    },
    "3": {
      "whole": "",
      "fraction": "1\/4",
      "unit": "C",
      "ingredient": "olive oil",
      "instruction": "cold"
    },
    "4": {
      "whole": "2",
      "fraction": "",
      "unit": "C",
      "ingredient": "pasta",
      "instruction": "cooked according to directions"
    },
    "5": {
      "whole": "6",
      "fraction": "",
      "unit": "",
      "ingredient": "green olives",
      "instruction": "drained and dried"
    },
    "6": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "ground black pepper",
      "instruction": "to taste"
    },
    "7": {
      "whole": "",
      "fraction": "",
      "unit": "",
      "ingredient": "parmesan cheese",
      "instruction": "to taste"
    }
  },
  "instructions": {
    "1": "Pour the oil into a cold pan and add the garlic and red pepper",
    "2": "Turn the heat on low, you want to the oil to heat slowly, the garlic must not fry",
    "3": "As the pasta is about 1 minute from being cooked throw the broccoli into the boilng water",
    "4": "When the pasta is cooked plunge the pasta and broccoli into ice water quickly to stop the cooking process but not cool it off",
    "5": "Mix the pasta, broccoli, oil and garlic in a large bowl.",
    "6": "Divide into bowls and garnish with green olives.",
    "7": "Serve immediately"
  },
  "modified": "Fri, 18 Feb 2011 15:15:15 -0500",
  "name": "Pasta Olio",
  "prep_time": "20",
  "servings": "2",
  "tags": "Italian, "
});

/** tags records **/
db["tags"].insert({
  "_id": ObjectId("4d50187b3d3f95800e000026"),
  "tag": "Italian",
  "modified": "Mon, 07 Feb 2011 11:06:19 -0500",
  "created": "Mon, 07 Feb 2011 11:06:19 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d5018973d3f95e80100000f"),
  "tag": "Lunch",
  "modified": "Mon, 07 Feb 2011 11:06:47 -0500",
  "created": "Mon, 07 Feb 2011 11:06:47 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d504c0b3d3f95900d00001f"),
  "tag": "Asian",
  "modified": "Mon, 07 Feb 2011 14:46:19 -0500",
  "created": "Mon, 07 Feb 2011 14:46:19 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d504c0b3d3f95900d000020"),
  "tag": "Dinner",
  "modified": "Mon, 07 Feb 2011 14:46:19 -0500",
  "created": "Mon, 07 Feb 2011 14:46:19 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d56b81f3d3f951c0a000002"),
  "tag": "Basic",
  "modified": "Sat, 12 Feb 2011 11:41:03 -0500",
  "created": "Sat, 12 Feb 2011 11:41:03 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000a"),
  "tag": "Hearty",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d56c37d3d3f95a40c00000b"),
  "tag": "Protein",
  "modified": "Sat, 12 Feb 2011 12:29:33 -0500",
  "created": "Sat, 12 Feb 2011 12:29:33 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d581ab23d3f95480a00000d"),
  "tag": "",
  "modified": "Sun, 13 Feb 2011 12:53:54 -0500",
  "created": "Sun, 13 Feb 2011 12:53:54 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d5822763d3f951c0a00001c"),
  "tag": "Quorn",
  "modified": "Sun, 13 Feb 2011 13:27:02 -0500",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db["tags"].insert({
  "_id": ObjectId("4d5822763d3f951c0a00001d"),
  "tag": "Chik'n",
  "modified": "Sun, 13 Feb 2011 13:27:02 -0500",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});

/** units records **/
db["units"].insert({
  "_id": ObjectId("4d4eb4563d3f95800e00000a"),
  "l_name": "drop",
  "s_name": "drp",
  "metric_val": ".05"
});
db["units"].insert({
  "_id": ObjectId("4d4eb5933d3f957c0b000005"),
  "l_name": "teaspoon",
  "s_name": "tsp.",
  "metric_val": "4.93"
});
db["units"].insert({
  "_id": ObjectId("4d4eb5ac3d3f95800e00000b"),
  "l_name": "tablespoon",
  "s_name": "tbsp.",
  "metric_val": "14.79"
});
db["units"].insert({
  "_id": ObjectId("4d4eb5b83d3f957c0b000006"),
  "l_name": "fluid ounce",
  "s_name": "fl. oz.",
  "metric_val": "29.57"
});
db["units"].insert({
  "_id": ObjectId("4d4eb5c13d3f95800e00000c"),
  "l_name": "cup",
  "s_name": "C",
  "metric_val": "236.59"
});
db["units"].insert({
  "_id": ObjectId("4d56e1613d3f95880a000003"),
  "l_name": "slices",
  "s_name": "slices",
  "created": "Sat, 12 Feb 2011 14:37:05 -0500"
});
db["units"].insert({
  "_id": ObjectId("4d56f4f63d3f95880a00000f"),
  "l_name": "cloves",
  "s_name": "cloves",
  "created": "Sat, 12 Feb 2011 16:00:38 -0500"
});
db["units"].insert({
  "_id": ObjectId("4d56f4f63d3f95880a000010"),
  "l_name": "bags",
  "s_name": "bags",
  "created": "Sat, 12 Feb 2011 16:00:38 -0500"
});
db["units"].insert({
  "_id": ObjectId("4d5735283d3f95880a00001d"),
  "l_name": "small",
  "s_name": "small",
  "created": "Sat, 12 Feb 2011 20:34:32 -0500"
});
db["units"].insert({
  "_id": ObjectId("4d5735283d3f95880a00001e"),
  "created": "Sat, 12 Feb 2011 20:34:32 -0500",
  "l_name": "oz.",
  "s_name": "ounce"
});
db["units"].insert({
  "_id": ObjectId("4d581ab33d3f95480a00000f"),
  "l_name": "dash",
  "s_name": "dash",
  "created": "Sun, 13 Feb 2011 12:53:55 -0500"
});
db["units"].insert({
  "_id": ObjectId("4d581ab33d3f95480a000010"),
  "l_name": "pinch",
  "s_name": "pinch",
  "created": "Sun, 13 Feb 2011 12:53:55 -0500"
});
db["units"].insert({
  "_id": ObjectId("4d5822763d3f951c0a00001f"),
  "l_name": "bag",
  "s_name": "bag",
  "created": "Sun, 13 Feb 2011 13:27:02 -0500"
});
db["units"].insert({
  "_id": ObjectId("4d5ed0d53d3f954403000001"),
  "l_name": "ounces",
  "s_name": "ounces",
  "created": "Fri, 18 Feb 2011 15:04:37 -0500"
});

/** users records **/
db["users"].insert({
  "_id": ObjectId("4d59258f3d3f957c0000000f"),
  "password": "47ee7ad059e34499bec88f5bf03c548b",
  "username": "swright"
});
