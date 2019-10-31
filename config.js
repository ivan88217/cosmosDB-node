var config = {}

config.host = process.env.HOST || "https://ivan88217-cosmosdb-ea.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "Na2nDefcqJzshvr4oOJPmRQMJ3cmJt3wqawpah30tY9KBb8bKCjKKvoPFMF0Z2Gy8ReasdWwXjVOKIXFNVt13A==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;