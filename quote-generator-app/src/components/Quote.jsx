/* eslint-disable */
import { useEffect, useState } from "react";
import "./Quote.css";
export default function Quote() {
	const [quote, setQuote] = useState({});
	const [url, setUrl] = useState(
		"https://quote-garden.onrender.com/api/v3/quotes/random"
	);
	const [isLoading, setIsLoading] = useState(false);

	const fetchRandomQuote = async (url) => {
		setIsLoading(true);
		const response = await fetch(url);
		const json = await response.json();
		const { _, quoteText, quoteAuthor, quoteGenre } = json.data[0];
		setIsLoading(false);
		setQuote({ quoteText, quoteAuthor, quoteGenre });
	};

	useEffect(() => {
		fetchRandomQuote(url);
	}, [url]);

	const generateQuoteHtml = () => {
		return (
			<section className="quote quote-container">
				<h1 className="quote__text">{quote.quoteText}.</h1>
				<div className="qoute__info">
					<h2 className="quote__author">{quote.quoteAuthor}</h2>
					<p className="quote__genre">{quote.quoteGenre}</p>
				</div>
			</section>
		);
	};

	const handleClick = () => {
		fetchRandomQuote("https://quote-garden.onrender.com/api/v3/quotes/random");
		setIsLoading(true);
		setQuoteDisplay(false);
	};

	return (
		<>
			<div className="button-container">
				<button className="btn btn--random" onClick={handleClick}>
					random
				</button>
			</div>
			{isLoading && <div className="loading">Loading...</div>}
			{!isLoading && generateQuoteHtml()}
		</>
	);
}
