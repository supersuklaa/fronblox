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
      "name": "@frontity/mars-theme",
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
          "postTypes": [
            {
              "type": "story",
              "endpoint": "story",
              "archive": "/story_archive",
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
