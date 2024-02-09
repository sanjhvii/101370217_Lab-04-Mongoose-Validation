const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
	name: {
		type: 'string',
		required: [true, 'Name is required...'],
		trim: true,
	},
	username: {
		type: 'string',
		required: [true, 'Username is required...'],
		trim: true,
		minlength: 4,
	},
	email: {
		type: String,
		index: true,
		trim: true,
		unique: [true, 'Duplicate email is not permitted!!'],
		required: [true, 'Email is required...'],
		validate: function (value) {
			var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			return emailRegex.test(value);
		},
	},

	address: {
		_id: false,
		street: {
			type: String,
			trim: true,
			required: [true, 'Street name is required...'],
		},
		suite: {
			type: String,
			trim: true,
			required: [true, 'Suite is required...'],
		},
		city: {
			type: String,
			validate: function (value) {
				var cityRegex = /^[a-zA-Z ]*$/;
				return cityRegex.test(value);
			},
			trim: true,
			required: [true, 'City is required...'],
		},

		zipcode: {
			type: String,
			required: [true, 'Zip code is required...'],
			validate: function (value) {
				var zipRegex = /^[0-9]{5}(-[0-9]{4})+$/; //(?:[-]\d{4})*$/
				return zipRegex.test(value);
			},
		},

		geo: {
			_id: false,
			lat: {
				type: String,
				required: true,
			},
			lng: {
				type: String,
				required: true,
			},
		},
	},

	phone: {
		type: String,
		required: [true, 'Input required...'],
		validate: function (value) {
			var phoneRegex = /^[0-9]{1}(-[0-9]{3})(-[0-9]{3})(-[0-9]{4})+$/; //(?:[-]\d{4})*$/
			return phoneRegex.test(value);
		},
	},
	website: {
		type: String,
		required: [true, 'Input required...'],
		validate: function (value) {
			var webRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
			return webRegex.test(value);
		},
	},
	company: {
		_id: false,
		name: String,
		catchPhrase: String,
		bs: String,
	},
});

module.exports = mongoose.model('Users',userSchema);