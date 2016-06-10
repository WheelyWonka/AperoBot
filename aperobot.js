var moment = require('moment-timezone');

module.exports = {
  getRandomGif : function() {

  },
  aperoBot : function(req, res, next) {
    var userName = req.body.user_name;
    var hours = moment.tz('Europe/Paris').format('HH');

    var botPayload = {
      pastis : {
        text : 'Pastis par temps bleu, *pastis délicieux !*'
      },
      h17and23 : {
        text : '<!channel> ' + userName + ' a raison! *C\'est l\'heure de l\'apéro !*'
      },
      h23and6 : {
        text : 'Oula ' + userName + ', t\'es cramé, c\'est plus du tout l\'heure de l\'apéro !'
      },
      h6and10 : {
        text : 'Sérieux ' + userName + ', va me chercher un café.'
      },
      h10and16 : {
        text : 'Un peu tôt pour l\'apéro... Bosse un peu ' + userName + ', ou fait semblant au moins.'
      },
      h16 : {
        text : 'Patience ' + userName + ', c\'est bientôt l\'heure de l\'apéro !'
      }
      jb : {
        text : 'Oula j\'sais pas trop, t\'as vu la gueule de @jb ?'
      }
    };
    

    // avoid infinite loop
    if (userName !== 'slackbot') {
      if (req.body.text.indexOf('jb')){

      }
      else if (hours >= 17 && hours < 23) {
        return res.status(200).json(botPayload.h17and23);
      } else if (hours >= 23 && hours < 6) {
        return res.status(200).json(botPayload.h23and6);
      } else if (hours >= 6 && hours < 10) {
        return res.status(200).json(botPayload.h6and10);
      } else if (hours >= 10 && hours < 16) {
        return res.status(200).json(botPayload.h10and16);
      } else if (hours === 16) {
        return res.status(200).json(botPayload.h16);
      }
    } else {
      return res.status(200).end();
    }
  }
};