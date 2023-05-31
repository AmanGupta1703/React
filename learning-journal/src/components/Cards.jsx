/* eslint-disable */
import Card from "./Card";
import BlogImage1 from "../assets/blog-image-01.png";
import BlogImage2 from "../assets/blog-image-02.png";
import BlogImage3 from "../assets/blog-image-03.png";
import BlogImage4 from "../assets/blog-image-04.png";
import BlogImage5 from "../assets/blog-image-05.png";
import BlogImage6 from "../assets/blog-image-06.png";
import "./Cards.css";

export default function Cards() {
	const cardBlogData = [
		{
			image: BlogImage1,
			date: "JULY 23, 2022",
			title: "Blog one",
			description:
				"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
            id: 1
		},
		{
			image: BlogImage2,
			date: "JULY 23, 2022",
			title: "Blog two",
			description:
				"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
            id: 2
		},
		{
			image: BlogImage3,
			date: "JULY 23, 2022",
			title: "Blog three",
			description:
				"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
            id: 3
		},
		{
			image: BlogImage4,
			date: "JULY 23, 2022",
			title: "Blog four",
			description:
				"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
            id: 4
		},
		{
			image: BlogImage5,
			date: "JULY 23, 2022",
			title: "Blog five",
			description:
				"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
            id: 5
		},
		{
			image: BlogImage6,
			date: "JULY 23, 2022",
			title: "Blog six",
			description:
				"I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
            id: 6
		},
	];

	const singleCardHtml = () => {
		return cardBlogData.map((cardBlog) => {
			return (
				<Card
                    key={cardBlog.id}
					image={cardBlog.image}
					date={cardBlog.date}
					title={cardBlog.title}
					description={cardBlog.description}
				/>
			);
		});
	};

	return <section className="cards-container">{singleCardHtml()}</section>;
}
