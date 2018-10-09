
exports.handler = (event, context, callback) => {
  console.log('event JSON', JSON.stringify(event));
  const responseBody = {
    images: [
      {url: 'https://loremflickr.com/320/240/dog?lock=3'},
      {url: 'https://loremflickr.com/320/240/dog?lock=4'},
      {url: 'https://loremflickr.com/320/240/dog?lock=5'}
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