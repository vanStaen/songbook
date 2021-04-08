# Watchlist

## To-dos:

- [ ] Redo Logging form
- [ ] Redo Add Song form
- [ ] Menu 2.0
    - [x] Ramdomizer 2.0
    - [ ] Profil 
    - [x] Filter/view feature
    - [ ] Search Feature 
- [ ] use MobX everywhere
  - [x] AuthStore
  - [ ] UserStore
  - [ ] DisplayStore
- [ ] Allow other users
    - [ ] Implement user column in tables
    - [ ] Rework all api endpoints
    - [ ] Implement userStore (mobX)
    - [ ] Filter query result per User
    - [ ] Create User Table
- [ ] Lyrics Size menu
- [ ] Auto scroll drawer feature
- [ ] Auto save db as Json (Cron job?)
- [ ] User handling
    - [ ] Create user (using auth service)
    - [ ] Add user id to database (As author of songs)
    - [ ] Router to show songboook of user
    - [ ] If visiting user, show CheckAdd as "add"
- [ ] Handle Archived (active=false, shows in search result, but not in book)
- [ ] Offer a list view of songboook 
- [ ] Check https encryption 
    - [ ] Lets-encrypt (client for server) -> SSL
    - [ ] Two keys exist Public/Privat (one for backend, one for client)

## Completed ✓

- [x] Create Rest API
- [x] Create React App
- [x] Display entries
- [x] Show tags 
- [x] Create Drawer as separate component
- [x] Fetch lyrics
- [x] Embed youtube video
- [x] Edit Tag feature
- [x] Create Piano/Bass tag
- [x] Handle "isMissing" state with userEffect.
- [x] Check button instead of favorite
- [x] Bookmark feature
- [x] Click to expend drawer
- [x] Edit Links feature
- [x] Edit title feature
- [x] Edit infos (bottom from drawer? artist/song/bass-Piano?)
- [x] Error shown on BackEnd connection error
- [x] Filter bass/piano from front page
- [x] Random song from any pool of songs
- [x] Add set to inactive or delete
- [x] If lyrics api return nothing scrap google/genius
- [x] Search feature
- [x] Hide edit option if not logged
- [x] Button to trigger load lyrics on fail
- [x] Update array songs on any kind of update
- [x] Pause youtube when exiting drawer
- [x] Logout on auth errors
- [x] Smoothen drawer transition fold/unfold
- [x] Lyrics : genius first, then lyrics api
- [x] Add level parameter (easy, medium, hard)