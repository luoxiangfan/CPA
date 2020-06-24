export const state = () => ({
  topCategoryList: [
    {
      id: 1,
      name: 'Clothing_Accessories',
      logo: '/img/Clothing_Accessories.webp'
    },
    {
      id: 2,
      name: 'Health_Beauty',
      logo: '/img/Health_Beauty.webp'
    },
    {
      id: 3,
      name: 'Flowers_Gifts',
      logo: '/img/Flowers_Gifts.webp'
    },
    {
      id: 4,
      name: 'Home_Garden',
      logo: '/img/Home_Garden.webp'
    },
    {
      id: 5,
      name: 'Electronic_Computer',
      logo: '/img/Electronic_Computer.webp'
    },
    {
      id: 6,
      name: 'Food_Drink',
      logo: '/img/Food_Drink.webp'
    },
    {
      id: 7,
      name: 'Game_Entertainment',
      logo: '/img/Game_Entertainment.webp'
    },
    {
      id: 8,
      name: 'Books_Magazines',
      logo: '/img/Books_Magazines.webp'
    },
    {
      id: 9,
      name: 'Baby_Kids',
      logo: '/img/Baby_Kids.webp'
    },
    {
      id: 10,
      name: 'Sports_Outdoor',
      logo: '/img/Sports_Outdoor.webp'
    },
    {
      id: 11,
      name: 'Automotive',
      logo: '/img/Automotive.webp'
    },
    {
      id: 12,
      name: 'ShoppingMall',
      logo: '/img/ShoppingMall.webp'
    },
    {
      id: 13,
      name: 'Business_Services',
      logo: '/img/Business_Services.webp'
    },
    {
      id: 14,
      name: 'Travel',
      logo: '/img/Travel.webp'
    },
    {
      id: 15,
      name: 'Education_Softwear',
      logo: '/img/Education_Softwear.webp'
    }
  ],
  categoryPageHeadInfo: {}
})

export const mutations = {
  updateCategoryPageHeadInfo (state, data) {
    state.categoryPageHeadInfo = data;
  }
}

export const actions = {
  async getPageHeadInfo (store) {
    const { data } = await this.$axios.post('CPA/storeTypeList')
    store.commit('updateCategoryPageHeadInfo', data.data.sitePageInfo)
    return data
  }
}
