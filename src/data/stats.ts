
// import interfaces with 'type' 
import type {Player, GameDay } from './models';

// import enums without 'type'
import { GameType } from './models';

export const players: Player[] =

  [
    {id: 'fw', name: 'FW', avatar: '/img/fw.png' },
    {id: 'fk', name: 'FK', avatar: '/img/fk.png'},    
    {id: 'ks', name: 'Костя', avatar: '/img/ks.png', team:'fw'},
    {id: 'ew', name: 'Эмма', avatar: '/img/ew.png', team:'fw'},
    {id: 'ak', name: 'Саша', avatar: '/img/ak.png', team:'fk'},
    {id: 'nk', name: 'Наташа', avatar: '/img/nk.png', team:'fk'},
    

  ];

export const Pls = {  
  EW: 'ew',
  KS: 'ks',  
  NK: 'nk',
  AK: 'ak',
  FW: 'fw',
  FK: 'fk'
};


export const games: GameDay[] = [
    {
      date: '2020.06.11',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 24}, looser: {playerId: Pls.FK, points: 22}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 14}},
      ]
    },
    {
      date: '2020.06.13',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 11}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
      ]
    },
    {
      date: '2020.06.20',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 25}, looser: {playerId: Pls.FK, points: 23}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 25}, looser: {playerId: Pls.FW, points: 17}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 12}, looser: {playerId: Pls.FK, points: 10}},
      ]
    },
    {
      date: '2020.08.22',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 14}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 11}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 10}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 6}},
      ]
    },

    {
      date: '2020.08.29',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 12}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 20}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 23}, looser: {playerId: Pls.FW, points: 21}},
      ]
    },

    {
      date: '2020.09.05',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 19}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 25}, looser: {playerId: Pls.FW, points: 23}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 17}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 9}},
      ]
    },

    {
      date: '2020.09.12',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 20}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 11}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 17}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 17}},
      ]
    },
    {
      date: '2020.09.25',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 15}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 24}, looser: {playerId: Pls.FW, points: 22}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 17}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 11}, looser: {playerId: Pls.FW, points: 6}},

      ]
    },
    {
      date: '2020.10.04',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 14}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 19}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 11}, looser: {playerId: Pls.FW, points: 7}},
      ]
    },
    {
      date: '2020.10.10',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 13}},
      ]
    },
    {
      date: '2020.10.14',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 14}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 13}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 11}},
      ]
    },
    {
      date: '2020.10.24',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 17}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 10}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 15}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 9}},
      ]
    },
    {
      date: '2020.10.25',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 10}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 15}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 15}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 12}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 9}},
      ]
    },

  {
    date: '2020.10.31',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 15}},
    ]
  },

  {
    date: '2021.06.21',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FW, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 11}, looser: {playerId: Pls.FW, points: 8}},
    ]
  },

  {
    date: '2021.07.04',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 13}},
    ]
  },
  {
    date: '2021.08.14',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 15}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 13}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
    ]
  },
  {
    date: '2021.08.22',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 15}},
    ]
  },
  {
    date: '2021.08.29',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 14}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 11}, looser: {playerId: Pls.FW, points: 3}},
    ]
  },
  {
    date: '2021.09.05',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 13}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 15}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 22}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 15}},
    ]
  },
  {
    date: '2021.09.11',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 5}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 14}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 14}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
    ]
  },
  {
    date: '2021.09.19',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
    ]
  },
  {
    date: '2021.09.25',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 9}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 5}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
    ]
  },
  {
    date: '2021.10.02',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 13}},
    ]
  },
  {
    date: '2021.11.01',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 10}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 14}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
    ]
  },
  {
    date: '2021.11.07',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 13}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 5}},
    ]
  },
  {
    date: '2021.11.13',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 8}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 15}, looser: {playerId: Pls.FK, points: 13}},
    ]
  },
  {
    date: '2021.11.21',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 15}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 14}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
    ]
  },
  {
    date: '2021.11.28',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 10}},     
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},     
      
      
    ]
  },
  {
    date: '2021.12.04',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 12}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},           
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},           
    ]
  },
  {
    date: '2021.12.12',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 15}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 15}},           
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},           
    ]
  },
  {
    date: '2021.12.19',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 13}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 9}},
    ]
  },
  {
    date: '2022.01.21',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 17}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 19}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 13}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 17}, looser: {playerId: Pls.FW, points: 15}},
    ]
  },
   {
    date: '2022.01.30',
    games: [      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 10}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 10}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 15}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 25}, looser: {playerId: Pls.FW, points: 23}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 11}, looser: {playerId: Pls.FW, points: 4}},
    ]
  },
  {
    date: '2022.02.05',
    games: [      
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},      
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},          
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 14}},            
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 11}, looser: {playerId: Pls.FW, points: 6}},
    ]
  }
  ]
;
