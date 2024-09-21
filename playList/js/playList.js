/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
    /**
     * Array of playlists in the catalog.
     * @type {Playlist[]}
     */
    let playlists = [];

        

    

    /**
     * Adds a new playlist to the catalog.
     * Añadir una nueva lista de reproducción al catalogo
     * @param {string} playlistName - The name of the new playlist.El nombre de la nueva lista
     */
    const createPlaylist = (playlistName) => {
        const newPlaylist = { 
            name: playlistName,
            songs:[]
        }
        playlists = [...playlists, newPlaylist]

    };

    /**
     * Gets all playlists in the catalog.obtiene todas las listas de reproduccion en el catalogo
     * eliminar una lista del catalogo
     * @returns {Playlist[]} The list of all playlists.la lista de todas las listas de reproduccion
     */
    const getAllPlaylists = () => {
        return playlists
    };

    /**
     * Removes a playlist from the catalog.
     * @param {string} playlistName - The name of the playlist to remove.
     */
    const removePlaylist = (playlistName) =>{
        playlists = playlists.filter(Playlist => Playlist.name !== playlistName);
    };

    /**
     * Adds a song to a specific playlist.
     * Añadir una canción a una lista de reproducción especifica
     * @param {string} playlistName - The name of the playlist to add the song to.
     * El nombre de la playList a la que se agragará la canción
     * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.La canción para agregar a la playList
     * @throws {Error} If the playlist is not found.//Si no se encuentra la playList
     * buscar producto OK
     * lanzar error si no lo tenemos OK
     * guardar la nueva cancion con su nombre
     * 
     */
    const addSongToPlaylist = (playlistName, song) => {
        const playlist = playlists.find(playlist => playlist.name === playlistName);
        if (!playlist) throw new Error('Playlist not found')
        const songList = {...playlist,songs:[...playlist.songs,song]
    };
        
        playlists = playlists.map(playlist => 
            playlist.name === playlistName ? songList:playlist
    
        );
    };


    /**
     * Removes a song from a specific playlist.
     * Eliminar una canción de un lugar especifico
     * @param {string} playlistName - The name of the playlist to remove the song from.
     * El nombre de la lista de reproducccion de la que se eliminara la canción 
     * @param {string} title - The title of the song to remove.
     * El tirulo de la cancion para quitar
     * @throws {Error} If the playlist or song is not found.
     * Si no se encuentra la lista de reproducion o cancion
     * 1 buscar lista y cancion
     * 2 quitar cancion por titulo
     * 3 lanzar error 
     */
    
    const removeSongFromPlaylist = (playlistName, title) => {
        const playlist =(playlists.find(playlist => playlist.name === playlistName && playlist.songs.find(song => song.title === title)))
        if (!playlist) throw new Error("Playlist not found");
        const removeSong = playlist.songs.filter(song => song.title !== title)
        const removePlaylist = {name: playlistName,songs: removeSong}

        playlists = playlists.map(playlist =>
            playlist.name === playlistName ? removePlaylist : playlist
        )
    };
    /**
     * Marks a song as a favorite or removes the favorite status.
     * @param {string} playlistName - The name of the playlist containing the song.
     * @param {string} title - The title of the song to mark as a favorite.
     */
    const favoriteSong = (playlistName, title) => {};

    /**
     * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
     * @param {string} playlistName - The name of the playlist to sort songs in.
     * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
     * @returns {Song[]} The list of sorted songs.
     * @throws {Error} If the playlist is not found or the criterion is invalid.
     */
    const sortSongs = (playlistName, criterion) => {};

    return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog;