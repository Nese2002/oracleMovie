import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watch_region: "US",
  sort_by: "popularity.desc",
};

const saveFiltersSlice = createSlice({
  name: "saveFilters",
  initialState,
  reducers: {
    addService: (state, { payload }) => {
      const id = payload.provider_id;
      const logo = payload.logo_path;
      const filter = state?.services || [];
      // check if the service is already in the array
      let exists = filter.some((service) => service[0] === id);
      // if not, push it to the array
      if (!exists) filter.push([id, logo]);
      state.services = filter;
    },
    removeService: (state, { payload }) => {
      if (state.services.length === 1) delete state.services;
      else {
        state.services = state.services.filter(
          (service) => service[0] !== payload[0]
        );
      }
    },

    addGenre: (state, { payload }) => {
      const id = payload.id;
      const name = payload.name;
      const filter = state?.genres || [];
      // check if the service is already in the array
      let exists = filter.some((service) => service[0] === id);
      // if not, push it to the array
      if (!exists) filter.push([id, name]);
      state.genres = filter;
    },
    removeGenre: (state, { payload }) => {
      if (state.genres.length === 1) delete state.genres;
      else
        state.genres = state.genres.filter((genre) => genre[0] !== payload[0]);
    },

    addOscar: (state, { payload }) => {
      const id = payload.id;
      const name = payload.name;
      const filter = state?.oscars || [];
      // check if the service is already in the array
      let exists = filter.some((service) => service[0] === id);
      // if not, push it to the array
      if (!exists) filter.push([id, name]);
      state.oscars = filter;
    },
    removeOscar: (state, { payload }) => {
      if (state.oscars.length === 1) delete state.oscars;
      else
        state.oscars = state.oscars.filter((oscar) => oscar[0] !== payload[0]);
    },

    addYear: (state, { payload }) => {
      const filter = payload;
      state.years = filter;
    },
    removeYear: (state) => {
      delete state.years;
    },

    addPerson: (state, { payload }) => {
      const id = payload.id;
      const name = payload.name;
      const filter = state?.people || [];
      // check if the service is already in the array
      let exists = filter.some((service) => service[0] === id);
      // if not, push it to the array
      if (!exists) filter.push([id, name]);
      state.people = filter;
    },
    removePerson: (state, { payload }) => {
      if (state.people.length === 1) delete state.people;
      else
        state.people = state.people.filter(
          (person) => person[0] !== payload[0]
        );
    },

    addFilmStudio: (state, { payload }) => {
      const id = payload.id;
      const name = payload.name;
      const filter = state?.filmStudios || [];
      // check if the service is already in the array
      let exists = filter.some((service) => service[0] === id);
      // if not, push it to the array
      if (!exists) filter.push([id, name]);
      state.filmStudios = filter;
    },
    removeFilmStudio: (state, { payload }) => {
      if (state.filmStudios.length === 1) delete state.filmStudios;
      else
        state.filmStudios = state.filmStudios.filter(
          (studio) => studio[0] !== payload[0]
        );
    },
  },
});

export const {
  addService,
  removeService,
  addGenre,
  removeGenre,
  addOscar,
  removeOscar,
  addYear,
  removeYear,
  addPerson,
  removePerson,
  addFilmStudio,
  removeFilmStudio,
} = saveFiltersSlice.actions;
export default saveFiltersSlice.reducer;
