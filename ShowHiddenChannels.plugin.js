// ==UserScript==
/**
* @name showHiddenChannels
* @version 1.0.0
* @description For when default discord just isn't dark enough, a theme for those who live a night
* @author Daliranas
* @source https://github.com/daliranas/ShowHiddenChannels
*/
// ==/UserScript==

(function () {
  const showHiddenChannels = () => {
    const channelList = document.querySelector('.channels-3g2vYe');
    
    if (channelList) {
      const hiddenChannels = channelList.querySelectorAll('.wrapper-25eVIn');
      
      hiddenChannels.forEach((channel) => {
        channel.style.display = 'flex';
      });
    }
  };

  const observer = new MutationObserver(showHiddenChannels);
  const config = { childList: true, subtree: true };

  observer.observe(document.body, config);
})();
