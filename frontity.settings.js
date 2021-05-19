require('dotenv').config();

const settings = {
  "name": "fronblox",
  "state": {
    "frontity": {
      "url": process.env.PUBLIC_URL,
      "title": "The Fronblox Blog",
      "description": "Frontity covered Everblox cake"
    }
  },
  "packages": [
    {
      "name": "everderb",
      "state": {
        "theme": {
          "menu": [
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": process.env.SOURCE_URL,
          "auth": "Basic ZW06bWFkZQ==",
          "postTypes": [
            {
              "type": "page",
              "endpoint": "page",
              "archive": "/page_archive",
            },
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
