# Welcome to [BLZ IT](https://blz-it.de)

`BLZ IT` stands for `Bundesleistungszentrum IT`, which can roughly be translated to `Federal Training Center IT`. Interested young people are being prepared to compete in competitions such as the German IT Nationals or [WorldSkills](https://worldskills.org/).

The Project was built using [Astro](https://astro.build). Currently, it is being hosted at https://blz-it.de.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                             |
| :-------------------------- | :------------------------------------------------- |
| `npm install --global yarn` | Installs yarn (required for the other commands)    |
| `yarn install`              | Installs dependencies                              |
| `yarn dev`                  | Starts local dev server at `localhost:3000`        |
| `yarn build`                | Build your production site to `./dist/`            |
| `yarn preview`              | Preview your build locally, before deploying       |
| `yarn astro ...`            | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help`         | Get help using the Astro CLI                       |
