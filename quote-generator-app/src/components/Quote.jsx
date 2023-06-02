/* eslint-disable */
import { useEffect, useState } from "react";
import "./Quote.css";
export default function Quote() {
	const [quote, setQuote] = useState({});
	// prettier-ignore
	const [url, setUrl] = useState("https://quote-garden.onrender.com/api/v3/quotes");
	const [isLoading, setIsLoading] = useState(true);
	const [selectedGenre, setSelectedGenre] = useState("sports");
	const [genreData, setGenreData] = useState([]);

	const fetchRandomQuote = async (url) => {
		setIsLoading(true);
		const response = await fetch(url);
		const json = await response.json();
		const { _, quoteText, quoteAuthor, quoteGenre } = json.data[0];
		setIsLoading(false);
		setQuote({ quoteText, quoteAuthor, quoteGenre });
	};

	const fetchAllGenres = async (url) => {
		const response = await fetch(url);
		const json = await response.json();
		return json;
	};

	useEffect(() => {
		(async () => {
			const { data } = await fetchAllGenres(
				"https://quote-garden.onrender.com/api/v3/genres"
			);
			setGenreData(data);
		})();
	}, []);

	useEffect(() => {
		fetchRandomQuote(`${url}?genre=${selectedGenre}`);
	}, [selectedGenre, url]);

	const handleClick = () => {
		fetchRandomQuote("https://quote-garden.onrender.com/api/v3/quotes/random");
		setIsLoading(true);
	};

	const handleChange = (e) => {
		const genreValue = e.target.value;
		setSelectedGenre(genreValue);
	};

	return (
		<>
			<select className="genre-list" onChange={handleChange}>
				<option value={selectedGenre}>{selectedGenre}</option>
				{genreData.map((genre) => (
					<option key={genre} value={genre}>
						{genre}
					</option>
				))}
			</select>
			<div className="button-container">
				<button className="btn btn--random" onClick={handleClick}>
					random
				</button>
			</div>
			{isLoading && <div className="loading">Loading...</div>}
			{!isLoading && (
				<section className="quote quote-container">
					<h1 className="quote__text">{quote.quoteText}.</h1>
					<div className="qoute__info">
						<h2 className="quote__author">{quote.quoteAuthor}</h2>
						<p className="quote__genre">{quote.quoteGenre}</p>
					</div>
				</section>
			)}
		</>
	);
}
