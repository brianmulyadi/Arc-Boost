// This script injects a link next to the star ratings section that leads to a YouTube search for the review of the product.
// If you find this useful, give me a shoutout at @brianmulyadi

// Credit to Google Links by Nate for the code inspiration
// https://arc.net/e/2CADECD1-9839-4057-9EA9-A9988ABC4B92

const youtubeLink = 'https://www.youtube.com/results?search_query=' + document.querySelector('#productTitle').innerText + '+review';
addLink('▶️', 'YouTube Reviews', youtubeLink);

function createLink(symbol, name, url) {
  const a = document.createElement('a');
  a.style.color = '#CC0C39'; // Amazon red color branding
  a.style.margin = '0 0.5em';
  a.style.textDecoration = 'underline';

  const icon = document.createElement('span');
  icon.innerHTML = "<img src='https://www.youtube.com/s/desktop/25bf5aae/img/favicon.ico'>";
  icon.style.marginRight = '0.5em';

  a.append(icon);
  a.append(name);

  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  return a;
}

function addLink(symbol, name, url) {
  const link = createLink(symbol, name, url);
  document.querySelector('#averageCustomerReviews_feature_div').appendChild(link);
}
