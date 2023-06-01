/* eslint-disable */
import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState();
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async () => {
			setIsPending(true);

			try {
				const res = await fetch(url, { signal: controller.signal });
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				const json = await res.json();
				setData(json);
				setIsPending(false);
				setError(null);
			} catch (error) {
				if (error.name === "AbortError") {
					console.log(`The fetch request was aborted`);
				} else {
					setIsPending(false);
					setError(`Could not fetch the data`);
					console.log(error.message);
				}
			}
		};

		fetchData();

		return () => {
			controller.abort();
		}; // abort any async task / subsrciptions // stop
	}, [url]);

	return { data, isPending, error };
};
