import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';

export default defineConfig({
    name: 'default',
    title: 'portfolio-sanity',

    basePath: '/studio',

    projectId: '5kd9e4oa',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
