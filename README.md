# DJS05 — Podcast Show Detail Page with Routing & Navigation

A React + Vite podcast browsing app. Building on DJS04's searchable, filterable,
paginated listing page, DJS05 adds **dynamic routing** so every show has its own
URL, a rich **show detail page**, and a **season navigation** browser — while
preserving the user's search and filter state as they move between pages.

## Deployment
PodCast live on Vercel: https://mypodcastapp.vercel.app/

## Features

- **Homepage / listing** — search, genre filter, sort, and pagination over all shows.
- **Clickable cards** — each preview card links to its show's own detail page.
- **Dynamic routing** — every show lives at a unique URL, `/show/:id`, powered by
  React Router.
- **Show detail page** — fetches the show by the ID in the URL and displays the
  title, large cover image, description, genre tags, last-updated date, and totals
  for seasons and episodes.
- **Graceful states** — dedicated loading spinner, a friendly error message if the
  fetch fails, and a "show not found" empty state.
- **Season navigation** — a dropdown switches between seasons and an expand/collapse
  control reveals each season's episode list (number, title, season image, and a
  shortened description), so users don't scroll through everything at once.
- **State preservation** — search term, genre, sort order, and current page are kept
  when navigating back to the homepage from a detail page.
- **Responsive design** — layouts adapt across mobile, tablet, and desktop.

## Tech stack

- React 19
- React Router 7
- Vite
- CSS Modules

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the printed URL (default <http://localhost:5173>).

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project structure

```
src/
  api/
    fetchPodcasts.js   # fetches the list of show previews
    fetchShow.js       # fetches one show (with seasons/episodes) by id
  components/
    Header.jsx
    SearchBar.jsx
    GenreFilter.jsx
    SortSelect.jsx
    PodcastGrid.jsx
    PodcastCard.jsx        # now a <Link> to /show/:id
    Pagination.jsx
    SeasonNavigation.jsx   # season dropdown + expand/collapse
    EpisodeCard.jsx        # single episode row
  context/
    PodcastContext.jsx     # search/filter/sort/pagination state (kept above the router)
  pages/
    HomePage.jsx
    ShowDetailPage.jsx
    NotFoundPage.jsx
  utils/
    formatDate.js
  data.js                  # genre id → title mapping
  App.jsx                  # routes + provider
  main.jsx                 # BrowserRouter entry point
```

## How state preservation works

`PodcastProvider` is mounted **above** `<Routes>` in `App.jsx`. Because React
Router swaps pages client-side without unmounting the provider, the filter, search,
sort, and page state living in that context simply persists — returning to the
homepage restores exactly what the user had.

## API

Data comes from the [Podcast API](https://podcast-api.netlify.app/):

| Endpoint | Returns |
| --- | --- |
| `/` | array of show previews |
| `/id/<ID>` | a single show with seasons and episodes embedded |

Note: the `/id/<ID>` response exposes `genres` as **title strings** (including the
non-genre labels `"All"` and `"Featured"`, which the UI filters out).

## Known limitations

- Episode audio (`file`) is fetched but not played — there is no audio player yet.
- Genre tags on the detail page come straight from the API strings rather than the
  local id→title map used on the listing page.
- No favourites/persistence beyond the current session.

# Lessons Learned

This project strengthened my understanding of dynamic routing, API integration, Context API, reusable component design, responsive development, and structuring larger React applications.

It also reinforced the importance of separating presentation logic from business logic to produce applications that are easier to maintain and extend.

---

# Author

**Name:** David Bafana Ndlovu

**Project:** Podcast App
