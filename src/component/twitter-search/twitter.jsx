import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterSearch = () => {
	return (
		<div>
			<Timeline
				dataSource={{
					sourceType: "profile",
					screenName: "hubble_space",
				}}
				options={{
					tweetLimit: "10",
				}}
			/>
		</div>
	);
};

export default TwitterSearch;
