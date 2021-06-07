import React from "react";

import { render } from "react-dom";
import TwitterSearch from "./component/twitter-search/twitter";

const here = document.querySelector('#here');


const twitter = <TwitterSearch />

render(twitter,here)
