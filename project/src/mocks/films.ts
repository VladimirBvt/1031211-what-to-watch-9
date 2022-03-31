export type Film = {
  id: number,
  title: string,
  genre: string,
  dateRelease: string,
  rating: number,
  image: string,
  video: string,
  time: string,
  numberOfRatings: number,
  description: string,
  director: string,
  starring: string,
}

export type Films = Film[];

export const films :Films = [
  {
    id: 0,
    title: 'The Grand Budapest Hotel',
    genre: 'Dramas',
    dateRelease: '2014',
    rating: 0,
    image: 'img/the-grand-budapest-hotel-poster.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:28:13',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'Dramas',
    dateRelease: '2015',
    rating: 0,
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:14:26',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    genre: 'Dramas',
    dateRelease: '2016',
    rating: 0,
    image: 'img/bohemian-rhapsody.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:06:44',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  {
    id: 3,
    title: 'Macbeth',
    genre: 'Dramas',
    dateRelease: '2017',
    rating: 0,
    image: 'img/macbeth.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:19:31',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  {
    id: 4,
    title: 'Aviator',
    genre: 'Dramas',
    dateRelease: '2018',
    rating: 0,
    image: 'img/aviator.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:26:55',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    genre: 'Dramas',
    dateRelease: '2019',
    rating: 0,
    image: 'img/we-need-to-talk-about-kevin.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:11:15',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    genre: 'Dramas',
    dateRelease: '2020',
    rating: 0,
    image: 'img/what-we-do-in-the-shadows.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '0:57:25',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  {
    id: 7,
    title: 'Revenant',
    genre: 'Dramas',
    dateRelease: '2021',
    rating: 0,
    image: 'img/revenant.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:11:17',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  /*{
    id: 8,
    title: 'Revenant',
    genre: 'Dramas',
    dateRelease: '2021',
    rating: 0,
    image: 'img/revenant.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:11:17',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },
  {
    id: 9,
    title: 'Revenant',
    genre: 'Dramas',
    dateRelease: '2021',
    rating: 0,
    image: 'img/revenant.jpg',
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    time: '1:11:17',
    numberOfRatings: 0,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  },*/
];
