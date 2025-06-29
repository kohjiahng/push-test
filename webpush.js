const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const pushSubscription ={"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABoYLBY1cySI0PtjvMALFN_MWAB6Oo1eNF9nJGlitqcjU-6n7pQgk32GuHTRz5d6eIv3lvlwEjPckiaQSnfDBRSCoC_LbjRnmlpXIbrgRzTKrD9hHn_nhblUst281MxOWzq3huytAVqbL5c8jEnLRWsMI7P7jnX28P0kCrz8MfkLotjuHg","expirationTime":null,"keys":{"auth":"K5gaNHJNjqs7S_184jSLzw","p256dh":"BFvi9fGNP4z7T-fLg-c9pr5MN9vhNib4Lro1yAd-ZNo0x8y0mj6-oNSR3h4l7CLBPeOrOV4co8lRAs1-_PnB5Os"}} 
webpush.sendNotification(pushSubscription, 'Your Push Payload Text').then(() => console.log("DONE"));
