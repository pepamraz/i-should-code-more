const redirectUrl = "https://open.spotify.com/playlist/37i9dQZF1EIecRhjGjKeOs?si=720affa5e9bb4e42";

const blockedSites = [
  "*://*.youtube.com/*",
  "*://*.facebook.com/*",
  "*://*.instagram.com/*",
  "*://*.twitter.com/*",
  "*://*.reddit.com/*",
  "*://*.tiktok.com/*",
  "*://*.netflix.com/*",
  "*://*.hulu.com/*",
  "*://*.amazon.com/*",
  "*://*.pinterest.com/*",
  "*://*.discord.com/*",
  "*://*.steamcommunity.com/*"
];

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: redirectUrl};
  },
  {urls: blockedSites},
  ["blocking"]
);
