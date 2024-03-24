import H1 from '@/components/h1';
import Image from 'next/image';

type EventPageProps = {
	params: {
		slug: string;
	};
};

export default async function EventPage({ params }: EventPageProps) {
	const slug = params.slug;
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
	);
	const event = await response.json();
	return (
		<main>
			<section className='relative h-[360px] overflow-hidden'>
				<Image
					src={event.imageUrl}
					className='object-cover blur-3xl z-0'
					alt='Event background image'
					fill
					quality={50}
					priority
					sizes='(max-width: 1280px) 100vw, 1280px'
				/>
				<div>
					<Image
						src={event.imageUrl}
						alt={event.name}
						width={300}
						height={201}
						className='z-1 relative'
					/>
				</div>
				<div>
					{/* Display date in day name comma name of the mount and then day number of the mount  */}
					<p>{new Date(event.date).toDateString()}</p>
					<H1 className=''>{event.name}</H1>
					<p>
						Organized by <span className='italic'>{event.organizerName}</span>
					</p>
				</div>
			</section>
		</main>
	);
}
