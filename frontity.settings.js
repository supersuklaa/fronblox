require('dotenv').config();

const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
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
            [
              "Home",
              "/"
            ],
            [
              "All Stories",
              "/story_archive/"
            ],
            [
              "Everblox",
              "/sample-page/"
            ]
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
