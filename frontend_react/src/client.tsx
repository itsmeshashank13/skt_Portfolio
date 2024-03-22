import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

interface Image {
    _ref: string;
}

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image) => builder.image(source);