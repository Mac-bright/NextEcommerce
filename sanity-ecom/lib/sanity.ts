import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId:'h4w5v4g9',
    dataset:'production',
    apiVersion:'v2022-06-12',
    useCdn:true
})

const builder = ImageUrlBuilder(client)

export function urlfor(source:any){
    return builder.image(source)
}