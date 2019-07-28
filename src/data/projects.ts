import { Project, MediaType } from "../app/services/";

/**
 * This file contains list of projects which we want to display in app
 * 
 * To add new project just copy/paste new item to _projectList_.
 * Don't forget to change ID, because it's crutial for displaying each project in project page.
 */


// simple enum for media types. Add _MediaType.Video_ if you want to display video, or _MediaType.Image_ for image.

const imagePath = '/assets/images';
const videoPath = '/assets/videos';
const spark = '/assets/S-PARK';
const speedmoji = '/assets/SPEEDMOJI';
const veloretti = '/assets/VELORETTI';

const WorldOfScreensProject: Project = {
  id: 1,
  title: 'World of Screens',
  brand: 'T-Mobile',
  description: [
    {
      text: `<b>Context</b><br>
      Our lives happen across multiple screens and as we hop from one to the other, we break all kinds of limits.`
    },
    {
      text: `<b>Mission</b><br>
      Create an ownable creative system that will clearly communicate the feeling and benefit of Unlimited data by T-Mobile.`
    },
    {
      text: `<b>Idea</b><br>
      The world of screens: a world where screens open their boundaries and allow magical stories to unfold between them. `
    },
  ],
  image: `${ imagePath }/_T-Mobile_thumbnail.jpg`,
  items: [
    {
      path: `${ videoPath }/T-Mobile_VIDEO_1.mp4`,
      type: MediaType.Video,
      title: `‘Dancer’ TVC`,
    },
    {
      path: `${ imagePath }/T-Mobile_Unlimited_1.gif`,
      type: MediaType.Image,
      description: [
        { text: 'Our first campaign expressed how the T-Mobile Unlimited feels and what it ultimately enables people to do.' },
      ]
    },
    {
      path: `${ imagePath }/T-Mobile_Unlimited_2.gif`,
      type: MediaType.Image,
      description: [
        { text: '' },
      ]
    },
    {
      path: `${ videoPath }/T-Mobile_VIDEO_2.mp4`,
      type: MediaType.Video,
      title: `Netflix campaign TVC`,
    },
    {
      path: `${ imagePath }/T-Mobile_Netflix_1.gif`,
      type: MediaType.Image,
      description: [
        { text: 'To communicate the offer with Netflix included, popular Netflix characters did a dance-off in various places where our customers can now stream freely. ' },
      ]
    },
    {
      path: `${ imagePath }/T-Mobile_Netflix_2.gif`,
      type: MediaType.Image,
      description: [
        { text: '' },
      ]
    },
    {
      path: `${ imagePath }/T-Mobile_Netflix_3.gif`,
      type: MediaType.Image,
      description: [
        { text: '' },
      ]
    },
    

    {
      path: `${ videoPath }/T-Mobile_VIDEO_3.mp4`,
      type: MediaType.Video,
      title: `GOGOGO TVC`,
    },
    {
      path: `${ imagePath }/T-Mobile_gogogo_1.gif`,
      type: MediaType.Image,
      description: [
        { text: 'GoGoGo is an annual sales campaign in which, for a limited time, a range of mobile phones is offered for great prices. To express the feeling of urgency, our hero rushes through the plethora of falling screens until he reaches the T-Mobile store.' },
      ]
    },
    {
      path: `${ imagePath }/T-Mobile_gogogo_2.gif`,
      type: MediaType.Image,
      description: [
        { text: '' },
      ]
    },
    {
      path: `${ imagePath }/T-Mobile_gogogo_3.gif`,
      type: MediaType.Image,
      description: [
        { text: '' },
      ]
    },


    {
      path: `${ videoPath }/T-Mobile_VIDEO_4.mp4`,
      type: MediaType.Video,
      title: `Goaaal`,
    },
    {
      path: `${ videoPath }/T-Mobile_goal_1.gif`,
      type: MediaType.Image,
      description: [
        { text: 'To continue the existing ‘Never miss a moment’ campaign, we created a film starring young dutch female football talent and aired it during the Women World Cup 2019.' },
      ]
    },
    {
      path: `${ videoPath }/T-Mobile_goal_2.gif`,
      type: MediaType.Image,
      description: [
        { text: '' },
      ]
    },
    {
      path: `${ videoPath }/T-Mobile_goal_3.gif`,
      type: MediaType.Image,
      description: [
        { text: '' },
      ]
    },
  ]
}

const sParkProject: Project = {
  id: 2,
  title: 'S-Park',
  brand: 'WhatDesignCanDo',
  description: [
    {text: `
      <b>Context</b><br>
      Amsterdam has some impressive ambitions when it comes to generating renewable energy – by 2025, the city has pledged that 1/4 of its electricity will be sustainably generated. But in the centre, packed with monuments and protected buildings, solar panels are not permitted. Other infrastructure necessary for the transition, like electricity substations and transformers, are way too big or just too ugly to fit.
    `},
    {text: '<b>Mission</b><br>So, how can we transform a city that can’t be transformed?'},
    {text: `<b>Idea</b><br>The S-PARK is a bike rack, reimagined. 
    It turns the energy produced by people on their bikes, into electricity for their own neighbourhood.
    `},
    {text: '<b>Website</b><br><a href="https://www.spark.amsterdam/" target="_blank" class="link">spark.amsterdam</a>'},
  ],
  items: [
    {
      path: `${ spark }/spark_case.mp4`,
      type: MediaType.Video,
    },
    {
      path: `${ spark }/spark_2.gif`,
      type: MediaType.Image,
      description: [
        { text: 'Every neighbour is given a special front wheel. Once installed, it stores the energy generated while cycling and braking in batteries.' },
      ]
    },
    {
      path: `${ spark }/spark_3.gif`,
      type: MediaType.Image,
      description: [
        { text: 'At the end of the day, when everyone comes back home and parks their bike, the energy is then redistributed into the neighbourhood’s electrical grid, providing enough clean electricity to power all the surrounding streetlights, to play video games, or power a fridge for a full day.' },
      ]
    },
    {
      path: `${ spark }/spark_4.gif`,
      type: MediaType.Image,
      description: [{text: ''}]
    },
    {
      path: `${ spark }/spark_5.gif`,
      type: MediaType.Image,
      description: [{text: 'The S-PARK is designed to fit perfectly in the Amsterdam cityscape, making a clean energy infrastructure part of the environment. Like electrons coming together as a stream, neighbours are coming together around an initiative that saves money and generates clean electricity.'}]
    },
    {
      path: `${ spark }/spark_6.jpg`,
      type: MediaType.Image,
      description: [{text: ''}]
    },
    {
      path: `${ spark }/spark_7.jpg`,
      type: MediaType.Image,
      description: [{text: ''}]
    },
    /*{
      At the end of the day, when everyone comes back home and parks their bike, the energy is then redistributed into the neighbourhood’s electrical grid, providing enough clean electricity to power all the surrounding streetlights, to play video games, or power a fridge for a full day.
      path: `${ spark }/spark_2.gif`,
      type: MediaType.Image,
    },*/
  ],
  image: `${ spark }/spark_thumbnail.jpg`,
}

const speedmojiProject: Project = {
  id: 3,
  title: 'SPEEDMOJI',
  brand: 'Speedmoji Inc.',
  description: [
    {text: `
      <b>Context</b><br>
      Emoji is the fastest growing and universally understood language. And as much as we like variety, with every batch of new emojis we are struggling more and more to find our bearing in the endlessssssssss emoji keyboard.
    `},
    {text: '<b>Mission</b><br>Challenge people to practice their emoji-finding skills, seeking out the specific emojis at top speeds.'},
    {text: `<b>Idea</b><br>Speedmoji: a game to uncover who amongst friends is the fastest (and who is the slowest) at finding the right emoji.
    `},
  ],
  image: `${ speedmoji }/speedmoji_thumbnail.jpg`,
  items: [
    {
      path: `${ speedmoji }/speedmoji_1.gif`,
      type: MediaType.Image,
    },
    {
      type: MediaType.Text,
      text: 'Speedmoji lives on the Facebook Messenger Instant Games market, a platform that allows people within one chat to compete between themselves in short and engaging games.',
    },
    {
      path: `${ speedmoji }/speedmoji_2.gif`,
      type: MediaType.Image,
    },
    {
      type: MediaType.Text,
      text: 'The mission of the game is simple: collect as many points as possible before you run out of time. Each emoji typed correctly gets you a point and wins you some time. Typing the wrong emoji is punished with the loss of time.',
    },
    {
      path: `${ speedmoji }/speedmoji_3.gif`,
      type: MediaType.Image,
    },
    {
      type: MediaType.Text,
      text: 'The result is then compared to your friends’ who also get notified about your achievement, giving them a nudge to try and beat your score.',
    },
    {
      path: `${ speedmoji }/speedmoji_4.gif`,
      type: MediaType.Image,
    },
  ],
};

const carToBikeProject: Project = {
  id: 4,
  title: 'CAR-2-BIKE',
  brand: 'Veloretti',
  description: [
    {text: `
      <b>Context</b><br>
      Despite the Mayor's best efforts to reduce the number of cars, traffic still chokes the streets of Paris, and holds the city back.
    `},
    {text: '<b>Mission</b><br>With European Mobility Week coming, Veloretti, an Amsterdam bike manufacturer, saw an opportunity to push Paris forward, nudging every Parisian driver to ditch their car... for a bike.'},
    {text: `<b>Idea</b><br>CAR-2-BIKE, a promo campaign where we turned 5 million Parisian license plates into 5 million promo codes, granting all car owners a discount for a bike, and the perfect excuse to become a cyclist.
    `},
  ],
  image: `${ veloretti }/car2bike_thumbnail.jpg`,
  items: [
    {
      path: `${ veloretti }/car2bike_case.mp4`,
      type: MediaType.Video,
      title: 'Case Study',
    },
    {
      path: `${ veloretti }/car2bike_gif3.gif`,
      type: MediaType.Image,
      description: [
        { text: 'All they had to do was​ ​go on ​Veloretti.com,​ add their bike to the cart and type​ ​their plate number in the promo code box. Easy.' },
      ]
    },
    {
      path: `${ veloretti }/car2bike_gif2.gif`,
      type: MediaType.Image,
      description: [
        { text: 'Connecting with the French license plates database, we developed a Shopify script then able to verify the entered number, and analyse specific data about the registered vehicle — model, year of manufacture, type of fuel.' },
      ]
    },
    {
      path: `${ veloretti }/car2bike_gif1.gif`,
      type: MediaType.Image,
      description: [
        { text: 'This way we could estimate each car’s CO2 emissions, and adjust the discount accordingly. The more your car pollutes, the lower the price, making the switch to clean commuting even easier for those who needed it the most.' },
      ]
    },
  ],
};

export const projectsList: Project[] = [
  carToBikeProject,
  WorldOfScreensProject,
  sParkProject,
  speedmojiProject,
];
