const categoriesData = [
	{
		category_name: 'food',
		category_id: 'food_items'
	},
	{
		category_name: 'drinks',
		category_id: 'beverages'
	},
	{
		category_name: 'chat',
		category_id: 'chat'
	},
	{
		category_name: 'ice cream',
		category_id: 'ice_cream'
	}
];

const subCategoriesData = [
	{
		sub_category_name: 'south indian',
		sub_category_id: 'south_indian',
		belongs_to: 'food_items'
	},
	{
		sub_category_name: 'north indian',
		sub_category_id: 'north_indian',
		belongs_to: 'food_items'
	},
	{
		sub_category_name: 'Chinese',
		sub_category_id: 'chinese',
		belongs_to: 'food_items'
	},
	{
		sub_category_name: 'arabic',
		sub_category_id: 'arabic',
		belongs_to: 'food_items'
	},
	{
		sub_category_name: 'italian',
		sub_category_id: 'italian',
		belongs_to: 'food_items'
	},
	{
		sub_category_name: 'milk shakes',
		sub_category_id: 'milk_shake',
		belongs_to: 'beverages'
	},
	{
		sub_category_name: 'tea',
		sub_category_id: 'tea',
		belongs_to: 'beverages'
	},
	{
		sub_category_name: 'coffe',
		sub_category_id: 'coffe',
		belongs_to: 'beverages'
	},
	{
		sub_category_name: 'cold drinks',
		sub_category_id: 'cold_drinks',
		belongs_to: 'beverages'
	},
	{
		sub_category_name: 'chats',
		sub_category_id: 'chat',
		belongs_to: 'chat'
	},
	{
		sub_category_name: 'ice cream & softy',
		sub_category_id: 'ice_cream',
		belongs_to: 'ice_cream'
	}
];

const foodItemsData = [
	{
		item_name: 'south indian thali',
		item_id: 'south_indian_thali',
		item_type: 'south_indian',
		price: '25'
	},
	{
		item_name: 'rice sambar',
		item_id: 'rice_sambar',
		item_type: 'south_indian',
		price: '25'
	},
	{
		item_name: 'lemon rice',
		item_id: 'lemon_rice',
		item_type: 'south_indian',
		price: '25'
	},
	{
		item_name: 'alu prata',
		item_id: 'alu_prata',
		item_type: 'north_indian',
		price: '25'
	},
	{
		item_name: 'paneer prata',
		item_id: 'paneer_prata',
		item_type: 'north_indian',
		price: '25'
	},
	{
		item_name: 'dhal chawal',
		item_id: 'dhal_chawal',
		item_type: 'north_indian',
		price: '25'
	},
	{
		item_name: 'dhal bhati',
		item_id: 'dhal_bhati',
		item_type: 'north_indian',
		price: '25'
	},
	{
		item_name: 'egg fried rice',
		item_id: 'egg_fried_rice',
		item_type: 'chinese',
		price: '25'
	},
	{
		item_name: 'egg noodles',
		item_id: 'egg_noodles',
		item_type: 'chinese',
		price: '25'
	},
	{
		item_name: 'veg noodles',
		item_id: 'veg_noodles',
		item_type: 'chinese',
		price: '25'
	},
	{
		item_name: 'veg fried rice',
		item_id: 'veg_fried_rice',
		item_type: 'chinese',
		price: '25'
	},
	{
		item_name: 'veg shawarma',
		item_id: 'veg_shawarma',
		item_type: 'arabic',
		price: '25'
	},
	{
		item_name: 'chicken shawarma',
		item_id: 'chicken_shawarma',
		item_type: 'arabic',
		price: '25'
	},
	{
		item_name: 'veggi pizza',
		item_id: 'veggi_pizza',
		item_type: 'italian',
		price: '25'
	},
	{
		item_name: 'paneer pizza',
		item_id: 'paneer_pizza',
		item_type: 'italian',
		price: '25'
	},
	{
		item_name: 'cheese pizza',
		item_id: 'cheese_pizza',
		item_type: 'italian',
		price: '25'
	},
	{
		item_name: 'pasta',
		item_id: 'pasta',
		item_type: 'italian',
		price: '25'
	},
	{
		item_name: 'chocolate milk shake',
		item_id: 'chocolate_milk_shake',
		item_type: 'milk_shake',
		price: '25'
	},
	{
		item_name: 'rose milk',
		item_id: 'rose_milk',
		item_type: 'milk_shake',
		price: '25'
	},
	{
		item_name: 'strawberry milk shake',
		item_id: 'strawberry_milk_shake',
		item_type: 'milk_shake',
		price: '25'
	},
	{
		item_name: 'tea',
		item_id: 'tea',
		item_type: 'tea',
		price: '25'
	},
	{
		item_name: 'ginger tea',
		item_id: 'ginger_tea',
		item_type: 'tea',
		price: '25'
	},
	{
		item_name: 'jaggery tea',
		item_id: 'jaggery_tea',
		item_type: 'tea',
		price: '25'
	},
	{
		item_name: 'lemon tea',
		item_id: 'lemon_tea',
		item_type: 'tea',
		price: '25'
	},
	{
		item_name: 'ice tea',
		item_id: 'ice_tea',
		item_type: 'tea',
		price: '25'
	},
	{
		item_name: 'cold coffe',
		item_id: 'cold_coffe',
		item_type: 'coffe',
		price: '25'
	},
	{
		item_name: 'bru coffe',
		item_id: 'bru_coffe',
		item_type: 'coffe',
		price: '25'
	},
	{
		item_name: 'nescafe coffe',
		item_id: 'nescafe_coffe',
		item_type: 'coffe',
		price: '25'
	},
	{
		item_name: 'jaggery coffe',
		item_id: 'jaggery_coffe',
		item_type: 'coffe',
		price: '25'
	},
	{
		item_name: 'coffe',
		item_id: 'coffe',
		item_type: 'coffe',
		price: '25'
	},
	{
		item_name: 'butter milk',
		item_id: 'butter_milk',
		item_type: 'cold_drinks',
		price: '25'
	},
	{
		item_name: 'coca cola',
		item_id: 'coca_cola',
		item_type: 'cold_drinks',
		price: '25'
	},
	{
		item_name: 'pepsi',
		item_id: 'pepsi',
		item_type: 'cold_drinks',
		price: '25'
	},
	{
		item_name: 'sting',
		item_id: 'sting',
		item_type: 'cold_drinks',
		price: '25'
	},
	{
		item_name: 'faluda',
		item_id: 'faluda',
		item_type: 'ice_cream',
		price: '25'
	},
	{
		item_name: 'badam shake',
		item_id: 'badam_shake',
		item_type: 'ice_cream',
		price: '25'
	},
	{
		item_name: 'pani puri',
		item_id: 'pani_puri',
		item_type: 'chat',
		price: '25'
	},
	{
		item_name: 'dahi puri',
		item_id: 'dahi_puri',
		item_type: 'chat',
		price: '25'
	},
	{
		item_name: 'samosa',
		item_id: 'samosa',
		item_type: 'chat',
		price: '25'
	},
	{
		item_name: 'vada pav',
		item_id: 'vada_pav',
		item_type: 'chat',
		price: '25'
	},
	{
		item_name: 'bhel puri',
		item_id: 'bhel_puri',
		item_type: 'chat',
		price: '25'
	},
	{
		item_name: 'ragda puri',
		item_id: 'ragda_puri',
		item_type: 'chat',
		price: '25'
	}
];

export { categoriesData, subCategoriesData, foodItemsData };
