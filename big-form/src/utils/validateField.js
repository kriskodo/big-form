export default function validateField(value, type, rules, displayName) {
	if (rules.required && !value) {
		return `${displayName} is required`;
	}

	if (rules.maxLength && value.length > rules.maxLength) {
		return `The maximum length is ${rules.maxLength}`;
	}
}
