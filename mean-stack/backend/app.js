const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, Patch, Delete, OPTIONS"
  );
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "23jhewdb3y",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "weje83hrfe",
      title: "Second server-side post",
      content: "This is also coming from the server!"
    }
  ];
  res.status(200).json({
    message: 'Posts fecthed successfully!',
    posts: posts
  });
});

module.exports = app;
