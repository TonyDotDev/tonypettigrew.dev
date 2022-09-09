import createImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity-server";

export const imageBuilder = createImageUrlBuilder(sanityClient);

export const urlForImage = (source: string) => imageBuilder.image(source).auto("format").fit("max");
