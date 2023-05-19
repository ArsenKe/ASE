// types
// export const TYPE = {
//     gallery: 'gallery',
//     event: 'event',
// }

// static urls 
export const LOGO = "/assets/img/logo.png";
export const LOGO_FULL = "/assets/img/logo_full.png";
export const NOT_FOUND_IMG = "/assets/img/404.png";

//backend root and endpoint
export const BASE_URL = "https://9f39eabe-ca2c-481f-bb25-7b9dad461494.mock.pstmn.io"
export const ENDPOINTS = {
    events: BASE_URL + "/events/",
    eventDetails: (id) => `${BASE_URL}/events/${id === undefined ? "" : "/" + id}`,
    bookmarks: BASE_URL + "/bookmarks/",
    tags: BASE_URL + "/tags/",
    link4: (id) => `${BASE_URL}/api/home/images/${id}`
}