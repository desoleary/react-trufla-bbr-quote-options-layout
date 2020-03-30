import 'antd/dist/antd.css';
import React from 'react';

import { quoteOptions } from './quoteOptions';
import QuoteOptions from './QuoteOptions/QuoteOptions';

const App = () => <QuoteOptions quoteOptions={quoteOptions} />;

export default App;
