import React, { useState } from "react";
import { Timeline } from "react-twitter-widgets";
import Form from "../smart-form/form";

const TwitterSearch = () => {
	const [screenName, updateScreenName] = useState("hubble_space")
	return (
		<div>
			<Timeline
				dataSource={{
					sourceType: "profile",
					screenName,
				}}
				options={{
					tweetLimit: "10",
				}}
			/>
			<Form updateScreenName={updateScreenName}/>
		</div>
	);
};

export default TwitterSearch;
