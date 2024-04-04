import React from 'react';

function ErrorPage() {
    return (
        <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "center" }}>
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}

export default ErrorPage;
