import QuestCard from '@/components/quest-card';
import quests from '@/data/quest-card-data';

export default function Home() {
	return (
		<main>
			<h1>Welcome to the Home Page</h1>
			<p>This is your dashboard or discovery page.</p>
			{quests.map((quest, index) => (
				<QuestCard 
					key={index}
					title={quest.title}
					tags={quest.tags}
					memberCount={quest.memberCount}
					questStatus={quest.questStatus}
					date={quest.date}
					distance={quest.distance}
				/>
			))}
		</main>
	);
}
