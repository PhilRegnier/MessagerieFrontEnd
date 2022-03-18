import {Message} from "./Message";

describe(
  'Message',
  () => {
    it(
      'vérifier set/get auteur',
      () => {
        let message = new Message('toto','aime le chocolat');
        expect(message.auteur).toEqual('toto');
        expect(message.texte).toEqual('aime le chocolat');
      }
    );
  })
