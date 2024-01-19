# Setup

1. In the terminal, cd into the ```frontend``` directory.
2. Install dependencies with ```npm install```.
3. Run ```npm start``` - start the frontend server
4. Open http://localhost:3000 to see the frontend.

# Struggle

### Images on the album page
* Initial thought: Since we already have facebook page with posts of lots of pictures, then I can just copy the source link of each picture, save them all in a json for each album.
* Found out those links are not permanent links, they will expire after a couple days for security reason.
* Facebook might have a API to fetch all the data ? couldn't find a solution yet [Jan 2024]
* Immediate solution: download all the pictures, and upload to Google photos. Then use ```https://www.publicalbum.org/blog/embedding-google-photos-albums``` to find out the source links.
* Modify codes into a array of links.
