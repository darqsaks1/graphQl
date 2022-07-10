import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
    albums: [Album]
    album(id: ID!): Album
  }
    
  type Mutation {
    createAlbum(input: InputAlbum!): Album
    updateAlbum(id: String!, input: InputAlbum!): Album
    deleteAlbum(id: ID!): DEL
  }
  
  type Album {
      id: ID!
      name: String
      released: Int
      artists: [Artist]
      bands: [Band]
      tracks: [Track]
      genres: [Genre]
      image: String
  }
  
  input InputAlbum {
    name: String!
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    tracksIds: [ID]
    genresIds: [ID]
    image: String
  }
  
  type Query {
    artists: [Artist]
    artist(id: ID!): Artist
  }
  
  type Mutation {
    createArtist(input: InputArtist!): Artist
    updateArtist(id: String!, input: InputArtist!): Artist
    deleteArtist(id: ID!): DEL
  }
  
  
  type Artist {
      id: ID!
      firstName: String
      secondName: String
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bands: [Band]
      instruments: [String]
  }
  
  
  input InputArtist {
      firstName: String
      secondName: String
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bandsIds: [ID]
      instruments: [String]
  }  
  type Query {
    bands: [Band]
    band(id: ID!): Band
  }
  
  type Band {
      id: ID!
      name: String
      origin: String
      website: String
      genres: [Genre]
  }
  type Query {
    genres: [Genre]
    genre(id: ID!): Genre
  }
  
  type Mutation {
      createGenre(input: CreateGenreInput) : Genre!
      updateGenre( id: ID!, input: CreateGenreInput): Genre!
      deleteGenre(id: ID!): DEL
  }
  
  type Genre {
      id: ID!
      name: String
      description: String
      country: String
      year: Int
  }
  
  input CreateGenreInput {
      name: String
      description: String
      country: String
      year: Int
  }
  type Query {
    tracks: [Track]
    track(id: ID!): Track
  }
  
  type Mutation {
    createTrack(input: InputTrack!): Track
    updateTrack(id: String!, input: InputTrack!): Track
    deleteTrack(id: ID!): DEL
  }
  
  
  type Track {
      id: ID!
      title: String!
      album: Album
      artists: [Artist]
      bands: [Band]
      duration: Int
      released: Int
      genres: [Genre]
  }
  
  input InputTrack {
      title: String
      albumId: InputAlbum
      artistsIds: [ID]
      bandsIds: [ID]
      duration: Int
      released: Int
      genresIds: [ID]
  }
  type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): JWT
}

type Mutation {
    registerUser(input: UserInput) : User!
}

input UserInput {
  firstName: String!
  lastName: String!
  password: String!
  email: String!
}

type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
}

type JWT {
    jwt: String!
}

type DEL {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    favourites: Favourites
  }
  
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
} 
  
  type Mutation {
    addTrackToFavourites(id: ID!): Favourites
    addBandToFavourites(id: ID!): Favourites
    addArtistToFavourites(id: ID!): Favourites
    addGenreToFavourites(id: ID!): Favourites
  }
  
  
`;
