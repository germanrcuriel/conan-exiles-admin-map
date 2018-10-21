# Conan Exiles Admin Map

An admin dashboard for Conan Exiles

![https://germix.net/conan-exiles-admin-map.jpg](https://germix.net/conan-exiles-admin-map.jpg)

## Features

- Ability to see the most important stuff placed over a map:
  - Buildings (Foundations)
  - Bedrolls / Beds
  - Campfires / Bonfires
  - Pets
  - Fish nets
  - Crab pots
  - Players
  - Wheels of pain
  - Pippi mod Thespians
- You can zoom it in and out
- You can get the `TeleportPlayer` command just by clicking in a marker
- Possibility to filter by guilds or lonely players
- List of players with their basic information
- Protect the access to the tool with users and password through a config file
- More to come...

## Planned features

- Add steam family sharing support to detect multiaccounts.
- Store statistics in an own sqlite database.
- Translations
- Autorefresh every n minutes if installed in the server or with an rsync script (or similar)
- Custom filters with their own sql queries
- Any more ideas? :P

## Installation

- Grab the latest release from [releases](https://github.com/germanrcuriel/conan-exiles-admin-map/releases) page.
- Unzip the file and place it's contents in your Conan Exiles "Saved" folder (where the `game.db` file is)
- Open `conan-exiles-admin-map.exe`.
- Open port `3001` in server's firewall if needed.
- Go to [http://localhost:3001/](http://localhost:3001/) (replace `localhost` with your server's IP address) in your preferred browser.
- Have fun!

## Contributing

### Requirements

The only requirement so far is node.js.

### Installation

As always, we need to install node.js depedencies

```
$ npm install
```

Place your `game.db` database from Conan Exiles in the root folder of the project and run

```
$ npm start
```

You will be noticed when app is running and you will be able to navigate in by browsing to http://localhost:3001

## Changelog

#### v0.0.1 (October 20, 2018)

- First release

#### v0.1.0 (October 21, 2018)

- Added translations to Spanish (es) and English (en)
- Added Basic Auth to password protect the access
- Added a configuration file to change language, port, database path and users
