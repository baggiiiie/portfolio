import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "5kd9e4oa",
    dataset: "production",
    apiVersion: "2023-08-13",
    useCdn: false,
    perspective: "published",
};

const client = createClient(config);

export default client;