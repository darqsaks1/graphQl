import {
    artistsResolver,
    genresResolver,
    albumsResolver,
    tracksResolver,
    bandsResolver,
    usersResolver,
    favouritesResolver
} from '../modules';
import dotenv from 'dotenv';
import { Users } from '../modules/users/service'
import { HTTP } from '../service/service'
import { Favourite } from '../modules/favorites/service';

dotenv.config();

export const resolvers = [artistsResolver, genresResolver, albumsResolver, tracksResolver, bandsResolver, usersResolver, favouritesResolver]

export const service = {
    artistsService: new HTTP(process.env.ARTISTS_PORT as string),
    genresService: new HTTP(process.env.GENRES_PORT as string),
    albumsService: new HTTP(process.env.ALBUMS_PORT as string),
    tracksService: new HTTP(process.env.TRACKS_PORT as string),
    bandsService: new HTTP(process.env.BANDS_PORT as string),
    usersService: new Users(),
    favouritesService: new Favourite()
}

export const port = process.env.PORT;
