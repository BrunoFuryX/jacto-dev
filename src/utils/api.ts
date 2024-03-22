import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    timeout: 2500,
    headers: {
        common: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzRjYmIxZmNiNzc2NjdiMmNhNDg4NzQ1MDk1NTgyMiIsInN1YiI6IjY1ZjQ5N2IyZDZjMzAwMDE3YzU4YmE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVS5gZ59yXUE5_UiVyVjQJpnPNMtEzoD8xJf-QRJI9Q`
        }
    }
});

