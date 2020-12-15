import logo from './logo.svg';
import './App.css';
import React from "react";

function F() {
    return <body>
    <header className="pageHeader">Header</header>
    <article id="mainArticle">Article</article>
    <nav id="mainNav">Nav</nav>
    <div id="siteAds">Ads</div>
    <footer id="pageFooter">Footer</footer>
    </body>
}

function Calc() {
    const [value, setValue] = React.useState('0');
    return <div className='container'>
        <div className='calculator'>
            <input value={value} className='input'/>
            <button className='button button-gray ac'>AC</button>
            <button className='button button-gray st'>+/-</button>
            <button className='button button-gray perc'>%</button>
            <button className='button button-orange div'>/</button>
            <button className='button button-light-gray sev' onClick={() => handleDigitClick('7')}>7</button>
            <button className='button button-light-gray ei' onClick={() => handleDigitClick('8')}>8</button>
            <button className='button button-light-gray nine' onClick={() => handleDigitClick('9')}>9</button>
            <button className='button button-orange mult'>x</button>
            <button className='button button-light-gray four' onClick={() => handleDigitClick('4')}>4</button>
            <button className='button button-light-gray five' onClick={() => handleDigitClick('5')}>5</button>
            <button className='button button-light-gray six' onClick={() => handleDigitClick('6')}>6</button>
            <button className='button button-orange minus' >-</button>
            <button className='button button-light-gray one' onClick={() => handleDigitClick('1')}>1</button>
            <button className='button button-light-gray two' onClick={() => handleDigitClick('2')}>2</button>
            <button className='button button-light-gray three'onClick={() => handleDigitClick('3')}>3</button>
            <button className='button button-orange plus'>+</button>
            <button className='button button-light-gray zero' onClick={() => handleDigitClick('0')}>0</button>
            <button className='button button-light-gray point'onClick={() => handleDigitClick('.')}>.</button>
            <button className='button button-orange eq'>=</button>
        </div>
    </div>;

    function handleDigitClick(num) {
        setValue(value+num)
    }
}

function App1({title}) {
    const [comment, setComment] = React.useState("");
    const [comments, setComments] = React.useState([]);
    console.info(comment);
    console.info(comments);
    return <>
        <div>{title}</div>
        {comments.map(x => <div>{x}</div>)}
        <input value={comment} onChange={e => setComment(e.target.value)}/>
        <button onClick={handleButtonClick}>send</button>
    </>;

    function handleButtonClick() {
        if(comment!==''){
            setComments([...comments, comment]);
            setComment('');
        }
    }
}

function App() {
    return <Calc/>;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload!11
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
