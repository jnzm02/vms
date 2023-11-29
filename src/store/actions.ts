import { api } from '@/api/endpoint';
import {state} from "@/store/state";

export const actions = {
  async getAdminData() {
    try {
      const res = await api.get ('users/my')
      state.userData = res.data
      return res.data
    } catch (e) {
      console.log(e)
      throw e
    }
  },

  async getFollowingList() {
    try {
      const response = await api.get('/following');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async getFriends() {
    try {
      const response = await api.get('/friends');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async getClubList() {
    try {
      const response = await api.get('/club');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async getOpenList() {
    try {
      const response = await api.get('/open');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
