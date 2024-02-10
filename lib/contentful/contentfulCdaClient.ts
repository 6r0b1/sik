import { createClient } from "contentful";

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
});

export const getWorks = async (locale) => {
  console.log("locale", locale);

  try {
    const entries = await client.getEntries({
      content_type: "work",
      locale,
    });
    const res: { id: string; title: string; shortDescription: string }[] =
      entries.items.map((item) => {
        return {
          id: item.sys.id,
          title: item.fields.title,
          shortDescription: item.fields.shortDescription,
        };
      });
    return res;
  } catch (error) {
    console.error("Error getting entries:", error);
  }
};

export const getWorkById = async (id, locale) => {
  try {
    const entry = await client.getEntry(id, { locale });
    const res = entry.fields;
    return res;
  } catch (error) {
    console.error("Error getting entry:", error);
  }
};

export const getPreviewWorkById = async (id, locale) => {
  try {
    const entry = await previewClient.getEntry(id, { locale });
    const res = entry.fields;
    return res;
  } catch (error) {
    console.error("Error getting entry:", error);
  }
};
