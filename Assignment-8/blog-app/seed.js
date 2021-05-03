const mongoose = require('mongoose');
const Blog = require('./models/blog');

const blogs = [
    {
        title: 'DC movies, games, and comics to get standalone 24-hour FanDome event this summer',
        img: 'https://cdn.vox-cdn.com/thumbor/VWyVFWCMOFuSwlCA4uyuYyotWxc=/0x0:1014x898/920x613/filters:focal(426x368:588x530):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66940930/Screen_Shot_2020_06_16_at_9.57.09_AM.0.png',
        author: 'Lomitaswa Suna',
        content: 'DC Comics is preparing to host a 24-hour event this August that will include teasers and announcements for upcoming comics, games, TV shows, and films, including The Batman, Shazam!, Aquaman, and Wonder Woman 1984.The event, called FanDome, will kick off on August 22nd at 1PM ET. Alongside announcements and general news, DC Comics and WarnerMedia are wrangling an assortment of talent for interviews and discussions across some of the company’s most anticipated titles, including Aquaman, The Batman, Batwoman, Black Adam, Black Lightning, DC Super Hero Girls	, Legends of Tomorrow, Stargirl, Doom Patrol, The Flash, Harley Quinn, the Snyder Cut of Justice League, Lucifer, Pennyworth, Shazam!, The Suicide Squad, Supergirl, Superman & Lois, Teen Titans Go!, Titans, Watchmen, Young Justice: Outsider, and Wonder Woman 1984.'
    },
    {
        title: 'Question Club: the best and worst Joker debate topics',
        img: 'https://cdn.vox-cdn.com/thumbor/LuZpQI1u5sUaQDuTQefW9hMn8lc=/0x0:6000x4000/920x613/filters:focal(4832x1102:5792x2062):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65434400/rev_1_JOK_20921_High_Res_JPEG.0.jpeg',
        author: 'Lomitaswa Suna',
        content: 'Todd Phillips’ Joker has been one of the most discussed films of the year, in part because it was controversial before it was even made. When the film was first announced, not long after the disastrous DC movie Suicide Squad revealed its own cinematic take on the Joker character, a vocal subsegment of the film world rebelled at the idea of rebooting the villain yet again, and protested DC’s interest in focusing on him at the expense of so many other characters.'
    },
    {
        title: 'DC movies, games, and comics to get standalone 24-hour FanDome event this summer',
        img: 'https://cdn.vox-cdn.com/thumbor/VWyVFWCMOFuSwlCA4uyuYyotWxc=/0x0:1014x898/920x613/filters:focal(426x368:588x530):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66940930/Screen_Shot_2020_06_16_at_9.57.09_AM.0.png',
        author: 'Lomitaswa Suna',
        content: 'DC Comics is preparing to host a 24-hour event this August that will include teasers and announcements for upcoming comics, games, TV shows, and films, including The Batman, Shazam!, Aquaman, and Wonder Woman 1984.The event, called FanDome, will kick off on August 22nd at 1PM ET. Alongside announcements and general news, DC Comics and WarnerMedia are wrangling an assortment of talent for interviews and discussions across some of the company’s most anticipated titles, including Aquaman, The Batman, Batwoman, Black Adam, Black Lightning, DC Super Hero Girls	, Legends of Tomorrow, Stargirl, Doom Patrol, The Flash, Harley Quinn, the Snyder Cut of Justice League, Lucifer, Pennyworth, Shazam!, The Suicide Squad, Supergirl, Superman & Lois, Teen Titans Go!, Titans, Watchmen, Young Justice: Outsider, and Wonder Woman 1984.'
    },
    {
        title: 'Question Club: the best and worst Joker debate topics',
        img: 'https://cdn.vox-cdn.com/thumbor/LuZpQI1u5sUaQDuTQefW9hMn8lc=/0x0:6000x4000/920x613/filters:focal(4832x1102:5792x2062):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65434400/rev_1_JOK_20921_High_Res_JPEG.0.jpeg',
        author: 'Lomitaswa Suna',
        content: 'Todd Phillips’ Joker has been one of the most discussed films of the year, in part because it was controversial before it was even made. When the film was first announced, not long after the disastrous DC movie Suicide Squad revealed its own cinematic take on the Joker character, a vocal subsegment of the film world rebelled at the idea of rebooting the villain yet again, and protested DC’s interest in focusing on him at the expense of so many other characters.'
    },
    {
        title: 'DC movies, games, and comics to get standalone 24-hour FanDome event this summer',
        img: 'https://cdn.vox-cdn.com/thumbor/VWyVFWCMOFuSwlCA4uyuYyotWxc=/0x0:1014x898/920x613/filters:focal(426x368:588x530):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66940930/Screen_Shot_2020_06_16_at_9.57.09_AM.0.png',
        author: 'Lomitaswa Suna',
        content: 'DC Comics is preparing to host a 24-hour event this August that will include teasers and announcements for upcoming comics, games, TV shows, and films, including The Batman, Shazam!, Aquaman, and Wonder Woman 1984.The event, called FanDome, will kick off on August 22nd at 1PM ET. Alongside announcements and general news, DC Comics and WarnerMedia are wrangling an assortment of talent for interviews and discussions across some of the company’s most anticipated titles, including Aquaman, The Batman, Batwoman, Black Adam, Black Lightning, DC Super Hero Girls	, Legends of Tomorrow, Stargirl, Doom Patrol, The Flash, Harley Quinn, the Snyder Cut of Justice League, Lucifer, Pennyworth, Shazam!, The Suicide Squad, Supergirl, Superman & Lois, Teen Titans Go!, Titans, Watchmen, Young Justice: Outsider, and Wonder Woman 1984.'
    },
    {
        title: 'Question Club: the best and worst Joker debate topics',
        img: 'https://cdn.vox-cdn.com/thumbor/LuZpQI1u5sUaQDuTQefW9hMn8lc=/0x0:6000x4000/920x613/filters:focal(4832x1102:5792x2062):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65434400/rev_1_JOK_20921_High_Res_JPEG.0.jpeg',
        author: 'Lomitaswa Suna',
        content: 'Todd Phillips’ Joker has been one of the most discussed films of the year, in part because it was controversial before it was even made. When the film was first announced, not long after the disastrous DC movie Suicide Squad revealed its own cinematic take on the Joker character, a vocal subsegment of the film world rebelled at the idea of rebooting the villain yet again, and protested DC’s interest in focusing on him at the expense of so many other characters.'
    }
];

const seedDB = async () => {
    await Blog.insertMany(blogs);
    console.log('DB Seeded');
}

module.exports = seedDB;