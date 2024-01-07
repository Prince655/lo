// netlify/functions/fetchData.js

exports.handler = async function (event, context) {
  const url = event.queryStringParameters.url;
  try {
    const response = await fetch(url);
    const data = await response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
