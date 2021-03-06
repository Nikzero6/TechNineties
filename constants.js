const fakeData = {
  message: "Product fetched successfully.",
  data: {
    id: 1,
    sku: "ioEkWa",
    name: "Brooklyn Bergstrom",
    description:
      "Consequatur perferendis quos dolorem culpa voluptatem necessitatibus. Earum expedita corrupti qui nemo. Dignissimos rerum et quis nulla delectus quis. Dicta ut amet saepe accusamus. Neque distinctio delectus quisquam voluptatibus molestiae nihil. Unde est aut cupiditate quaerat et dolores minima. Nulla delectus nihil eos velit quibusdam. Ab omnis alias id et eius omnis repellendus.",
    store_id: 1,
    category_id: 1,
    price: "100.00",
    selling_price: "100.00",
    discount_type: "fixed",
    discount: "10.00",
    tax_percent: null,
    tax: null,
    quantity: 100,
    unit_id: 1,
    status: 1,
    related_product: [],
    created_at: "2021-10-10T11:12:20.000000Z",
    updated_at: "2021-10-10T11:12:20.000000Z",
    deleted_at: null,
    tax_value: "5.00",
    images: [
      {
        id: 3,
        product_id: 1,
        images: "https://via.placeholder.com/640x480.png/006677?text=eius",
        created_at: "2021-10-10T11:12:20.000000Z",
        updated_at: "2021-10-10T11:12:20.000000Z",
        deleted_at: null,
      },
      {
        id: 12,
        product_id: 1,
        images: "https://via.placeholder.com/640x480.png/007766?text=enim",
        created_at: "2021-10-10T11:12:20.000000Z",
        updated_at: "2021-10-10T11:12:20.000000Z",
        deleted_at: null,
      },
      {
        id: 23,
        product_id: 1,
        images: "https://via.placeholder.com/640x480.png/00bb44?text=corrupti",
        created_at: "2021-10-10T11:12:20.000000Z",
        updated_at: "2021-10-10T11:12:20.000000Z",
        deleted_at: null,
      },
    ],
    unit: {
      id: 1,
      name: "kilogram",
      alternate_name: "kg",
      created_at: "2021-10-10T11:12:20.000000Z",
      updated_at: "2021-10-10T11:12:20.000000Z",
      deleted_at: null,
    },
    category: {
      id: 1,
      name: "Fruits & Vegitables",
      business_category_id: 1,
      parent_category: null,
      image: "",
      created_by: 1,
      created_at: "2021-10-10T11:12:20.000000Z",
      updated_at: "2021-10-10T11:12:20.000000Z",
      deleted_at: null,
    },
  },
};

const cart = [];

export { fakeData, cart };
