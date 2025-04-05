import React from 'react';

function HomePage() {
    return (
        <div>
            <h1>Welcome to DevFinancing</h1>
            <p>Your personal finance tracker, designed to help you manage your money wisely.</p>
            <p>Start tracking your income and expenses today to gain control over your financial future.</p>

            <div className="tech-box">
                <h2>Technologies Used</h2>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>NeDB</li>
                    <li>Chart.js</li>
                    <li>Axios</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript ES6+</li>
                    <li>lodash</li>
                    <li>CORS</li>
                </ul>
            </div>

            <div className="reviews-box">
                <h2>Customer Reviews</h2>
                <div className="review">
                    <p>"DevFinancing has revolutionized the way I manage my finances. Simple, intuitive, and incredibly effective!"</p>
                    <p className="reviewer">- Jane D.</p>
                </div>
                <div className="review">
                    <p>"The visual charts and detailed reports have given me a clear picture of my spending habits. Highly recommend!"</p>
                    <p className="reviewer">- Mark S.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;