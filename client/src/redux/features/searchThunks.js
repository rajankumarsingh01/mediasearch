

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhotos, fetchVideos, fetchGIF } from "../../api/mediaApi";

export const fetchMedia = createAsyncThunk(
  "search/fetchMedia",
  async ({ query, activeTab }, { getState, rejectWithValue }) => {
    try {
      // 🔥 CACHE LOGIC
      const { cache } = getState().search;
      const cacheKey = `${query}_${activeTab}`;

      // ✅ RETURN FROM CACHE (FAST)
      if (cache[cacheKey]) {
        return {
          data: cache[cacheKey],
          cacheKey,
          fromCache: true,
        };
      }

      let data = [];

      // 📸 PHOTOS
      if (activeTab === "photos") {
        const response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description || "photo",
          thumbnail: item.urls.small,
          src: item.urls.full,
          url: item.links.html,
        }));
      }

      // 🎥 VIDEOS
      if (activeTab === "videos") {
        const response = await fetchVideos(query);
        data = response.videos.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user?.name || "video",
          thumbnail: item.image,
          // ⚡ SD video for faster load
          src:
            item.video_files.find((v) => v.quality === "sd")?.link ||
            item.video_files[0]?.link,
          url: item.url,
        }));
      }

      // 🎞 GIF
      if (activeTab === "gif") {
        const response = await fetchGIF(query);
        data = response.data.results.map((item) => ({
          id: item.id,
          type: "gif",
          title: item.title || "GIF",
          thumbnail: item.media_formats.tinygif.url,
          src: item.media_formats.gif.url,
          url: item.url,
        }));
      }

      // ✅ RETURN API DATA
      return {
        data,
        cacheKey,
        fromCache: false,
      };
    } catch (err) {
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);
