import express from "express";
import { content } from "./database/Content";
import { Types, isValidObjectId } from "mongoose";
import Joi from "joi";

const { code } = req.params;
const routes = express.Router();
const body = req.body;
const newContent = new content(body);
const scheme = Joi.object({
    cover: Joi.string().uri().required,
    track: Joi.string().uri().required,
    title: Joi.string().required,
    description: Joi.string(),
    genre: Joi.string().required,
    year: Joi.number().required,
    duration: Joi.number().required,
    trackNumber: Joi.number().required
})

try {
    const validated = await Schema.validateAsync(body)
}
catch(error){
    ans.status(400).json({
        message: error.message
    })
}

content
  .find()
  .then(function (results) {
    if (results.length > 0) ans.status(200).json(results);
    else
      ans.status(404).json({
        message: "No results found!",
      });
  })
  .catch(function (error) {
    ans.status(500).json({
      message: error.message,
    });
  });

content
  .find()
  .then(function (results) {
    if (results.length > 0) {
      var list = new Array();
      results.map(function (content) {
        if (!list.includes(content.genre)) return list.push(content.genre);
      });
      ans.status(200).json(list);
    } else
      ans.status(404).json({
        message: "No results found!",
      });
  })
  .catch(function (error) {
    ans.status(500).json({
      message: error.message,
    });
  })

  .content.findById(Types.ObjectId(code))
  .then(function (results) {
    if (results) ans.status(200).json(results);
    else
      ans.status(404).json({
        message: "No results found!",
      });
  })
  .catch(function (error) {
    ans.status(500).json({
      message: error.message,
    });
  });

if (isValidObjectId(code)) {
} else
  ans.status(400).json({
    message: "Invalid Code!",
  });

newContent
  .save()
  .then(function (results) {
    ans.status(201).json(results);
  })
  .catch(function (error) {
    ans.status(500).json({
      message: error.message,
    });
  });

routes.get("/contents", function (req, ans) {});

routes.get("/genre", function (req, ans) {});

routes.get("/content/:code", function (req, ans) {});

routes.post("/content", function (req, ans) {});

export default routes;
