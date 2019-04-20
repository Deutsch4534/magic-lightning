import uuid from 'uuid';
import { CardModel } from 'redux/modules/card';

const cards = [
  {
    name: 'Anima Golem',
    mana: 6,
    attack: 9,
    defense: 9,
    portrait: 'https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/5/54/Anima_Golem_full.jpg/917px-Anima_Golem_full.jpg?version=5ffdc874bbd6317f25e4366c652a19d1',
  }, {
    name: 'Abusive Sergeant',
    mana: 1,
    attack: 2,
    defense: 1,
    portrait: 'https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/1/18/Abusive_Sergeant_full.jpg/800px-Abusive_Sergeant_full.jpg?version=bb07b0c546ff1bf22d6df6692ca901b7',
  }, {
    name: 'Acolyte of Pain',
    mana: 3,
    attack: 1,
    defense: 3,
    portrait: 'https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/e/e0/Acolyte_of_Pain_full.jpg/800px-Acolyte_of_Pain_full.jpg?version=6939e4390550ac8ad439fe3ec10801aa',
  }, {
    name: 'Azure Drake',
    mana: 5,
    attack: 4,
    defense: 4,
    portrait: 'https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/6/64/Azure_Drake_full.jpg/1044px-Azure_Drake_full.jpg?version=6148ac22295debcac9842a8f04fcce67',
  }, {
    name: 'Safeguard',
    mana: 5,
    attack: 1,
    defense: 20,
    portrait: 'https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/5/50/Safeguard_full.jpg/800px-Safeguard_full.jpg?version=4caecb7d16023c3f003857e9d8ba2244',
  }, {
    name: 'Satoshis Nakamoto',
    mana: 15,
    attack: 16,
    defense: 5,
    portrait: 'https://www.lavanguardia.com/r/GODO/LV/p2/WebSite/Imagenes/2014/03/07/Recortada/LV_20140307_LV_FOTOS_D_54402126913-992x558@LaVanguardia-Web.jpg',
  },{
    name: 'Mr Lopp',
    mana: 8,
    attack: 8,
    defense: 8,
    portrait: 'https://avatars1.githubusercontent.com/u/288011?s=400&v=4',
  },
  
];

const cardsByName = {};
for (const card of cards) {
  cardsByName[card.name.toLowerCase()] = card;
}
cardsByName['the coin'] = {
  name: 'The Coin',
  mana: 0,
  attack: 0,
  defense: 0,
  portrait: 'https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/a/a9/The_Coin_full.jpg/800px-The_Coin_full.jpg?version=b9c5e239728aed0018bd75c3333271c9',
};

export default function newCardByName(name = '') {
  const card = cardsByName[name.toLowerCase()];
  if (!card) throw new Error('There is no card with that name');
  return new CardModel(Object.assign({}, card, { id: uuid.v4() }));
}

export function newRandomCard() {
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  return newCardByName(randomCard.name);
}
