
exports.handler = (event, context, callback) => {
  console.log('event JSON', JSON.stringify(event));
  const responseBody = {
    images: [
      {url: '//loremflickr.com/320/240/trees?lock=3'},
      {url: '//loremflickr.com/320/240/trees?lock=4'},
      {url: '//loremflickr.com/320/240/trees?lock=5'}
    ]
  };
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(responseBody)
  };

  callback(null, response);
};