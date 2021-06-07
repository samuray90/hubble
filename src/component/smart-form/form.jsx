import React from "react";
import { SmartStyledForm, Title, Wrapper, StyledForm } from "./form.style";
import { Formik, Field } from "formik";
import { TextField } from "formik-material-ui";

import { initalValues, validationSchema } from "./smart-form";
import { Button } from "@material-ui/core";

const SmartForm = ({ updateScreenName }) => {
	const onSubmit = (values, { resetForm }) => {
		console.log(values);
		updateScreenName(values.screenName);
		resetForm();
	};

	return (
		<StyledForm>
			<Wrapper>

				<Formik
					initialValues={initalValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ isValid }) => (
						<SmartStyledForm>
							<Field
								type="text"
								component={TextField}
								name="screenName"
								label="Screen Name"
								placeholder="search here your profile"
								color="primary"
								variant="outlined"
							/>

							<Button
								type="submit"
								color="primary"
								variant="contained"
								disabled={!isValid}
							>
								Search
							</Button>

							<Button type="reset" color="secondary" variant="contained">
								Reset
							</Button>
						</SmartStyledForm>
					)}
				</Formik>
			</Wrapper>
		</StyledForm>
	);
};

export default SmartForm;
