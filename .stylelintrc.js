module.exports = {
    extends: [
        "stylelint-config-recommended-scss",
        "stylelint-prettier/recommended"
    ],
    plugins: [ "stylelint-order" ],
    rules: {
		"order/order": [
			"custom-properties",
			"declarations"
		],
		"order/properties-alphabetical-order": true
	}
}