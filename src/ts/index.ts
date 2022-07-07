
export interface User {
    _id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    password: string;
    email: string;
}

export interface Band {
    _id: string;
    id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
}

export interface Album {
    _id: string;
    id: string;
    name: string;
    released: number;
    artistsIds: string[];
    bandsIds: string[];
    trackIds: string[];
    genresIds: string[];
    image: string;
}

export interface Artist {
    _id: string;
    id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    birthDate: string;
    birthPlace: string;
    country: string;
    bandsIds: string[];
    instruments: string[];
}

export interface IContext {
    token: string;
}

export interface Member {
    _id: string;
    artist: Artist;
    instrument: String;
    years: String;
}

export interface Genre {
    _id: string;
    id: string;
    name: string;
    description: string;
    country: string;
    year: string;
}

export interface Track {
    _id: string;
    id: string;
    title: string;
    albumId: string;
    bandsIds: string[];
    duration: number;
    released: number;
    genresIds: string[];
}