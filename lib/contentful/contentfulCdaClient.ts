import { createClient } from "contentful";

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getWorks = async (locale = "de-DE") => {
  try {
    const entries = await client.getEntries({
      content_type: "work",
      locale,
    });
    console.log(entries);
    return entries.items;
  } catch (error) {
    console.log(error);
  }
};
