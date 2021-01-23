import React, { useState } from "react";

function useForm(defaults) {
	const [values, setValues] = useState(defaults);

	function updateValue(e) {
		let { value } = e.target.value;

		if (e.target.value === "number") {
			value = parseInt(value);
		}

		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	}

	return { values, updateValue };
}

export default useForm;
