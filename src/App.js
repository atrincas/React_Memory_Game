import React, { Component } from 'react';
import axios from 'axios';

import cred from './Components/cred';
import CardListOne from './Components/CardListOne';
import CardListTwo from './Components/CardListTwo';

import './App.css';


class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    cards : [
    {
    "id": "Frerby5o1T4",
    "created_at": "2017-04-25T02:23:49-04:00",
    "updated_at": "2018-06-13T20:39:32-04:00",
    "width": 3872,
    "height": 2592,
    "color": "#D7E4EC",
    "description": null,
    "urls": {
      "raw": "https://images.unsplash.com/photo-1493101382455-cf11ffa65f45?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=8d37d1c16a42b352a34b357bd428d0fa",
      "full": "https://images.unsplash.com/photo-1493101382455-cf11ffa65f45?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=7926bcfe60626475e0e378b426b9c436",
      "regular": "https://images.unsplash.com/photo-1493101382455-cf11ffa65f45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=c7bdf3a59356aadfe7b6395ca91aa061",
      "small": "https://images.unsplash.com/photo-1493101382455-cf11ffa65f45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=fda05eedea38cd916ac5d42bf9452935",
      "thumb": "https://images.unsplash.com/photo-1493101382455-cf11ffa65f45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=97a4775807155715ff910ee1ea76a04a"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/Frerby5o1T4",
      "html": "https://unsplash.com/photos/Frerby5o1T4",
      "download": "https://unsplash.com/photos/Frerby5o1T4/download",
      "download_location": "https://api.unsplash.com/photos/Frerby5o1T4/download"
    },
    "categories": [],
    "sponsored": false,
    "sponsored_by": null,
    "sponsored_impressions_id": null,
    "likes": 92,
    "liked_by_user": false,
    "current_user_collections": [],
    "slug": null,
    "user": {
      "id": "M2z2MXSoXNg",
      "updated_at": "2018-11-13T12:49:12-05:00",
      "username": "aleksdahlberg",
      "name": "Aleks Dahlberg",
      "first_name": "Aleks",
      "last_name": "Dahlberg",
      "twitter_username": "alksdhlbrg",
      "portfolio_url": "https://aleksdahlberg.com/",
      "bio": "Someone from nowhere. CEO @ Kitt.io (www.kitt.io)",
      "location": "Dunedin",
      "links": {
        "self": "https://api.unsplash.com/users/aleksdahlberg",
        "html": "https://unsplash.com/@aleksdahlberg",
        "photos": "https://api.unsplash.com/users/aleksdahlberg/photos",
        "likes": "https://api.unsplash.com/users/aleksdahlberg/likes",
        "portfolio": "https://api.unsplash.com/users/aleksdahlberg/portfolio",
        "following": "https://api.unsplash.com/users/aleksdahlberg/following",
        "followers": "https://api.unsplash.com/users/aleksdahlberg/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1493848092006-e8869b317256?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0cf73eb6c7ed8fd60e6c98e598ec123d",
        "medium": "https://images.unsplash.com/profile-1493848092006-e8869b317256?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=96d38a76776cc99a474bbc4d983425a8",
        "large": "https://images.unsplash.com/profile-1493848092006-e8869b317256?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=4ff3ed697c425b4d9d4f7a5087774d32"
      },
      "instagram_username": "aleksdahlberg",
      "total_collections": 13,
      "total_likes": 462,
      "total_photos": 131,
      "accepted_tos": false
    },
    "tags": [
      {
        "title": "bubble"
      },
      {
        "title": "water"
      },
      {
        "title": "dark water"
      },
      {
        "title": "close up"
      },
      {
        "title": "water surface"
      },
      {
        "title": "texture"
      },
      {
        "title": "dark"
      },
      {
        "title": "blue"
      },
      {
        "title": "new zealand"
      },
      {
        "title": "lush"
      },
      {
        "title": "light"
      },
      {
        "title": "ambient"
      },
      {
        "title": "green"
      },
      {
        "title": "wet"
      },
      {
        "title": "abstract"
      },
      {
        "title": "art"
      },
      {
        "title": "black"
      },
      {
        "title": "ripple"
      }
    ],
    "photo_tags": [
      {
        "title": "bubble"
      },
      {
        "title": "water"
      },
      {
        "title": "dark water"
      },
      {
        "title": "close up"
      },
      {
        "title": "water surface"
      }
    ]
  },
  {
    "id": "fG5vcqkusO0",
    "created_at": "2017-06-11T11:12:31-04:00",
    "updated_at": "2018-08-28T20:18:25-04:00",
    "width": 3640,
    "height": 2912,
    "color": "#CBD0C5",
    "description": "glass bottle on body of water",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1497193600105-54080e503480?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=b3dc7511cef3fe9caaedb6bc40742830",
      "full": "https://images.unsplash.com/photo-1497193600105-54080e503480?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=085cd25bb20738ae193ad7a241c4684e",
      "regular": "https://images.unsplash.com/photo-1497193600105-54080e503480?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=df4526b4c0ef0dcd6e8c1ea952c7b512",
      "small": "https://images.unsplash.com/photo-1497193600105-54080e503480?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=13eb61fc791d4ebff63bd49c801ef0c2",
      "thumb": "https://images.unsplash.com/photo-1497193600105-54080e503480?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=16c75b4d1b29784d51656de08ed172fb"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/fG5vcqkusO0",
      "html": "https://unsplash.com/photos/fG5vcqkusO0",
      "download": "https://unsplash.com/photos/fG5vcqkusO0/download",
      "download_location": "https://api.unsplash.com/photos/fG5vcqkusO0/download"
    },
    "categories": [],
    "sponsored": false,
    "sponsored_by": null,
    "sponsored_impressions_id": null,
    "likes": 156,
    "liked_by_user": false,
    "current_user_collections": [],
    "slug": null,
    "user": {
      "id": "fyZYXYXaMt0",
      "updated_at": "2018-11-10T21:42:57-05:00",
      "username": "aman",
      "name": "Aman Bhargava",
      "first_name": "Aman",
      "last_name": "Bhargava",
      "twitter_username": "thedivtagguy",
      "portfolio_url": "http://instagram.com/thedivtagguy",
      "bio": "16 years old | Mangalore | Go follow me on Instagram!",
      "location": null,
      "links": {
        "self": "https://api.unsplash.com/users/aman",
        "html": "https://unsplash.com/@aman",
        "photos": "https://api.unsplash.com/users/aman/photos",
        "likes": "https://api.unsplash.com/users/aman/likes",
        "portfolio": "https://api.unsplash.com/users/aman/portfolio",
        "following": "https://api.unsplash.com/users/aman/following",
        "followers": "https://api.unsplash.com/users/aman/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1522768590525-cca8da294118?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=8fa84949106df3637887bbc32a814a9a",
        "medium": "https://images.unsplash.com/profile-1522768590525-cca8da294118?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3c80e487f20bf01ad75c74bb64a9d9bf",
        "large": "https://images.unsplash.com/profile-1522768590525-cca8da294118?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=2355c72d5182df1dac67ee20d151902c"
      },
      "instagram_username": "thedivtagguy",
      "total_collections": 0,
      "total_likes": 88,
      "total_photos": 23,
      "accepted_tos": false
    },
    "tags": [
      {
        "title": "water"
      },
      {
        "title": "bottle"
      },
      {
        "title": "splash"
      },
      {
        "title": "puddle"
      },
      {
        "title": "splashing water"
      },
      {
        "title": "rain"
      },
      {
        "title": "water droplet"
      },
      {
        "title": "glass"
      },
      {
        "title": "unsplash"
      },
      {
        "title": "droplet"
      },
      {
        "title": "drop"
      },
      {
        "title": "ground"
      },
      {
        "title": "indium"
      },
      {
        "title": "stills of life"
      },
      {
        "title": "still"
      },
      {
        "title": "life"
      },
      {
        "title": "chao"
      },
      {
        "title": "rainwater"
      },
      {
        "title": "water bokeh"
      },
      {
        "title": "bokeh"
      }
    ],
    "photo_tags": [
      {
        "title": "water"
      },
      {
        "title": "bottle"
      },
      {
        "title": "splash"
      },
      {
        "title": "puddle"
      },
      {
        "title": "splashing water"
      }
    ]
  },
  {
    "id": "wpDu3sTwcsk",
    "created_at": "2018-08-09T17:30:46-04:00",
    "updated_at": "2018-08-28T21:20:04-04:00",
    "width": 4000,
    "height": 5000,
    "color": "#1E2326",
    "description": "body of water under cloudy sky",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1533849815524-2d286e9b53df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=21b59a5930d9dbd1c266b189ac01c37c",
      "full": "https://images.unsplash.com/photo-1533849815524-2d286e9b53df?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=f4aa8dfcb140f3935b52daed6c60503d",
      "regular": "https://images.unsplash.com/photo-1533849815524-2d286e9b53df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=ffdc5b87932c72525ec67672092da3fc",
      "small": "https://images.unsplash.com/photo-1533849815524-2d286e9b53df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=83fe948a9fb77175916c78fb30d06108",
      "thumb": "https://images.unsplash.com/photo-1533849815524-2d286e9b53df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=8af8c72a95f1af742321a81cbe84dc45"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/wpDu3sTwcsk",
      "html": "https://unsplash.com/photos/wpDu3sTwcsk",
      "download": "https://unsplash.com/photos/wpDu3sTwcsk/download",
      "download_location": "https://api.unsplash.com/photos/wpDu3sTwcsk/download"
    },
    "categories": [],
    "sponsored": false,
    "sponsored_by": null,
    "sponsored_impressions_id": null,
    "likes": 113,
    "liked_by_user": false,
    "current_user_collections": [],
    "slug": null,
    "user": {
      "id": "e8kJCl40Yx4",
      "updated_at": "2018-11-12T15:41:20-05:00",
      "username": "tapir",
      "name": "Simon Zachrisson",
      "first_name": "Simon",
      "last_name": "Zachrisson",
      "twitter_username": null,
      "portfolio_url": "http://instagram.com/simon.hz",
      "bio": "20 year old guy from Gothenburg. \r\nI enjoy taking photos.\r\n",
      "location": "Sweden",
      "links": {
        "self": "https://api.unsplash.com/users/tapir",
        "html": "https://unsplash.com/@tapir",
        "photos": "https://api.unsplash.com/users/tapir/photos",
        "likes": "https://api.unsplash.com/users/tapir/likes",
        "portfolio": "https://api.unsplash.com/users/tapir/portfolio",
        "following": "https://api.unsplash.com/users/tapir/following",
        "followers": "https://api.unsplash.com/users/tapir/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1535999495798-e69e0976dac5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7f7ca18e895ca9e934f549c1cd409f83",
        "medium": "https://images.unsplash.com/profile-1535999495798-e69e0976dac5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=46d34951179e86849bc2863103bfd5e9",
        "large": "https://images.unsplash.com/profile-1535999495798-e69e0976dac5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=5cef7abfbb1bc786e810ac72df8e370f"
      },
      "instagram_username": "simon.hz",
      "total_collections": 1,
      "total_likes": 510,
      "total_photos": 46,
      "accepted_tos": false
    },
    "tags": [
      {
        "title": "water"
      },
      {
        "title": "sea"
      },
      {
        "title": "wafe"
      },
      {
        "title": "tide"
      },
      {
        "title": "water side"
      },
      {
        "title": "water waves"
      },
      {
        "title": "deep water"
      },
      {
        "title": "explore"
      },
      {
        "title": "depth of field"
      }
    ],
    "photo_tags": [
      {
        "title": "water"
      },
      {
        "title": "sea"
      },
      {
        "title": "wafe"
      },
      {
        "title": "tide"
      },
      {
        "title": "water side"
      }
    ]
  },
  {
    "id": "OR3dw8SkL7M",
    "created_at": "2018-10-23T20:16:16-04:00",
    "updated_at": "2018-11-05T06:59:36-05:00",
    "width": 3000,
    "height": 4512,
    "color": "#E4DAC7",
    "description": null,
    "urls": {
      "raw": "https://images.unsplash.com/photo-1540340070329-c14196e1c800?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=cd58aabcb84f261e24961bffa28569ac",
      "full": "https://images.unsplash.com/photo-1540340070329-c14196e1c800?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=d75c36c096d47575da28cf6a937596d6",
      "regular": "https://images.unsplash.com/photo-1540340070329-c14196e1c800?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=013ba18aa0225726d2c606f7c63ec0a1",
      "small": "https://images.unsplash.com/photo-1540340070329-c14196e1c800?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=586f4b1329dd311c5b5495644044393c",
      "thumb": "https://images.unsplash.com/photo-1540340070329-c14196e1c800?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=24a50c138d6aa55352f4b2ce24ec7931"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/OR3dw8SkL7M",
      "html": "https://unsplash.com/photos/OR3dw8SkL7M",
      "download": "https://unsplash.com/photos/OR3dw8SkL7M/download",
      "download_location": "https://api.unsplash.com/photos/OR3dw8SkL7M/download"
    },
    "categories": [],
    "sponsored": false,
    "sponsored_by": null,
    "sponsored_impressions_id": null,
    "likes": 49,
    "liked_by_user": false,
    "current_user_collections": [],
    "slug": null,
    "user": {
      "id": "-ZQ3vFxMgns",
      "updated_at": "2018-10-25T01:13:33-04:00",
      "username": "eurobeat",
      "name": "Sam Lawler",
      "first_name": "Sam",
      "last_name": "Lawler",
      "twitter_username": null,
      "portfolio_url": null,
      "bio": null,
      "location": null,
      "links": {
        "self": "https://api.unsplash.com/users/eurobeat",
        "html": "https://unsplash.com/@eurobeat",
        "photos": "https://api.unsplash.com/users/eurobeat/photos",
        "likes": "https://api.unsplash.com/users/eurobeat/likes",
        "portfolio": "https://api.unsplash.com/users/eurobeat/portfolio",
        "following": "https://api.unsplash.com/users/eurobeat/following",
        "followers": "https://api.unsplash.com/users/eurobeat/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-fb-1509255488-1690082342d8.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=456df60535eabca8c6d25e7a9a84ea4a",
        "medium": "https://images.unsplash.com/profile-fb-1509255488-1690082342d8.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=0a6a96f0c01690aaf64d41f2bb91f6c8",
        "large": "https://images.unsplash.com/profile-fb-1509255488-1690082342d8.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=3ac27791be93e91a463bf888ff4a3475"
      },
      "instagram_username": null,
      "total_collections": 0,
      "total_likes": 31,
      "total_photos": 3,
      "accepted_tos": false
    },
    "tags": [
      {
        "title": "lake"
      },
      {
        "title": "reflection"
      },
      {
        "title": "water"
      },
      {
        "title": "river"
      },
      {
        "title": "wave"
      },
      {
        "title": "deep water"
      },
      {
        "title": "blue water"
      },
      {
        "title": "waves"
      },
      {
        "title": "tetxure"
      },
      {
        "title": "water texture"
      }
    ],
    "photo_tags": [
      {
        "title": "lake"
      },
      {
        "title": "reflection"
      },
      {
        "title": "water"
      },
      {
        "title": "river"
      },
      {
        "title": "wave"
      }
    ]
  },
  {
    "id": "6SqUeud_zQY",
    "created_at": "2018-11-11T12:28:27-05:00",
    "updated_at": "2018-11-12T08:04:59-05:00",
    "width": 5680,
    "height": 3787,
    "color": "#090909",
    "description": null,
    "urls": {
      "raw": "https://images.unsplash.com/photo-1541957195826-ba36a0019fc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=fcd1683f7fd2415cd889770e9db6993d",
      "full": "https://images.unsplash.com/photo-1541957195826-ba36a0019fc7?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=0d0046080e6687ca3836bbcf3d5409d8",
      "regular": "https://images.unsplash.com/photo-1541957195826-ba36a0019fc7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=e2ac7719896f79eb34432af7cd17b38e",
      "small": "https://images.unsplash.com/photo-1541957195826-ba36a0019fc7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=9445a0691a5beaf42a67f2d7788fe859",
      "thumb": "https://images.unsplash.com/photo-1541957195826-ba36a0019fc7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=58054d82be5e2659c620c92b626966e3"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/6SqUeud_zQY",
      "html": "https://unsplash.com/photos/6SqUeud_zQY",
      "download": "https://unsplash.com/photos/6SqUeud_zQY/download",
      "download_location": "https://api.unsplash.com/photos/6SqUeud_zQY/download"
    },
    "categories": [],
    "sponsored": false,
    "sponsored_by": null,
    "sponsored_impressions_id": null,
    "likes": 0,
    "liked_by_user": false,
    "current_user_collections": [],
    "slug": null,
    "user": {
      "id": "W3ejoY7oOLs",
      "updated_at": "2018-09-21T16:46:01-04:00",
      "username": "xdavin",
      "name": "Davin G",
      "first_name": "Davin",
      "last_name": "G",
      "twitter_username": null,
      "portfolio_url": null,
      "bio": null,
      "location": null,
      "links": {
        "self": "https://api.unsplash.com/users/xdavin",
        "html": "https://unsplash.com/@xdavin",
        "photos": "https://api.unsplash.com/users/xdavin/photos",
        "likes": "https://api.unsplash.com/users/xdavin/likes",
        "portfolio": "https://api.unsplash.com/users/xdavin/portfolio",
        "following": "https://api.unsplash.com/users/xdavin/following",
        "followers": "https://api.unsplash.com/users/xdavin/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc",
        "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358",
        "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d"
      },
      "instagram_username": null,
      "total_collections": 0,
      "total_likes": 0,
      "total_photos": 10,
      "accepted_tos": false
    },
    "tags": [
      {
        "title": "water"
      },
      {
        "title": "wafe"
      },
      {
        "title": "beach"
      },
      {
        "title": "drop"
      },
      {
        "title": "splash"
      },
      {
        "title": "water splash"
      },
      {
        "title": "wooden pilar"
      }
    ],
    "photo_tags": [
      {
        "title": "water"
      },
      {
        "title": "wafe"
      },
      {
        "title": "beach"
      },
      {
        "title": "drop"
      },
      {
        "title": "splash"
      }
    ]
  },
  {
    "id": "CpYQ7sW445I",
    "created_at": "2018-10-27T13:40:37-04:00",
    "updated_at": "2018-11-12T07:31:46-05:00",
    "width": 5184,
    "height": 3456,
    "color": "#EBCD6B",
    "description": "orange koi fish in water",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1540661813549-bf2c50d14580?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=deb711fddc27c367ff310407330edf3a",
      "full": "https://images.unsplash.com/photo-1540661813549-bf2c50d14580?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=41c364846429147946ac2b2a256507e3",
      "regular": "https://images.unsplash.com/photo-1540661813549-bf2c50d14580?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=7cd04d39c04c699ade78a06ee5aad6e8",
      "small": "https://images.unsplash.com/photo-1540661813549-bf2c50d14580?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=59efff220ebb17745e8e54912ab4fe04",
      "thumb": "https://images.unsplash.com/photo-1540661813549-bf2c50d14580?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQwMDM4fQ&s=4e561cfe94ec7031582234b0ceb05758"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/CpYQ7sW445I",
      "html": "https://unsplash.com/photos/CpYQ7sW445I",
      "download": "https://unsplash.com/photos/CpYQ7sW445I/download",
      "download_location": "https://api.unsplash.com/photos/CpYQ7sW445I/download"
    },
    "categories": [],
    "sponsored": false,
    "sponsored_by": null,
    "sponsored_impressions_id": null,
    "likes": 0,
    "liked_by_user": false,
    "current_user_collections": [],
    "slug": null,
    "user": {
      "id": "fdFUU-q8gMg",
      "updated_at": "2018-10-27T13:44:00-04:00",
      "username": "chrispiction",
      "name": "Christian Atienza",
      "first_name": "Christian",
      "last_name": "Atienza",
      "twitter_username": null,
      "portfolio_url": null,
      "bio": null,
      "location": null,
      "links": {
        "self": "https://api.unsplash.com/users/chrispiction",
        "html": "https://unsplash.com/@chrispiction",
        "photos": "https://api.unsplash.com/users/chrispiction/photos",
        "likes": "https://api.unsplash.com/users/chrispiction/likes",
        "portfolio": "https://api.unsplash.com/users/chrispiction/portfolio",
        "following": "https://api.unsplash.com/users/chrispiction/following",
        "followers": "https://api.unsplash.com/users/chrispiction/followers"
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-fb-1540635211-28fddacb96e3.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=e34e823f5f5c7747df33795b6aa9e721",
        "medium": "https://images.unsplash.com/profile-fb-1540635211-28fddacb96e3.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=dea6f7e94233a2ded70b7582d54731b2",
        "large": "https://images.unsplash.com/profile-fb-1540635211-28fddacb96e3.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=632e9d4ec0aab82966d3b42c41e8449e"
      },
      "instagram_username": null,
      "total_collections": 0,
      "total_likes": 0,
      "total_photos": 6,
      "accepted_tos": false
    },
    "tags": [
      {
        "title": "fish"
      },
      {
        "title": "goldfish"
      },
      {
        "title": "water fish"
      },
      {
        "title": "water"
      },
      {
        "title": "golden"
      },
      {
        "title": "orange"
      },
      {
        "title": "water ripple"
      }
    ],
    "photo_tags": [
      {
        "title": "fish"
      },
      {
        "title": "goldfish"
      },
      {
        "title": "water fish"
      },
      {
        "title": "water"
      },
      {
        "title": "golden"
      }
    ]
  }
],
    cardsCopy : [],
    loadingState : false,
    score : 0,
    attempts : null,
    clicked : null,
    firstGuess : null,
    secondGuess : null,
    activeCard : 100,
    update : false
    }
this.clickHandler = this.clickHandler.bind(this);
  }

componentWillMount() {
  console.log('willmount',this.state.cards);

  //Make a copy of the cards array and shuffle both arrays:
  var arr = this.state.cards,
      arr2 = arr.slice();
  this.shuffle(arr,'cards');
  this.shuffle(arr2,'cardsCopy');
  this.handleUpdate();

  // axios
  //   .get(
  //       `https://api.unsplash.com/search/photos/?page=1&per_page=12&query='water'&client_id=${cred._applicationId}`
  //     )
  //   .then(data => {
  //     this.setState({cards : data.data.results, loadingState : false});
  //     })
  //   .catch(err => {
  //     console.log('Error happened during fetching!', err);
  //   });

  // }

}

componentDidMount() {
  console.log('didmount')
}

componentWillUpdate() {
  console.log('willupdate');
}

componentDidUpdate(prevProps,prevState) {
  console.log('didupdate', this.state.cardsCopy);
}

shouldComponentUpdate() {
  //Makes sure the component CardList only re-renders when cards has to be resetted:
  if(this.state.update) {
    return false;
  } else {
    return true;
  }
}

// componentWillUpdate(prevProps, prevState) {
//   console.log('componentWillUpdate', this.state.cards);
//   if(prevState.cards !== this.state.cards) {
//     console.log('prevState', prevState.cards);
//   }
// }

clickHandler = (e) => {
    // Add class is-flipped to turn front card 180 degrees:
    e.currentTarget.classList.toggle('is-flipped');

    // Check if firstGuess is not set:
    if(!this.state.clicked) {
      var firstGuess = e.currentTarget.dataset.card;
      this.handleIncreaseClicked();
      this.setState({firstGuess});
    } else {
      console.log('this is the second guess');
      var secondGuess = e.currentTarget.dataset.card;
      this.handleIncreaseClicked();
      //SetState the secondGuess and use callback to run this.match():
      this.setState({secondGuess},() => this.match());
    }   
  }

shuffle = (array, cards) => {
  var arr = array;
  var currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  
  // Check to see which state.cards array has to be modified:
  if(cards === 'cards') {
    this.setState({cards : arr});
  } else if(cards === 'cardsCopy') {
    this.setState({cardsCopy : arr});
  }
  
}

handleIncreaseClicked() {
    this.setState((prevState,props) => {
      return {clicked : prevState.clicked + 1};
    });
  }

handleUpdate() {
    this.setState((prevState,props) => {
      return {update : !prevState.update};
    });
  }

match = () => {
    var firstGuess = this.state.firstGuess,
        secondGuess = this.state.secondGuess;
    
    if(firstGuess && secondGuess) {

      if(firstGuess === secondGuess) {
        // Add score:
        this.setState({score : this.state.score + 1});
        var selected = document.getElementsByClassName('is-flipped');
        //add class match and remove class is-flipped:
        while (selected.length > 0) {
          selected.item(0).classList.add('match');
          selected[0].classList.remove('is-flipped');
        }
        this.resetCards();

      } else {
        //Reset the cards back to initial position:
        this.timeout = setTimeout(() => {
          this.resetCards();
        },1000);
      }
    }
    
  }

  resetCards = () => {
    this.setState({clicked : null, attempts : this.state.attempts + 1, firstGuess : null, secondGuess : null, update : true});
    var selected = document.getElementsByClassName('is-flipped');
    console.log('resetcards',selected);
    //Remove class is-flipped
    while(selected.length > 0) {
      selected[0].classList.remove('is-flipped');
    }
  }

  render() {

    return (
      <div className="App">
        <div className="wrapper">
          <CardListOne dataOne={this.state.cards} className={'card'} clickHandler={this.clickHandler} />
          <CardListTwo dataTwo={this.state.cardsCopy} className={'card'} clickHandler={this.clickHandler} />
        </div>
      </div>
    );
  }
}

export default App;
