import React from 'react';
import useWebView from '../../hooks/WebView';

const IframePayment = () => {
    const { url, closeWebView } = useWebView();
    return (
        <div className="IframePayment">
            <button onClick={closeWebView}>Close Web View</button>
            <iframe
                title="Payment View"
                src={url}
                style={{ width: '100%', height: '500px', border: 'none' }}
            />
        </div>
    );
};

export default IframePayment;
