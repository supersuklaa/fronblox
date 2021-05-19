const menuHandler = {
  name: 'menus',
  priority: 10,
  pattern: '/menu/:slug',
  func: async ({
    link, params, state, libraries,
  }) => {
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/menus/v1/menus/${slug}`,
    });

    // Parse the JSON to get the object
    const menuData = await response.json();

    // Add the menu items to source.data
    const menu = state.source.data[link];

    const items = menuData.items.map(({ url, title }) => ({
      link: url.replace(process.env.SOURCE_URL, ''),
      title,
    }));

    Object.assign(menu, {
      items,
      isMenu: true,
    });
  },
};

export default menuHandler;
